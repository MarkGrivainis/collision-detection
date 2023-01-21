export class Mat3 {
  values: Float32Array;
  constructor() {
    let temp = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    this.values = temp;
  }

  add(matrixB: Mat3): void {
    if (matrixB.values.length !== 9) {
      return;
    }
    this.values[0] += matrixB[0];
    this.values[1] += matrixB[1];
    this.values[2] += matrixB[2];
    this.values[3] += matrixB[3];
    this.values[4] += matrixB[4];
    this.values[5] += matrixB[5];
    this.values[6] += matrixB[6];
    this.values[7] += matrixB[7];
    this.values[8] += matrixB[8];
  }

  sub(matrixB: Mat3): void {
    if (matrixB.values.length !== 9) {
      return;
    }
    this.values[0] -= matrixB[0];
    this.values[1] -= matrixB[1];
    this.values[2] -= matrixB[2];
    this.values[3] -= matrixB[3];
    this.values[4] -= matrixB[4];
    this.values[5] -= matrixB[5];
    this.values[6] -= matrixB[6];
    this.values[7] -= matrixB[7];
    this.values[8] -= matrixB[8];
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
    // c_ij = sum k=1 -> n a_ik b_kj

    const a11=this.values[0],a12=this.values[1], a13=this.values[2];
    const a21=this.values[3],a22=this.values[4], a23=this.values[5];
    const a31=this.values[6],a32=this.values[7], a33=this.values[8];

    const b11=matrix.values[0],b12=matrix.values[1], b13=matrix.values[2];
    const b21=matrix.values[3],b22=matrix.values[4], b23=matrix.values[5];
    const b31=matrix.values[6],b32=matrix.values[7], b33=matrix.values[8];

    this.values[0] = a11 * b11 + a12 * b21 + a13 * b31;
    this.values[1] = a11 * b12 + a12
  }

}
