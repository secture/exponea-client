import { Attribute, CatalogField, Command, Filter } from './helper';

export interface RequestOptions {
  body?: unknown;
  queryParameters?: Record<string, string>;
}

export interface CustomerPropertiesBody {
  customer_ids: unknown;
  properties: unknown;
}

export interface CustomerPropertiesOptions extends RequestOptions {
  body: CustomerPropertiesBody;
}

export interface AddEventBody {
  customer_ids: unknown;
  properties: unknown;
  timestamp?: number;
  event_type: string;
}

export interface AddEventOptions extends RequestOptions {
  body: AddEventBody;
}

export interface BatchCommandsOptions extends RequestOptions {
  body: {
    commands: Command[];
  };
}

export interface CustomerAttributesBody {
  customer_ids: unknown;
  attributes: Attribute[];
}

export interface CustomerAttributesOptions extends RequestOptions {
  body: CustomerAttributesBody;
}

export interface ExportCustomerOptions extends RequestOptions {
  body: {
    customer_ids: string[];
  };
}

export interface ExportAllCustomersBody {
  attributes?: Attribute;
  filter?: Filter;
  execution_time?: number;
  timezone?: string;
  format: 'csv' | 'table_json';
}

export interface ExportAllCustomersOptions extends RequestOptions {
  body: ExportAllCustomersBody;
}

export interface ExportEventsBody {
  customer_ids: unknown;
  event_types: string[];
  order?: string;
  limit?: number;
  skip?: number;
}

export interface ExportEventsOptions extends RequestOptions {
  body: ExportEventsBody;
}

export interface CreateCatalogOptions extends RequestOptions {
  body: {
    name: string;
    fields: CatalogField[];
    is_product_catalog?: boolean;
  };
}

export interface UpdateCatalogOptions extends RequestOptions {
  body: {
    name: string;
    fields: CatalogField[];
  };
}

export interface TransactionalEmailSettings {
  custom_event_properties?: unknown;
  custom_headers?: unknown;
  url_params?: unknown;
  transfer_user_identity?: string;
}

export interface TransactionalEmailIntegration {
  id: string;
  sender_address: string;
}

export interface TransactionalEmailRecipient {
  email?: string;
  customer_ids: unknown;
  language?: string;
}

export interface TransactionalEmailAttachment {
  filename: string;
  content: string;
  content_type: string;
}

export interface TransactionalEmailContent {
  template_id: string;
  sender_address?: string;
  sender_name?: string;
  params?: unknown;
  attachments?: TransactionalEmailAttachment[];
}

export interface TransactionalEmailBody {
  integration_id?: string;
  integrations?: TransactionalEmailIntegration[];
  email_content: TransactionalEmailContent;
  campaign_name: string;
  recipient: TransactionalEmailRecipient;
  transfer_identity?: string;
  settings?: TransactionalEmailSettings;
}

export interface TransactionalEmailOptions extends RequestOptions {
  body: TransactionalEmailBody;
}
