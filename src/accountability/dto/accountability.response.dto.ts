import { ApiProperty } from '@nestjs/swagger';

class UnitDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  code: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  kanwil_id: number;

  @ApiProperty()
  area_id: number;

  @ApiProperty()
  cabang_id: number;
}

class CabangDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  kanwil_id: number;

  @ApiProperty()
  area_id: number;

  @ApiProperty()
  code: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  created_at: Date | null;

  @ApiProperty()
  updated_at: Date | null;
}

class SubmissionDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  catalog_id: number;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  approval_id: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  method: string;

  @ApiProperty()
  date_start: number;

  @ApiProperty()
  date_end: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  vendor: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  note: string;

  @ApiProperty()
  filename: string;

  @ApiProperty()
  cost: number;

  @ApiProperty()
  approval: number;

  @ApiProperty()
  timecreated: number;

  @ApiProperty()
  timemodified: number;
}

class UserDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  unit_id: number;

  @ApiProperty()
  access_id: number;

  @ApiProperty()
  head_id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  auth: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  grade: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  email_verified_at: Date | null;

  @ApiProperty()
  password: string;

  @ApiProperty()
  remember_token: string | null;

  @ApiProperty()
  avatar: string | null;

  @ApiProperty()
  kode_grade: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  status: number;

  @ApiProperty()
  gender: string;
}

export class AccountabilityResponseDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  submission_id: number;

  @ApiProperty()
  user_id: string;

  @ApiProperty()
  actual_cost: number;

  @ApiProperty()
  note: string;

  @ApiProperty()
  sopp: string;

  @ApiProperty()
  filename: string | null;

  @ApiProperty()
  approval: number;

  @ApiProperty()
  timecreated: number;

  @ApiProperty()
  timemodified: number;

  @ApiProperty()
  submission: SubmissionDTO;

  @ApiProperty()
  user: UserDTO;

  @ApiProperty()
  unit: UnitDTO;

  @ApiProperty()
  cabang: CabangDTO;
}
