const { expect,test } = require('@playwright/test');

var token

test('must be able to partial update the booking details', async ({ request }) => {


    // create a Token to put in patch


    const response = await request.post(`/auth`, {

        data: {
            "username": "admin",
            "password": "password123"
        }

    });

    console.log(await response.json());
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200)

    const responseBody = await response.json();

    token = responseBody.token
    console.log("New Token is: " + token);



    // patch to update only those fields 
    const partialUpdateRequest = await request.patch(`/booking/1`, {

        headers: {

            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`

        },


        data: {

            "firstname": "nancy",
            "lastname": "Masha",
            "totalprice": 999,
            "depositpaid": false
        }

    });

    console.log(await partialUpdateRequest.json());
    expect(partialUpdateRequest.ok()).toBeTruthy();
    const partialUpdateResponseBody = await partialUpdateRequest.json()
    expect(partialUpdateResponseBody).toHaveProperty("firstname", "nancy");
    expect(partialUpdateResponseBody).toHaveProperty("lastname", "Masha");
    expect(partialUpdateResponseBody).toHaveProperty("totalprice", 999);
    expect(partialUpdateResponseBody).toHaveProperty("depositpaid", false);

});