import React, { useEffect } from "react";
import { minutesToDuration } from "../utils/duration";


function PomodoroTimeAdjusters ({ durations, setDurations, session }) {

    useEffect(() => {
      console.log(durations)
    }, [durations])

    const durationDecreaseHandler = (event) => {
        if(!session){
        const durationDecreaser = (currentDuration) => Math.max(5, (currentDuration - 5));
          
        setDurations({...durations, focusDuration: durationDecreaser(durations.focusDuration)})
    }
    }

    const durationIncreaseHandler = (event) => {
        if(!session){
        const durationIncreaser = (currentDuration) =>  Math.min(60, (currentDuration + 5));

        setDurations({...durations, focusDuration: durationIncreaser(durations.focusDuration)})
    }
    }

    const breakDecreaseHandler = (event) => {
        if(!session){
        const durationDecreaser = (currentDuration) => Math.max(1, (currentDuration - 1));

        setDurations({...durations, breakDuration: durationDecreaser(durations.breakDuration)})
    }
    }

    const breakIncreaseHandler = (event) => {
        if(!session){
        const durationIncreaser = (currentDuration) => Math.min(15, (currentDuration + 1));
          
        setDurations({...durations, breakDuration: durationIncreaser(durations.breakDuration)})
    }
    }

return (
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              Focus Duration: {minutesToDuration(durations.focusDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                name="decrease-focus"
                onClick={durationDecreaseHandler}
                value={durations.focusDuration}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                onClick={durationIncreaseHandler}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                Break Duration: {minutesToDuration(durations.breakDuration)}
              </span>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  onClick={breakDecreaseHandler}
                >
                  <span className="oi oi-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  onClick={breakIncreaseHandler}
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

export default PomodoroTimeAdjusters;