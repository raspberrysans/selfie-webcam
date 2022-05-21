import * as React from "react";
import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import Grid from "@mui/material/Grid";
import ReplayIcon from "@mui/icons-material/Replay";
import { storage } from "./firebase";
import { ref, uploadString } from "firebase/storage";
export const WebcamComponent = () => {
  const videoConstraints = {
    width: "100%",
    height: "100%",
    facingMode: "user",
    // facingMode: { exact: "environment" }
  };
  // creating webcam reference
  const webcamRef = useRef(null);

  // imgSrc stores the image
  const [imgSrc, setImgSrc] = useState(null);

  // variable that controls if the camera is open or not
  const [startCam, setStartCam] = useState(false);
  const onCapture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const imageFilename = "selfie";
  const [counter, setCounter] = useState(0);
  const usePhoto = () => {
    if (imgSrc) {
      try {
        const storageRef = ref(
          storage,
          "sanscam/" + imageFilename + counter.toString()
        );
        uploadString(storageRef, imgSrc, "data_url").then((snapshot) => {
          console.log("Uploaded a data_url string!");
        });
      } catch (e) {
        console.log(e);
      }

      setImgSrc(null);
      setCounter(counter + 1);
    }
  };

  const startCamera = () => {
    setStartCam(true);
  };

  const stopCamera = () => {
    setStartCam(false);
    setImgSrc(null);
  };

  const exampleImage =
    "https://images.unsplash.com/photo-1529650604660-cec743ea7788?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340";
  return (
    <div
      style={{
        alignSelf: "center",
        paddingHorizontal: "20%",
        fontFamily: "monospace",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: "2px",
        backgroundColor: "#020202",
        paddingBottom: "10%",
      }}
    >
      {startCam ? (
        <>
          {imgSrc ? (
            <>
              <img alt="clicked from webcam" src={imgSrc} />
              <Grid container direction="row" justifyContent="center">
                <Grid
                  onClick={() => {
                    setImgSrc(null);
                  }}
                  item
                  sx={{
                    borderRadius: "1.33rem",
                    paddingTop: "10%",
                    alignItems: "center",
                    padding: "1.25rem",
                  }}
                >
                  <ReplayIcon sx={{ fontSize: 25, color: "#fff" }} />
                </Grid>
                <Grid
                  sx={{
                    width: "40%",
                    backgroundColor: "#fd0159",
                    borderRadius: "1.33rem",
                    paddingTop: "10%",
                    alignItems: "center",
                    padding: "1.25rem",
                  }}
                  onClick={usePhoto}
                  item
                >
                  <div
                    style={{
                      color: "#fff",
                      fontSize: 18,
                      marginLeft: 5,
                      textAlign: "center",
                    }}
                  >
                    Save Image
                  </div>
                </Grid>
              </Grid>
              <div
                style={{
                  width: "80%",
                  backgroundColor: "#feefe0",
                  borderRadius: "1.33rem",
                  alignItems: "center",
                  padding: "2%",
                  margin: "0 auto",
                  marginTop: "5%",
                }}
                onClick={stopCamera}
              >
                <div
                  style={{
                    color: "#000",
                    fontSize: 20,
                    marginLeft: 5,
                    textAlign: "center",
                  }}
                >
                  Stop Camera
                </div>
              </div>
            </>
          ) : (
            <div
              style={{
                backgroundColor: "#020202",
                paddingBottom: "10%",
              }}
            >
              <Webcam
                audio={false}
                style={{
                  width: "80%",
                  height: "70%",
                  objectFit: "cover",
                  borderRadius: 16,
                }}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
              />
              <div
                style={{
                  width: "80%",
                  backgroundColor: "#fd0159",
                  borderRadius: "1.33rem",
                  alignItems: "center",
                  padding: "2%",
                  margin: "0 auto",
                }}
                onClick={onCapture}
              >
                <div
                  style={{
                    color: "#fff",
                    fontSize: 20,
                    marginLeft: 5,
                    textAlign: "center",
                  }}
                >
                  Capture
                </div>
              </div>
              <div
                style={{
                  width: "80%",
                  backgroundColor: "#feefe0",
                  borderRadius: "1.33rem",
                  alignItems: "center",
                  padding: "2%",
                  margin: "0 auto",
                  marginTop: "5%",
                }}
                onClick={stopCamera}
              >
                <div
                  style={{
                    color: "#000",
                    fontSize: 20,
                    marginLeft: 5,
                    textAlign: "center",
                  }}
                >
                  Stop Camera
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <img
            alt="neon pink smiley face"
            src={exampleImage}
            style={{
              width: "80%",
              height: "70%",
              objectFit: "cover",
              borderRadius: 20,
            }}
          />
          <Grid
            onClick={startCamera}
            container
            direction="row"
            justifyContent="center"
            sx={{
              width: "80%",
              backgroundColor: "#fd0159",
              borderRadius: "1.33rem",
              paddingTop: "10%",
              alignItems: "center",
              padding: "1.25rem",
              margin: "0 auto",
            }}
          >
            <Grid item>
              <CameraAltIcon sx={{ fontSize: 25, color: "#fff" }} />
            </Grid>
            <Grid item>
              <div
                style={{
                  color: "#fff",
                  fontSize: 20,
                  marginLeft: 5,
                  textAlign: "center",
                }}
              >
                촬영하기
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
};
