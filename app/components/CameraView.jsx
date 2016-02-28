import React, { Component, PropTypes } from 'react';
import styles from './CameraView.module.css';

/* material design */
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ImageCameraAlt from 'material-ui/lib/svg-icons/image/camera-alt';
import fs from 'fs';
class CameraView extends Component {
    constructor(props) {
        super(props);
        this.selectors = {
            counter: 1
        };
    }

    initSelectors = function() {
        var s = this.selectors;
        s.video = document.getElementById("video");
        s.canvas = document.getElementById("canvas");
    }

    getUserMedia = function() {
        // show video on camera
        var videoObj = { "video": true },
            s = this.selectors,
            errBack = function(error) {
                console.log("Video capture error: ", error.code); 
            };

        s.context = s.canvas.getContext("2d");

        // since this is a webkit only app, there is no need for other conditions, only webkitGetUserMedia
        if (navigator.webkitGetUserMedia) {
            navigator.webkitGetUserMedia(videoObj, function(stream){
                s.video.src = window.URL.createObjectURL(stream);
                s.video.play();
            }, errBack);
        }

    };

    takePicture = function() {
        var s = this.selectors;
        s.context.drawImage(s.video, 0, 0, 640, 480);

        var data = s.canvas.toDataURL(''),
            imageBuffer = this.decodeBase64Image(data),
            fileName = 'test00' + s.counter + '.png';

        s.counter++;
        fs.writeFile(fileName, imageBuffer.data, function(err) {  }); // todo write a normal error
    };

    decodeBase64Image = function (dataString) {

        // remove all metadata from string, usually it's data:image/png
        var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
            response = {};

        if (matches.length !== 3) {
            return new Error('Invalid input string');
        }

        response.type = matches[1];
        response.data = new Buffer(matches[2], 'base64');

        return response;
    }

    componentDidMount = function() {
        // show video on camera
        this.initSelectors();
        this.getUserMedia();
    };

    render() {
        return(
            <div className="video-view">
                <canvas id="canvas" width="640" height="480"></canvas>
                <video id="video" autoPlay></video>
                <div className={styles['take-photo-btn']} onClick={this.takePicture.bind(this)}>
                    <FloatingActionButton secondary={true}>
                        <ImageCameraAlt />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}

export default CameraView;