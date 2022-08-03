const express = require('express');
const { Usuario } = require('./models')
const router = express.Router();

router.get('/', async (req, res) => {
    res.send(await Usuario.findAll())
})

router.post('/', async(req, res) => {
    res.status(200).send(await Usuario.create(req.body))
})

router.get('/:id', async (req, res) => {
    let user = await Usuario.findByPk(req.params.id)
    user.set(req.body)
    await user.save()
    res.send(user)
})

router.delete('/:id', async (req, res) => {
    (await Usuario.findByPk(req.params.id)).destroy()
    res.status(200).send('ok')
})

module.exports = router;