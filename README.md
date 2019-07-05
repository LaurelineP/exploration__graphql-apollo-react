# React Apollo GrapgQL testing app
Testing Apollo with graphQL

- create-react-app: boilerplate used for this project
- apollo-client: eveything you need to set your apollo-client
- apollo-boost: is a view layer for your integration for react
- graphql: in order to parse your graphQL queries

1. Apollo-client: helps setting your queries environments ( so to say )
2. ApolloProvider: component wraping your application to set the context of your app  
    allowing to connect your application with your apollo-client
3. Query: a react-component using render props to share GraphQL data ( DOGS )
-   when using dynamic values we need to restructure the static query to allow to use  
variables props
4. Mutation: meant for : ( TODOS )
- creating
- updating
- deleting
( all kind of data's mutations )

### Updating the cache 
Somethime when you come to update ypour graphql you may lose the sync  
with your cache ( happens when data you want to update is already in the cache ; f. delete and creating todos to a list )  
- Update list with cache with **update** function to provide within <Mutation />
    - ```cache.readQuery``` : read query
    - ```cache.writeQuery```: write query
    - ```cache.readFragment```: allows you to read data from any node you have queried.
    - ```cache.writeFragment```
    - ```cache.writeData```