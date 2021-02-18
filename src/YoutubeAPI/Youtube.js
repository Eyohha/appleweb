import React, { useState, useEffect } from 'react'
import './Youtube.css'


function Youtube()
{
    const [youTubeVideos, setYouTubeVideos] = useState([])

    useEffect(() =>
    {
        fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDpAiHo-UsDDsu8S6tk_o7oUNWapjKZing&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6')
            .then((res) => res.json())
            .then((data) => setYouTubeVideos(data.items))
    }, [])

    return (
        <section className='youtubeVideosBox'>
            <div className="allVideosBox">
                <div className="container">
                    <div className="row h-100 align-items-center justify-content-center text-center">
                        <div className="col-12">
                            <div className="vidTitle bold video-title-Box">
                                Latest Videos
                            </div>
                        </div>
                        {youTubeVideos.map((singleVideo, i) =>
                        {
                            let vidId = singleVideo.id.videoId;
                            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                            //or u can start by writing 'return' here....u don't have to use a var and use return last...as an alternative.
                            let videoBox = (
                                <div key={i} className="col-sm-12 col-md-4">
                                    <div className="singleVideoBox">
                                        <div className="videoThumbnail">
                                            <a href={vidLink} target="_blank">
                                                <img src={singleVideo.snippet.thumbnails.high.url} />
                                            </a>
                                        </div>
                                        <div className="videoInfoBox">
                                            <div className="videoTitle">
                                                <a href={vidLink} target="_blank">
                                                    {singleVideo.snippet.title}
                                                </a>
                                            </div>
                                            <div className="videoDescrip">
                                                {singleVideo.snippet.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                            return videoBox;
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Youtube;

