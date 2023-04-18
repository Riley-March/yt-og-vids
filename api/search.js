const axios = require('axios');

module.exports = async (req, res) => {
  const query = req.query.q;

  if (!query) {
    return res.status(400).json({ error: 'Missing query parameter "q"' });
  }

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        type: 'video',
        q: query,
        maxResults: 10,
        key: process.env.YOUTUBE_API_KEY,
      },
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to fetch data from YouTube API' });
  }
};

