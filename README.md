# 💬🎥 exponea-client
client for exponea API.

## Usage

### Import
```
const { ExponeaAPI } = require("exponea-client");

// or

import { ExponeaAPI } from "exponea-client";
```

### Create an instance
```
const api = new ExponeaAPI(
    "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "api-key",
    "api-secfret"
);

```

### Methods (WIP)
- getSystemTime
```
const response = await api.getSystemTime();

// 1655825898.9565847
```
- updateCustomerProperties
- addEvent
```
const eventResponse = await api.addEvent({
    customer_ids: {
        email: "test@email.com"
    },
    properties: {
        valid_until: new Date(2022, 12, 31).toString(),
        action: "accept",
        category: "brand",
        source: "web",
    },
    timestamp: new Date().getTime(),
    event_type: "consent",
});
```
- batchCommand
- retrieveCustomerAttributes
- exporAlltCustomer
- exportCustomer
- exportEvent