import { IssueService } from "../services/IssueService";

export class IssueController {
  service = new IssueService();

  create(data: any) {
    return this.service.create(data);
  }

  list(userId: string) {
    return this.service.list(userId);
  }

  update(id: string, data: any) {
    return this.service.update(id, data);
  }

  delete(id: string) {
    return this.service.delete(id);
  }
}
