// Define application values
const applicationName = "Lambda-DDB-Webhook";

// Define resources to create
const applicationMap = {
    "ddb": true,
    "lambda": true,
    "api-gateway": true,
    "alb": false
}

// Define environments
const stages = ["alpha", "beta", "prod"];