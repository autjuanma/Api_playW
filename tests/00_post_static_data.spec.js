// @ts-check
const { test, expect } = require('@playwright/test');

//test case 1
test('create new booking', async ({ request }) => {
    const response = await request.post(`/booking`, {
        data: {
            "firstname": "test00008",
            "lastname": "testlastname0008",
            "totalprice": 5555,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2020-01-15",
                "checkout": "2023-03-25"
            },
            "additionalneeds": "vape"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", "test00008");
    expect(responseBody.booking).toHaveProperty("lastname", "testlastname0008");
    expect(responseBody.booking).toHaveProperty("totalprice", 5555);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
});