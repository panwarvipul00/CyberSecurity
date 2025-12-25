import User from "@/models/User";

export class UserRepository {
  create(data: any) {
    return User.create(data);
  }

  findByEmail(email: string) {
    return User.findOne({ email });
  }
}
