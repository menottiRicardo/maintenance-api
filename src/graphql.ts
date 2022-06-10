
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAppointmentInput {
    exampleField?: Nullable<number>;
}

export class UpdateAppointmentInput {
    id: number;
}

export class Appointment {
    exampleField?: Nullable<number>;
}

export abstract class IQuery {
    abstract appointments(): Nullable<Appointment>[] | Promise<Nullable<Appointment>[]>;

    abstract appointment(id: number): Nullable<Appointment> | Promise<Nullable<Appointment>>;
}

export abstract class IMutation {
    abstract createAppointment(createAppointmentInput: CreateAppointmentInput): Appointment | Promise<Appointment>;

    abstract updateAppointment(updateAppointmentInput: UpdateAppointmentInput): Appointment | Promise<Appointment>;

    abstract removeAppointment(id: number): Nullable<Appointment> | Promise<Nullable<Appointment>>;
}

type Nullable<T> = T | null;
