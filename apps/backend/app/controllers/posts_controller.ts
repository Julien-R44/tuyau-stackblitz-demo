import { createPostValidator, getPostsValidator } from '#validators/main'
import { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    await request.validateUsing(getPostsValidator)

    return [
      { title: 'Post 1', body: 'Post 1 body' },
      { title: 'Post 2', body: 'Post 2 body' },
    ]
  }

  /**
   * Create a new post
   */
  async store({ request }: HttpContext) {
    await request.validateUsing(createPostValidator)

    return { success: true }
  }
}
