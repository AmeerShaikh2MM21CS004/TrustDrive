
web3=new Web3( new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
web3.eth.defaultAccount=web3.eth.accounts[0];

let ABI=[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "argRideKey",
				"type": "uint256"
			}
		],
		"name": "activateRide",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hashcodeaddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "headingfrom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "headingto",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ridingdate",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ridingtime",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "rideamount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nop",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "vtype",
				"type": "string"
			}
		],
		"name": "AddRide",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "argRideKey",
				"type": "uint256"
			}
		],
		"name": "cancelRide",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rideno",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "passenger",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "nop",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ridechagres",
				"type": "uint256"
			}
		],
		"name": "MapRideBooking",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hashaddress",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "phonenumber",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "email",
				"type": "string"
			}
		],
		"name": "RegisterUserAccount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rbid",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "action",
				"type": "uint256"
			}
		],
		"name": "rideBookingStatusUpdate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rbid",
				"type": "uint256"
			}
		],
		"name": "ridepaymentupdates",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "dhashcode",
				"type": "address"
			}
		],
		"name": "getDriverBookedRides",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rideKey",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "hashcodeaddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "headingfrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "headingto",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingdate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingtime",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rideamount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nop",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nopstatus",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "vtype",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isRideBookingDone",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRideOver",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "rideStatus",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "rideBookingKey",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "bookedbypassenger",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "travelnop",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "paidamount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "bookingstatus",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "paymentstatus",
						"type": "bool"
					}
				],
				"internalType": "struct PublishRideBookingList[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hashcode",
				"type": "address"
			}
		],
		"name": "getMyRides",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rideKey",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "hashcodeaddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "headingfrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "headingto",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingdate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingtime",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rideamount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nop",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nopstatus",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "vtype",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isRideBookingDone",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRideOver",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "rideStatus",
						"type": "bool"
					}
				],
				"internalType": "struct PublishRide[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "phashcode",
				"type": "address"
			}
		],
		"name": "getPassengerBookedRides",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rideKey",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "hashcodeaddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "headingfrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "headingto",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingdate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingtime",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rideamount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nop",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nopstatus",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "vtype",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isRideBookingDone",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRideOver",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "rideStatus",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "rideBookingKey",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "bookedbypassenger",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "travelnop",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "paidamount",
						"type": "uint256"
					},
					{
						"internalType": "bool",
						"name": "bookingstatus",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "paymentstatus",
						"type": "bool"
					}
				],
				"internalType": "struct PublishRideBookingList[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hashcode",
				"type": "address"
			}
		],
		"name": "getPassengerRides",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rideKey",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "hashcodeaddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "headingfrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "headingto",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingdate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingtime",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rideamount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nop",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nopstatus",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "vtype",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isRideBookingDone",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRideOver",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "rideStatus",
						"type": "bool"
					}
				],
				"internalType": "struct PublishRide[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hashcode",
				"type": "address"
			}
		],
		"name": "getUserDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "hashcode",
				"type": "address"
			}
		],
		"name": "loginPanel",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rideno",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "nop",
				"type": "uint256"
			}
		],
		"name": "RideNOPStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "phashcode",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "headingfrom",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "headingto",
				"type": "string"
			}
		],
		"name": "searchByLocation",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "rideKey",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "hashcodeaddress",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "headingfrom",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "headingto",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingdate",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ridingtime",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rideamount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nop",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "nopstatus",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "vtype",
						"type": "string"
					},
					{
						"internalType": "bool",
						"name": "isRideBookingDone",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "isRideOver",
						"type": "bool"
					},
					{
						"internalType": "bool",
						"name": "rideStatus",
						"type": "bool"
					}
				],
				"internalType": "struct PublishRide[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "argRideKey",
				"type": "uint256"
			}
		],
		"name": "searchView",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Fetch deployed contract address from the latest transaction
async function getDeployedContractAddress() {
    try {
        const accounts = await web3.eth.getAccounts(); // Get accounts
        const latestBlock = await web3.eth.getBlock('latest'); // Get latest block
        const latestTxHash = latestBlock.transactions[latestBlock.transactions.length - 1]; // Get latest transaction hash

        if (!latestTxHash) {
            throw new Error("No recent transactions found.");
        }

        const txReceipt = await web3.eth.getTransactionReceipt(latestTxHash); // Get transaction receipt
        const contractAddress = txReceipt.contractAddress; // Extract contract address
		return contractAddress.toString();

        // if (!contractAddress) {
        //     throw new Error("Contract address not found in the latest transaction.");
        // }

        // return contractAddress.toString(); // Ensure it's returned as a string
    } catch (error) {
        console.error("Error fetching deployed contract address:", error);
        return null;
    }

};

// Fetch and use contract address
getDeployedContractAddress().then(ABI,contractAddress => {
    console.log("Fetched Contract Address:", contractAddress);
    console.log("Type of Contract Address:", typeof contractAddress);

    console.log("Contract instance created:", myContract);
}).catch(error => {
    console.error(error);
});


var myContract = new web3.eth.Contract(ABI, "0x9b14548f2c6f4277b49C9d8B3EeD78735331BAD8");
console.log("Contract initialized successfully:");
