import { createClient } from '@base44/sdk';

export const base44 = createClient({
  appId: "69ef66fe4f340c1dcd4f7578",
  headers: {
    "api_key": "f270749a92c94cf1af0ff51f28bf8e0d"
  }
});

export const db = base44;

export default base44;