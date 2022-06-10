import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentResolver } from './appointment.resolver';
import { PrismaService } from 'prisma/prisma.services';

@Module({
  providers: [PrismaService, AppointmentResolver, AppointmentService],
})
export class AppointmentModule {}
