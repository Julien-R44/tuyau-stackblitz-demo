import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

type UsersGetHead = {
  request: MakeTuyauRequest<
    InferInput<(typeof import('../app/validators/main.ts'))['getUsersValidator']>
  >
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['index']>
}
type UsersPost = {
  request: MakeTuyauRequest<
    InferInput<(typeof import('../app/validators/main.ts'))['createUserValidator']>
  >
  response: MakeTuyauResponse<import('../app/controllers/users_controller.ts').default['store']>
}
type PostsGetHead = {
  request: MakeTuyauRequest<
    InferInput<(typeof import('../app/validators/main.ts'))['getPostsValidator']>
  >
  response: MakeTuyauResponse<import('../app/controllers/posts_controller.ts').default['index']>
}
type PostsPost = {
  request: MakeTuyauRequest<
    InferInput<(typeof import('../app/validators/main.ts'))['createPostValidator']>
  >
  response: MakeTuyauResponse<import('../app/controllers/posts_controller.ts').default['store']>
}
type PostsIdCommentsGetHead = {
  request: unknown
  response: MakeTuyauResponse<import('../app/controllers/comments_controller.ts').default['index']>
}
type PostsIdCommentsPost = {
  request: MakeTuyauRequest<
    InferInput<(typeof import('../app/validators/main.ts'))['createCommentValidator']>
  >
  response: MakeTuyauResponse<import('../app/controllers/comments_controller.ts').default['store']>
}
export interface ApiDefinition {
  users: {
    $url: {}
    $get: UsersGetHead
    $head: UsersGetHead
    $post: UsersPost
  }
  posts: {
    '$url': {}
    '$get': PostsGetHead
    '$head': PostsGetHead
    '$post': PostsPost
    ':post_id': {
      comments: {
        $url: {}
        $get: PostsIdCommentsGetHead
        $head: PostsIdCommentsGetHead
        $post: PostsIdCommentsPost
      }
    }
  }
}
const routes = [
  {
    params: [],
    name: 'users.index',
    path: '/users',
    method: ['GET', 'HEAD'],
    types: {} as UsersGetHead,
  },
  {
    params: [],
    name: 'users.create',
    path: '/users/create',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: [],
    name: 'users.store',
    path: '/users',
    method: ['POST'],
    types: {} as UsersPost,
  },
  {
    params: ['id'],
    name: 'users.show',
    path: '/users/:id',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: ['id'],
    name: 'users.edit',
    path: '/users/:id/edit',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: ['id'],
    name: 'users.update',
    path: '/users/:id',
    method: ['PUT', 'PATCH'],
    types: {} as unknown,
  },
  {
    params: ['id'],
    name: 'users.destroy',
    path: '/users/:id',
    method: ['DELETE'],
    types: {} as unknown,
  },
  {
    params: [],
    name: 'posts.index',
    path: '/posts',
    method: ['GET', 'HEAD'],
    types: {} as PostsGetHead,
  },
  {
    params: [],
    name: 'posts.create',
    path: '/posts/create',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: [],
    name: 'posts.store',
    path: '/posts',
    method: ['POST'],
    types: {} as PostsPost,
  },
  {
    params: ['id'],
    name: 'posts.show',
    path: '/posts/:id',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: ['id'],
    name: 'posts.edit',
    path: '/posts/:id/edit',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: ['id'],
    name: 'posts.update',
    path: '/posts/:id',
    method: ['PUT', 'PATCH'],
    types: {} as unknown,
  },
  {
    params: ['id'],
    name: 'posts.destroy',
    path: '/posts/:id',
    method: ['DELETE'],
    types: {} as unknown,
  },
  {
    params: ['post_id'],
    name: 'posts.comments.index',
    path: '/posts/:post_id/comments',
    method: ['GET', 'HEAD'],
    types: {} as PostsIdCommentsGetHead,
  },
  {
    params: ['post_id'],
    name: 'posts.comments.create',
    path: '/posts/:post_id/comments/create',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: ['post_id'],
    name: 'posts.comments.store',
    path: '/posts/:post_id/comments',
    method: ['POST'],
    types: {} as PostsIdCommentsPost,
  },
  {
    params: ['post_id', 'id'],
    name: 'posts.comments.show',
    path: '/posts/:post_id/comments/:id',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: ['post_id', 'id'],
    name: 'posts.comments.edit',
    path: '/posts/:post_id/comments/:id/edit',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: ['post_id', 'id'],
    name: 'posts.comments.update',
    path: '/posts/:post_id/comments/:id',
    method: ['PUT', 'PATCH'],
    types: {} as unknown,
  },
  {
    params: ['post_id', 'id'],
    name: 'posts.comments.destroy',
    path: '/posts/:post_id/comments/:id',
    method: ['DELETE'],
    types: {} as unknown,
  },
] as const
export const api = {
  routes,
  definition: {} as ApiDefinition,
}
