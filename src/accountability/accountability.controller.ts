import { Controller, Get, Query } from '@nestjs/common';
import ApiResponse from 'src/shared/response/apiresponse';
import { AccountabilityRequestDto } from './dto/accountability.request.dto';
import { AccountabilityService } from './accountability.service';

@Controller('accountability')
export class AccountabilityController {
  constructor(private readonly accountabilityService: AccountabilityService) {}

  @Get('list')
  async getListAllPaging(
    @Query() params: AccountabilityRequestDto,
  ): Promise<ApiResponse> {
    return await this.accountabilityService.getAccountability(params);
  }
}
