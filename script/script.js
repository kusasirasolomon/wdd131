// scripts.js

// Grab static temperature and wind speed values from the HTML content
const temperatureC = parseInt(document.getElementById('temp').textContent, 10);
const windSpeedKmh = parseInt(document.getElementById('wind').textContent, 10);

/**
 * Calculate wind chill in °C using the metric formula:
 * 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
 * T = temperature in °C, V = wind speed in km/h
 */
function calculateWindChill(temperature, windSpeed) {
  return Math.round(
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  );
}

/**
 * Display the wind chill or "N/A" if conditions not met.
 */
function displayWindChill() {
  const windChillElement = document.getElementById('windChill');

  if (temperatureC <= 10 && windSpeedKmh > 4.8) {
    const windChill = calculateWindChill(temperatureC, windSpeedKmh);
    windChillElement.textContent = `Wind Chill: ${windChill} °C`;
  } else {
    windChillElement.textContent = 'Wind Chill: N/A';
  }
}

/**
 * Display current year and last modified date in the footer.
 */
function displayFooterDates() {
  const yearElement = document.getElementById('year');
  const lastModifiedElement = document.getElementById('lastModified');

  const now = new Date();
  yearElement.textContent = now.getFullYear();

  lastModifiedElement.textContent = document.lastModified;
}

document.addEventListener('DOMContentLoaded', () => {
  displayWindChill();
  displayFooterDates();
});
