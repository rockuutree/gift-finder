import React, { useRef, useState } from 'react';
import { Upload, Gift } from 'lucide-react';
import client from '../../client';
import { AttachmentUpload } from "@osdk/api";
import { $Actions } from "@gift-searcher/sdk";

export const UploadSection: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    try {
      if (file.type !== 'application/pdf') {
        setError('Please upload a PDF file');
        return;
      }

      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        setError('File size should be less than 10MB');
        return;
      }

      setIsUploading(true);
      setError(null);
      setFileName(file.name);

      // First upload the file to get an attachment upload object
      const blob = await file.arrayBuffer().then(buffer => new Blob([buffer], { type: 'application/pdf' }));
      
      // Use the uploadAttachment endpoint
      const response = await fetch(`${import.meta.env.VITE_FOUNDRY_API_URL}/v2/ontologies/attachments/upload`, {
        method: 'POST',
        body: blob,
        headers: {
          'Content-Type': 'application/pdf',
          // The auth token should be handled by the client
        }
      });

      if (!response.ok) {
        throw new Error('Failed to upload file');
      }

      const attachmentData: AttachmentUpload = await response.json();

      // Now use the attachment in your action
      // Replace 'uploadWishlist' with the actual action name from your SDK
      const result = await client($Actions.uploadWishlist).applyAction({ 
        attachment: attachmentData
      }, {
        $returnEdits: true,
      });

      console.log('Upload successful:', result);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Add New Wishlist</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* File Upload Button */}
        <div
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleFileDrop}
          className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors group cursor-pointer"
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="w-12 h-12 mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
            <Upload className={`w-6 h-6 ${isUploading ? 'text-blue-500 animate-pulse' : 'text-gray-400 group-hover:text-blue-500'}`} />
          </div>
          <span className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors">
            {isUploading ? 'Uploading...' : fileName || 'Upload wishlist PDF'}
          </span>
        </div>

        {/* Manual Creation Button */}
        <button className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 transition-colors group">
          <div className="w-12 h-12 mb-4 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
            <Gift className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
          </div>
          <span className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors">
            Create manual wishlist
          </span>
        </button>
      </div>

      {error && (
        <div className="mt-4 px-4 py-2 bg-red-100 border border-red-300 rounded">
          <p className="text-sm text-red-600 text-center">{error}</p>
        </div>
      )}
    </div>
  );
};