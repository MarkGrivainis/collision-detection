import { Mat3 } from "./mat3";

describe("matrix multiplication", () => {
  test("zero matrix", () => {
    const matA = new Mat3();

    const matB = new Mat3();
    matB.set(0, 0, 0, 0, 0, 0, 0, 0, 0);

    matA.multiply(matB);
    expect(matA.values).toEqual(matB.values);
  });
});
