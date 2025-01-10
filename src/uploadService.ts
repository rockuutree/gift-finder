// src/uploadService.ts
import { client } from './client';
import { AttachmentUpload } from "@osdk/api";

export async function uploadPdfToMediaSet(file: File) {
  try {
    // First convert file to blob
    const blob = await file.arrayBuffer().then(buffer => new Blob([buffer], { type: 'application/pdf' }));
    
    // Upload attachment to Foundry
    const response = await fetch(`${import.meta.env.VITE_FOUNDRY_API_URL}/v2/ontologies/attachments/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${client.auth.getTokenOrUndefined()}`,
        'Content-Type': 'application/pdf'
      },
      body: blob
    });

    if (!response.ok) {
      throw new Error('Failed to upload file');
    }

    const attachmentData: AttachmentUpload = await response.json();
    
    // Now upload to media set
    const result = await fetch(`${import.meta.env.VITE_FOUNDRY_API_URL}/api/v1/mio/mio-service/media-sets/ri.mio.main.media-set.45fa03af-9be7-4322-992e-0792d5311c00/files`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${client.auth.getTokenOrUndefined()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        attachment: attachmentData,
        filename: file.name
      })
    });

    if (!result.ok) {
      throw new Error('Failed to add to media set');
    }

    return await result.json();
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
}