
export interface RequestOptions {
    body?: unknown;
    queryParameters?: Record<string, string>;
}

export interface CustomerPropertiesBody {
    customer_ids: unknown;
    properties: unknown;
    update_timestamp?: number;
}

export interface CustomerPropertiesOptions extends RequestOptions {
    body: CustomerPropertiesBody;
}

export interface AddEventBody {
    customer_ids: unknown;
    properties: unknown;
    update_timestamp?: string;
    event_type: string;
}

export interface AddEventOptions extends RequestOptions {
    body: AddEventBody;
}

export interface BatchCommandsOptions extends RequestOptions {
    body: {
        commands: Command[];
    }
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
    }
}

export interface ExportAllCustomersBody {
    attributes?: Attribute;
    filter?: Filter;
    execution_time?: number;
    timezone?: string;
    format: "csv" | "table_json";
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
    body: ExportEventsBody
}

export interface CreateCatalogOptions extends RequestOptions {
    body: {
        name: string;
        fields: CatalogField[];
        is_product_catalog?: boolean;
    }
}

export interface UpdateCatalogOptions extends RequestOptions {
    body: {
        name: string;
        fields: CatalogField[];
    }
}

// export interface DeleteAllCatalogItemsOptions extends RequestOptions {
    
// }

// export interface UpdateCatalogItemOptions extends RequestOptions {
    
// }

// export interface DeleteCatalogItemOptions extends RequestOptions {
    
// }

// export interface CatalogItemPartialUpdateOptions extends RequestOptions {
    
// }