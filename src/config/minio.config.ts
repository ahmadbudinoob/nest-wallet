import * as Minio from 'minio';

// Mengambil nilai konfigurasi dari environment variables
const minioEndpoint = process.env.MINIO_ENDPOINT;
const minioUseSSL = true;
const minioAccessKey = process.env.MINIO_ACCESS_KEY;
const minioSecretKey = process.env.MINIO_SECRET_KEY;
export const minioBucket = process.env.MINIO_BUCKET;

export const minioClient = new Minio.Client({
  endPoint: minioEndpoint,
  useSSL: minioUseSSL,
  accessKey: minioAccessKey,
  secretKey: minioSecretKey,
});
