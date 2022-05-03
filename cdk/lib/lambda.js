const cdk = require("aws-cdk-lib");
const { Construct } = require("constructs");
const apigateway = require("aws-cdk-lib/aws-apigateway");
const lambda = require("aws-cdk-lib/aws-lambda");
const path = require('path');

class LambdaBackendService extends Construct {
    constructor(scope, id) {
        super(scope, id);

        const handler = new lambda.Function(this, "lambda-ddb-webhook-api-handler", {
            runtime: lambda.Runtime.NODEJS_14_X,
            code: lambda.Code.fromAsset(path.join(__dirname, '/../../function')),
            handler: "index.handler",
            environment: {}
        });

        const api = new apigateway.RestApi(this, "lambda-ddb-webhook-api", {
            restApiName: "lambda DDB Webhook Service",
            description: "This serves a lambda function that powers the DDB Webhook API."
        });

        const getLambdaBackendIntegration = new apigateway.LambdaIntegration(handler, {
            requestTemplates: { "application/json": '{ "statusCode": "200" }' }
        });

        api.root.addMethod("GET", getLambdaBackendIntegration); // GET /
    }
}

module.exports = { LambdaBackendService }