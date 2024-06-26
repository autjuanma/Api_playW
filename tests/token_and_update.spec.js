const { test, expect } = require('@playwright/test');

var token

test('update booking', async ({ request }) => {

    const response = await request.post('/auth', {
        data: {

            "username": "admin",
            "password": "password123"
        }
    });

    //  create token

    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    token = responseBody.token;
    console.log("New Token is: " + token);


    const updateRequest = await request.put(`/booking/1`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`,
        },
        data: {
            "firstname": "test00006",
            "lastname": "test00006lastname",
            "totalprice": 555,
            "depositpaid": false,
            "bookingdates": {
                "checkin": "2023-06-01",
                "checkout": "2023-06-15"
            },
            "additionalneeds": "Breakfast"
        }
    });
    console.log(await updateRequest.json());
    expect(updateRequest.ok()).toBeTruthy();
    expect(updateRequest.status()).toBe(200);
    const updatedResponseBody = await updateRequest.json()
    expect(updatedResponseBody).toHaveProperty("firstname", "test00006");
    expect(updatedResponseBody).toHaveProperty("lastname", "test00006lastname");
    expect(updatedResponseBody).toHaveProperty("totalprice", 555);
    expect(updatedResponseBody).toHaveProperty("depositpaid", false);


});