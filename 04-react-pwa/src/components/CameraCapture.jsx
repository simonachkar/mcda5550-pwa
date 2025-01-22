import { useRef, useState, useEffect } from 'react';
import './CameraCapture.css'; // Importing the CSS file for styling the component
import formatDateForFilename from '../utils/formatDateForFilename';

const CameraCapture = () => {
  // State to track if the camera is open or not
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  // Refs to hold references to the video element, media stream (for camera access), and ImageCapture instance (for capturing still photos)
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const imageCaptureRef = useRef(null);

  // Function to start the camera
  const startCamera = async () => {
    try {
      setIsCameraOpen(true); // Set the camera open state to true

      // Request access to the user's webcam
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream; // Store the stream in the ref

      // Set the video source to the stream from the camera
      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        // Get the video track from the stream and initialize the ImageCapture instance
        const track = stream.getVideoTracks()[0];
        imageCaptureRef.current = new ImageCapture(track); // Initialize ImageCapture with the track
      }
    } catch (error) {
      // Handle any errors that occur when accessing the camera
      console.error('Error accessing camera:', error);
    }
  };

  // Function to stop the camera and release resources
  const stopCamera = () => {
    if (streamRef.current) {
      const tracks = streamRef.current.getTracks(); // Get all video tracks from the stream
      tracks.forEach(track => track.stop()); // Stop each track (this stops the camera feed)
    }
    // Set camera state to false (camera is off)
    setIsCameraOpen(false);
  };

  // Function to capture a photo from the camera feed and save it
  const takePhoto = async () => {
    if (imageCaptureRef.current) {
      try {
        // Capture a photo using the ImageCapture instance
        const photoBlob = await imageCaptureRef.current.takePhoto();

        // Create a URL for the captured photo blob
        const photoURL = URL.createObjectURL(photoBlob);

        // Format the filename with a timestamp
        const timestamp = formatDateForFilename();
        const fileName = `${timestamp}.jpg`;

        // Create a temporary link element to trigger the download of the photo
        const link = document.createElement('a');
        link.href = photoURL; // Set the link href to the photo URL
        link.download = fileName; // Set the download attribute to the filename
        link.click(); // Trigger the download by simulating a click event
      } catch (error) {
        console.error('Error capturing photo:', error);
      }
    } else {
      console.error('ImageCapture is not initialized.');
    }
  };

  // Cleanup function that stops the camera stream when the component is unmounted
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        tracks.forEach(track => track.stop()); // Stop each track in the media stream to release the camera
      }
    };
  }, []);

  return (
    <div className="container">
      <div>
        {isCameraOpen ? (
          <div>
            {/* Video element to show the live camera feed */}
            <video
              ref={videoRef} // Reference to the video element
              autoPlay
              playsInline
              className="video"
            />
            <div className="buttonContainer">

              {/* Button to stop the camera */}
              <button onClick={stopCamera} className="button">
                Close Camera
              </button>

              {/* Button to capture a photo */}
              <button onClick={takePhoto} className="button">
                Take Photo
              </button>
            </div>
          </div>
        ) : (
          // Button to start the camera
          <button onClick={startCamera} className="button">
            Open Camera
          </button>
        )}
      </div>
    </div>
  );
};

export default CameraCapture;
