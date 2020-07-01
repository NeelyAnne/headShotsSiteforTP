import React,{useState} from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import ImagePreview from "./ImagePreview";
import ShowBtn from './ShowBtn'

function CameraComponent (props) {
    const [dataUri, setDataUri] = useState('');
    const isFullscreen = false;


    function handleTakePhoto(dataUri) {
        console.log('takePhoto');
    }

    function handleTakePhotoAnimationDone(dataUri) {
        console.log(dataUri, 'takePhoto');
        setDataUri(dataUri);
    }

    function handleCameraError(error) {
        console.log('handleCameraError', error);
    }

    function handleCameraStart(stream) {
        console.log('handleCameraStart');
    }

    function handleCameraStop() {
        console.log('handleCameraStop');
    }

    function resetState(){
        setDataUri(null);
    }

    return (
        <div>
            <div className="cameraDiv">
            <div className="camera">
                <div className="showBtn">
                    <ShowBtn />
                </div>
            {(dataUri)
                ? 
                <><ImagePreview dataUri={dataUri}
                                isFullscreen={isFullscreen}
                /> 
                <button onClick={resetState}>Retake</button>
                </>
                :
                
                <Camera 
                        onTakePhoto={(dataUri) => {
                            handleTakePhoto(dataUri);
                        }}
                        onTakePhotoAnimationDone={(dataUri) => {
                            handleTakePhotoAnimationDone(dataUri);
                        }}
                        onCameraError={(error) => {
                            handleCameraError(error);
                        }}
                        onCameraStart={(stream) => {
                            handleCameraStart(stream);
                        }}
                        onCameraStop={() => {
                            handleCameraStop();
                        }}
                        idealResolution = {{width: 640, height: 480}}
                        isMaxResolution = {true}
                        idealFacingMode = {FACING_MODES.ENVIRONMENT}
                        imageType = {IMAGE_TYPES.JPG}
                        imageCompression = {0.97}
                        isImageMirror = {true}
                        isSilentMode = {false}
                        isDisplayStartCameraError = {true}
                        isFullscreen = {false}
                        sizeFactor = {1}
                />
            }</div></div>
        </div>
        
    );
}

export default CameraComponent;