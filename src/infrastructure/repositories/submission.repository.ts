import { Repository } from 'typeorm';
import { Submission } from '../entities/submission.entity';
import { SubmissionModel } from 'src/domain/model/submission.model';
import { SubmissionRepository } from 'src/domain/repository/submissionRepository.interface';

export class DatabaseSubmissionRepository implements SubmissionRepository {
  constructor(private readonly repository: Repository<Submission>) {}

  async findAll(): Promise<SubmissionModel[]> {
    const submissions = await this.repository.find();
    return submissions.map((submission) => this.mapToModel(submission));
  }

  async findById(id: number): Promise<SubmissionModel | null> {
    const submission = await this.repository.findOne({ where: { id: id } });
    return submission ? this.mapToModel(submission) : null;
  }

  async findByUserId(userId: string): Promise<SubmissionModel[]> {
    const submissions = await this.repository.find({
      where: { user_id: userId },
    });
    return submissions.map((submission) => this.mapToModel(submission));
  }

  async findByApprovalId(approvalId: string): Promise<SubmissionModel[]> {
    const submissions = await this.repository.find({
      where: { approval_id: approvalId },
    });
    return submissions.map((submission) => this.mapToModel(submission));
  }

  async findByCatalogId(catalogId: number): Promise<SubmissionModel[]> {
    const submissions = await this.repository.find({
      where: { catalog_id: catalogId },
    });
    return submissions.map((submission) => this.mapToModel(submission));
  }

  async findByJobFamilyId(jobFamilyId: number): Promise<SubmissionModel[]> {
    const submissions = await this.repository.find({
      where: { job_family_id: jobFamilyId },
    });
    return submissions.map((submission) => this.mapToModel(submission));
  }

  async findByToolsCategoryId(
    toolsCategoryId: number,
  ): Promise<SubmissionModel[]> {
    const submissions = await this.repository.find({
      where: { tools_category_id: toolsCategoryId },
    });
    return submissions.map((submission) => this.mapToModel(submission));
  }

  async save(submission: SubmissionModel): Promise<SubmissionModel> {
    const savedSubmission = await this.repository.save(submission);
    return this.mapToModel(savedSubmission);
  }

  async delete(submission: SubmissionModel): Promise<void> {
    await this.repository.delete(submission.id);
  }

  private mapToModel(submission: Submission): SubmissionModel {
    return {
      id: submission.id,
      catalog_id: submission.catalog_id,
      user_id: submission.user_id,
      approval_id: submission.approval_id,
      category: submission.category,
      method: submission.method,
      date_start: submission.date_start,
      date_end: submission.date_end,
      name: submission.name,
      vendor: submission.vendor,
      location: submission.location,
      note: submission.note,
      filename: submission.filename,
      cost: submission.cost,
      approval: submission.approval,
      timecreated: submission.timecreated,
      timemodified: submission.timemodified,
      job_family_id: submission.job_family_id,
      fitur_tombok: submission.fitur_tombok,
      nominal_tombok: submission.nominal_tombok,
      tools_category_id: submission.tools_category_id,
    };
  }
}
