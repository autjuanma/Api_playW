const { test, expect } = require('@playwright/test');

var token

test('delete a booking', async ({ request }) => {

    // create token to set on delete request

    const response = await request.post(`/auth`, {

        data: {
            "username": "admin",
            "password": "password123"
        }
    });
    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    token = responseBody.token;
    console.log("My token is: " + token);


})

test('To delete the booking details', async ({ request }) => {
    const deleteRequest = await request.delete('/booking/2107', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=',
        }
    });
    expect(deleteRequest.status()).toEqual(201);
    expect(deleteRequest.statusText()).toBe('Created');
})
