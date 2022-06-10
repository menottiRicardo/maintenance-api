
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateAppointmentInput {
    placa: string;
    date: DateTime;
    status: string;
}

export class UpdateAppointmentInput {
    id: number;
}

export class Appointment {
    id: number;
    placa: string;
    date: DateTime;
    status: string;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract appointments(placa?: Nullable<string>): Nullable<Appointment>[] | Promise<Nullable<Appointment>[]>;

    abstract appointment(id: number): Nullable<Appointment> | Promise<Nullable<Appointment>>;
}

export abstract class IMutation {
    abstract createAppointment(createAppointmentInput: CreateAppointmentInput): Appointment | Promise<Appointment>;

    abstract updateAppointment(updateAppointmentInput: UpdateAppointmentInput): Appointment | Promise<Appointment>;

    abstract removeAppointment(id: number): Nullable<Appointment> | Promise<Nullable<Appointment>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
