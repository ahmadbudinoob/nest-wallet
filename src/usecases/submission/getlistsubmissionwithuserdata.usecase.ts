import { SubmissionModel } from 'src/domain/model/submission.model';
import { SubmissionRepository } from 'src/domain/repository/submissionRepository.interface';
import { SubmissionDto } from 'src/infrastructure/controllers/submission/submission.dto';

export class GetListSubmissionWithUserDataUseCase {
  userRepository: any;
  constructor(private readonly submissionRepository: SubmissionRepository) {}

  async execute(dto: SubmissionDto): Promise<SubmissionModel[]> {
    let submissions;
    if (dto.q) {
      submissions = await this.submissionRepository.findAllwithDetailUser(dto);
    } else {
      submissions = await this.submissionRepository.findAll();
    }

    // retrieve the list of user IDs from the submissions
    const userIds = submissions.map((submission) => submission.user_id);

    // retrieve the list of users with the corresponding user IDs
    const users = await this.userRepository.findByIds(userIds);

    // map the submissions and users to SubmissionModel objects
    const submissionModels = submissions.map((submission) => {
      const user = users.find((user) => user.id === submission.user_id);
      return new SubmissionModel(submission, user);
    });

    return submissionModels;
  }
}
