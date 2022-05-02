'use strict';
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

exports.handler = function(event, context, callback) {
    console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    return context.logStreamName
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