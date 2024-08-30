import { ApolloServer, gql } from 'apollo-server';
import {v4 as uuid } from 'uuid';

const users = [
    {
        name: "Ricardo",
        phone: "092354454",
        email: "ricado@email.com",
        city: "Quito",
        id: uuid()
    },
    {
        name: "Maria",
        phone: "09332354512",
        email: "maria@email.com",
        city: "Guayaquil",
        id: uuid()
    },
    {
        name: "Juan",
        phone: "0925648544",
        email: "juan@email.com",
        city: "Cuenca",
        id: uuid()
    },
    {
        name: "Pedro",
        phone: "092356554",
        email: "pedro@email.com",
        city: "Manta",
        id: uuid()
    }
];

const posts = [
    {
        id: uuid(),
        title: "Post1 por Ricardo",
        body: "Aprendiendo GraphQL con Apollo, muy interesante, espero aprender mucho", 
        published: true,
        createdBy: users[0].id
    },
    {
        id: uuid(),
        title: "Post2 por Ricardo",
        body: "Creando un servidor con Apollo Server, se ha vuelto muy sencillo", 
        published: true,
        createdBy: users[0].id
    },
    {
        id: uuid(),
        title: "Post1 por Maria",
        body: "La documentación de Apollo Server es muy completa, me ha ayudado mucho", 
        published: true,
        createdBy: users[1].id
    },
    {
        id: uuid(),
        title: "Post2 por Maria",
        body: "Siguiente paso, aprender a usar Apollo Client", 
        published: true,
        createdBy: users[1].id
    },
    {
        id: uuid(),
        title: "Post1 por Juan",
        body: "Abriendo el localhost:4000, veo que todo está funcionando correctamente", 
        published: true,
        createdBy: users[2].id
    },
    {
        id: uuid(),
        title: "Post2 por Juan",
        body: "Haciendo consultas query para obtener los usuarios y los posts", 
        published: true,
        createdBy: users[2].id
    },
    {
        id: uuid(),
        title: "Post1 por Pedro",
        body: "Hay que hacer consultas mutation para agregar usuarios y posts", 
        published: true,
        createdBy: users[3].id
    },
    {
        id: uuid(),
        title: "Post2 por Pedro",
        body: "Los paramtros que se debe enviar en las consultas mutation en los campos requeridos", 
        published: true,
        createdBy: users[2].id
    },
    {
        id: uuid(),
        title: "Post3 por Pedro",
        body: "Los campos requeridos son los que tienen el signo de exclamación", 
        published: true,
        createdBy: users[2].id
    },
    {
        id: uuid(),
        title: "Post4 por Pedro",
        body: "Ahora vamos a hacer una aplicación con React y Apollo Client", 
        published: true,
        createdBy: users[1].id
    },
    {
        id: uuid(),
        title: "Post5 por Pedro",
        body: "Usaremos tailwindcss para darle estilo a la aplicación", 
        published: true,
        createdBy: users[2].id
    },
    {
        id: uuid(),
        title: "Post6 por Pedro",
        body: "Usaremos typescript para tener un código más limpio y seguro, es una buena práctica", 
        published: true,
        createdBy: users[1].id
    }
];

const typeDefs = gql`
    type User {
        name: String!
        phone: String
        email: String!
        city: String
        id: ID!
    }
    
    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        createdBy: User!
    }

    type Query {
        userCount: Int!
        allUsers: [User]!
        findUser(name: String!): [User]!
        allPosts: [Post]!
        findPostsByUser(name: String!): [Post]
    }

    type Mutation {
        addUser(
            name: String!
            phone: String
            email: String!
            city: String
        ): User
        addPost(
            title: String!
            body: String!
            published: Boolean!
            createdBy: ID!
        ): Post
    }
`;

const resolvers = {
    Query: {
        userCount: () => users.length,
        allUsers: () => users,
        findUser: (root, args) => users.filter(user => user.name === args.name),
        allPosts: () => posts,
        findPostsByUser: (root, args) => {
            const user = users.find(user => user.name === args.name);
            return posts.filter(post => post.createdBy === user.id);
        }
    },
    Mutation: {
        addUser: (root, args) => {
            const user = { ...args, id: uuid() };
            users.push(user);
            return user;
        },
        addPost: (root, args) => {
            const post = { ...args, id: uuid() };
            posts.push(post);
            return post;
        }
    },
    Post: {
        createdBy: (root) => users.find(user => user.id === root.createdBy)
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});