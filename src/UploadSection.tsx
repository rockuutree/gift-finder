import React, { useRef, useState } from 'react';
import { Upload } from 'lucide-react';
import { uploadPdfToMediaSet } from './uploadService';

export const UploadSection = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = async (file: File) => {
    try {
      setIsUploading(true);
      setUploadError(null);

      if (file.type !== 'application/pdf') {
        throw new Error('Please upload a PDF file');
      }

      if (file.size > 200 * 1024 * 1024) { // 200MB limit
        throw new Error('File size should be less than 200MB');
      }

      await uploadPdfToMediaSet(file);
      console.log('Upload successful');
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : 'Upload failed');
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div className="space-y-4">
      <div 
        onClick={() => fileInputRef.current?.click()}
        className={`
          cursor-pointer relative p-6 border-2 border-dashed rounded-lg 
          ${isUploading ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-500'}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          onChange={handleFileSelect}
          className="hidden"
        />
        <div className="text-center">
          <Upload className={`mx-auto h-12 w-12 ${isUploading ? 'text-blue-500' : 'text-gray-400'}`} />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <span className="relative font-semibold text-blue-600 hover:text-blue-500">
              {isUploading ? 'Uploading...' : 'Upload a wishlist PDF'}
            </span>
          </div>
          <p className="text-xs leading-5 text-gray-500">
            PDF up to 200MB
          </p>
        </div>
      </div>

      {uploadError && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-600">{uploadError}</p>
        </div>
      )}
    </div>
  );
};