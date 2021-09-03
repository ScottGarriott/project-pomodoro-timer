import React from "react";
import { minutesToDuration } from "../utils/duration";
import { secondsToDuration } from "../utils/duration";
import useInterval from "../utils/useInterval";

function nextTick(prevState) {
    const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
    return {
      ...prevState,
      timeRemaining,
    };
  }

function PomodoroTimerView ({  isTimerRunning, session, durations, setSession }) {
   


      function nextSession(focusDuration, breakDuration) {
        /**
         * State function to transition the current session type to the next session. e.g. On Break -> Focusing or Focusing -> On Break
         */
        return (currentSession) => {
          if (currentSession.label === "Focusing") {
            return {
              label: "On Break",
              timeRemaining: breakDuration * 60,
            };
          }
          return {
            label: "Focusing",
            timeRemaining: focusDuration * 60,
          };
        };
      }
    
      useInterval(() => {
        if (session.timeRemaining === 0) {
          new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
          return (
            setSession(nextSession(durations.focusDuration, durations.breakDuration))
            );
        }
        
            setSession(nextTick);
            
      },
      isTimerRunning ? 1000 : null
    );

    const sessionTotalDurationView = (label) => {
        const result = label === "Focusing" ?  durations.focusDuration : durations.breakDuration;
        return minutesToDuration(result);
    }

    return (
    session &&
            <React.Fragment>
                <div className="row mb-2">
                <div className="col">
                    <h2 data-testid="session-title">
                    {session.label} for {sessionTotalDurationView(session.label)} minutes
                    </h2>
                    <p className="lead" data-testid="session-sub-title">
                    {secondsToDuration(session && session.timeRemaining)} remaining
                    </p>
                </div>
                </div>
                <div className="row mb-2">
                <div className="col">
                    <div className="progress" style={{ height: "20px" }}>
                    <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={
                          100 - (100 * session.timeRemaining) / 
                          (session.label === "Focusing"
                          ? durations.focusDuration * 60
                          : durations.breakDuration * 60)
                        } 
                        style={{ width: `${
                          100 - (100 * session.timeRemaining) / 
                          (session.label === "Focusing"
                          ? durations.focusDuration * 60
                          : durations.breakDuration * 60)
                        }%`  }} 
                    />
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }

export default PomodoroTimerView;