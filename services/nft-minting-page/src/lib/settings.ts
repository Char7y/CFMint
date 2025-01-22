import dotenv from 'dotenv';

// Initialize dotenv
dotenv.config();

// Export configuration
export const config = {
    title: process.env.NEXT_PUBLIC_MINT_TITLE,
    description: process.env.NEXT_PUBLIC_MINT_DESCRIPTION,
    icon: process.env.NEXT_PUBLIC_MINT_ICON,
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
    contractAddress: process.env.NEXT_PUBLIC_THIRDWEB_CONTRACT_ADDRESS,
    chainId: process.env.NEXT_PUBLIC_THIRDWEB_CHAIN_ID,
    tokenId: process.env.NEXT_PUBLIC_THIRDWEB_TOKEN_ID
};
