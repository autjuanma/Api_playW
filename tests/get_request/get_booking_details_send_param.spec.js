const { test, expect } = require('@playwright/test');


test('get booking details send parameters', async ({ request }) => {
    const response = await request.get(`/booking`, {
        params: {
            firstname:"Juhan",
            lastname:"Tous"
        }
    });

    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
});