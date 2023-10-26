import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountabilityEntity } from './entity/accountability.entity';
import { Repository } from 'typeorm';
import { AccountabilityRequestDto } from './dto/accountability.request.dto';
import {
  setResponseBadRequest,
  setResponseSuccess,
} from 'src/shared/response/response-factory';
import constants from 'src/utils/constants';
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
    try {
      const {
        page = 1,
        perPage = 10,
        q,
        grade,
        sortDesc,
        user_id,
        category,
        status,
      } = data;
      const queryBuilder =
        this.AccountabilityEntityRepository.createQueryBuilder(
          'mdl_lw_accountability',
        )
          .innerJoinAndSelect('mdl_lw_accountability.submission', 'submission')
          .innerJoinAndSelect('mdl_lw_accountability.user', 'user');

      queryBuilder.leftJoinAndSelect('user.unit', 'unit');
      queryBuilder.leftJoinAndSelect('unit.cabang', 'cabang');

      if (q) {
        queryBuilder.where((qb) => {
          qb.where('submission.method LIKE :q', { q: `%${q}%` })
            .orWhere('submission.name LIKE :q', { q: `%${q}%` })
            .orWhere('submission.vendor LIKE :q', { q: `%${q}%` })
            .orWhere('submission.location LIKE :q', { q: `%${q}%` })
            .orWhere('submission.note LIKE :q', { q: `%${q}%` })
            .orWhere('mdl_lw_accountability.note LIKE :q', { q: `%${q}%` })
            .orWhere('mdl_lw_accountability.sopp LIKE :q', { q: `%${q}%` })
            .orWhere('user.name LIKE :q', { q: `%${q}%` })
            .orWhere('user.username LIKE :q', { q: `%${q}%` })
            .orWhere('user.email LIKE :q', { q: `%${q}%` })
            .orWhere('mdl_user_unit.description LIKE :q', { q: `%${q}%` })
            .orWhere('mdl_user_kanwil.description LIKE :q', {
              q: `%${q}%`,
            })
            .orWhere('mdl_user_area.description LIKE :q', { q: `%${q}%` })
            .orWhere('mdl_user_cabang.description LIKE :q', {
              q: `%${q}%`,
            })
            .orWhere('mdl_lw_accountability.id LIKE :q', { q: `%${q}%` });
        });
      }
      if (user_id !== undefined) {
        queryBuilder.andWhere('user_id = :user_id', {
          user_id: user_id,
        });
      }

      if (grade !== undefined) {
        queryBuilder.andWhere('user.kode_grade = :grade', {
          grade: grade,
        });
      }

      if (status !== undefined) {
        queryBuilder.andWhere('submission.approval = :status', {
          status: status,
        });
      }

      if (category !== undefined) {
        queryBuilder.andWhere('submission.category = :category', {
          category: category,
        });
      }

      queryBuilder.orderBy(
        'mdl_lw_accountability.timecreated',
        sortDesc ? 'DESC' : 'ASC',
      );
      queryBuilder.skip((page - page) * perPage).take(perPage);

      const result = await queryBuilder.getMany();

      return setResponseSuccess(result, constants.RESPONSE.GET_DATA_SUCCESS);
    } catch (error) {
      Logger.error('[ERROR]', error);
      return setResponseBadRequest({}, constants.RESPONSE.GET_DATA_FAILED);
    }
  }
}
