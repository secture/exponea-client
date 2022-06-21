import { AxiosResponse } from 'axios';

export interface Response extends AxiosResponse {
  status: number;
  data: unknown;
}

export interface ErrorResponse extends Response {
  status: 400 | 403 | 404 | 429 | 500;
  data: {
    success: false;
    errors?: string[];
    error?: string;
  };
}

export interface SystemTimeResponse extends Response {
  status: 200;
  data: {
    success: true;
    errors: [];
    time: number;
  };
}

export interface EmptySuccessResponse extends Response {
  status: 200;
  data: {
    success: true;
    errors: [];
  };
}

export interface BatchCommandResponseData {
  results: CommandResult[];
  start_time: number;
  end_time: number;
  success: boolean;
}

export interface BatchCommandsResponse extends Response {
  status: 200;
  data: BatchCommandResponseData;
}

export interface CustomerAttributesResponse extends Response {
  status: 200;
  data: {
    success: boolean;
    results: AttributeResult[];
  };
}

export interface ExportCustomerData {
  success: boolean;
  ids: IDResult[];
  properties: unknown;
  events: EventResult[];
}

export interface ExportCustomerResponse extends Response {
  status: 200;
  data: ExportCustomerData;
}

export interface ExportAllCustomersResponse extends Response {
  status: 200;
  data: unknown;
}

export interface ExportEventsResponse extends Response {
  status: 200;
  data: {
    success: boolean;
    data: DataResult[];
  };
}

export interface CreateCatalogResponse extends Response {
  status: 200;
  data: unknown;
}

export interface GetAllCatalogsResponse extends Response {
  status: 200;
  data: unknown;
}

export interface GetCatalogNameResponse extends Response {
  status: 200;
  data: unknown;
}

export interface UpdateCatalogResponse extends Response {
  status: 200;
  data: unknown;
}

export interface DeleteCatalogResponse extends Response {
  status: 200;
  data: unknown;
}

export interface GetCatalogItemsResponse extends Response {
  status: 200;
  data: unknown;
}

export interface DeleteAllCatalogItemsResponse extends Response {
  status: 200;
  data: unknown;
}

export interface GetCatalogItemResponse extends Response {
  status: 200;
  data: unknown;
}

export interface UpdateCatalogItemResponse extends Response {
  status: 200;
  data: unknown;
}

export interface DeleteCatalogItemResponse extends Response {
  status: 200;
  data: unknown;
}

export interface CatalogItemPartialUpdateResponse extends Response {
  status: 200;
  data: unknown;
}
