'use strict';
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = function(event, context, callback) {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    return context.logStreamName
}

var formatResponse = function(body) {
    var response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "isBase64Encoded": false,
        "multiValueHeaders": {
            "X-Custom-Header": ["My value", "My other value"],
        },
        "body": body
    }
    return response
}

var formatError = function(error) {
    var response = {
        "statusCode": error.statusCode,
        "headers": {
            "Content-Type": "text/plain",
            "x-amzn-ErrorType": error.code
        },
        "isBase64Encoded": false,
        "body": error.code + ": " + error.message
    }
    return response
}




// 'use strict';

// const AWS = require('aws-sdk');
// const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

// exports.handler = async (event) => {
//     const tableName = "yourtablename"; 
//     try {
//       await dynamodb.putItem({
//           "TableName": tableName,
//           "Item" : {
//               "Id": event.Id,
//               "Ut": event.Ut,
//               "Temp": event.Temp,
//               "Rh":event.Rh
//           }
//       }).promise();
//     } catch (error) {
//       throw new Error(`Error in dynamoDB: ${JSON.stringify(error)}`);
//     }  
// };