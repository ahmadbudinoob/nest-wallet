import { Test, TestingModule } from '@nestjs/testing';
import { SubmissionService } from '../submission.service';
import { SubmissionRequestDto } from '../dto/submission.request.dto';

describe('SubmissionService', () => {
  let service: SubmissionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubmissionService],
    }).compile();

    service = module.get<SubmissionService>(SubmissionService);
  });

  it('should return a list of submissions with page 1 and 10 per page as default if there are no parameters', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
  });

  it('should return a list of submission base on user_id', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class
    data.user_id = 'some_user_id'; // set the user_id property

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
    expect(
      result.every((submission) => submission.user_id === data.user_id),
    ).toBe(true);
  });

  it('should return a list of submission base on date_start and date_end', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class
    data.date_start = new Date('2022-01-01'); // set the date_start property
    data.date_end = new Date('2022-01-31'); // set the date_end property

    // Convert dates to Unix timestamps
    const startTimestamp = data.date_start.getTime();
    const endTimestamp = data.date_end.getTime();

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
    expect(
      result.every(
        (submission) =>
          submission.timecreated >= startTimestamp &&
          submission.timecreated <= endTimestamp,
      ),
    ).toBe(true);
  });

  it('should return a list of submission base on category', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class
    data.category = 'some_category'; // set the category property

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
    expect(
      result.every((submission) => submission.category === data.category),
    ).toBe(true);
  });

  it('should return a list of submission base on status', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class
    data.status = 1; // set the status property

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
    expect(
      result.every((submission) => submission.approval === data.status),
    ).toBe(true);
  });

  // it('should return a list of submission base on query', async () => {
  //   // Arrange
  //   const data = new SubmissionRequestDto(); // create an instance of the class
  //   data.q = 'some_query'; // set the query property

  //   // Act
  //   const result = await service.getSubmissions(data);

  //   // Assert
  //   expect(result).toBeDefined();
  //   expect(
  //     result.every(
  //       (submission) =>
  //         submission.title.includes(data.query) ||
  //         submission.description.includes(data.query),
  //     ),
  //   ).toBe(true);
  // });

  it('should return a list of submissions from all users if user_id is undefined', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
  });

  it('should return a list of submissions if date_start and date_end is undefined', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
  });

  it('should return a list of submissions of all categories if category is undefined', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
  });

  it('should return a list of submissions of all status if status is undefined', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
  });

  it('should return a list of submissions of all grade if grade is undefined', async () => {
    // Arrange
    const data = new SubmissionRequestDto(); // create an instance of the class

    // Act
    const result = await service.getSubmissions(data);

    // Assert
    expect(result).toBeDefined();
  });
});
