import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsString,
  IsDate,
} from 'class-validator';

export class AccountabilityRequestDto {
  @IsString()
  @IsOptional()
  q: string;

  @IsInt()
  @IsOptional()
  grade: number;

  @IsInt()
  @IsOptional()
  perPage: number;

  @IsInt()
  @IsOptional()
  page: number;

  @IsString()
  sortBy: string;

  @IsBoolean()
  sortDesc: boolean;

  @IsBoolean()
  accountability: boolean;

  @IsInt()
  @IsOptional()
  user_id: number;

  @IsBoolean()
  date_filter: boolean;

  @IsDate()
  @IsOptional()
  date_start: Date;

  @IsDate()
  @IsOptional()
  date_end: Date;

  @IsBoolean()
  @IsOptional()
  date_update: boolean;
}
