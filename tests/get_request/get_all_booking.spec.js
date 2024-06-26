const { test, expect } = require('@playwright/test');


test('get all information related to the  booking', async ({ request }) => {
    const response = await request.get(`/booking`);
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});



