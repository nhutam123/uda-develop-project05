// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'tzj7nuyfx6'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/test`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-6rgjb6aw1wxxfpk4.us.auth0.com',            // Auth0 domain
  clientId: 'MR68tIC2wH6bOv6Jvvn3xmkuRGyKVD5C',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
