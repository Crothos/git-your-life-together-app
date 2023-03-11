const db = require('../config/connection');
const { User } = require('../models');
const { Project } = require('../models');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
  try {
    await Project.deleteMany({});

    await Project.create(projectseeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
