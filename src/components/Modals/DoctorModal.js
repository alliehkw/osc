import Modal from "react-modal";
import X from "../svgs/X.js";

function DoctorModal({ showModal, setShowModal, selectedDoctor }) {
  return (
    <Modal
      className="doctor-modal"
      isOpen={showModal}
      appElement={document.getElementById("app")}
      contentLabel={
        "This is a pop-up modal which gives you more information about the doctors and their background."
      }
      shouldFocusAfterRender={true}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.60)",
          zIndex: "1000",
          overflowY: "auto",
        },
      }}
    >
      {selectedDoctor ? (
        <div className="doctor-modal-container">
          <div className="doctor-modal-left">
            <button className="exit-button" onClick={() => setShowModal(false)}>
              <X />
            </button>
            <div className="doctor-summary-image">
              {/* TO DO: ensure that any picture will work */}
              <img
                src={selectedDoctor.doctorsPicture.mediaItemUrl}
                alt={selectedDoctor.doctorsPicture.altText}
              />
            </div>
            {/* TO DO: make these links go somewhere  */}
            <div className="doctor-modal-buttons">
              <button className="unbound-button">resume</button>
              <button className="unbound-button">research</button>
              <button className="unbound-button">blog</button>
            </div>
          </div>
          <div className="doctor-modal-right">
            <h3>{selectedDoctor.doctorsName}</h3>
            <div className="doctor-profile-summary">
              {/* TO DO: add in the links for clinical research, etc. once I've finished the rest of the site nav  */}
              <p
                className="richText"
                dangerouslySetInnerHTML={{
                  __html: selectedDoctor.profileSummary,
                }}
              ></p>
            </div>
            <div className="medical-ed-images">
              {/* TO DO: add school, residency, and fellowship images to the doctors modals  */}
              <div className="medical-ed-image">
                <img
                  src={selectedDoctor.medicalSchoolImage.mediaItemUrl}
                  alt={selectedDoctor.medicalSchoolImage.altText}
                />
              </div>
              <div className="medical-ed-image">
                <img
                  src={selectedDoctor.residencyProgramImage.mediaItemUrl}
                  alt={selectedDoctor.residencyProgramImage.altText}
                />
              </div>{" "}
              <div className="medical-ed-image">
                <img
                  src={selectedDoctor.fellowshipProgramImage.mediaItemUrl}
                  alt={selectedDoctor.fellowshipProgramImage.altText}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}

export default DoctorModal;
