import { describe, expect, it } from "vitest";
import { cooled } from "./cool";

describe("cooldown", () => {
  it("waits out a 20 second gap", () => {
    expect(cooled(100, 110)).toEqual({ ready: false, waitSec: 10 });
    expect(cooled(100, 120)).toEqual({ ready: true, waitSec: 0 });
    expect(() => cooled(100, 90)).toThrow(/before/);
  });

  it("exact boundary is ready", () => {
    expect(cooled(100, 120, 20)).toEqual({ ready: true, waitSec: 0 });
    expect(cooled(100, 119, 20)).toEqual({ ready: false, waitSec: 1 });
  });

  it("refuses non-integer or negative timestamps", () => {
    expect(() => cooled(1.5, 10)).toThrow(/lastSec/);
    expect(() => cooled(-1, 10)).toThrow(/lastSec/);
    expect(() => cooled(0, 1.5)).toThrow(/nowSec/);
    expect(() => cooled(0, -1)).toThrow(/nowSec/);
  });

  it("refuses gap outside 1..3600", () => {
    expect(() => cooled(0, 0, 0)).toThrow(/gapSec/);
    expect(() => cooled(0, 0, 3601)).toThrow(/gapSec/);
    expect(() => cooled(0, 0, 1.5)).toThrow(/gapSec/);
  });

  it("accepts custom gap within bounds", () => {
    expect(cooled(100, 105, 10)).toEqual({ ready: false, waitSec: 5 });
    expect(cooled(100, 110, 10)).toEqual({ ready: true, waitSec: 0 });
  });
});
