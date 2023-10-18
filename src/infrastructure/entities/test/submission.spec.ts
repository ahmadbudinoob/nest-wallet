import { Submission } from '../submission.entity';

describe('Submission', () => {
  it('should have all required properties', () => {
    const submission = new Submission();
    submission.id = 1;
    submission.catalog_id = 2;
    submission.user_id = 'user123';
    submission.approval_id = 'approval123';
    submission.category = 'category';
    submission.method = 'method';
    submission.date_start = 1234567890;
    submission.date_end = 1234567890;
    submission.name = 'name';
    submission.vendor = 'vendor';
    submission.note = 'note';
    submission.cost = 100;
    submission.approval = 1;
    submission.timecreated = 1234567890;
    submission.timemodified = 1234567890;

    expect(submission).toBeDefined();
    expect(submission.id).toBe(1);
    expect(submission.catalog_id).toBe(2);
    expect(submission.user_id).toBe('user123');
    expect(submission.approval_id).toBe('approval123');
    expect(submission.category).toBe('category');
    expect(submission.method).toBe('method');
    expect(submission.date_start).toBe(1234567890);
    expect(submission.date_end).toBe(1234567890);
    expect(submission.name).toBe('name');
    expect(submission.vendor).toBe('vendor');
    expect(submission.note).toBe('note');
    expect(submission.cost).toBe(100);
    expect(submission.approval).toBe(1);
    expect(submission.timecreated).toBe(1234567890);
    expect(submission.timemodified).toBe(1234567890);
  });

  it('should allow optional properties to be undefined', () => {
    const submission = new Submission();
    submission.id = 1;
    submission.catalog_id = 2;
    submission.user_id = 'user123';
    submission.approval_id = 'approval123';
    submission.category = 'category';
    submission.method = 'method';
    submission.date_start = 1234567890;
    submission.date_end = 1234567890;
    submission.name = 'name';
    submission.vendor = 'vendor';
    submission.note = 'note';
    submission.cost = 100;
    submission.approval = 1;
    submission.timecreated = 1234567890;
    submission.timemodified = 1234567890;
    submission.location = undefined;
    submission.filename = undefined;
    submission.job_family_id = undefined;
    submission.fitur_tombok = undefined;
    submission.nominal_tombok = undefined;
    submission.tools_category_id = undefined;

    expect(submission.location).toBeUndefined();
    expect(submission.filename).toBeUndefined();
    expect(submission.job_family_id).toBeUndefined();
    expect(submission.fitur_tombok).toBeUndefined();
    expect(submission.nominal_tombok).toBeUndefined();
    expect(submission.tools_category_id).toBeUndefined();
  });
});
