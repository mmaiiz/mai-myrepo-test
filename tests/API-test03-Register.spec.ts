import { expect, test } from "@playwright/test";

test("Register - Successful", async ({ request }) => {
  const resp = await request.post('https://reqres.in/api/register', {
      data: {
        email: "eve.holt@reqres.in",
        password: "pistol",
      }
    });

  console.log(resp)
  expect(resp.status()).toBe(200);
  const respBody = await resp.json();
  expect(respBody).toHaveProperty("id");
  expect(respBody.token).not.toBeNull();
 

});

test("Register - Unsuccessful", async ({ request }) => {
    const resp = await request.post('https://reqres.in/api/register', {
        data: {
          email: "sydney@fife",
        }
      });
  
    console.log(resp)
    expect(resp.status()).toBe(400);
    const respBody = await resp.json();
    expect(respBody.error).toEqual("Missing password");
  
  });