const { AuthenticationError } = require('apollo-server-express');
const { User, Project } = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('projects')
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


// working now
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


// working now
removeProject: async (parent, { projectId }, context) => {
 if (context.user) {
        const project = await Project.findOneAndDelete({
          _id: projectId,
         projectAuthor: context.user.username,
        });
    
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { projects: projectId } },
       
        );
    
        return project;
      }
      throw new AuthenticationError('You need to be logged in!');
    },


// working with context/auth
updateProject: async (parent, {projectId, title, description}, context) => {
  if (context.user) {
    const project = await Project.findByIdAndUpdate( projectId, { 
      title: title, 
      description: description,
    });
    await User.findOneAndUpdate(
      { _id: context.user._id },
      { $set: { title, description } },
      {new: true}
    );
    return project;
  }
  throw new AuthenticationError('You need to be logged in!');
},





//  in theory how to remove a step
// removeStep: async (parent, {projectId, step}) =>{
//   return Project.findOneAndUpdate(
//     {_id: projectId},
//     { $pull: {steps: step} },
//     { new: true}
//   );
//   },


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
