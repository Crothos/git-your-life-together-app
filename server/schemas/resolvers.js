const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    // Camelias new code
    project: async(parent, { projectId }) => {
      return Project.findOne({ _id: projectId })

    },

  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      console.log("tacobell")
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },


// camelias code
// with context/auth when we get there
        addProject: async (parent, { title, description }, context) => {
  if (context.user) 
  { const project = await Project.create({
     title, 
     description,
     projectAuthor: context.user.username,
   });

   await User.findOneAndUpdate(
     {_Id: context.user._id},
     { $addToSet:  {projects: project._id }}
   );
   return project;
 }
 throw new AuthenticationError('You need to be logged in!');
},


// add context to this
removeProject: async (parent, { ProjectId },{user}) => {
 // if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: ProjectId,
        //  projectAuthor: context.user.username,
        });
    
        // await User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   { $pull: { projects: project._id } }
        // );
    
        return project;
    //  }
     // throw new AuthenticationError('You need to be logged in!');
    },

//not fully working yet
updateProject: async (parent, { ProjectId}, {title}, {description }) => {
  // Find and update the matching class using the destructured args
  return await Project.findOneAndUpdate(
    { ProjectId }, 
    { title },
    { description },
    // Return the newly updated object instead of the original
    { new: true }
  );
}


  },
};

module.exports = resolvers;






// without context addProject
// addProject: async (parent, { title, description, projectAuthor }) => {
//   const project = await Project.create({
//     title, 
//     description,
//     projectAuthor,
//   });
//  return project;
// }
