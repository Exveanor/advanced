function timeToWalk (steps, stepsInMeters, speed) {
    const distanceMeters = steps * stepsInMeters;
    const speedMetersSec = speed  * 1000 / 3600;
    const restTime = Math.floor(distanceMeters / 500) * 60;
    let totalTime = (distanceMeters / speedMetersSec) + restTime;

    let hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, '0');
    let seconds = (totalTime % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.60, 5)