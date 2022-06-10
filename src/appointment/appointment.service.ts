import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.services';
import { UpdateAppointmentInput } from './dto/update-appointment.input';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}
  create(createAppointmentInput: Prisma.AppointmentCreateInput) {
    return this.prisma.appointment.create({
      data: createAppointmentInput,
    });
  }

  findAll(placa: string) {
    return this.prisma.appointment.findMany({
      where: {
        placa: {
          equals: placa,
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} appointment`;
  }

  update(id: number, updateAppointmentInput: UpdateAppointmentInput) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}
