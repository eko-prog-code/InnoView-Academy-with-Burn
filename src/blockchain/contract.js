// src/blockchain/contract.js
import { ethers } from "ethers";

export const CONTRACT_ADDRESS = "0xCcC91E61786373f0ab50a143198872fDa6c046E7";

// RPC PUBLIC (SEPOLIA)
export const RPC_URL = "https://ethereum-sepolia.publicnode.com";

export const ABI = [
  // Constructor (jika ada)
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  // Events
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "burner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "totalBurned",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "burnedAt",
        "type": "uint256"
      }
    ],
    "name": "AllTicketsBurned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "ticketId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "burner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "burnedAt",
        "type": "uint256"
      }
    ],
    "name": "TicketBurned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "ticketId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "participantName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "issuedAt",
        "type": "uint256"
      }
    ],
    "name": "TicketIssued",
    "type": "event"
  },
  // Functions
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ticketId",
        "type": "uint256"
      }
    ],
    "name": "burnTicket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "burnAllTickets",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eventAddressLine1",
    "outputs": [
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
    "inputs": [],
    "name": "eventAddressLine2",
    "outputs": [
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
    "inputs": [],
    "name": "eventAddressLine3",
    "outputs": [
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
    "inputs": [],
    "name": "eventDateTime",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "day",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "month",
        "type": "uint8"
      },
      {
        "internalType": "uint16",
        "name": "year",
        "type": "uint16"
      },
      {
        "internalType": "uint8",
        "name": "hour",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "minute",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "monthName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "eventLocationName",
    "outputs": [
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
    "inputs": [],
    "name": "eventMaterial",
    "outputs": [
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
    "inputs": [],
    "name": "eventName",
    "outputs": [
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
    "inputs": [],
    "name": "getActiveTicketCount",
    "outputs": [
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
    "inputs": [],
    "name": "getAllTickets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "ticketId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "participantName",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "issuedAt",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "burned",
            "type": "bool"
          }
        ],
        "internalType": "struct TicketInnoViewAcademy.Ticket[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEventInfo",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "material",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "locationName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "addressLine1",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "addressLine2",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "addressLine3",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "day",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "month",
        "type": "uint8"
      },
      {
        "internalType": "uint16",
        "name": "year",
        "type": "uint16"
      },
      {
        "internalType": "uint8",
        "name": "hour",
        "type": "uint8"
      },
      {
        "internalType": "uint8",
        "name": "minute",
        "type": "uint8"
      },
      {
        "internalType": "string",
        "name": "monthName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_ticketId",
        "type": "uint256"
      }
    ],
    "name": "getTicket",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "ticketId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "participantName",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "issuedAt",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "burned",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_participantName",
        "type": "string"
      }
    ],
    "name": "issueTicket",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalBurned",
    "outputs": [
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
    "inputs": [],
    "name": "totalMinted",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

/* ✅ READ = RPC (AMAN MOBILE) */
export const getReadContract = () => {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);
};

/* ✅ WRITE = METAMASK */
export const getWriteContract = async () => {
  if (!window.ethereum) {
    throw new Error("Wallet tidak ditemukan");
  }

  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  return new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
};