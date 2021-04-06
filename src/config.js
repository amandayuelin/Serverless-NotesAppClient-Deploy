const config = {
  STRIPE_KEY: "pk_test_51ITygdIZzTDUsK1IMtMnn5dJdpwdwolx8ewEtcAufIGrSynpMmEN93NRYDTAa1nTzjsQKe8xycN8fWA9nqh7vuJv003HuRFvMH",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-api-prod-serverlessdeploymentbucket-rgtpf5xxpkb8",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ce9q4bqv23.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_v27SVSeju",
    APP_CLIENT_ID: "3kaoblbntn0u75veodekdhh7cu",
    IDENTITY_POOL_ID: "us-east-1:191eba37-5bf2-4359-a1ae-b093350a3aa3",
  },
};

export default config;