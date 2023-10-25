import { Injectable } from '@nestjs/common';
import * as Minio from 'minio';
import * as url from 'url';
import { minioBucket } from 'src/config/minio.config';

@Injectable()
export class MinioService {
  private minioClient: Minio.Client;

  constructor() {}

  async getFileFromUrl(file: string): Promise<string> {
    try {
      const parsedUrl = url.parse(file);
      const pathSegments = parsedUrl.pathname?.split('/');
      if (pathSegments && pathSegments.length > 1) {
        const nama = pathSegments[pathSegments.length - 1];
        const buffer = await this.minioClient.getObject(minioBucket, nama);
        return null;
      } else {
        console.error('URL tidak valid: Tidak dapat mengekstrak nama berkas.');
        return null;
      }
    } catch (error) {
      console.error(`Gagal mengambil berkas dari Minio: ${error.message}`);
      return null;
    }
  }
}
