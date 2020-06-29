import React from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import './camera.css';

 
// import ImagePreview from './ImagePreview'; // source code : ./src/demo/AppWithImagePreview/ImagePreview
 
function Cam (props) {
    function handleTakePhoto (dataUri) {
      // Do stuff with the photo...
      console.log('take a Photo');
    }
  
    function handleTakePhotoAnimationDone (dataUri) {
      // Do stuff with the photo...
      console.log('takePhoto');
    }
  
    function handleCameraError (error) {
      console.log('handleCameraError', error);
    }
  
    function handleCameraStart (stream) {
      console.log('handleCameraStart');
    }
  
    function handleCameraStop () {
      console.log('handleCameraStop');
    }
  
    return (
      <div>
        <div className="cameraClass">
      <div className="overlay" style={{max:"200px"}}></div>
      <div className="cameraDiv">
      <Camera 
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        onTakePhotoAnimationDone = { (dataUri) => { handleTakePhotoAnimationDone(dataUri); } }
        onCameraError = { (error) => { handleCameraError(error); } }
        idealFacingMode = {FACING_MODES.ENVIRONMENT}
        idealResolution = {{width: 640, height: 480}}
        imageType = {IMAGE_TYPES.JPG}
        imageCompression = {0.97}
        isMaxResolution = {true}
        isImageMirror = {true}
        isSilentMode = {false}
        isDisplayStartCameraError = {true}
        isFullscreen = {false}
        sizeFactor = {1}
        onCameraStart = { (stream) => { handleCameraStart(stream); } }
        onCameraStop = { () => { handleCameraStop(); } }
      />
      </div>
      <br />
      </div> 
      <div className="btnDiv">
        <button onClick={()=>{handleTakePhoto()}}>click me</button>
      </div>
      
      </div>
    );
  }
  
  export default Cam;