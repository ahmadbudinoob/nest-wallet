import { User } from '../user.entity';

describe('User', () => {
  it('should have all required properties', () => {
    const user = new User();
    user.id = '123';
    user.unit_id = 1;
    user.access_id = 2;
    user.head_id = 'head123';
    user.username = 'user123';
    user.auth = 'auth123';
    user.name = 'name';
    user.gender = 'male';
    user.email = 'user@example.com';
    user.password = 'password123';
    user.status = 1;

    expect(user).toBeDefined();
    expect(user.id).toBe('123');
    expect(user.unit_id).toBe(1);
    expect(user.access_id).toBe(2);
    expect(user.head_id).toBe('head123');
    expect(user.username).toBe('user123');
    expect(user.auth).toBe('auth123');
    expect(user.name).toBe('name');
    expect(user.gender).toBe('male');
    expect(user.email).toBe('user@example.com');
    expect(user.password).toBe('password123');
    expect(user.status).toBe(1);
  });

  it('should allow optional properties to be undefined', () => {
    const user = new User();
    user.id = '123';
    user.unit_id = 1;
    user.access_id = 2;
    user.head_id = 'head123';
    user.username = 'user123';
    user.auth = 'auth123';
    user.name = 'name';
    user.gender = 'male';
    user.email = 'user@example.com';
    user.password = 'password123';
    user.status = 1;
    user.grade = undefined;
    user.position = undefined;
    user.phone = undefined;
    user.email_verified_at = undefined;
    user.remember_token = undefined;
    user.avatar = undefined;
    user.kode_grade = undefined;
    user.created_at = undefined;
    user.updated_at = undefined;

    expect(user.grade).toBeUndefined();
    expect(user.position).toBeUndefined();
    expect(user.phone).toBeUndefined();
    expect(user.email_verified_at).toBeUndefined();
    expect(user.remember_token).toBeUndefined();
    expect(user.avatar).toBeUndefined();
    expect(user.kode_grade).toBeUndefined();
    expect(user.created_at).toBeUndefined();
    expect(user.updated_at).toBeUndefined();
  });
});
