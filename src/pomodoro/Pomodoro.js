import React, { useState } from "react";
import PomodoroTimeAdjusters from "./PomodoroTimeAdjusters";
import PomodoroTimerView from "./PomodoroTimerView";
import PomodoroStartStop from "./PomodoroStartStop";

// These functions are defined outside of the component to insure they do not have access to state
// and are, therefore more likely to be pure.

/**
 * Update the session state with new state after each tick of the interval.
 * @param prevState
 *  the previous session state
 * @returns
 *  new session state with timing information updated.
 */

/**
 * Higher order function that returns a function to update the session state with the next session type upon timeout.
 * @param focusDuration
 *    the current focus duration
 * @param breakDuration
 *    the current break duration
 * @returns
 *  function to update the session state.
 */


function Pomodoro() {

  //Timer duration states
const initialDurationState = {
  focusDuration: 25,
  breakDuration: 5
};
const [durations, setDurations] = useState({...initialDurationState})


//Other states
// Timer starts out paused
const [isTimerRunning, setIsTimerRunning] = useState(false);

// The current session - null where there is no session running

const [session, setSession] = useState(null);  
  

  return (
   <React.Fragment>
      <PomodoroTimeAdjusters durations = {durations} setDurations = {setDurations} session = {session} setSession={setSession}/>
        <PomodoroStartStop 
        isTimerRunning = {isTimerRunning} 
        setIsTimerRunning = {setIsTimerRunning} 
        durations = {durations} 
        setSession = {setSession} 
        session={session} 
        />
        <PomodoroTimerView 
        session = {session} 
        durations = {durations} 
        setSession={setSession} 
        isTimerRunning={isTimerRunning}
        />
  </React.Fragment>
  );
}

export default Pomodoro;
