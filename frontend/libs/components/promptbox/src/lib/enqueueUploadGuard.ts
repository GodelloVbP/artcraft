export const UPLOAD_IN_PROGRESS_MESSAGE =
  "Wait for your reference images to finish uploading.";

/**
 * Reference images that are still uploading are not part of the request's
 * `image_media_tokens` yet. Enqueueing before they finish would silently send
 * the generation without them.
 */
export function shouldBlockEnqueueForUploads(
  uploadingImageCount: number,
  canUseImagePrompt: boolean,
): boolean {
  return canUseImagePrompt && uploadingImageCount > 0;
}
