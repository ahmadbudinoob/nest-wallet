import { Controller, Get, Param, Version } from '@nestjs/common';
import ApiResponse from 'src/shared/response/apiresponse';
import { AccountabilityRequestDto } from './accountability.request.dto';
import { AccountabilityService } from './accountability.service';

@Controller('accountability')
export class AccountabilityController {
  constructor(private readonly accountabilityService: AccountabilityService) {}

  @Version('1')
  @Get('list')
  async getListAllPaging(
    @Param() params: AccountabilityRequestDto,
  ): Promise<ApiResponse> {
    return await this.accountabilityService.getAccountability(params);
  }
}
