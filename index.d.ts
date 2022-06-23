interface CustomerPropertiesBody {
    customer_ids: unknown;
    properties: unknown;
    update_timestamp?: number;
}
interface AddEventBody {
    customer_ids: unknown;
    properties: unknown;
    update_timestamp?: string;
    event_type: string;
}
interface CustomerAttributesBody {
    customer_ids: unknown;
    attributes: Attribute[];
}
interface ExportAllCustomersBody {
    attributes?: Attribute;
    filter?: Filter;
    execution_time?: number;
    timezone?: string;
    format: 'csv' | 'table_json';
}
interface ExportEventsBody {
    customer_ids: unknown;
    event_types: string[];
    order?: string;
    limit?: number;
    skip?: number;
}

interface BatchCommandResponseData {
    results: CommandResult[];
    start_time: number;
    end_time: number;
    success: boolean;
}
interface ExportCustomerData {
    success: boolean;
    ids: IDResult[];
    properties: unknown;
    events: EventResult[];
}

declare class ExponeaAPI {
    private wrapper;
    private projectToken;
    constructor(projectToken: string, apiKey: string, apiSecret: string);
    getSystemTime(): Promise<number>;
    updateCustomerProperties(properties: CustomerPropertiesBody): Promise<void>;
    addEvent(event: AddEventBody): Promise<void>;
    batchCommand(commands: Command[]): Promise<BatchCommandResponseData>;
    retrieveCustomerAttributes(attributes: CustomerAttributesBody): Promise<AttributeResult[]>;
    exporAlltCustomer(exportProperties: ExportAllCustomersBody): Promise<unknown>;
    exportCustomer(customerIds: string[]): Promise<ExportCustomerData>;
    exportEvent(exportEventProperties: ExportEventsBody): Promise<DataResult[]>;
}

export { ExponeaAPI };
