const Sequelize = require('sequelize');
const conn = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/acme_talent_agency'
);

const { STRING } = Sequelize;

//MODELS:
const Client = conn.define('client', {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
});

const Skill = conn.define('skill', {
  name: {
    type: STRING,
    unique: true,
    allowNull: false,
  },
});

const ClientSkills = conn.define('clientSkills', {});

// ASSOCIATIONS:
ClientSkills.belongsTo(Client);
ClientSkills.belongsTo(Skill);
Client.hasMany(ClientSkills);
Skill.hasMany(ClientSkills);

const data = {
  clients: ['Mario', 'Luigi', 'Peach', 'Yoshi', 'Bowser'],
  skills: [
    'Running',
    'Jumping',
    'Eating Mushrooms',
    'Killing Bad Guys',
    'Being A Bad Guy',
    'Shooting Fireballs',
    'Collecting Coins',
    'Kidnapping',
    'Getting Kidnapped',
  ],
};

const syncAndSeed = async () => {
  try {
    await conn.sync({ force: true });
    const [mario, luigi, peach, yoshi, bowser] = await Promise.all(
      data.clients.map((client) => {
        return Client.create({ name: client });
      })
    );
    const [
      running,
      jumping,
      eating,
      killing,
      being,
      shooting,
      collecting,
      kidnapping,
      kidnapped,
    ] = await Promise.all(
      data.skills.map((skill) => {
        return Skill.create({ name: skill });
      })
    );

    await Promise.all([
      ClientSkills.create({ clientId: mario.id, skillId: running.id }),
      ClientSkills.create({ clientId: mario.id, skillId: jumping.id }),
      ClientSkills.create({ clientId: mario.id, skillId: shooting.id }),
      ClientSkills.create({ clientId: mario.id, skillId: killing.id }),
      ClientSkills.create({ clientId: luigi.id, skillId: running.id }),
      ClientSkills.create({ clientId: luigi.id, skillId: collecting.id }),
      ClientSkills.create({ clientId: luigi.id, skillId: eating.id }),
      ClientSkills.create({ clientId: peach.id, skillId: running.id }),
      ClientSkills.create({ clientId: peach.id, skillId: kidnapped.id }),
      ClientSkills.create({ clientId: yoshi.id, skillId: jumping.id }),
      ClientSkills.create({ clientId: yoshi.id, skillId: eating.id }),
      ClientSkills.create({ clientId: bowser.id, skillId: kidnapping.id }),
      ClientSkills.create({ clientId: bowser.id, skillId: being.id }),
    ]);

    console.log('...seeded!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  syncAndSeed,
  models: {
    Client,
    Skill,
    ClientSkills,
  },
};
