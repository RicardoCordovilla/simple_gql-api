

import { ApolloServer, gql } from 'apollo-server';
import { v4 as uuid } from 'uuid';

let users = [
    {
        name: "Dr Jhon",
        phone: "092354454",
        email: "ricado@email.com",
        city: "New York",
        id: uuid(),
        role: "specialist"
    },
    {
        name: "Dr Samantha",
        phone: "092354342",
        email: "emily@email.com",
        city: "Chicago",
        id: uuid(),
        role: "specialist"
    },
    {
        id: uuid(),
        name: "Dr Ricardo",
        phone: "789123456",
        email: "sarah@example.com",
        city: "Houston",
        role: "specialist"
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
    {
        id: uuid(),
        name: "David",
        phone: "987654321",
        email: "david" + "@email.com",
        city: "Houston",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Richard",
        phone: "987654321",
        email: "richard" + "@email.com",
        city: "Los Angeles",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Joseph",
        phone: "987654321",
        email: "joseph" + "@email.com",
        city: "Miami",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Thomas",
        phone: "987654321",
        email: "thomas" + "@email.com",
        city: "New York",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Charles",
        phone: "987654321",
        email: "charles" + "@email.com",
        city: "Chicago",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Daniel",
        phone: "987654321",
        email: "daniel" + "@email.com",
        city: "Houston",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Matthew",
        phone: "987654321",
        email: "matthew" + "@email.com",
        city: "Los Angeles",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Anthony",
        phone: "987654321",
        email: "anthony" + "@email.com",
        city: "Miami",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Donald",
        phone: "987654321",
        email: "donald" + "@email.com",
        city: "New York",
        role: "patient"
    },
    {
        id: uuid(),
        name: "Mark",
        phone: "987654321",
        email: "mark" + "@email.com",
        city: "Chicago",
        role: "patient"
    }

];

let appointments = [
    {
        id: uuid(),
        patient: users[3].id,
        specialist: users[0].id,
        date: "2024-09-01",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[6].id,
        specialist: users[0].id,
        date: "2024-09-02",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[4].id,
        specialist: users[2].id,
        date: "2024-09-03",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[5].id,
        specialist: users[2].id,
        date: "2024-09-04",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[7].id,
        specialist: users[0].id,
        date: "2024-09-04",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[8].id,
        specialist: users[0].id,
        date: "2024-09-04",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[9].id,
        specialist: users[2].id,
        date: "2024-09-04",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[4].id,
        specialist: users[2].id,
        date: "2024-09-04",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[3].id,
        specialist: users[0].id,
        date: "2024-09-09",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[5].id,
        specialist: users[0].id,
        date: "2024-09-10",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[6].id,
        specialist: users[2].id,
        date: "2024-09-10",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[7].id,
        specialist: users[2].id,
        date: "2024-09-10",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[8].id,
        specialist: users[0].id,
        date: "2024-09-11",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[6].id,
        specialist: users[0].id,
        date: "2024-09-11",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[9].id,
        specialist: users[2].id,
        date: "2024-09-12",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[6].id,
        specialist: users[2].id,
        date: "2024-09-12",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[10].id,
        specialist: users[0].id,
        date: "2024-09-12",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[10].id,
        specialist: users[0].id,
        date: "2024-09-12",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[9].id,
        specialist: users[2].id,
        date: "2024-09-13",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[4].id,
        specialist: users[2].id,
        date: "2024-09-14",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[3].id,
        specialist: users[0].id,
        date: "2024-09-14",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[4].id,
        specialist: users[0].id,
        date: "2024-09-14",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[5].id,
        specialist: users[2].id,
        date: "2024-09-14",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[6].id,
        specialist: users[2].id,
        date: "2024-09-14",
        status: "accepted"
    },
    {
        id: uuid(),
        patient: users[7].id,
        specialist: users[0].id,
        date: "2024-09-15",
        status: "pending"
    },
    {
        id: uuid(),
        patient: users[8].id,
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
        role: String!
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

        updateAppointment(
            id: ID!
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
        },
        updateAppointment: (root, args) => {
            const appointment = { ...args };
            appointments = appointments.map(a => a.id === args.id ? appointment : a);
            return appointment;
        },
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
