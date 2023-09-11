(function(){
  'use strict';

  // Current Day of the Week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayIndex = new Date().getDay();
    const currentDayOfTheWeek = daysOfWeek[currentDayIndex];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfTheWeek;

    // Current UTC Time
    const currentUTCTime = Date.now();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime;
})()