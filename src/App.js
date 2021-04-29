import "./App.css";
import React from "react";

import cake from "./cake.png";
import egor from "./egor.png";
import egor2 from "./egor2.png";

function App() {
  let egorRef = React.createRef();
  let cakeRef = React.createRef();
  let appRef = React.createRef();
  let overlapping = false;
  const height = 280;
  const width = 210;
  const mouseMove = (e) => {
    requestAnimationFrame(() => {
      egorRef.current.style.left = e.pageX - width / 2 + "px";
      egorRef.current.style.top = e.pageY - height / 2 + "px";
      let egorRect = egorRef.current.getBoundingClientRect();
      let cakeRect = cakeRef.current.getBoundingClientRect();
      if (
        !(
          cakeRect.right < egorRect.left + 110 ||
          cakeRect.left > egorRect.left + width - 150 ||
          cakeRect.bottom < egorRect.top + 200 ||
          cakeRect.top > egorRect.top + height - 110
        )
      ) {
        if (overlapping) return;
        overlapping = true;
        alert("С др, хуй");
      } else {
        if (!overlapping) return;
        overlapping = false;
      }
      console.log(overlapping);
    });
  };

  return (
    <div
      ref={appRef}
      className="App"
      onMouseMove={mouseMove}
      onMouseEnter={() => egorRef.current.classList.remove("hidden")}
    >
      <img
        ref={cakeRef}
        id="cake"
        class="img middle"
        src={cake}
        height="80px"
        width="auto"
        alt="cake"
      ></img>
      <div ref={egorRef} id="egor" class="hidden img">
        <img
          src={egor}
          class="img back"
          height={height}
          width={width}
          alt="egor"
        ></img>
        <img
          src={egor2}
          class="img front"
          height={height}
          width={width}
          alt="egor"
        ></img>
      </div>
      <div id="container"></div>
    </div>
  );
}

export default App;
