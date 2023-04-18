# Original Video Finder

Original Video Finder is a browser extension that helps users find the original video linked in the descriptions of YouTube reaction videos. This extension is available for Google Chrome, Firefox, and Safari.

## Features

- Automatically scans YouTube search results for reaction videos
- Retrieves the original video URL from the reaction video's description
- Redirects the user to the original video instead of the reaction video

## Installation

### Google Chrome

1. Download the `chrome` folder from the repository.
2. Navigate to `chrome://extensions/` in your browser.
3. Enable "Developer mode" in the top-right corner.
4. Click the "Load unpacked" button and select the downloaded `chrome` folder.
5. The extension should now be installed and active.

### Firefox

1. Download the `firefox` folder from the repository.
2. Navigate to `about:debugging#/runtime/this-firefox` in your browser.
3. Click "Load Temporary Add-on" and select the `manifest.json` file inside the downloaded `firefox` folder.
4. The extension should now be installed and active.

### Safari

1. Download the `safari` folder from the repository.
2. Open the `OriginalVideoFinder.xcodeproj` file in Xcode.
3. Ensure that you have a valid Apple Developer account and the necessary certificates and provisioning profiles.
4. Build and run the project (Cmd + R).
5. The extension should now be installed and active.

## Usage

Once the extension is installed, simply navigate to YouTube and perform a search. The extension will automatically scan the search results for reaction videos and redirect you to the original video when you click on a reaction video.

## License

MIT License. See the [LICENSE](LICENSE) file for more information.

