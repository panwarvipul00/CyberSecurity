export class AuthValidator {
  static register(data: any) {
    if (!data.email || !data.password) {
      throw new Error("Invalid input");
    }
  }
}
