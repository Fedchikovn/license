const expirationDate = new Date('2024-06-01'); 

function checkLicense() {
    const currentDate = new Date();

    if (currentDate > expirationDate) {
        return 'expired';
    } else {
        return 'valid';
    }
}

export { checkLicense };
