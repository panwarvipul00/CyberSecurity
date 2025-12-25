export class IssueValidator {
  static create(data: any) {
    if (!data.title || !data.type) {
      throw new Error("Invalid issue data");
    }
  }
}
