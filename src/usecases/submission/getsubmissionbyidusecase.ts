import { SubmissionModel } from 'src/domain/model/submission.model';
import { SubmissionRepository } from 'src/domain/repository/submissionRepository.interface';

export class GetSubmissionDetailsByIdUseCase {
  constructor(private readonly submissionRepository: SubmissionRepository) {}

  async execute(): Promise<SubmissionModel> {
    return await this.submissionRepository.findById(1);
  }
}
