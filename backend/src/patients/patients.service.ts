import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patient) private repo: Repository<Patient>,
  ) {}

  create(dto: CreatePatientDto) {
    const patient = this.repo.create(dto);
    return this.repo.save(patient);
  }

  findAll() {
    return this.repo.find({ relations: ['assignments', 'assignments.medication'] });
  }
}
