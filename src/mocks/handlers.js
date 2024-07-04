import { rest } from "msw";

const baseURL = "https://react-walkthrough-42-a1578d503c9f.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => (
    res(ctx.json({
      "pk": 2,
      "username": "test_user_1",
      "email": "",
      "first_name": "",
      "last_name": "",
      "profile_id": 2,
      "profile_image": "https://res.cloudinary.com/daveyjh/image/upload/v1/react/media/images/bike_kk5tpp"
    }))
  )),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => (
    res(ctx.status(200)
  )))
];
