import { expect, test } from "@playwright/test";

test("should able to login via api", async ({ request }) => {
  const resp = await request.post("https://api-web-demo.qahive.com/auth/login", {
      data: {
        email: "demo@demo.com",
        password: "Welcome1",
      }
    });

  expect(resp).toBeOK();
  expect((await resp.json()).access_token).not.toBeNull();

});

test('Login Fail by put wrong password' , async ({request}) => {

  const resp = await request.post('https://api-web-demo.qahive.com/auth/login' , { 
    data: {
      eamil: "demo@demo.com",
      password: "Welcome"
    }
  })

  expect(resp.status()).toBe(401);
  const respBody = await resp.json();
  console.log(respBody.messege)
  expect(respBody.messege).toEqual('undefined');  //ยังรัน แบบให้มัน error ไม่ได้

});
