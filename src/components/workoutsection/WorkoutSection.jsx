import React from "react";
import "./workoutsection.css";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import WorkoutCard from "../workoutcard/WorkoutCard";


const WorkoutSection = () => {
    const items = [
      <WorkoutCard image = "https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/3Tygq87mpjCysd6dRomamP/d8a7b4f46a0c45eb3ff95a1a2e186d84/strength.png" name="Strength"/>,
      <WorkoutCard image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/39RfW5BtElEcHNCRlSo6Df/c864ce9b567e24c3842f4ec0c907295d/yoga.png" name="Yoga"/>,
      <WorkoutCard image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4U2KaAhIDv0sXJAE6zzoPE/9d00b065573fc4a083b5718d9be727c1/walking.png" name="Walking"/>,
      <WorkoutCard image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_2.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/1xxaCMlxguek1IOGongpIE/4aae8d7a1cc246cdf479174d47c00dbd/boxing.png" name="Boxing"/>,
      <WorkoutCard image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/4ZnglqAN0rv0PTiXqPIMcS/afbeca60f9edd33d566d0a33fcd529a1/barre.png" name="Barre"/>,
      <WorkoutCard image="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto:good,w_600/https://images.ctfassets.net/7vk8puwnesgc/6SpPJjMEkwBvt4dcuROUhM/0969da2fdbd85583e417f59e5fec0371/cycling.png" name="Cycling"/>,
      <WorkoutCard image="https://images.ctfassets.net/7vk8puwnesgc/4Jc8Hc0m70MpNiVmo6qJTx/e4d5cda8bd22e8861fc6e846d01f2e63/running.png" name="Running"/>,
    ];
    return (
    <div className="workout-section">
      <h1>Preview thousands of classes on the Peloton App</h1>
      <div className="workout-carousel">
        <AliceCarousel mouseTracking items={items} autoWidth={true} disableButtonsControls = {true} autoHeight={true}/>
      </div>
      <button>Browse Classes</button>
    </div>
  );
};

export default WorkoutSection;
