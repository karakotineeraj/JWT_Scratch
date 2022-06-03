import crypto from "crypto";
import { IJwtHeader, Record } from "./interfaces"

export function base64Encode(data: string): string {
    return Buffer.from(data, 'utf-8').toString('base64url');
}

export function createJWT(header: IJwtHeader, payload: Record<any>): string {
    try {
        const base64Header = base64Encode(JSON.stringify(header));
        const base64Payload = base64Encode(JSON.stringify(payload));
        const hmac = crypto.createHmac('sha256', process.env.SECRET_KEY as string);
        hmac.update(`${base64Header}.${base64Payload}`);

        const signature = hmac.digest('base64url');
        console.log("Header: ", base64Header);
        console.log("Payload: ", base64Payload);
        console.log("Signature: ", signature);

        return `${base64Header}.${base64Payload}.${signature}`;
    } catch (err: any) {
        console.log(err);
        return err.message;
    }
}

