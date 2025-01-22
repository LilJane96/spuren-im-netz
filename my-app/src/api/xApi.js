import XAPI, { Statement } from "@xapi/xapi";

// Create LRS connection
const endpoint = "https://my-lms.com/endpoint";
const username = "username";
const password = "password";
const auth = XAPI.toBasicAuth(username, password);
const xapi = new XAPI({
  endpoint: endpoint,
  auth: auth,
});

// // Create your statement
// const myStatement = { ... };

// // Send your statement
// xapi.sendStatement({
//   statement: myStatement
// });
