import {
  IsNotEmpty,
  IsNumberString,
  IsDateString,
  IsOptional,
  IsString,
} from 'class-validator';

export class SubmissionDto {
  @IsNotEmpty()
  @IsNumberString()
  user_id: number;

  @IsNotEmpty()
  @IsDateString()
  starteddate: string;

  @IsNotEmpty()
  @IsDateString()
  enddate: string;

  @IsOptional()
  @IsNumberString({}, { message: 'Page must be a number string' })
  page?: number;

  @IsOptional()
  @IsNumberString(undefined, { message: 'Per page must be a number string' })
  perPage?: number;

  @IsOptional()
  @IsNumberString(undefined, { message: 'ID must be a number string' })
  id?: number;

  @IsOptional()
  @IsString({ message: 'Query must be a string' })
  q?: string;
}
