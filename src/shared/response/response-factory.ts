import { HttpStatus } from '@nestjs/common';
import ApiResponse from './apiresponse';
import constants from '../../config/constants';

class BaseResponse {
  constructor(
    private status: number,
    private message: string,
    private data: any,
  ) {}

  public buildResponse(): ApiResponse {
    const apiResponse = new ApiResponse();
    apiResponse.status = this.status;
    apiResponse.message = this.message;
    apiResponse.data = this.data;
    return apiResponse;
  }
}

export const setResponseSaveSuccess = (data: any) => {
  return new BaseResponse(
    HttpStatus.CREATED,
    constants.RESPONSE.SIMPAN_DATA_BERHASIL,
    data,
  ).buildResponse();
};

export const setResponseSuccess = (data: any, message: string) => {
  return new BaseResponse(HttpStatus.OK, message, data).buildResponse();
};

export const setResponseBadRequest = (data: any, message: any) => {
  return new BaseResponse(
    HttpStatus.BAD_REQUEST,
    message,
    data,
  ).buildResponse();
};

export const setResponse = (status: number, message: string, data: any) => {
  return new BaseResponse(status, message, data).buildResponse();
};

export const setResponseSaveFailed = () => {
  return new BaseResponse(
    HttpStatus.BAD_REQUEST,
    constants.RESPONSE.SIMPAN_DATA_GAGAL,
    {},
  ).buildResponse();
};
