export class Mat3 {
  set(
    a11: number,
    a12: number,
    a13: number,
    a21: number,
    a22: number,
    a23: number,
    a31: number,
    a32: number,
    a33: number
  ) {
    this.values[0] = a11;
    this.values[1] = a12;
    this.values[2] = a13;
    this.values[3] = a21;
    this.values[4] = a22;
    this.values[5] = a23;
    this.values[6] = a31;
    this.values[7] = a32;
    this.values[8] = a33;
  }
  values: Float32Array;
  constructor() {
    const temp = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    this.values = temp;
  }

  add(matrixB: Mat3): void {
    if (matrixB.values.length !== 9) {
      return;
    }
    this.values[0] += matrixB.values[0];
    this.values[1] += matrixB.values[1];
    this.values[2] += matrixB.values[2];
    this.values[3] += matrixB.values[3];
    this.values[4] += matrixB.values[4];
    this.values[5] += matrixB.values[5];
    this.values[6] += matrixB.values[6];
    this.values[7] += matrixB.values[7];
    this.values[8] += matrixB.values[8];
  }

  sub(matrixB: Mat3): void {
    if (matrixB.values.length !== 9) {
      return;
    }
    this.values[0] -= matrixB.values[0];
    this.values[1] -= matrixB.values[1];
    this.values[2] -= matrixB.values[2];
    this.values[3] -= matrixB.values[3];
    this.values[4] -= matrixB.values[4];
    this.values[5] -= matrixB.values[5];
    this.values[6] -= matrixB.values[6];
    this.values[7] -= matrixB.values[7];
    this.values[8] -= matrixB.values[8];
  }

  scalerMultiply(scaler: number): void {
    this.values[0] *= scaler;
    this.values[1] *= scaler;
    this.values[2] *= scaler;
    this.values[3] *= scaler;
    this.values[4] *= scaler;
    this.values[5] *= scaler;
    this.values[6] *= scaler;
    this.values[7] *= scaler;
    this.values[8] *= scaler;
  }
  multiply(matrix: Mat3): void {
    const a11 = this.values[0],
      a12 = this.values[1],
      a13 = this.values[2];
    const a21 = this.values[3],
      a22 = this.values[4],
      a23 = this.values[5];
    const a31 = this.values[6],
      a32 = this.values[7],
      a33 = this.values[8];

    const b11 = matrix.values[0],
      b12 = matrix.values[1],
      b13 = matrix.values[2];
    const b21 = matrix.values[3],
      b22 = matrix.values[4],
      b23 = matrix.values[5];
    const b31 = matrix.values[6],
      b32 = matrix.values[7],
      b33 = matrix.values[8];
    // c_ij = sum k=1 -> n a_ik b_kj
    this.values[0] = a11 * b11 + a12 * b21 + a13 * b31;
    this.values[1] = a11 * b12 + a12 * b22 + a13 * b32;
    this.values[2] = a11 * b13 + a12 * b23 + a13 * b33;

    this.values[3] = a21 * b11 + a22 * b21 + a23 * b31;
    this.values[4] = a21 * b12 + a22 * b22 + a23 * b32;
    this.values[5] = a21 * b13 + a22 * b23 + a23 * b33;

    this.values[6] = a31 * b11 + a32 * b21 + a33 * b31;
    this.values[7] = a31 * b12 + a32 * b22 + a33 * b32;
    this.values[8] = a31 * b13 + a32 * b23 + a33 * b33;
  }
}
