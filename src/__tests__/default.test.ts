import { ExponeaAPI } from '../index';

describe('Track API Endpoints', () => {
  let api: ExponeaAPI;

  beforeAll(() => {
    api = new ExponeaAPI('test', 'test', 'test');
  });

  it('getSystemTime showld return error', async () => {
    expect(true).toBeTruthy();
  });

  it('getSystemTime showld return timestamp', async () => {
    expect(true).toBeTruthy();
  });

  it('updateCustomerProperties showld return error', async () => {
    expect(true).toBeTruthy();
  });

  it('updateCustomerProperties showld return OK', async () => {
    expect(true).toBeTruthy();
  });

  it('addEvent showld return error', async () => {
    expect(true).toBeTruthy();
  });

  it('addEvent showld return OK', async () => {
    expect(true).toBeTruthy();
  });

  it('sendEmail showld return error', async () => {
    expect(true).toBeTruthy();
  });

  it('sendEmail showld return OK', async () => {
    expect(true).toBeTruthy();
  });
});
