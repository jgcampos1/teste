import { jwtDecode } from "jwt-decode";
import { TokenDecoder } from "~/main/core/application/protocols/token-decoder";

export class JWTTokenDecoder implements TokenDecoder {
  decode<T>(token: string): T {
    try {
      const decodedToken = jwtDecode<T>(token);
      return decodedToken;
    } catch {
      throw new Error("Invalid token");
    }
  }
}
