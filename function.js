function creaThrottler(func, time) {
  let Ultima = 0;
  return function (...args) {
    const ora = Date.now();
    if (ora - Ultima >= time) {
      Ultima = ora;
      func(...args);
    } else {
      console.log("No!");
    }
  };
}

const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);

throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
