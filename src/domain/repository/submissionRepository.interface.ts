import { SubmissionModel } from '../model/submission.model';

export interface SubmissionRepository {
  findAll(): Promise<SubmissionModel[]>;
  findById(id: number): Promise<SubmissionModel | null>;
  findByUserId(userId: string): Promise<SubmissionModel[]>;
  findByApprovalId(approvalId: string): Promise<SubmissionModel[]>;
  findByCatalogId(catalogId: number): Promise<SubmissionModel[]>;
  findByJobFamilyId(jobFamilyId: number): Promise<SubmissionModel[]>;
  findByToolsCategoryId(toolsCategoryId: number): Promise<SubmissionModel[]>;
  save(submission: SubmissionModel): Promise<SubmissionModel>;
  delete(submission: SubmissionModel): Promise<void>;
}
