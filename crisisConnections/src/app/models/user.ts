import { Address } from "./address";

export class User {
    username: String;
    firstName: String;
    lastName: String;
    birthDate: Date;
    phone: String;
    address: Address;
    organization?: String;
}
