const apiId = '6txmerhvje'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // DONE: Create an Auth0 application and copy values from it into this map
  domain: 'dev-iau5c092.us.auth0.com', // Auth0 domain
  clientId: 'ZY73nK703GICBqiFywCTm1uvO7B0CZAg', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
