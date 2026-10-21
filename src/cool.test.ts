import { describe, expect, it } from "vitest";
import { cooled } from "./cool";

describe("cooldown", () => {
  it("waits out a 20 second gap", () => {
    expect(cooled(100, 110)).toEqual({ ready: false, waitSec: 10 });
    expect(cooled(100, 120)).toEqual({ ready: true, waitSec: 0 });
    expect(() => cooled(100, 90)).toThrow(/before/);
  });
});
