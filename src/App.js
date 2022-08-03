import { useEffect, useState } from "react";
import "./App.css";
import CountDownTimer from "./components/CountDown";
function App() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;
  const startTimer = () => {
    const countdownDateValue = document.querySelector("#myDate").value;
    const countdownDate = new Date(countdownDateValue).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
  
        clearInterval(interval);
      } 
       else {
        setTimerDays(days>=10?days:"0"+days);
        setTimerHours(hours>=10?hours:"0"+hours);
        setTimerMinutes(minutes>=10?minutes:"0"+minutes);
        setTimerSeconds(seconds>=10?seconds:"0"+seconds);
        console.log("countdown-ing")
      }
    },1000);
  };
  useEffect(() => {
    document.querySelector(".btn-countdown").addEventListener("click", () => {
      clearInterval(interval);
      startTimer();
    });
    document.querySelector(".btn-reset").addEventListener("click", () => {
      document
        .querySelector(".btn-countdown")
        .removeEventListener("click",()=>{return});
      clearInterval(interval);
      setTimerDays("0"+0);
      setTimerHours("0"+0);
      setTimerMinutes("0"+0);
      setTimerSeconds("0"+0);
    });
  },[]);
  return (
    <div className="App">
      <CountDownTimer
        timerDays={timerDays}
        timerHours={timerHours}
        timerMinutes={timerMinutes}
        timerSeconds={timerSeconds}
      />
    </div>
  );
}
export default App;
