import React from "react"; 
import classNames from "../utils/class-names";

function PomodoroStartStop ( { isTimerRunning, setIsTimerRunning, durations, setSession, session } ) {

  
     /**
   * Called whenever the play/pause button is clicked.
   */
      function playPause() {
        setIsTimerRunning((prevState) => {
          const nextState = !prevState;
          if (nextState) {
            setSession((prevStateSession) => {
              // If the timer is starting and the previous session is null,
              // start a focusing session.
              if (prevStateSession === null) {
                
                return {
                  label: "Focusing",
                  timeRemaining: durations.focusDuration * 60,
                  stopDisabled: true
                };
              }
              return prevStateSession;
            });
          }
          return nextState;
        });
      }

    function stop() {
      if(session){

        setIsTimerRunning(false)

        setSession(null);
      }
    }
return(
<div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="stop"
              title="Stop the session"
              onClick={stop}
              disabled={!session}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
)
};

export default PomodoroStartStop;