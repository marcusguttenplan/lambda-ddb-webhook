import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

const table = new dynamodb.Table(this, 'Table', {
    billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
    partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    sortKey: { name: 'createdAt', type: dynamodb.AttributeType.NUMBER },
    pointInTimeRecovery: true,
});