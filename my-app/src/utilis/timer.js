export const calculateRemainingTime = (initialTime) => {
  const timerStart = parseInt(localStorage.getItem("timerStart"), 10) || 0;
  const now = Date.now();
  const elapsed = Math.floor((now - timerStart) / 1);
  return Math.max(0, initialTime - elapsed);
};
