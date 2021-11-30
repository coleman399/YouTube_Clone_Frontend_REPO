![Screenshot (61)](https://user-images.githubusercontent.com/91759734/143957775-9bbb1342-676c-4c9d-978c-0f041f605254.png)
Learning objective: Use React.js, Axios, and CSS to build a responsive YouTube clone app to search for YouTube videos, channels, playlists, and live events via wrapper around Google YouTube API.

Technologies: React.js, React Forms, Django REST API, CSS, Axios, Postman, YouTube API, Create React

App

API Documentation:

• https://developers.google.com/youtube/v3/getting-started

• Google Developer Console: https://console.developers.google.com/

• Embedded Player: https://developers.google.com/youtube/player_parameters

• REST Request Documentation: https://developers.google.com/youtube/v3/docs/search/list#httprequest

• This is for searching for a video based on a query: o https://www.googleapis.com/youtube/v3/search?q={SEARCH QUERY HERE}&key={API KEY HERE}

• This is for searching for related videos: o https://www.googleapis.com/youtube/v3/search?relatedToVideoId={VIDEO ID HERE}&type=video&key={API KEY HERE}

Django REST API backend is for storing the comments for the videos. It is required to complete the backend API before moving on to any of the user stories. Once completed, send the repo with the completed code to your group of instructors to be checked off.

Total project points: /92.5

Total weighted points to final grade: /80

Features:

(5 points): As a developer, I want to make at least 25 good, consistent commits.

(10 points) As a developer, I want to set up my MySQL database and Django REST web API with appropriate urls, views, and models.

(5 points): As a web designer, I want to create a wireframe for my application

(5 points): As a developer, I want to create a React app using Create React App.

(5 points) As a developer, I want to use React.js best practices, which consists of creating class components and function components when appropriate, and properly passing state around as props.

(7.5 points) As a developer, I want to use CSS appropriately to make an aesthetically pleasing application.

(5 points) As a user, I want to be able to play a YouTube video in the embedded video player.

(10 points) As a developer, I want to use Axios to make GET requests to the YouTube API to pull in video id data.

(5 points) As a user, I want to be able to search for YouTube videos.

(5 points) As a user, I want to see a collection of videos related to my search.

(5 points) As a user, I want to see the title and description of the currently playing video.

(5 points) As a user, I want to be able to select a video to be played from a list of related videos to my search.

(7.5 points) As a user, I want to add a comment to a video in the comment section.

(5 points) As a user, I want to like or dislike a comment in the comment section.

(7.5 points) As a user, I want to reply to another comment in the comment section.
