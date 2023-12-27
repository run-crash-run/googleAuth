When you build and run the application you should see the explainer text followed by the Google login button

<img width="859" alt="image" src="https://github.com/run-crash-run/googleAuth/assets/20382062/2cbd2833-ad42-4ccc-b9a4-43bcf7ddd394">

To build and run:
    npm build
    npm run 

Troubleshooting:
- if developing locally try adding 127.0.0.1 as well as localhost for the allowed origin
- if developing locally you may need to omit the port number from the origin even though it's marked as required in the UI
- you only need the 3 initial scopes (openid, email, profile)
