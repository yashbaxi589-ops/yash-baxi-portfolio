// Small, accessible interactions for Yash Baxi's portfolio.
(() => {
  const weekdayForm = document.getElementById('weekday-form');
  const dateInput = document.getElementById('date-input');
  const weekdayResult = document.getElementById('weekday-result');
  const capitalForm = document.getElementById('capital-form');
  const countryInput = document.getElementById('country-input');
  const capitalResult = document.getElementById('capital-result');

  // Use UTC to avoid timezone shifts changing the selected calendar date.
  weekdayForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!dateInput.value) {
      weekdayResult.textContent = 'Please choose a date first.';
      return;
    }
    const [year, month, day] = dateInput.value.split('-').map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    if (!Number.isFinite(date.getTime()) || date.getUTCFullYear() !== year || date.getUTCMonth() !== month - 1 || date.getUTCDate() !== day) {
      weekdayResult.textContent = 'Please enter a valid date.';
      return;
    }
    const dayName = new Intl.DateTimeFormat('en', { weekday: 'long', timeZone: 'UTC' }).format(date);
    weekdayResult.textContent = `${date.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })} was / will be a ${dayName}.`;
  });

  const capitals = {
    'india': 'New Delhi', 'japan': 'Tokyo', 'canada': 'Ottawa', 'france': 'Paris',
    'brazil': 'Brasília', 'australia': 'Canberra', 'egypt': 'Cairo', 'kenya': 'Nairobi',
    'nepal': 'Kathmandu', 'italy': 'Rome', 'germany': 'Berlin', 'china': 'Beijing',
    'united states': 'Washington, D.C.', 'united states of america': 'Washington, D.C.',
    'usa': 'Washington, D.C.', 'united kingdom': 'London', 'uk': 'London',
    'new zealand': 'Wellington', 'south korea': 'Seoul', 'republic of korea': 'Seoul',
    'singapore': 'Singapore', 'thailand': 'Bangkok', 'argentina': 'Buenos Aires', 'mexico': 'Mexico City'
  };

  capitalForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const country = countryInput.value.trim().toLocaleLowerCase().replace(/\s+/g, ' ');
    if (!country) {
      capitalResult.textContent = 'Please enter a country name.';
      return;
    }
    const capital = capitals[country];
    capitalResult.textContent = capital
      ? `The capital of ${countryInput.value.trim()} is ${capital}.`
      : 'That country is not in this demo list yet. Try a country suggested below the input.';
  });
})();
