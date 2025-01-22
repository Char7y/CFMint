import dotenv from 'dotenv';

// Initialize dotenv
dotenv.config();

// Export configuration
export const config = {
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
    contractAddress: process.env.NEXT_PUBLIC_THIRDWEB_CONTRACT_ADDRESS,
    chainId: process.env.NEXT_PUBLIC_THIRDWEB_CHAIN_ID,
    tokenId: process.env.NEXT_PUBLIC_THIRDWEB_TOKEN_ID
};
