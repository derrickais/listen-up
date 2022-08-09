const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
    likes: [Artist]
  }

  type Artist {
    _id: ID
<<<<<<< HEAD
    name: String,
    wiki: String,
    description: String,
=======
    name: String
    wiki: String
    description: String
    fanCount: Int
>>>>>>> 3f0c7ecf42685a553e2da8896604e0223af32467
    thoughts: [Thought]
    fans: [User]
  }

  type Thought {
    _id: ID
    artistName: String
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
    artists: [Artist]
    artist(name: String!): Artist
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
<<<<<<< HEAD
    addThought(thoughtText: String!, artistName: String, artistId: ID!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    addArtist(name: String!, wiki: String, description: String): Artist
=======
    addThought(thoughtText: String!, artistId: ID!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
    addArtist(name: String!, wiki: String!, description: String!): Artist
>>>>>>> 3f0c7ecf42685a553e2da8896604e0223af32467
    addFan(artistId: ID!, userId: ID!): Artist
    removeFan(artistId: ID!, userId: ID!): Artist
  }
`;

module.exports = typeDefs;
