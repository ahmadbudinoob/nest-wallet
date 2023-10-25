import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountabilityEntity } from './entity/accountability.entity';
import { Repository } from 'typeorm';
import { AccountabilityRequestDto } from './accountability.request.dto';
import { setResponseSuccess } from 'src/shared/response/response-factory';
import constants from 'src/config/constants';
import { AccountabilityResponseDTO } from './dto/accountability.response.dto';
import ApiResponse from 'src/shared/response/apiresponse';

@Injectable()
export class AccountabilityService {
  constructor(
    @InjectRepository(AccountabilityEntity)
    private AccountabilityEntityRepository: Repository<AccountabilityEntity>,
  ) {}

  async getAccountability(
    data: AccountabilityRequestDto,
  ): Promise<ApiResponse> {
    const { page = 1, perPage = 10 } = data;
    const queryBuilder = this.AccountabilityEntityRepository.createQueryBuilder(
      'mdl_lw_accountability',
    )
      .innerJoinAndSelect('mdl_lw_accountability.submission', 'submission')
      .innerJoinAndSelect('mdl_lw_accountability.user', 'user');

    queryBuilder.leftJoinAndSelect('user.unit', 'unit');
    queryBuilder.leftJoinAndSelect('unit.cabang', 'cabang');

    if (data.q) {
      queryBuilder.where((qb) => {
        qb.where('mdl_lw_submission.method LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_lw_submission.name LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_lw_submission.vendor LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_lw_submission.location LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_lw_submission.note LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_lw_accountability.note LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_lw_accountability.sopp LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_users.name LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_users.username LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_users.email LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_users.phone LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_users.grade LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_user_unit.description LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_user_kanwil.description LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_user_area.description LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_user_cabang.description LIKE :q', { q: `%${data.q}%` })
          .orWhere('mdl_lw_accountability.id LIKE :q', { q: `%${data.q}%` });
      });
    }

    queryBuilder.orderBy('mdl_lw_accountability.timecreated', 'DESC');
    queryBuilder.skip((1 - 1) * 2).take(2);

    const result = await queryBuilder.getMany();

    return setResponseSuccess(result, constants.RESPONSE.GET_DATA_SUCCESS);
  }
}
