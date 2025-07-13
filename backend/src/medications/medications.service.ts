import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medication } from './medication.entity';
import { CreateMedicationDto } from './dto/create-medication.dto';

@Injectable()
export class MedicationsService {
  constructor(
    @InjectRepository(Medication) private repo: Repository<Medication>,
  ) {}

  create(dto: CreateMedicationDto) {
    const medication = this.repo.create(dto);
    return this.repo.save(medication);
  }

  findAll() {
    return this.repo.find();
  }
}
