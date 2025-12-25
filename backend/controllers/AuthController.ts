import { AuthService } from "../services/AuthService";

export class AuthController {
  service = new AuthService();

  register(data: any) {
    return this.service.register(data);
  }

  login(email: string, password: string) {
    return this.service.login(email, password);
  }
}
