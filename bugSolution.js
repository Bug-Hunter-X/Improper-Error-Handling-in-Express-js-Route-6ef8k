const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const parsedUserId = parseInt(userId);

  if (isNaN(parsedUserId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  const user = users.find(user => user.id === parsedUserId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// ...other routes...