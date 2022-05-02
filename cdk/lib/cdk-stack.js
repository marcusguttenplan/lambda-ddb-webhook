const { Stack, Duration } = require('aws-cdk-lib');
// const sqs = require('aws-cdk-lib/aws-sqs');
const lambda_service = require('./lambda');
class CdkStack extends Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */
    constructor(scope, id, props) {
        super(scope, id, props);

        new lambda_service.LambdaBackendService(this, 'LambdaBackendService');

    }
}

module.exports = { CdkStack }