export interface Command {
  name: string;
  data: unknown;
  command_id?: string;
}

export interface CommandResult {
  success: boolean;
  time: number;
}

export interface Attribute {
  type: string;
  property?: string;
  id?: string;
  list?: unknown[];
}

export interface AttributeResult {
  success: boolean;
  value: string;
}

export interface IDResult {
  cookie: string[];
  registered: string[];
}

export interface EventResult {
  type: string;
  timestamp: number;
  properties: unknown;
}

export interface Filter {
  type: string;
  segmentation_id: string;
  segment_index: number;
}

export interface DataResult {
  type: string;
  timestamp: number;
  properties: unknown;
}

export interface CatalogField {
  name: string;
  type?: string;
  searchable?: boolean;
}
