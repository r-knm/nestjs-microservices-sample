export class SendEmailEvent {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly email: string,
  ) {}
}
