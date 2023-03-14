import React, { useState, useEffect } from "react";
import styles from "../../styles/Navigation.module.css";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const route = useRouter();

  const handleNavigationClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      route.push(`#${id}`);
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight - windowHeight;
      const scrollPercentage = scrollTop / bodyHeight;
      setScrollPosition(scrollPercentage * 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={styles.navigation}
      style={{
        transform: `translateY(${scrollPosition}%)`,
      }}
    >
      <div className={styles.logo}>
        <h1>Your new gang</h1>
      </div>
      <div className={styles.buttons}>
        <a href="#PolarBear" onClick={(event) => handleNavigationClick(event, "PolarBear")}>
          Polar Bear
        </a>
        <a href="#Cheetah" onClick={(event) => handleNavigationClick(event, "Cheetah")}>
          Cheetah
        </a>
        <a href="#Panda" onClick={(event) => handleNavigationClick(event, "Panda")}>
          Panda
        </a>
        <a href="#Fox" onClick={(event) => handleNavigationClick(event, "Fox")}>
          Fox
        </a>
        <a href="#Squirrel" onClick={(event) => handleNavigationClick(event, "Squirrel")}>
          Squirrel
        </a>
        <a href="#Butterfly" onClick={(event) => handleNavigationClick(event, "Butterfly")}>
          Butterfly
        </a>
        <a href="#Elephant" onClick={(event) => handleNavigationClick(event, "Elephant")}>
          Elephant
        </a>
      </div>
    </nav>
  );
};

export default Navigation;