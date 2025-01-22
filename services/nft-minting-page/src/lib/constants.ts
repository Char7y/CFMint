import { config } from './settings';

/**
 * Mint title and description
 */
export const mintTitle = config.title || "NFT Minting Page";
export const mintDescription = config.description || "Mint NFTs and Cryptocurrency powered by thirdweb.";

/**
 * NFT contract address from environment variables or fallback
 */
export const defaultNftContractAddress = config.contractAddress || '';

/**
 * Chain ID from environment variables or fallback
 */
export const defaultChainId = Number(config.chainId);

/**
 * Token ID from environment variables or fallback
 * Only applicable to ERC1155 Edition Drop contract
 */
export const defaultTokenId = BigInt(config.tokenId || "0");

/**
 * Test data:
 * ERC1155: 0x3cf279b3248E164F3e5C341826B878d350EC6AB1 | 11155111 | 1n
 * ERC721: 0xf20d41960b58A1f6868e83cf25FFDA5E8C766317 | 11155111
 * ERC20: 0xdE60bd7Bc4FFb32A5A705723e111f3B5097958E9 | 11155111
 */