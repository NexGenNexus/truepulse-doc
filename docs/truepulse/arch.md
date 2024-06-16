---
sidebar_position: 3
---

# How is the TruePulse operated?
Welcome to the insightful exploration of the TruePulse's operation. This section provides a comprehensive understanding of its innovative decentralized mechanism. We delve into the architecture and the step-by-step process that underlines the Oracle's functionality, offering a detailed view of its unique approach to maintaining accuracy and integrity in decentralized data verification. Let's embark on this journey to understand how the TruePulse revolutionizes data validation and security.

## Architecture
![Alt text](../../image/architecture.png)
## In-Depth Architecture Breakdown
**You can envision the TruePulse  as the story below:**

A Watchmaker can submit a correct time to TruePulse's Alarm.
If a Timekeeper finds any Alarm with inaccurate time, they can report a new time to that Alarm.

If the time provided by a Watchmaker remains unadjusted by the Timekeeper,
the Watchmaker receives a reward. Timekeepers also earn rewards for correcting erroneous Alarm times.
The funds for these rewards come from customers who pay to check the current time.

## Step1: Provide price by Watchmaker
![Alt text](../../image/step1.png)
Watchmakers can provide accurate quotes to TruePulse; for instance, if the quoted price is 1 TON / 2 USDT, the watchmaker must transfer 1 TON and 2 USDT to 
the Oracle as a commitment. The Oracle then creates an Alarm for this quote. Multiple watchmakers may quote simultaneously, resulting in several Alarms, each representing 
different quotes. If a quote remains unarbitrated by the Timekeeper after 20 blocks (refer to step two for the process), the watchmaker can claim rewards for that quote.

## Step2: Verify price by Timekeeper
![Alt text](../../image/step2.png)
When the Timekeeper believes an Alarm's quote (1 TON / 2 USDT) is incorrect and the actual price should be 1 TON / 3 USDT, they can use 2 USDT to purchase the 1 TON.However, they must also provide a new, correct quote and transfer an amount double that of the exploited Alarm. If the original Watchmaker contributed 1 TON and 2 USDT, the Timekeeper must then transfer 2 TON and 6 USDT (representing 1 TON / 3 USDT) to the Oracle. The Oracle will then create an Alarm to record this quote and allow other Timekeepers to review it for arbitrage opportunities. Through this method, malicious quotes require asset commitment to the Oracle, but they also provide Timekeepers with arbitrage opportunities, each requiring a double asset deposit. As the arbitrage process repeats, the threshold for submitting malicious quotes increases.

## Step3: Protocols get price 
![Alt text](../../image/step3.png)
Protocols can retrieve prices from TruePulse while paying some basic fees.

## Summary

![Alt text](../../image/summary.png)

:::info summarizing 
TruePulse works like a special clock that checks if prices are right. Watchmakers set prices like 1 TON for 2 USDT. If it's correct and nobody disagrees, they get a reward. But if a Timekeeper thinks the price is wrong (like 1 TON for 3 USDT), they can fix it by paying extra and get a reward too. Customers pay to use TruePulse to check prices. It's fair because everyone checks each other, making sure the prices are accurate. So, TruePulse helps keep things honest and makes sure everyone knows the right prices for things.
:::
