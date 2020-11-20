//dependencies >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const express = require('express');
const router = express.Router();
const Client = require('../models/client');

//SEED ROUTE: drop and seed database <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const clientSeed = require('../models/clientSeed');
router.get('/seed', (req, res) => {
  
  // seed database with data from seed file
  Client.create(clientSeed, (error, data) => {
    error ? res.status(400).json(error) : res.status(200).json(data);
  })
})

//READ ROUTE: get all entries <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
router.get('/', (req, res) => {
    Client.find({}, (error, allClients) => {
       res.render('crm', {
        clients: allClients
      })
    })
  })
//CREATE PAGE: render the new ent form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.get('/new', (req, res) => {
    res.render('new')
  })

//DELETE ROUTE: delete entry  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
router.delete('/:id', (req, res) => {
    Client.findByIdAndDelete(req.params.id, (error, deletedClient) => {
      res.redirect('/crm')
    })
  })

//UPDATE ROUTE: update entry  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.put('/:id', (req, res) => {
    Client.findByIdAndUpdate(req.params.id, req.body, (error, updatedClient) => {
      res.redirect(`/crm/${req.params.id}`)
    })
  })
//CREATE ROUTE: create new entry  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
router.post('/', (req, res) => {
    Client.create(req.body, (error, newClient) => {
      res.redirect('/crm');
    })
  })
//EDIT PAGE: render edit entry form >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
router.get('/edit/:id', (req, res) => {
    Client.findById(req.params.id, (error, foundClient) => {
      res.render('edit', {
        client: foundClient
      })
    })
  })
//READ ROUTE: get single entry <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
router.get('/:id', (req, res) => {
    Client.findById(req.params.id, (error, foundClient) => {
      res.render('show', {
        client: foundClient
      })
    })
  })
//exports >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

module.exports = router;