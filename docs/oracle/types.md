---
sidebar_position: 3
---
# What are types of Oracles?
Oracles, designed to facilitate interaction between blockchains and external data, come in various forms, including but not limited to the following types:

## Hardware and Software Oracles:
Hardware oracles typically provide data occurring in the real world. For example, in supply chain management, if an object with an RFID tag arrives at a specific warehouse, that data can be sent to a smart contract for logistics tracking.

Conversely, software oracles usually offer data from digital resources like websites, servers, or databases and are currently the most potent type of oracle.

## Input and Output Oracles:
Oracles establish a bidirectional communication channel with blockchains, enabling data input and output. While output oracles can pass blockchain data to the external world, input oracles are more likely to convey off-chain or real-world data to the blockchain.

For input oracles, a common scenario might be placing a buy order if a certain asset reaches a specific price. On the other hand, output oracles are used to alert the external world about events happening on the chain.

## Centralized and Decentralized Oracles:
Centralized oracles are managed by a single entity and act as the sole data source for smart contracts. While convenient, relying on a single information source can be risky, as the contract's validity wholly depends on the entity responsible for the oracle. They are also more susceptible to malicious attacks or security vulnerabilities.

Decentralized oracles aim to resemble blockchains in that they do not rely on a single information source, making the information passed to smart contracts more reliable. Chainlink is a well-known example of a decentralized oracle project.

## Human Oracles:
Individuals with expertise in specific areas can sometimes act as oracles. They may gather information from various sources, check its legitimacy, and input it into smart contracts.

As people can use cryptography to verify their identity, the likelihood of fraudsters impersonating them and providing tampered data is low. However, this approach still carries the risks associated with centralization.