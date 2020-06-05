import gameState from "./gameState";
// screaming case for a constant
const TICK_RATE = 3000;

async function init() {
  console.log("Starting the game");

  let nextTimeToTick = Date.now();

  // closure (function inside a function)
  function nextAnimationFrame() {
    const now = Date.now();
    if (nextTimeToTick <= now) {
      gameState.tick();
      nextTimeToTick = now + TICK_RATE;
    }
    // provided by browser to do stuff when it's idle
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame);
}

init();
