const { pool } = require('../config/databaseConnection');


// Create Room API
const createRoom = async (req, res) => {
  const { room_slug, room_image, room_title, bedroom_count } = req.body;  
  try {
      const result = await pool.query(
          'INSERT INTO room_information_2 (room_slug, room_image, room_title, bedroom_count) VALUES ($1, $2, $3, $4) RETURNING *',
          [room_slug, room_image, room_title, bedroom_count]
      );
      console.log('Controller pass-----')
      const response = {
          message: "Successfully Created a Room.",
          info: result.rows[0]
      }
      res.status(201).json(response);
  } catch (error) {
      console.error('Error creating room:', error);
      res.status(500).json({ error: error.message });
  }
}

module.exports = {createRoom}