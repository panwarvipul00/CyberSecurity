import bcrypt from "bcryptjs";
import { UserRepository } from "../repositories/UserRepository";
import { JwtUtil } from "../utils/JwtUtil";

export class AuthService {
  repo = new UserRepository();

  async register(data: any) {
    data.password = await bcrypt.hash(data.password, 10);
    return this.repo.create(data);
  }

  async login(email: string, password: string) {
    const user = await this.repo.findByEmail(email);
    if (!user) throw new Error("Invalid credentials");

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) throw new Error("Invalid credentials");

    return JwtUtil.sign({ id: user._id });
  }
}
