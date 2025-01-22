import { config } from './settings';

/**
 * Mint title, description, and icon from configuration or fallback to default values
 */
export const mintTitle = config.title || "NFT Minting Page";
export const mintDescription = config.description || "Mint NFTs and Cryptocurrency powered by thirdweb.";
export const mintIcon = config.icon || "https://raw.githubusercontent.com/warengonzaga/thirdweb-nft-minting-page-railway/main/assets/icon.png";

/**
 * NFT contract address from configuration or fallback to an empty string
 */
export const defaultNftContractAddress = config.contractAddress || '';

/**
 * Chain ID from configuration or fallback to a default value
 */
export const defaultChainId = Number(config.chainId);

/**
 * Token ID from configuration or fallback to 0
 * Only applicable to ERC1155 Edition Drop contract
 */
export const defaultTokenId = BigInt(config.tokenId || "0");

/**
 * Test data for different contract types:
 * ERC1155: 0x3cf279b3248E164F3e5C341826B878d350EC6AB1 | Chain ID: 11155111 | Token ID: 1n
 * ERC721: 0xf20d41960b58A1f6868e83cf25FFDA5E8C766317 | Chain ID: 11155111
 * ERC20: 0xdE60bd7Bc4FFb32A5A705723e111f3B5097958E9 | Chain ID: 11155111
 */