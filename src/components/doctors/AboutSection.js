import React, { useState } from "react";
import DoctorModal from "../Modals/DoctorModal.js";

function AboutSection({ hero_data, doctors_data }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState();
  const aboutSectionText = hero_data.doctorsPageAboutSection;
  const doctorsBlock = doctors_data.map((doctor, index) => {
    return (
      <div key={index} className="doctor-summary">
        <div className="doctor-summary-image">
          {/* TO DO: ensure that any picture will work */}
          <img
            src={doctor.doctorsPicture.mediaItemUrl}
            alt={doctor.doctorsPicture.altText}
          />
        </div>
        <h4 className="doctors-name">{doctor.doctorsName}</h4>
        <h6 className="specialty">{doctor.doctorsSpecialty}</h6>
        <button className="unbound-button" onClick={() => openModal(doctor)}>
          view profile
        </button>
      </div>
    );
  });

  function openModal(doctor) {
    setShowModal(!showModal);
    setSelectedDoctor(doctor);
  }
  return (
    <div className="doctors-page-about-section-container">
      <div className="doctors-page-about-section-text">
        <h5>{aboutSectionText}</h5>
      </div>
      <div className="doctors-page-about-section-doctors">{doctorsBlock}</div>
      <DoctorModal
        showModal={showModal}
        setShowModal={setShowModal}
        selectedDoctor={selectedDoctor}
      />
    </div>
  );
}

export default AboutSection;
