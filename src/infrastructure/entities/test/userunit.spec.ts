import { UserUnit } from '../userunit.entity';

describe('UserUnit', () => {
  it('should create a new instance of UserUnit', () => {
    const userUnit = new UserUnit();

    expect(userUnit).toBeDefined();
    expect(userUnit.id).toBeUndefined();
    expect(userUnit.kanwilId).toBeUndefined();
    expect(userUnit.areaId).toBeUndefined();
    expect(userUnit.cabangId).toBeUndefined();
    expect(userUnit.code).toBeUndefined();
    expect(userUnit.description).toBeUndefined();
    expect(userUnit.createdAt).toBeInstanceOf(Date);
    expect(userUnit.updatedAt).toBeInstanceOf(Date);
  });
});
