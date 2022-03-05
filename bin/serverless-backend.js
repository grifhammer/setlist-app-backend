#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const cdk = require("aws-cdk-lib/lib/core");
const serverless_backend_stack_1 = require("../lib/serverless-backend-stack");
const app = new cdk.App();
new serverless_backend_stack_1.ServerlessBackendStack(app, "ServerlessBackendStack", {
    env: { region: "us-west-2", account: "293729433005" },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVybGVzcy1iYWNrZW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2VydmVybGVzcy1iYWNrZW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVDQUFxQztBQUNyQyw0Q0FBNEM7QUFDNUMsOEVBQXlFO0FBRXpFLE1BQU0sR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksaURBQXNCLENBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFFO0lBQ3pELEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRTtDQUNyRCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIjIS91c3IvYmluL2VudiBub2RlXG5pbXBvcnQgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIjtcbmltcG9ydCAqIGFzIGNkayBmcm9tIFwiYXdzLWNkay1saWIvbGliL2NvcmVcIjtcbmltcG9ydCB7IFNlcnZlcmxlc3NCYWNrZW5kU3RhY2sgfSBmcm9tIFwiLi4vbGliL3NlcnZlcmxlc3MtYmFja2VuZC1zdGFja1wiO1xuXG5jb25zdCBhcHAgPSBuZXcgY2RrLkFwcCgpO1xubmV3IFNlcnZlcmxlc3NCYWNrZW5kU3RhY2soYXBwLCBcIlNlcnZlcmxlc3NCYWNrZW5kU3RhY2tcIiwge1xuXHRlbnY6IHsgcmVnaW9uOiBcInVzLXdlc3QtMlwiLCBhY2NvdW50OiBcIjI5MzcyOTQzMzAwNVwiIH0sXG59KTtcbiJdfQ==