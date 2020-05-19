import { Address } from "./address";
import { VolunteerType } from "./volunteer-type";
import { User } from "./user";

export class Event {
    id: Number;
    name: String;
    description: String;
    address: Address;
    date: Date;
    type: VolunteerType;
    promoter: User;
}
