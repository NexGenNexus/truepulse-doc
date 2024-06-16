import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
//
const FeatureList = [

  {
    title: 'Decentralization',
    Image: require('@site/static/img/dece.png').default,
    description: (
      <>
        TruePulse provides open, decentralized price setting and validation with no entry barriers, ensuring free and flexible participation.
      </>
    ),
  },
  {
    title: 'High Transactions per second in TON',
    Image: require('@site/static/img/htps.png').default,
    description: (
      <>
        With TON's high TPS, 10-block verifications take just 10 seconds, far quicker than Ethereum's 120 seconds, ensuring faster and more efficient oracle pricing.
      </>
    ),
  },
  {
    title: 'Stability and Safeguarding',
    Image: require('@site/static/img/stability.png').default,
    description: (
      <>
        TruePulse promotes stable, secure pricing, requiring significant asset control to prevent manipulation and relying on collective validation for corrections.
      </>
    ),
  },
];

function Feature({ Image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* Update this part to use an img tag for the PNG */}
        <img src={Image} className={styles.featureImg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
