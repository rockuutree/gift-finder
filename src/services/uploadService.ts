// src/services/uploadService.ts
import { AttachmentUpload } from "@osdk/api";
import { $ } from '../client';
import * as GiftSearcher from "@gift-searcher/sdk";

export const uploadPdf = async (file: File): Promise<void> => {
  try {
    // Prepare the attachment upload object
    const attachmentUpload: AttachmentUpload = {
      filename: file.name,
      sizeBytes: file.size.toString(),
      mediaType: file.type
    };

    // Call the action
    const result = await $(GiftSearcher.uploadWishlist).applyAction({
      attachment: attachmentUpload
    }, {
      $returnEdits: true
    });

    if (result.type !== "edits") {
      throw new Error('Upload failed: Invalid response type');
    }

    return;
  } catch (error) {
    console.error('Upload failed:', error);
    throw error;
  }
};