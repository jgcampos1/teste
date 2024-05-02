import { TokenDecoder } from "~/main/core/application/protocols/token-decoder";
import { JWTTokenDecoder } from "./jwt-token-decoder";

export const tokenDecoder: TokenDecoder = new JWTTokenDecoder();
