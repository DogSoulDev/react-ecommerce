import ReactPlayer from "react-player";
import { Modal, useModal, Button, Text } from "@nextui-org/react";
import { BsPlayCircle } from "react-icons/bs";
import "./PresentationVideo.css";

function PresentationVideo() {
  const { setVisible, bindings } = useModal();
  return (
      <div className="video_player__container">
        <div className="video_btn__container ">
          <button className="play_button"  onClick={() => setVisible(true)}>
            <BsPlayCircle size="6rem" />
          </button>
          <Modal
            blur
            scroll
            preventClose
            width="800px"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            {...bindings}
          >
            <Modal.Header>
              <Text id="modal-title" size={30}>
                Modal with a lot of content
              </Text>
            </Modal.Header>
            <Modal.Body>
              <ReactPlayer
                url="https://youtu.be/fWoxv60cz00"
                controls
                loop
                widht="100%"
                heigh="100%"
                muted
              />
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" onClick={() => setVisible(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="watch_video"> WATCH TRAILER</div>
      </div>
  );
}

export default PresentationVideo;
