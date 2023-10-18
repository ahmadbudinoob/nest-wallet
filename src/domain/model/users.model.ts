export interface UserModel {
  id: string;
  unit_id: number;
  access_id: number;
  head_id: string;
  username: string;
  auth: string;
  name: string;
  grade?: string;
  gender: string;
  position?: string;
  phone?: string;
  email: string;
  email_verified_at?: Date | null;
  password: string;
  remember_token?: string | null;
  avatar?: string;
  kode_grade?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null;
  status: number;
}
