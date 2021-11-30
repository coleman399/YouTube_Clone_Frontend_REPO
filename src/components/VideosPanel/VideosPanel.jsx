import React, {useState} from 'react';
import VideoCard from './VideoCard'
import './VideosPanel.css';

const tabContent = (props, toggle) => {
    let videos = "";

    if (toggle === 1) {
        if (props.searchVideos.length === 0){
            videos = <></>
        } else {
            videos = 
                <>
                    <div> 
                        <VideoCard 
                            title={props.searchVideos[1].snippet.title} 
                            thumbnail={props.searchVideos[1].snippet.thumbnails.high.url}
                            videoId={props.searchVideos[1].id.videoId}
                            searchVideo={props.searchVideo}
                        />
                    </div>
                    <div>
                        <VideoCard 
                            title={props.searchVideos[2].snippet.title} 
                            thumbnail={props.searchVideos[2].snippet.thumbnails.high.url}
                            videoId={props.searchVideos[2].id.videoId}
                            searchVideo={props.searchVideo}
                        />
                    </div>
                    <div>
                        <VideoCard 
                            title={props.searchVideos[3].snippet.title} 
                            thumbnail={props.searchVideos[3].snippet.thumbnails.high.url}
                            videoId={props.searchVideos[3].id.videoId}
                            searchVideo={props.searchVideo}
                        />
                    </div>
                    <div>
                        <VideoCard 
                            title={props.searchVideos[4].snippet.title} 
                            thumbnail={props.searchVideos[4].snippet.thumbnails.high.url}
                            videoId={props.searchVideos[4].id.videoId}
                            searchVideo={props.searchVideo}
                        />
                    </div>
                </>
        }     
    } else {
        if (props.relatedVideos.length === 0){
            videos = <></>
        } else {
            videos = 
                <>
                    <div> 
                        <VideoCard 
                            title={props.relatedVideos[1].snippet.title} 
                            thumbnail={props.relatedVideos[1].snippet.thumbnails.high.url}
                            videoId={props.relatedVideos[1].id.videoId}
                            searchVideo={props.searchVideo}
                        />
                    </div>
                    <div>
                        <VideoCard 
                            title={props.relatedVideos[2].snippet.title} 
                            thumbnail={props.relatedVideos[2].snippet.thumbnails.high.url}
                            videoId={props.relatedVideos[1].id.videoId}
                            searchVideo={props.searchVideo}
                        />
                    </div>
                    <div>
                        <VideoCard 
                            title={props.relatedVideos[3].snippet.title} 
                            thumbnail={props.relatedVideos[3].snippet.thumbnails.high.url}
                            videoId={props.relatedVideos[1].id.videoId}
                            searchVideo={props.searchVideo}
                        />
                    </div>
                    <div>
                        <VideoCard 
                            title={props.relatedVideos[4].snippet.title} 
                            thumbnail={props.relatedVideos[4].snippet.thumbnails.high.url}
                            videoId={props.relatedVideos[1].id.videoId}
                            searchVideo={props.searchVideo}
                        />
                    </div>
                </>
        } 
    }
    return videos;
}

const VideosPanel = (props) => {
    const [toggle, setToggle]=useState(1)

    return (
        <div className="container">
            <div className="nav nav-tabs" role="tablist">
                <button className={toggle === 1 ? "nav-link active" : "nav-link"} onClick={() => setToggle(1)}>Search</button>
                <button className={toggle === 2 ? "nav-link active" : "nav-link"} onClick={() => setToggle(2)}>Related</button>
            </div>
            <div className="tab-content">
                <div>{tabContent(props, toggle)}</div>
            </div>
        </div>
    )
}

export default VideosPanel;