// @ts-check
const { test, expect } = require('@playwright/test');

//test case 1
test('create new booking', async ({ request }) => {
    const response = await request.post(`/booking`, {
        data: {
            "firstname": "Juhan",
            "lastname": "Tous",
            "totalprice": 888,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2024-06-01",
                "checkout": "2024-06-15"
            },
            "additionalneeds": "vape"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname", "Juhan");
    expect(responseBody.booking).toHaveProperty("lastname", "Tous");
    expect(responseBody.booking).toHaveProperty("totalprice", 888);
    expect(responseBody.booking).toHaveProperty("depositpaid", true);
});