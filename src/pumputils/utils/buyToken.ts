import { PublicKey, Connection, Keypair } from "@solana/web3.js";
import { swapToken } from "@raydium-io/raydium-sdk"; 

export default async function buyToken(
    tokenMint: string, 
    amount: number, 
    connection: Connection, 
    wallet: Keypair
) {
    try {

        const buyResponse = await swapToken({
            connection,
            wallet,
            fromToken: new PublicKey("So11111111111111111111111111111111111111112"), // SOL
            toToken: new PublicKey(tokenMint),
            amountIn: amount,
            slippage: 1.0 // Adjust slippage based on mempool competition
        });

        return { success: true, txId: buyResponse.txid };
    } catch (error) {
        console.error(" Buy failed:", error);
        return { success: false, error };
    }
}
