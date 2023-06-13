// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60); // Calculate the number of hours
  const mins = time % 60; // Calculate the remaining minutes
  return `${hours}h ${mins}m`; // Return the formatted time string
};

// Convert a number to money formatting
export const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money); // Return the money value formatted as a currency string
};

// Check if the state is persisted in the session storage
export const isPersistedState = stateName => {
  const sessionState = sessionStorage.getItem(stateName); // Retrieve the state value from session storage
  return sessionState && JSON.parse(sessionState); // Return the parsed state if it exists, or null if it doesn't
};
