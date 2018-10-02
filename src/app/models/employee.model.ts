export class EmpolyeeDetails {
  constructor(
    public firstName: string,
    public lastName: string,
    public isFte: boolean,
    public paymentType: string,
    public language: string
  ) {
}
}
