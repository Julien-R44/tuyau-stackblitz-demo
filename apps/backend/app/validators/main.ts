import vine from '@vinejs/vine'
import { SchemaTypes } from '@vinejs/vine/types'

/**
 * Define a vine validator. Shortcut for `vine.compile(vine.object(schema))`
 */
export function defineValidator<Properties extends Record<string, SchemaTypes>>(
  schema: Properties
) {
  return vine.compile(vine.object(schema))
}

export const getUsersValidator = defineValidator({
  page: vine.number().optional(),
  limit: vine.number().optional(),
})

export const createUserValidator = defineValidator({
  name: vine.string().trim(),
  email: vine.string().trim().email(),
  age: vine.number().optional(),
})

export const getPostsValidator = defineValidator({
  bla: vine.string().optional(),
})

export const createPostValidator = defineValidator({
  title: vine.string().trim(),
  body: vine.string().trim(),
})

export const createCommentValidator = defineValidator({
  body: vine.string().trim(),
})
