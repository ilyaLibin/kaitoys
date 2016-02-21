import React, { Component, PropTypes } from 'react';


class CameraView extends Component {

    getUserMedia = function() {
        // show video on camera
        var video = document.getElementById("video"),
            videoObj = { "video": true },
            
            errBack = function(error) {
                console.log("Video capture error: ", error.code); 
            };

        // since this is a webkit only app, there is no need for other conditions, only webkitGetUserMedia
        if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia(videoObj, function(stream){
                video.src = window.webkitURL.createObjectURL(stream);
                video.play();
            }, errBack);
        }
    };

    componentDidMount = function() {
        // show video on camera
        // this.getUserMedia();
    };

    render() {
        return(
            <div>
                <video id="video" width="640" height="480" autoPlay></video>
            </div>
        )
    }

}

export default CameraView;