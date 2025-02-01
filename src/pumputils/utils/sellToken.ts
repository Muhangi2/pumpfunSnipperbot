import { PublicKey, Connection, Keypair } from "@solana/web3.js";
import { swapToken } from "@raydium-io/raydium-sdk"; 

export default async function sellToken(
    tokenMint: string,
    connection: Connection,
    wallet: Keypair,
    slippage: number
  ) {
    try {
      console.log(`💰 Selling token ${tokenMint} with ${slippage}% slippage...`);
  
      const sellResponse = await swapToken({
        connection,
        wallet,
        fromToken: new PublicKey(tokenMint),
        toToken: new PublicKey("So11111111111111111111111111111111111111112"), 
        amountIn: "MAX", 
        slippage: slippage
      });
  
      console.log(`✅ Sell successful! TxId: ${sellResponse.txid}`);
      return { success: true, txId: sellResponse.txid };
    } catch (error) {
      console.error(" Sell failed:", error);
      return { success: false, error };
    }
  }
