import { APIError } from './interfaces/APIError';
import {
  AddEventBody,
  CustomerPropertiesBody,
  TransactionalEmailBody,
} from './interfaces/requestOptions';
import { ExponeaWrapper } from './wrapper';

export class ExponeaAPI {
  private wrapper: ExponeaWrapper;
  private projectToken: string;

  constructor(projectToken: string, apiKey: string, apiSecret: string) {
    if (projectToken.trim().length === 0) {
      throw new Error('Invalid project token.');
    }

    if (apiKey.trim().length === 0 || apiSecret.trim().length === 0) {
      throw new Error('Invalid credentials.');
    }

    this.projectToken = projectToken;

    try {
      this.wrapper = new ExponeaWrapper(apiKey, apiSecret);
    } catch (e) {
      throw e;
    }
  }

  // Track API

  public async getSystemTime(): Promise<number> {
    const response = await this.wrapper.path('/track/v2/projects/{projectToken}/system/time', this.projectToken).get();

    if (response.status !== 200) {
      response.data.errors.push(response.data.error);
      throw new APIError(response.status, response.data.errors);
    } else {
      return response.data.time;
    }
  }

  public async updateCustomerProperties(properties: CustomerPropertiesBody): Promise<void> {
    const response = await this.wrapper.path('/track/v2/projects/{projectToken}/customers', this.projectToken).post({
      body: properties,
    });

    if (response.status !== 200) {
      response.data.errors.push(response.data.error);
      throw new APIError(response.status, response.data.errors);
    }
  }

  public async addEvent(event: AddEventBody): Promise<void> {
    const response = await this.wrapper
      .path('/track/v2/projects/{projectToken}/customers/events', this.projectToken)
      .post({
        body: event,
      });

    if (response.status !== 200) {
      response.data.errors.push(response.data.error);
      throw new APIError(response.status, response.data.errors);
    }
  }

  public async sendEmail(event: TransactionalEmailBody): Promise<void> {
    const response = await this.wrapper
      .path("/email/v2/projects/{projectToken}/sync", this.projectToken)
      .post({
        body: event,
      })

    if (response.status !== 200) {
      response.data.errors.push(response.data.error);
      throw new APIError(response.status, response.data.errors);
    }
  }
}
