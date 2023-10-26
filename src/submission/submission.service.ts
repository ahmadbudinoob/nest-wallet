import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubmissionEntity } from './entity/submission.entity';
import { SubmissionRequestDto } from './dto/submission.request.dto';

@Injectable()
export class SubmissionService {
  constructor(
    @InjectRepository(SubmissionEntity)
    private submissionEntityRepository: Repository<SubmissionEntity>,
  ) {}

  async getSubmissions(
    data: SubmissionRequestDto,
  ): Promise<SubmissionEntity[]> {
    Logger.log(data);
    return await this.submissionEntityRepository.find();
  }
}
