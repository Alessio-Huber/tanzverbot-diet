import { calcDateOnDiet, Sex } from "./tanzverbot-diet";

describe("Tanzverbot-Diät", () => {
  test("Normale Gewichtszunahme", () => {
    const days = calcDateOnDiet(74, 100, 1.86, 38, Sex.Male);
    expect(days).toBeGreaterThan(0);
  });
});
