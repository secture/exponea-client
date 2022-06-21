interface Command {
  name: string;
  data: unknown;
  command_id?: string;
}

interface CommandResult {
  success: boolean;
  time: number;
}

interface Attribute {
  type: string;
  property?: string;
  id?: string;
  list?: unknown[];
}

interface AttributeResult {
  success: boolean;
  value: string;
}

interface IDResult {
  cookie: string[];
  registered: string[];
}

interface EventResult {
  type: string;
  timestamp: number;
  properties: unknown;
}

interface Filter {
  type: string;
  segmentation_id: string;
  segment_index: number;
}

interface DataResult {
  type: string;
  timestamp: number;
  properties: unknown;
}

interface CatalogField {
  name: string;
  type?: string;
  searchable?: boolean;
}
