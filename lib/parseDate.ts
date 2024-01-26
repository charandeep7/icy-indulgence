export function parseUpdateDate(date: Date) {
    const dateObject = new Date(date);
    const year = dateObject.getUTCFullYear();
    const month = String(dateObject.getUTCMonth() + 1).padStart(2, '0'); 
    const day = String(dateObject.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`
}

export function accountAge(accountCreationDate: Date) {
    const currentDate = new Date();
    let years = currentDate.getUTCFullYear() - accountCreationDate.getUTCFullYear();
    let months = currentDate.getUTCMonth() - accountCreationDate.getUTCMonth();
    const days = currentDate.getUTCDate() - accountCreationDate.getUTCDate();
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += (days < 0) ? 11 : 12;
    }
    return `${days} days ${months} months ${years} years`
}