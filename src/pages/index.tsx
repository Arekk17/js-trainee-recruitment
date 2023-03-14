import React from 'react';
import styles from '../styles/index.module.css';
import Navigation from '@/components/navigation/navigation';
import Animals from '@/components/animals/animals';
import { images } from '../../public/images';
import { polarBearText } from '@/components/animals/animals.text';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.right}>
        <section id="PolarBear">
          <Animals
            title={polarBearText[0].title}
            subtitle={polarBearText[0].subtitle}
            image={images.polarbear}
            coloredWords={['friend']}
          />
        </section>
        <section id="Cheetah">
          <Animals
            title={polarBearText[1].title}
            subtitle={polarBearText[1].subtitle}
            image={images.cheetath}
            coloredWords={['eating']}
          />
        </section>
        <section id="Panda">
          <Animals
            title={polarBearText[2].title}
            subtitle={polarBearText[2].subtitle}
            image={images.panda}
            coloredWords={['pleasure']}
          />
        </section>
        <section id="Fox">
        <Animals
        title={polarBearText[3].title}
        subtitle={polarBearText[3].subtitle}
        image={images.fox}
        coloredWords={['suspicious']}
      />
    </section>
    <section id="Squirrel">
      <Animals
        title={polarBearText[4].title}
        subtitle={polarBearText[4].subtitle}
        image={images.squirrel}
        coloredWords={['curious']}
      />
    </section>
    <section id="Butterfly">
      <Animals
        title={polarBearText[5].title}
        subtitle={polarBearText[5].subtitle}
        image={images.butterfly}
        coloredWords={['Majestic']}
      />
    </section>
    <section id="Elephant">
      <Animals
        title={polarBearText[6].title}
        subtitle={polarBearText[6].subtitle}
        image={images.elephant}
        coloredWords={['huge']}
      />
    </section>
  </div>
</div>

  );
};

export default Home;
