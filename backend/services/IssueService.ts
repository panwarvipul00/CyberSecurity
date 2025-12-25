import { IssueRepository } from "../repositories/IssueRepository";

export class IssueService {
  repo = new IssueRepository();

  create(data: any) {
    return this.repo.create(data);
  }

  list(userId: string) {
    return this.repo.findByUser(userId);
  }

  update(id: string, data: any) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
