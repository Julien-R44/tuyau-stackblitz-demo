/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const UsersController = () => import('#controllers/users_controller')
const PostsController = () => import('#controllers/posts_controller')
const CommentsController = () => import('#controllers/comments_controller')

router.resource('users', UsersController)
router.resource('posts', PostsController)
router.resource('posts.comments', CommentsController)
