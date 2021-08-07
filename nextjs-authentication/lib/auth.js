import { hash, compare } from 'bcryptjs';

export async function hashPassword(password) {
    //Higher the number it is more secure and it will take
    //time to generate the password and less the number less secure it is.
    const hashedPassword = await hash(password, 12);

    return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
    const isValid = await compare(password, hashedPassword);
    return isValid;
}