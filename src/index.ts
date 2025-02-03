import Client, {
    CommitmentLevel,
    SubscribeRequest,
    SubscribeUpdate,
} from "@triton-one/yellowstone-grpc";
import { Connection, Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import dotenv from 'dotenv';
import { buyToken, sellToken } from "./pumputils/utils/tradingUtils";

dotenv.config();

// Constants
const ENDPOINT = process.env.GRPC_ENDPOINT!;
const COMMITMENT = CommitmentLevel.PROCESSED;
const solanaConnection = new Connection(process.env.RPC_ENDPOINT!, 'processed');
export const keypair = Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY!));
const amount = Number(process.env.BUY_AMOUNT);
const autoSell = process.env.AUTO_SELL === "true";
const takeProfit = Number(process.env.TAKE_PROFIT);
const stopLoss = Number(process.env.STOP_LOSS);

console.log(`Starting Trading Bot...`);
console.log(`Public Key: ${keypair.publicKey.toBase58()}`);
console.log(`Buy Amount: ${amount}`);
console.log(`Auto Sell: ${autoSell}`);
console.log(`Take Profit: ${takeProfit}, Stop Loss: ${stopLoss}`);

async function main(): Promise<void> {
    const client = new Client(ENDPOINT, undefined, undefined);

    const stream = await client.subscribe();
    const request = createSubscribeRequest();
    
    try {
        stream.write(request); 
        console.log('Listening for trading opportunities...');
        await handleStreamEvents(stream);
    } catch (error) {
        console.error('Subscription error:', error);
        stream.end();
    }
}

function createSubscribeRequest(): SubscribeRequest {
    return {
        accounts: {},
        transactions: { pumpFun: { accountInclude: [], accountExclude: [], accountRequired: [] } },
        slots: {},
        transactionsStatus: {},
        blocks: {},
        blocksMeta: {},
        entry: {},
        accountsDataSlice: [],
        ping: undefined, // Optional but keeps type consistency
        commitment: COMMITMENT,
    };
}

async function handleStreamEvents(stream:any): Promise<void> {
    stream.on('data', async (data:any) => {
        console.log('Transaction detected:', data);
        const result = await buyToken(amount, keypair);
        if (autoSell) {
            setTimeout(async () => {
                await sellToken(amount, keypair, takeProfit, stopLoss);
            }, 30000);
        }
    });

    stream.on("error", (error:any) => console.error('Stream error:', error));
    stream.on("end", () => console.log('Stream ended'));
    stream.on("close", () => console.log('Stream closed'));
}

main().catch((err) => {
    console.error('Error in main:', err);
    process.exit(1);
});
