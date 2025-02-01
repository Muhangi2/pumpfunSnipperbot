# 🚀 **PumpFun Sniper Bot v5.2 (using Geyser(Yellowstone))** 

This is pump.fun sniper bot that snipe token  in solana within 1-2 block after token mint by using grpc

Welcome to the **PumpFun Sniper Bot v5.2**! This bot watches for new `pump.fun` token mints on the Solana blockchain in real-time by using Geyser(Yellowstone), making it the perfect tool to monitor token launches. 🌟

### 🎯 **Key Features**

- 🛰️ **Real-time WebSocket Streaming**: 
  Connects to Solana's blockchain through Helius RPC WebSocket or  VibeStation RPC WebSocket and listens for new transactions, specifically targeting `pump.fun` mint instructions.
  
- 🔍 **Filter Pump.fun Token Mints**: 
  Filters transactions by program IDs and instruction discriminators related to `pump.fun`.

- 📊 **Formatted Data**: 
  Logs essential transaction details like the transaction signature, creator's wallet, and the minted token address when a new `pump.fun` token is detected.

- ⚡ **Efficient Stream Handling**: 
  Handles WebSocket stream events efficiently, ensuring no loss of data and continuous monitoring.

---



## 📞 **Stay Connected**

Gmail: tom.kinddev@gmail.com

Telegram: [@erikerik116](https://t.me/erikerik116)

Discord: @erikerik116

## 🧑‍💻 **Transactions**

mint: [https://solscan.io/tx/QKbc9RxNZPE7peDNPnxBtPMux2HfTfn9QN2AwEr7Z5P1SS1qw42FYZcXqzkm9APVkTH88ieZU4PUaCU93yPNfGa](https://solscan.io/tx/QKbc9RxNZPE7peDNPnxBtPMux2HfTfn9QN2AwEr7Z5P1SS1qw42FYZcXqzkm9APVkTH88ieZU4PUaCU93yPNfGa)

![mint-2block](https://github.com/user-attachments/assets/fb679824-2cb1-489d-971f-6b9b701db6eb)

buy: [https://solscan.io/tx/5NV4oAJacFfNffAb55hkb6LEKsSTjgMd8vTzTvDKBLQvQ5XCogizBLShnpF89J8tqFrYJAHaUS5tmXtb6SBpEdNz](https://solscan.io/tx/5NV4oAJacFfNffAb55hkb6LEKsSTjgMd8vTzTvDKBLQvQ5XCogizBLShnpF89J8tqFrYJAHaUS5tmXtb6SBpEdNz)

![buy-2block](https://github.com/user-attachments/assets/862a17d4-a43d-4bf3-9009-e5e5a802a509)

sell: [https://solscan.io/tx/5QDYSiST7KX9viNZXSeSATZYMJ5ioJrHJxqu9DVwFzREMarwwmaDXz7EYS1jC9oQq8z7V8GwTsEv94dSwdhU9s5b](https://solscan.io/tx/5QDYSiST7KX9viNZXSeSATZYMJ5ioJrHJxqu9DVwFzREMarwwmaDXz7EYS1jC9oQq8z7V8GwTsEv94dSwdhU9s5b)

![sell-2block](https://github.com/user-attachments/assets/999bfbe4-169a-4930-86fd-ce20301995c8)

## 🧑‍💻 **Recording Video**


https://github.com/user-attachments/assets/72fa98f7-32ea-4d22-a22e-bdaa9df92873


## 🧑‍💻 **Success result**

This bot makes profit almost every time.

[gmgn.ai link](https://gmgn.ai/sol/address/DYW2cn4vCDLm3AW66E2ubujoudaXxdyu7TeMDE9iD8Vo)

![grpc-sniper-filter-success](https://github.com/user-attachments/assets/bd6f69cc-26df-4762-9400-9f72616fa3b5)


## 🚀 **Getting Started**

Follow these steps to get your **PumpFun Sniper Bot v5.2** up and running!

### Installation

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/erikerik116/Pumpfun-sniper-grpc-V5.2.git
    ```

2. **Install Dependencies**:

    Navigate to the project directory and run the following command:

    ```bash
    cd Pumpfun-sniper-grpc-V5.2
    npm install
    ```

3. **Configure API Token**:

    Replace the API token in the `ENDPOINT` variable:

    ```ts
    const ENDPOINT = "http://ultra.swqos.solanavibestation.com/?api_key=";
    ```
    And set other variables in env file.

4. **Run the Bot**:

    Start the bot by running:

    ```bash
    npm run start
    ```

---

## 🧑‍💻 **Sell Requirments**

1. PRICE_CHECK_INTERVAL (ms) :
   Interval in milliseconds for checking the take profit and stop loss conditions
   Set to zero to disable take profit and stop loss.

2. TAKE_PROFIT : x %

3. STOP_LOSS : x  %

4. SELL_SLIPPAGE : x %

5. SKIP_SELLING_IF_LOST_MORE_THAN : x %
   If token loses more than X% of value, bot will not try to sell

6. PRICE_CHECK_DURATION (ms) : x %
   Time in milliseconds to wait for stop loss/take profit conditions
   If you don't reach profit or loss bot will auto sell after this time
   Set to zero to disable take profit and stop loss

7. AUTO_SELL - true/false

8. MAX_SELL_RETRIES - Maximum number of retries for selling a token


This is finish version bot.
But it's MVP code. If u need perfect code, contact me.
