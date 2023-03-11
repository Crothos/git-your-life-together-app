const db = require('../config/connection');
const { User } = require('../models');
const { Project } = require('../models');
const userSeeds = require('./userSeeds.json');
const projectSeeds = require('./projectSeeds.json');


// db.once('open', async () => {
//   try {
//     await Project.deleteMany({});

//     await Project.create(projectSeeds);

//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }

//   console.log('all done!');
//   process.exit(0);
// });




db.once('open', async () => {
  try {
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < projectSeeds.length; i++) {
    //    IM CONFUSED ABOUT THIS PART
    const { _id, projectAuthor } = await Project.create(projectSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: projectAuthor },
        {
          $addToSet: {
            thoughts: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
