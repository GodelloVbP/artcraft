import { describe, expect, it } from "vitest";
import { shouldBlockEnqueueForUploads } from "./enqueueUploadGuard";

describe("shouldBlockEnqueueForUploads", () => {
  it("blocks while a reference image is uploading", () => {
    expect(shouldBlockEnqueueForUploads(1, true)).toBe(true);
    expect(shouldBlockEnqueueForUploads(3, true)).toBe(true);
  });

  it("allows enqueueing when nothing is uploading", () => {
    expect(shouldBlockEnqueueForUploads(0, true)).toBe(false);
  });

  it("ignores uploads for models that cannot use image prompts", () => {
    expect(shouldBlockEnqueueForUploads(2, false)).toBe(false);
  });
});
