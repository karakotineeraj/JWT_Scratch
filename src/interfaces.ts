export interface IJwtHeader {
    alg: "HS256";
    typ: "JWT";
}

export interface Record<Type> {
    [key: string]: Type
}
