import { Controller, Get, Param } from '@nestjs/common';
import { GetListSubmissionWithUserDataUseCase } from 'src/usecases/submission/getlistsubmissionwithuserdata.usecase';
import { SubmissionModel } from 'src/domain/model/submission.model';
import { SubmissionDto } from './submission.dto';

@Controller('submissions')
export class SubmissionController {
  constructor(
    private readonly getListSubmissionWithUserDataUseCase: GetListSubmissionWithUserDataUseCase,
  ) {}

  @Get('list')
  async getListSubmissionWithUserData(
    @Param() getListSubmissionDto: SubmissionDto,
  ): Promise<SubmissionModel[]> {
    return await this.getListSubmissionWithUserDataUseCase.execute(
      getListSubmissionDto,
    );
  }
}
