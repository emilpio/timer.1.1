import styles from './Timer.module.scss';

const Timer = ({ time }) => {
  const convertedTime = (miliseconds) => {
    let ms = miliseconds % 1000;
    let s = Math.floor(miliseconds / 1000) % 60;
    let m = Math.floor(miliseconds / 1000 / 60) % 60;
    let h = Math.floor(miliseconds / 1000 / 60 / 60);

    s < 10 ? (s = `0${s}`) : (s = `${s}`);
    m < 10 ? (m = `0${m}`) : (m = `${m}`);
    h < 10 ? (h = `0${h}`) : (h = `${h}`);

    return h + ':' + m + ':' + s + '.' + ms;
  };

  return (
    <div>
      <h1 className={styles.timer}>{convertedTime(time)}</h1>
    </div>
  );
};

export default Timer;
