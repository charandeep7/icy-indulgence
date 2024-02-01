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
    const months = Math.floor(days / 30.44); // Still assuming an average month length
    const years = Math.floor(months / 12);

    const formattedDays = days % 30;
    const formattedMonths = months % 12;

    const dayStr = formattedDays === 1 ? 'day' : 'days';
    const monthStr = formattedMonths === 1 ? 'month' : 'months';
    const yearStr = years === 1 ? 'year' : 'years';

    const result = [];

    result.push(`${formattedDays} ${dayStr}`);
    result.push(`${formattedMonths} ${monthStr}`);
    result.push(`${years} ${yearStr}`);

    return result.join(' ');
  }
