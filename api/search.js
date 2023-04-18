import { axios } from 'axios';

module.exports = async (req, res) => {
    const videoId = req.query.videoId;

    if (!videoId) {
        return res.status(400).json({ error: 'Missing query parameter "videoId"' });
    }

    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
                part: 'snippet',
                id: videoId,
                key: process.env.YOUTUBE_API_KEY,
            },
        });

        return res.status(200).json(response.data);
    } catch (error) {
        console.error(error);

        return res.status(500).json({ error: 'Failed to fetch data from YouTube API' });
    }
};
