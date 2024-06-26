const { test, expect } = require('@playwright/test')
const bookingInfo = require('../.testdata/booking-data.json');



test('create a new booking from Jfile', async ({request }) => {

    const response = await request.post(`/booking`,{
        data: bookingInfo
    });

    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json()
    expect(responseBody.booking).toHaveProperty("firstname","Juhan");
    expect(responseBody.booking).toHaveProperty("lastname","Tous");
    expect(responseBody.booking).toHaveProperty("totalprice",888);
    expect(responseBody.booking).toHaveProperty("depositpaid",true);






})