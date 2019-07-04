import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost'

export const MutationTodos = () => {
    let input;
    let todos = [];
    const mutationProps = {
        mutation: gql `
            mutation CreateTodo( $todo: String! ){
                createTodo( todo: $todo ){
                    id
                    type
                }
            }`
    };
    return ( 
        <Mutation { ...mutationProps }>
            {
                (createTodo, {loading, error, data}) => (
                    <div>
                        <form onSubmit = { e => {
                            e.preventDefault();
                            createTodo({ variables: { todo: input.value } });
                                todos.push(input.value)
                                input.value = ""
                                
                            }}>
                            <input ref = { node => input = node }/>
                            <button type="submit">Add todo</button>
                        </form>
                        <div id="todos-list">
                            {
                                todos.map ( (todo, idx) => (
                                    <div className = "todo-item">
                                        <p>{todo}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                )
            }
        </Mutation>
    );
};
