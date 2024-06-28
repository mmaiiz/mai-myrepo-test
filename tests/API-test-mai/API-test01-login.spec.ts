import { expect, test } from "@playwright/test";
import { resource } from "./data.ts";

// QA HIVE Login
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

// Reqres.in Login
test('Login - Fail' , async ({request}) => {
  const resp = await request.post(resource.baseURL , {
      data: {
        "email": "peter@klaven"
      }
   });

  expect(resp.status()).toBe(400);  //ได้ 404 error ยังรันไม่สำเร็จ
  const respBody = await resp.json() ;
  console.log(resp)
  expect (respBody).toHaveText("Missing password")

}) 



/* test('Login Fail by put wrong password' , async ({request}) => {

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

}); */
