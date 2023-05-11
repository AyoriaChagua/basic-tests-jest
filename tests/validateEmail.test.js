const {validateEmail} = require('../utils/for_testing.js')

describe('validateEmail', ()=>{
    test("test_email_with_numbers", () => {
        expect(validateEmail("example123@example.com")).toBe(true);
    });

    test("test_invalid_domain", () => {
        expect(validateEmail("example@invalid")).toBe(false);
    });

    test("test_empty_email", () => {
        expect(validateEmail("")).toBe(false);
    });

    test("test_email_without_domain", () => {
        expect(validateEmail("example@")).toBe(false);
    });
})

