---
sidebar_position: 1
---

# What is TruePulse?

TruePulse stands as the premier fully decentralized oracle on the TON platform. Diverging from market-standard final prices set by price providers, it employs Game Theory to craft a decentralized network of non-cooperative games. This network ascertains the ultimate price via mechanisms of arbitrage and bidirectional options, incorporating the chain with random data from decentralized price streams.

# Motivation

Inspired by [**Uniswap**](../oracle/comparison#type-three-uniswaps-actual-price-oracle-model), we believe that a **true oracle should generate prices directly on-chain**, rather than merely uploading pre-processed off-chain data. Oracles should be **decentralized**, not reliant on centralized data providers, and possess the ability to withstand attacks, instead of depending solely on the reputation of data sources. Moreover, an effective oracle should be capable of **supporting large-scale transactions**, not just dependent on the capacity of data providers.

However, a primary challenge faced by Uniswap Oracles is the **latency in their price reporting**. In the Uniswap system, prices are determined using the **Time-Weighted Average Price (TWAP)** methodology. This approach involves calculating the average price over a specific time window, based on transaction data. While effective in reducing market manipulation and mitigating short-term volatility, it introduces a significant issue: **delayed price updates**. As this calculation method requires time to accumulate transaction data, the final presented prices may not immediately reflect the current market conditions. Furthermore, since it relies on historical price data, the prices can be influenced by past market conditions, which in some cases, might lead to prices deviating from the actual market value.

To address this issue, we have redesigned a new oracle model. Our oracle aims to **instantly mirror market prices**, reducing latency while maintaining the characteristics of decentralization and resistance to manipulation.

:::info summarizing 
TruePulse is a decentralized system on TON that uses Game Theory to find fair prices without relying on single data providers. Inspired by Uniswap, it aims to generate real-time prices directly on-chain, ensuring fairness and security against manipulation, which is crucial for large transactions.
:::

![Alt text](../../image/core.png)
**After a quote has remained un-arbitraged for a certain period, it will then be incorporated into the TruePulse Oracle for price calculation.**
