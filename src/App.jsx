import Hero from "./Components/Hero";
import Generator from "./Components/Generator";
import Workout from "./Components/Workout";
import { useEffect, useState } from "react";
import { generateWorkout } from "./Utils/functions";

function App() {
  const [workout, setWorkout] = useState(null);
  const [split, setSplit] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");
  const [shouldScroll, setShouldScroll] = useState(false);

  function updateWorkout() {
    if (!muscles.length) return;
    let newWorkout = generateWorkout({ split, muscles, goal });
    setWorkout(newWorkout);
    setShouldScroll(true);
  }

  useEffect(() => {
    if (shouldScroll && workout) {
      const el = document.getElementById("workout");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", "#workout");
      }
      setShouldScroll(false);
    }
  }, [shouldScroll, workout]);

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm: text-base">
      <Hero />
      <Generator
        split={split}
        setSplit={setSplit}
        muscles={muscles}
        setMuscles={setMuscles}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      {workout && <Workout workout={workout} />}
    </main>
  );
}

export default App;
