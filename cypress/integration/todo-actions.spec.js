/// <reference types="cypress" />

import {
    navigate,
    addTodo,
    validateTodoText,
    toggleTodo,
    clearCompleted,
    validateTodoCompletedState,
    validateToggleState,
    validateNumberOfTodosShown,
  } from '../page-objects/todo-page'

describe('todo actions', () => {
    const todoText = "Clean room"

    beforeEach(() => {
        navigate()

        addTodo(todoText)
    })

    it('should add a new todo to the list', () => {
        validateTodoText(0, todoText)

        validateToggleState(0, false)
    })

    describe('toggling todos', () => {
        it('should mark a todo as completed', () => {
            toggleTodo(0)

            validateTodoCompletedState(0, true)
        })

        it('should clear completed todos', () => {
            toggleTodo(0)

            clearCompleted()

            validateNumberOfTodosShown(0)
        })
    })
})