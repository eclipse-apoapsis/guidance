import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Process Blueprints',
    Svg: require('@site/static/img/process_blueprint.svg').default,
    description: (
      <>
        Eclipse Apoapsis consolidates the requirements from the tooling side, like fast scan times or 
        configuration as code, and the requirements from the institutionalized operations side in medium 
        to large organizations, like access control or organization specific structures.
      </>
    ),
  },
  {
    title: 'Reference Implementation',
    Svg: require('@site/static/img/reference.svg').default, //replaced undraw_docusaurus_tree.svg
    description: (
      <>
        The Eclipse Apoapsis project's ORT Server provides a concrete solution for a blueprint, where 
        a central SCA pipeline is used to cover a large range of project setups.
      </>
    ),
  },
  {
    title: 'Community based',
    Svg: require('@site/static/img/community.svg').default,
    description: (
      <>
        The terminology is based on the capability map created by the Open Chain Automation Workgroup 
        in the context of Open Source Management. It is planned to incrementally work out the 
        API-specification bottom-up, starting from the reference implementation. Additionally, it is 
        intended to collect blueprints (e.g. central pipeline, decentral SBOM generation with centralized 
        metadata analysis, semi-automated analysis with central metadatabase) and use cases (e.g. security 
        vulnerability monitoring, identification of TOP100 used components in the organization) that address 
        the generic problemspaces observed in the community.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
