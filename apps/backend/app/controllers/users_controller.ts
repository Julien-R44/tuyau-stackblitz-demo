import { createUserValidator, getUsersValidator } from '#validators/main'
import { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ request }: HttpContext) {
    await request.validateUsing(getUsersValidator)

    return [
      { id: 1, name: 'John Doe', email: 'foo@ok.com', age: 20 },
      { id: 2, name: 'Jane Doe', email: 'bar@ok.com', age: 30 },
    ]
  }

  /**
   * Create a new user
   */
  async store({ request }: HttpContext) {
    await request.validateUsing(createUserValidator)

    return { success: true }
  }
}
