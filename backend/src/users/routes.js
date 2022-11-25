    app.get('/Users', db.getUsers)
    app.get('/Users/:id', db.getUsersById)
    app.post('/Users', db.createUsers)
    app.put('/Users/:id', db.updateUsers)
    app.delete('/Users/:id', db.deleteUsers)