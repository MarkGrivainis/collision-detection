import { Mat3 } from "./mat3";

describe("matrix multiplication", () => {
  test("zero matrix", () => {
    const matA = new Mat3();

    const matB = new Mat3();
    matB.set(0, 0, 0, 0, 0, 0, 0, 0, 0);

    matA.multiply(matB);
    expect(matA.values).toEqual(matB.values);
  });

  test("identity matrix", () => {
    const identity = new Mat3();

    const matB = new Mat3();
    matB.set(2, 2, 2, 2, 2, 2, 2, 2, 2);

    identity.multiply(matB);
    expect(matB.values).toEqual(identity.values);

  })
});

describe('scaler multiply', () => {
  test('zero factor', () => {
    const matA = new Mat3();

    matA.scalerMultiply(0);

    expect(matA.values).toEqual<Float32Array>(new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0]));
  }),
  test('double', () => {
    const matA = new Mat3();
    matA.set(1,2,3,4,5,6,7,8,9);
    matA.scalerMultiply(2);
    expect(matA.values).toEqual<Float32Array>(new Float32Array([2,4,6,8,10,12,14,16,18]))
  })

})

describe('matrix properties', () => {
  test('A + B = B + A', () => {
    const valuesA = [4, 2, 1, 3, 5, 6, 2, 3, 9] as const;
    const valuesB = [9, 2, 1, 3, 5, 1 ,2, 4, 7] as const;
    const matA1 = new Mat3();
    matA1.set(...valuesA);

    const matA2 = new Mat3();
    matA2.set(...valuesA);

    const matB = new Mat3();
    matB.set(...valuesB);

    matA1.add(matB);

    matB.add(matA2);

    expect(matA1.values).toEqual(matB.values);
  })
})
