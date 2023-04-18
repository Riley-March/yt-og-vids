const processedVideoIds = new Set();

// Function to create a link element
function createLinkElement(url) {
    const link = document.createElement('a');
    link.href = url;
    link.textContent = ' (Original Video)';
    link.style.color = 'blue';
    link.target = '_blank';
    return link;
}

// Function to fetch video IDs from the search result page
function getVideoIds() {
    const videoIds = [];
    const videoLinks = document.querySelectorAll('#video-title');

    videoLinks.forEach((videoLink) => {
        if(videoLink.href) {
            const url = new URL(videoLink.href);
            const videoId = url.searchParams.get('v');
            if (videoId) {
                videoIds.push(videoId);
            }
        }
    });

    return videoIds;
}

// Function to fetch video details using the YouTube Data API
async function fetchVideoDetails(videoId) {
    const apiUrl = `http://localhost:3000/api/search?videoId=${videoId}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.items && data.items.length > 0) {
        return data.items[0].snippet;
    }

    return null;
}

// Function to process video descriptions and add original video links
async function processVideoDescriptions() {
    const videoIds = getVideoIds();

    for (const videoId of videoIds) {
        
        // Skip processing if the video ID has already been processed
        if (processedVideoIds.has(videoId)) {
            continue;
        }

        const videoDetails = await fetchVideoDetails(videoId);

        if (videoDetails) {
            const description = videoDetails.description;
            const youtubeUrlRegex = /https?:\/\/(?:www\.)?youtube\.com(?:\/c|\/user)?\/[^/ ]+(?:\/videos)?\/?\??(?:watch\?v=)?[^ ]+/;

            const matches = description.match(youtubeUrlRegex);

            if (matches) {
                const videoLink = document.querySelector(`#video-title[href*="${videoId}"]`);
                const originalVideoLink = createLinkElement(matches[0]);
                videoLink.parentNode.insertBefore(originalVideoLink, videoLink.nextSibling);
            }
        }

        // Mark the video ID as processed
        processedVideoIds.add(videoId);
    }
}

// Wait for the page to load, then process video descriptions
window.addEventListener('load', () => {
    processVideoDescriptions();
});
