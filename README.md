# Trust Drive

Trust Drive is a blockchain-based carpooling platform that leverages Ethereum smart contracts for secure, transparent, and decentralized ride-sharing.

## Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Ganache](https://trufflesuite.com/ganache/)
- [Remix IDE](https://remix.ethereum.org/)

## Installation and Setup

Follow these steps to set up and run Trust Drive:

### 1. Clone the repository
```sh
git clone https://github.com/AmeerShaikh2MM21CS004/TrustDrive.git
cd TrustDrive
```

### 2. Initialize the project
```sh
npm init -y
```

### 3. Install dependencies
```sh
npm install -g nodemon
npm install
npm install --save web3
npm install express
```

## Smart Contract Deployment

### 1. Start Ganache
- Open the **Ganache** application.
- Click on **Quick Start** to launch a local Ethereum blockchain.

### 2. Deploy Smart Contracts on Remix
- Open [Remix IDE](https://remix.ethereum.org/).
- In the **File Explorer**, upload the following contract files:
  - `CarpoolingContract.sol`
  - `Databank.sol`
- Select `CarpoolingContract.sol`.
- In the **Compiler** tab, select compiler version **0.8.18+commit.87f61d96**.
- Click **Compile CarpoolingContract.sol**.

### 3. Deploy the Contract
- Go to the **Deploy & Run Transactions** tab.
- In the **Environment** dropdown, select **Custom - External HTTP Provider**.
- In the popup, change the URL to:
  ```sh
  http://127.0.0.1:7545
  ```
- Click **OK**.
- Click the **Deploy** button.
- Once deployed, under **Deployed Contracts**, copy the contract address.

### 4. Configure Web3 Connection
- Open `web3connection.js`.
- Locate the following line:
  ```js
  var myContract = new web3.eth.Contract(ABI, "<contract_address>");
  ```
- Replace `<contract_address>` with the copied contract address.

## User Registration with Ganache Hash Codes
- When registering a new user, use the hash codes generated in **Ganache**.
- Each account in Ganache has a unique address and private key.
- Use these keys for signing transactions and registering users securely in the blockchain.
- Store user details in the smart contract, ensuring authenticity and immutability.

## Running the Server
```sh
nodemon server.js
```

Your blockchain-based carpooling application **Trust Drive** is now running! 🚗💨
