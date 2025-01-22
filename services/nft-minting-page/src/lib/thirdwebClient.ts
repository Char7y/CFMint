import { createThirdwebClient } from "thirdweb";
import { config } from './settings';

export const client = createThirdwebClient({
    clientId: config.clientId || "",
});
