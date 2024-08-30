

import { ApolloServer, gql } from 'apollo-server';
import { v4 as uuid } from 'uuid';

let users = [
    {
        name: "Jhon",
        phone: "092354454",
        email: "ricado@email.com",
        city: "New York",
        id: uuid(),
        role: "specialist"
    },
    {
        name: "Emily",
        phone: "092354342",
        email: "emily@email.com",
        city: "Chicago",
        id: uuid(),
        role: "patient"
    },
    {
        id: uuid(),
        name: "Sarah",
        phone: "789123456",
        email: "sarah@example.com",
        city: "Houston",
        role: "specialist"
    },
    {
        id: uuid(),
        name: "Jessica",
        phone: "321654987",
        email: "jessica@example.com",
        city: "Miami",
        role: "nurse",
    },
    {
        id: uuid(),
        name: "David",
        phone: "654987321",
        email: "david@example.com",
        city: "San Francisco",
        role: "nurse"
    },
    {
        id: uuid(),
        name: "James",
        phone: "987654321",
        email: "jame@email.com",
        city: "Los Angeles",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Michael",
        phone: "987654321",
        email: "michael@email.com",
        city: "Miami",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Robert",
        phone: "987654321",
        email: "robert@email.com",
        city: "New York",
        role: "patient"
    },
    {
        id: uuid(),
        name: "William",
        phone: "987654321",
        email: "william" + "@email.com",
        city: "Chicago",
        role: "patient"
    },

];

let appointments = [
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[0].id,
        date: "2024-09-01",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[0].id,
        date: "2024-09-02",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[2].id,
        date: "2024-09-03",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[2].id,
        date: "2024-09-04",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[0].id,
        date: "2024-09-04",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[0].id,
        date: "2024-09-04",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[2].id,
        date: "2024-09-04",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[2].id,
        date: "2024-09-04",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[0].id,
        date: "2024-09-09",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[0].id,
        date: "2024-09-10",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[2].id,
        date: "2024-09-10",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[2].id,
        date: "2024-09-10",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[0].id,
        date: "2024-09-11",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[0].id,
        date: "2024-09-11",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[2].id,
        date: "2024-09-12",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[2].id,
        date: "2024-09-12",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[0].id,
        date: "2024-09-12",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[0].id,
        date: "2024-09-12",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[2].id,
        date: "2024-09-13",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[2].id,
        date: "2024-09-14",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[0].id,
        date: "2024-09-14",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[0].id,
        date: "2024-09-14",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[2].id,
        date: "2024-09-14",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[2].id,
        date: "2024-09-14",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[1].id,
        specialist: users[0].id,
        date: "2024-09-15",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[2].id,
        specialist: users[0].id,
        date: "2024-09-15",
        status: "accepted"
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
    
    type Appointment {
        id: ID!
        patient: User!
        specialist: User!
        date: String!
        status: String!
    }

    type Query {
        userCount: Int!
        allUsers: [User]!
        findUser(name: String!): [User]!
        allAppointmets: [Appointment]!
        findAppointmetsByUser(name: String!): [Appointment]
        listSpecialists: [User]
        listPatients: [User]
        findAppointmetsBySpecialist(name: String!): [Appointment]
        findAppointmetsByStatus(status: String!): [Appointment]
        findAppointmetsByDate(date: String!): [Appointment]
    }

    type Mutation {
        createUser(
            name: String!
            phone: String
            email: String!
            city: String
        ): User

        addAppointment(
            patient: ID!
            specialist: ID!
            date: String!
            status: String!
        ): Appointment
    }
`;

const resolvers = {
    Query: {
        userCount: () => users.length,
        allUsers: () => users,
        findUser: (root, args) => users.filter(user => user.name === args.name),
        listSpecialists: () => users.filter(user => user.role === "specialist"),
        listPatients: () => users.filter(user => user.role === "patient"),
        allAppointmets: () => appointments,
        findAppointmetsByUser: (root, args) => {
            const user = users.find(user => user.name === args.name);
            return appointments.filter(appointment => appointment.patient === user.id);
        },
        findAppointmetsBySpecialist: (root, args) => {
            const user = users.find(user => user.name === args.name);
            return appointments.filter(appointment => appointment.specialist === user.id);
        },
        findAppointmetsByStatus: (root, args) => appointments.filter(appointment => appointment.status === args.status),
        findAppointmetsByDate: (root, args) => appointments.filter(appointment => appointment.date === args.date)
    },

    Mutation: {
        createUser: (root, args) => {
            const user = { ...args, id: uuid() };
            users = users.concat(user);
            return user;
        },
        addAppointment: (root, args) => {
            const appointment = { ...args, id: uuid() };
            appointments = appointments.concat(appointment);
            return appointment;
        }
    },

    Appointment: {
        patient: (root) => users.find(user => user.id === root.patient),
        specialist: (root) => users.find(user => user.id === root.specialist)
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});


server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
