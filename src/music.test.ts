import { describe, it, expect } from "vitest";
import { songs } from "./music";

describe("snacks", () => {
  it("should have at least 3 items", () => {
    expect(songs.length).toBeGreaterThanOrEqual(3);
  });

  it("should include 'chips'", () => {
    expect(songs).toContain("Jumpman");
  });
});
