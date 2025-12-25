import Issue from "@/models/Issue";

export class IssueRepository {
  create(data: any) {
    return Issue.create(data);
  }

  findByUser(userId: string) {
    return Issue.find({ userId });
  }

  findById(id: string) {
    return Issue.findById(id);
  }

  update(id: string, data: any) {
    return Issue.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string) {
    return Issue.findByIdAndDelete(id);
  }
}
