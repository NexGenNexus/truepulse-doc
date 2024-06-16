---
sidebar_position: 5
---


# TruePulse FAQ

## 1. Can TruePulse Resist DoS (Denial of Service) Attacks?
   
   Yes, TruePulse has a unique mechanism to resist DoS attacks. When a validator attempts to arbitrage, they must also provide a price they deem accurate while paying twice the amount of the base asset (TON). For example, if a quote provider named Maxey quotes 1 TON = 20 jUSDT and transfers one TON and 20 jUSDT into TruePulse, but a validator named Alan believes 1 TON = 25 jUSDT, Alan must arbitrage Maxey's quote and transfer two TONs and 50 jUSDT to represent 1 TON = 25 jUSDT.

   This requirement of providing double the base asset for arbitrage acts as a safeguard against DoS attacks. Hackers aiming to continually alter prices would need to transfer exponentially increasing amounts of the base asset to TruePulse, making it challenging and financially unfeasible. Additionally, if the provided price is incorrect, others can arbitrage this erroneous price. This system encourages providers to offer accurate prices, unlike other Oracles that rely on penalizing mechanisms through token staking.

## 2. Will Normal Quoters Also Have to Provide Increasingly High Amounts of Assets?
   
   The requirement to provide 2^n assets occurs only when someone’s quote is inaccurate and needs to be arbitraged. The threshold only increases if a particular quote is continuously arbitraged. In normal circumstances, quoters provide an equal amount of base assets as their quote. After a verification period, if the quote is not arbitrated (indicating its accuracy), the quoter can close their quote and receive rewards.

## 3. Can Prices Real-Time Reflect Objective Trends?
   
   Yes, the approach is entirely decentralized, allowing anyone to provide quotes. Assuming there are 100 participants quoting, an attacker would need to alter the majority of these quotes to significantly impact TruePulse’s pricing. Attacking a single quote won't affect the overall pricing, as there would still be 99 other quotes providing price information. Therefore, the system can reliably reflect objective market trends.
