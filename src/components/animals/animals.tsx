import React from 'react';
import Image from 'next/image';
import styles from '../../styles/section.module.css';

type SectionProps = {
  title: string;
  subtitle: string;
  image: string;
  coloredWords: string[];
};

const Animals: React.FC<SectionProps> = ({ title, subtitle, image, coloredWords }) => {
  const subtitleWords = subtitle.split(' ');
  return (
    <div className={styles.section}>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>
          {subtitleWords.map((word, index) => {
            if (coloredWords.includes(word)) {
              return (
                <span key={index} style={{ color: '#F2994A' }}>
                  {word}{' '}
                </span>
              );
            } else {
              return <span key={index}>{word} </span>;
            }
          })}
        </p>
      </div>
      <Image src={image} alt="Section Image" className={styles.image} width={817} height={500} />
    </div>
  );
};

export default Animals;
