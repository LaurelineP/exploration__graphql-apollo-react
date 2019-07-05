import React, {useState} from 'react';
import { Mutation, Query } from 'react-apollo';
import { gql } from 'apollo-boost'

const queryProps = {
    query : gql`
        query todos {
            todos
        }
    `
}

const mutationProps = {
    mutation : gql`
        mutation AddTodo( $todo: String! ){
            addTodo( todo: $todo ){
                id
                todo
            }
        }
    `,
    // update : gql`
    //     mutation UpdateTodo( { 
    //         id: String!,
    //         todo: String!
    //     }){
    //         updateTodo({
    //             id: $id,
    //             newTodo: $newTodo
    //         })
    //     }
    // `
};
const updateCache = ( cache, { data} ) => {
    const existingTodos = cache.reaQuery({
        query: mutationProps.mutation
    })
    const newTodo = data.insert_todos.returning[0];
    cache.writeQuery({
        query: mutationProps.mutation,
        data: { todos: [ newTodo, ...existingTodos.todos ] }
    })
}
export const MutationCreateTodo = () => {
    const [ todoInput, setTodoInput ] = useState('')
    return (

        <Mutation {... mutationProps } update = { updateCache }>
            {/* Mutation's render props */}
            { (addTodo, { loading, data }) => (
                <form 
                    className = "formInput" 
                    onSubmit = {
                    e => {
                        e.preventDefault();
                        addTodo({ variables: { todo: todoInput }})
                        setTodoInput('');
                    }
                }>
                    <input
                        className = "input"
                        placeholder = "What's next ?"
                        onChange = { e => setTodoInput( e.target.value ) }
                        value = { todoInput }
                        />
                </form>
            )}
        </Mutation>
    )
}

export const MutationUpdateTodo = () => {
    // <Mutation { ... mutationsProps.updateTodo }>

    // </Mutation>
}