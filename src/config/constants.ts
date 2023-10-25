enum MESSAGE {
  PERTANYAAN_SIMPAN_DATA = 'Apakah anda yakin akan menyimpan data ini?',
  PERTANYAAN_DATA_BENAR = 'Pastikan data diatas sudah sesuai',
  PERTANYAAN_HAPUS_DATA = 'Apakah anda yakin akan menghapus data ini?',
}

export enum RESPONSE {
  SIMPAN_DATA_BERHASIL = 'Data berhasil disimpan',
  SIMPAN_DATA_GAGAL = 'Simpan Data Gagal',
  APPROVE = 'Approve',
  GET_DATA_SUCCESS = 'Get Data Sukses',
  GET_DATA_FAILED = 'Get Data Gagal',
  DATA_TIDAK_DITEMUKAN = 'Data tidak ditemukan',
  GENERATE_TOKEN_FAILURE = 'Gagal Generate Token',
  BAD_REQUEST_SSO = 'Bad Request get access token from SSO',
  GET_TOKEN_SUCCESS = 'Get Token Sukses',
  GET_CONFIG_FAILED = 'Get Config Gagal',
  APP_TIDAK_TERDAFTAR = 'Aplikasi Tidak Terdaftar. Silakan Hubungi Admin Aplikasi',
  USER_TIDAK_TERDAFTAR = 'User Tidak Terdaftar. Silakan Hubungi Admin Aplikasi',
  HAPUS_DATA_BERHASIL = 'Hapus data berhasil',
  HAPUS_DATA_GAGAL = 'Hapus data gagal',
  INVALID_PASSWORD = 'Invalid Password',
}

enum AUTH {
  SSO = 'sso',
  MANUAL = 'manual',
}

export default {
  MESSAGE,
  RESPONSE,
  AUTH,
};
