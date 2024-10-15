import { createCommentValidator } from '#validators/main'
import { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {
  /**
   * Display all comments for a given post
   */
  async index({}: HttpContext) {
    return [
      { id: 1, body: 'Comment 1' },
      { id: 2, body: 'Comment 2' },
    ]
  }

  /**
   * Create a new comment for a given post
   */
  async store({ request }: HttpContext) {
    await request.validateUsing(createCommentValidator)

    return { success: true }
  }
}
