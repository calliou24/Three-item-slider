import { useState, useEffect } from "react";
import styles from "./section.module.css";
import arrow from "../../assets/images/icon-arrow.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import left from "./../../assets/images/icon-angle-left.svg";
import right from "./../../assets/images/icon-angle-right.svg";

import { innovative, across, materials } from "./data/data";

import innovativeImg from "./../../assets/images/desktop-image-hero-1.jpg";
import acrossImg from "./../../assets/images/desktop-image-hero-2.jpg";
import materialsImg from "./../../assets/images/desktop-image-hero-3.jpg";

import { motion } from "framer-motion";

const variants = {
  hidden: { x: 100 },
  visible: { x: 0 },
};

const imageAnimation = {
  hidden: { x: -100 },
  visible: { x: 0 },
};

const Image = ({ src }) => (
  <motion.div initial="hidden" animate="visible" variants={imageAnimation}>
    <img
      className={styles.furnitureImg}
      src={src}
      alt="furniture ilustration"
    ></img>
  </motion.div>
);

const ButtonComponent = ({ leftFunction, rightFunction }) => {
  return (
    <div className={styles.buttonPosition}>
      <div className={styles.buttonsCont}>
        <div onClick={leftFunction} className={styles.button}>
          <img src={left} alt="left" />
        </div>
        <div onClick={rightFunction} className={styles.button}>
          <img src={right} alt="right" />
        </div>
      </div>
    </div>
  );
};

const ButtonComponentMobile = ({ leftFunction, rightFunction }) => {
  return (
    <div className={styles.buttonsContMobile}>
      <div onClick={leftFunction} className={styles.button}>
        <img src={left} alt="left" />
      </div>
      <div onClick={rightFunction} className={styles.button}>
        <img src={right} alt="right" />
      </div>
    </div>
  );
};

function Section() {
  const [number, setNumber] = useState(1);
  const [data, setData] = useState(materials);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let widthVariable;
      widthVariable = window.innerWidth;
      setWidth(widthVariable);
    });
  }, []);

  const changeDataRight = () => {
    if (number == 1) {
      setNumber(2);
      setData(materials);
    }
    if (number == 2) {
      setData(across);
      setNumber(3);
    }
    if (number == 3) {
      setNumber(1);
      setData(innovative);
    }
  };
  const changeDataLeft = () => {
    if (number == 1) {
      setNumber(3);
      setData(materials);
    }
    if (number == 2) {
      setNumber(1);
      setData(across);
    }
    if (number == 3) {
      setNumber(2);
      setData(innovative);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.firstCont}>
        {data.map(({ name, id }) => (
          <div key={id} className={styles.imageCont}>
            {name === "materials" && <Image src={materialsImg} />}
            {name === "across" && <Image src={acrossImg} />}
            {name === "innovative" && <Image src={innovativeImg} />}
          </div>
        ))}

        {width <= 1100 && (
          <ButtonComponentMobile
            rightFunction={changeDataRight}
            leftFunction={changeDataLeft}
          />
        )}
      </div>
      <div className={styles.secondCont}>
        {data.map(({ name, title, content }) => (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            key={name}
            className={styles.secondContCont}
          >
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.p}>{content}</p>
            <div className={styles.arrowCont}>
              <p> SHOP NOW </p>
              <img className={styles.arrow} src={arrow} alt="arrow" />
            </div>
          </motion.div>
        ))}
      </div>

      {width >= 1100 && (
        <ButtonComponent
          rightFunction={changeDataRight}
          leftFunction={changeDataLeft}
        />
      )}
    </section>
  );
}

export default Section;
