function genPassword(strength) {
    let characters = '';
    let password = '';

    switch (strength) {
        case 'low':
            characters = 'abcdefghijklmnopqrstuvwxyz';
            break;
        case 'medium':
            characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            break;
        case 'high':
            characters =
            'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
            break;
        default:
            throw new Error('Invalid strength level');
    }

    for (let i = 0; i < 10; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
// console.log(genPassword('low'));
// console.log(genPassword('medium'));
// console.log(genPassword("high"));
export {genPassword};