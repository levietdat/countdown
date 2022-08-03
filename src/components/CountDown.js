import "./CountDown.css";

const CountDownTimer = ({timerDays,timerHours,timerMinutes,timerSeconds}) => {

  return (
    <>
      <div className="input-date">
        <input id="myDate" type="date" />
        <button className="btn-countdown"  >CountDown</button>
        <button  className="btn-reset"  >RESET</button>
      </div>
      <div className="countdown-timer">
        <span className="timer-value">{timerDays}</span>
        <span>Days</span>
        <span className="timer-value">{timerHours}</span>
        <span>Hours</span>
        <span className="timer-value">{timerMinutes}</span>
        <span>Minutes</span>
        <span className="timer-value">{timerSeconds}</span>
        <span>Seconds</span>
      </div>
    </>
  );
};
CountDownTimer.defaultProps ={
    timerDays:"0"+0,
    timerHours:"0"+0,
    timerMinutes:"0"+0,
    timerSeconds:"0"+0,
}
export default CountDownTimer;
