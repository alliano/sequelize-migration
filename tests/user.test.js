import { connection } from "../src/db/config/connection"
import Users from "../src/models/users";
describe('Unit test for Users entity', () => {
    afterEach(async() => {
        await Users.truncate();
    });
   it('should can be connect', async() => {
    await connection.authenticate();
   });

   it('should can be define user', async() => {
    expect(connection.models.Users).toEqual(Users);
   })

   it('should can be insert users', async() => {
    const user = await Users.create({
        firstName: "sample firstname",
        lastName: "sample lastName",
        email: "sample@gmail.com",
        password: "sampel pass"
    });
    expect(user.toJSON()).toBeDefined();
   });
});