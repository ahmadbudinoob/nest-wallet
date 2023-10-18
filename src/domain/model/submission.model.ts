export interface SubmissionModel {
  id: number;
  catalog_id: number;
  user_id: string;
  approval_id: string;
  category: string;
  method: string;
  date_start: number;
  date_end: number;
  name: string;
  vendor: string;
  location?: string;
  note: string;
  filename?: string;
  cost: number;
  approval: number;
  timecreated: number;
  timemodified: number;
  job_family_id?: number;
  fitur_tombok?: boolean;
  nominal_tombok?: number;
  tools_category_id?: number;
}
