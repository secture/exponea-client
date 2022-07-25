import {
  AddEventOptions,
  BatchCommandsOptions,
  CreateCatalogOptions,
  CustomerAttributesOptions,
  CustomerPropertiesOptions,
  ExportAllCustomersOptions,
  ExportCustomerOptions,
  ExportEventsOptions,
  TransactionalEmailOptions,
  UpdateCatalogOptions,
} from './requestOptions';
import {
  BatchCommandsResponse,
  CreateCatalogResponse,
  CustomerAttributesResponse,
  DeleteCatalogResponse,
  EmptySuccessResponse,
  ErrorResponse,
  ExportAllCustomersResponse,
  ExportCustomerResponse,
  ExportEventsResponse,
  GetAllCatalogsResponse,
  GetCatalogNameResponse,
  SystemTimeResponse,
  UpdateCatalogResponse,
  TransactionalEmailResponse,
} from './requestResponse';

export interface ExponeaLibrary {
  // track api
  '/track/v2/projects/{projectToken}/system/time': {
    get: () => Promise<SystemTimeResponse | ErrorResponse>;
  };
  '/track/v2/projects/{projectToken}/customers': {
    post: (input: CustomerPropertiesOptions) => Promise<EmptySuccessResponse | ErrorResponse>;
  };
  '/track/v2/projects/{projectToken}/customers/events': {
    post: (input: AddEventOptions) => Promise<EmptySuccessResponse | ErrorResponse>;
  };
  '/track/v2/projects/{projectToken}/batch': {
    post: (input: BatchCommandsOptions) => Promise<BatchCommandsResponse | ErrorResponse>;
  };
  // customer api
  '/data/v2/projects/{projectToken}/customers/attributes': {
    post: (input: CustomerAttributesOptions) => Promise<CustomerAttributesResponse | ErrorResponse>;
  };
  // Contextual Personalization Best Variant
  // Contextual Personalization Reward
  '/data/v2/projects/{projectToken}/customers/export-one': {
    post: (input: ExportCustomerOptions) => Promise<ExportCustomerResponse | ErrorResponse>;
  };
  '/data/v2/projects/{projectToken}/customers/export': {
    post: (input: ExportAllCustomersOptions) => Promise<ExportAllCustomersResponse | ErrorResponse>;
  };
  '/data/v2/projects/{projectToken}/customers/events': {
    post: (input: ExportEventsOptions) => Promise<ExportEventsResponse | ErrorResponse>;
  };
  // catalog api
  '/data/v2/projects/{projectToken}/catalogs': {
    post: (input: CreateCatalogOptions) => Promise<CreateCatalogResponse | ErrorResponse>;
    get: () => Promise<GetAllCatalogsResponse | ErrorResponse>;
  };
  '/data/v2/projects/{projectToken}/catalogs/{catalogId}': {
    get: () => Promise<GetCatalogNameResponse | ErrorResponse>;
    put: (input: UpdateCatalogOptions) => Promise<UpdateCatalogResponse | ErrorResponse>;
    delete: () => Promise<DeleteCatalogResponse | ErrorResponse>;
  };
  // email api
  '/email/v2/projects/{projectToken}/sync': {
    post: (input: TransactionalEmailOptions) => Promise<TransactionalEmailResponse | ErrorResponse>;
  };
}
