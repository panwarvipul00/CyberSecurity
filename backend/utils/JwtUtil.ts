import jwt from "jsonwebtoken";

export class JwtUtil {
  static sign(payload: any) {
    return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: "1d" });
  }

  static verify(token: string) {
    return jwt.verify(token, process.env.JWT_SECRET!);
  }
}
