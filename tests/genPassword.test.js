import { genPassword } from "../index.js";
test('Returns a password as a string', function() {
    expect(typeof genPassword()).toBe('string');
    expect(genPassword('high').includes('high')).toBe(true);
});