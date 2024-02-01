export function parseUpdateDate(date: Date) {
    const dateObject = new Date(date);
    const year = dateObject.getUTCFullYear();
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0'); 
    const day = String(dateObject.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`
}

export function accountAge(accountCreationDate: Date) {
    const currentDate = new Date();
  
    // Calculate the difference in milliseconds
    const timeDiff = Math.abs(currentDate.getTime() - accountCreationDate.getTime());
  
    // Calculate the difference in days, months, and years
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30.44); // Assuming an average month length
    const years = Math.floor(months / 12);
  
    return `${days} days ${months} months ${years} years`;
  }
  