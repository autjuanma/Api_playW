const { test, expect } = require('@playwright/test');


test('get booking details using the data fields', async ({ request }) => {

    const response = await request.get(`/booking`, {
        params: {
            checkin: "2020-01-15",
            checkout: "2023-03-25"
        },
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);

});