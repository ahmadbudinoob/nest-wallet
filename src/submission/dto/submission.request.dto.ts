import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  IsDate,
  IsNumber,
} from 'class-validator';

export class SubmissionRequestDto {
  @IsString()
  @IsOptional()
  q: string;

  @IsInt()
  @IsOptional()
  grade: number;

  @IsInt()
  @IsOptional()
  perPage: number = 10;

  @IsInt()
  @IsOptional()
  page: number = 1;

  @IsString()
  sortBy: string;

  @IsBoolean()
  sortDesc: boolean;

  @IsInt()
  @IsOptional()
  user_id: string;

  @IsDate()
  @IsOptional()
  date_start: Date;

  @IsDate()
  @IsOptional()
  date_end: Date;

  @IsString()
  @IsOptional()
  category: string;

  @IsNumber()
  @IsOptional()
  status: number;
}
