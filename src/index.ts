import {
  AddEventBody,
  CustomerAttributesBody,
  CustomerPropertiesBody,
  ExportAllCustomersBody,
  ExportEventsBody,
} from './interfaces/requestOptions';
import { BatchCommandResponseData, ExportCustomerData } from './interfaces/requestResponse';
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
      const systemTime = this.getSystemTime();
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

  // public async batchCommand(commands: Command[]): Promise<BatchCommandResponseData> {
  //   const response = await this.wrapper.path('/track/v2/projects/{projectToken}/batch', this.projectToken).post({
  //     body: {
  //       commands,
  //     },
  //   });

  //   if (response.status !== 200) {
  //     response.data.errors.push(response.data.error);
  //     throw new APIError(response.status, response.data.errors);
  //   } else {
  //     return response.data;
  //   }
  // }

  // // Customer API

  // public async retrieveCustomerAttributes(attributes: CustomerAttributesBody): Promise<AttributeResult[]> {
  //   const response = await this.wrapper
  //     .path('/data/v2/projects/{projectToken}/customers/attributes', this.projectToken)
  //     .post({
  //       body: attributes,
  //     });

  //   if (response.status !== 200) {
  //     response.data.errors.push(response.data.error);
  //     throw new APIError(response.status, response.data.errors);
  //   } else {
  //     return response.data.results;
  //   }
  // }

  // public async exporAlltCustomer(exportProperties: ExportAllCustomersBody): Promise<unknown> {
  //   const response = await this.wrapper
  //     .path('/data/v2/projects/{projectToken}/customers/export', this.projectToken)
  //     .post({
  //       body: exportProperties,
  //     });

  //   if (response.status !== 200) {
  //     response.data.errors.push(response.data.error);
  //     throw new APIError(response.status, response.data.errors);
  //   } else {
  //     return response.data;
  //   }
  // }

  // public async exportCustomer(customerIds: string[]): Promise<ExportCustomerData> {
  //   const response = await this.wrapper
  //     .path('/data/v2/projects/{projectToken}/customers/export-one', this.projectToken)
  //     .post({
  //       body: {
  //         customer_ids: customerIds,
  //       },
  //     });

  //   if (response.status !== 200) {
  //     response.data.errors.push(response.data.error);
  //     throw new APIError(response.status, response.data.errors);
  //   } else {
  //     return response.data;
  //   }
  // }

  // public async exportEvent(exportEventProperties: ExportEventsBody): Promise<DataResult[]> {
  //   const response = await this.wrapper
  //     .path('/data/v2/projects/{projectToken}/customers/events', this.projectToken)
  //     .post({
  //       body: exportEventProperties,
  //     });

  //   if (response.status !== 200) {
  //     response.data.errors.push(response.data.error);
  //     throw new APIError(response.status, response.data.errors);
  //   } else {
  //     return response.data.data;
  //   }
  // }
}
