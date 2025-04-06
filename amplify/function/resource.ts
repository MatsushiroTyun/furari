import { defineFunction } from "@aws-amplify/backend";
    
export const myFunction = defineFunction({
  name: "function",
  entry: "./handler.ts"
});