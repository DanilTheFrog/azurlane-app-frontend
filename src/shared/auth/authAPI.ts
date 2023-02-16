
import { LoginData } from "./types";

export function logIn({password, login}: LoginData) {
    return new Promise<{user: any}>(resolve => {
        const response = "a"
        resolve({user: response});
    })
}