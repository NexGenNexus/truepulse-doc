---
sidebar_position: 4
---

# Common Oracle Comparisons: MakerDao, Chainlink, and Uniswap

## Oracle Reliability Issues

As the demand for off-chain data by blockchain networks grows, TruePulse fulfills this requirement with its unique and decentralized approach. Consequently, TruePulse finds its application across a diverse range of DeFi projects and stands as a strong contender to lead the oracle market.

Oracles are pivotal in blockchain as they bridge the gap between the on-chain and off-chain worlds. They enable smart contracts to respond to external data and serve as a conduit for real-world data to interact with the blockchain, essentially acting as the interface between the two realms.

**Presently, there are three main types of oracle solutions:**

## 1. MakerDAO's Federation Oracle Model

Firstly, **Federation** oracles like MakerDAO use a set of selected miners to fetch and upload data, maintaining anonymity for security but at the cost of centralization risk. Early DeFi projects often opted for such centralized oracle solutions to minimize development time and costs despite the inherent security trade-offs.

## 2. Chainlink's Proxy Oracle Approach

Secondly, Chainlink exemplifies the **Proxy** oracle model. It operates through a system of incentives and data amalgamation to source and verify information. While it offers a more decentralized approach compared to MakerDAO's model, the indirect nature of data validation—relying on the reputation of data providers—poses its own set of challenges.

## 3. Uniswap's Actual Price Oracle Model

Thirdly, Uniswap demonstrates the **Actual Price** oracle model. This approach is distinct for its direct utilization of live trading data from Uniswap's decentralized exchange.

- **Real-Time Market Data**: Uniswap oracles use the actual trading data from their platform, ensuring price information is current and reflective of market conditions.
- **Decentralized Methodology**: This model operates independently, sourcing data internally from Uniswap trades, thereby reducing reliance on external data providers.
- **Time-Weighted Average Prices (TWAP)**: It employs TWAP to calculate prices, providing a more stable and reliable pricing mechanism that counters short-term market fluctuations.

## Conclusion

Here's a concise overview of oracle machines' state and trends:

- Centralized oracles inherently risk centralization, an issue that's unavoidable.
- True oracle systems should generate price facts directly on-chain, rather than just uploading pre-formed off-chain data.
- Uniswap's distributed price fact oracle is innovative, creating price facts on-chain, setting it apart from systems that simply upload data.
- The effectiveness of an oracle should be measured by its ability to support large-scale transactions and its resistance to attacks. Uniswap's model, which verifies data with real stakes from market activity, offers a robust and attack-resistant structure.
