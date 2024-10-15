/**
 * Your frontend app ( Vite ) code
 */

/// <reference path="../../backend/adonisrc.ts" />

import {
  createTuyau,
  InferRequestType,
  InferResponseType,
} from "@tuyau/client";
import { api } from "@acme/backend/api";

/**
 * Initialize the Tuyau client with the generated `api` object generated
 * by `node ace tuyau:generate`
 */
export const tuyau = createTuyau({
  api,
  baseUrl: "http://localhost:3333",
});

/**
 * Then, you can use the tuyau client to make requests to your backend :)
 *
 * 💡 Feel free to :
 *    - Hover any of the methods to see the inferred types
 *    - F2 to rename a query or body parameter to see it updated everywhere,
 *     backend and frontend
 *    - CTRL + Space to see the available methods/parameters
 */
const result = await tuyau.posts.$get({ query: { filter: "foo" } }).unwrap();
result[1].body;

const result2 = await tuyau.posts({ post_id: 1 }).comments.$get().unwrap();
result2[1].id;

const result3 = await tuyau.posts.$post({ body: "foo", title: "bar" }).unwrap();
result3.success;

const result4 = await tuyau.users.$get({ query: { limit: 10, page: 1 } });
if (result4.data) result4.data[1].email;

tuyau.$url("posts.comments.create", { params: { postId: 1 } });
tuyau.$current("users.create");
tuyau.$has("users.create");
