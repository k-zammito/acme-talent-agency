const router = require('express').Router();
const {
  models: { Client, Skill, ClientSkills },
} = require('../db');

// GET /api/skills
router.get('/skills', async (req, res, next) => {
  try {
    res.send(
      await Skill.findAll({
        include: {
          model: ClientSkills,
        },
      })
    );
  } catch (error) {
    next(error);
  }
});

// GET / api / clients;
router.get('/clients', async (req, res, next) => {
  try {
    res.send(
      await Client.findAll({
        include: {
          model: ClientSkills,
        },
      })
    );
  } catch (error) {
    next(error);
  }
});

// GET /api/clientSkills
router.get('/clientskills', async (req, res, next) => {
  try {
    res.send(
      await ClientSkills.findAll({
        include: [
          {
            model: Client,
          },
          {
            model: Skill,
          },
        ],
      })
    );
  } catch (error) {
    next(error);
  }
});

// PUT /api/skills/:id
router.put('/skills/:id', async (req, res, next) => {
  try {
    const skill = await Skill.findByPk(req.params.id);
    res.send(await skill.update(req.body));
  } catch (error) {
    next(error);
  }
});

// POST /api/clientSkills
router.post('/clientskills', async (req, res, next) => {
  try {
    res.status(201).send(await ClientSkills.create(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/clientSkills
router.delete('/clientskills/:id', async (req, res, next) => {
  try {
    const clientSkills = await ClientSkills.findByPk(req.params.id);
    await clientSkills.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
