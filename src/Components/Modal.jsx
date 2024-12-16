import React from "react";
import PropTypes from "prop-types";
import "../Styles/Modal.css";

const Modal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-header">
          {item.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              alt={item.title || item.name}
              className="modal-image"
            />
          )}
          <div className="modal-title-section">
            <h2>{item.title || item.name}</h2>
            {item.vote_average && (
              <p className="modal-rating">
                <i className="fas fa-star"></i> {item.vote_average.toFixed(1)}
              </p>
            )}
          </div>
        </div>
        <div className="modal-body">
          <p>{item.overview}</p>
          {item.release_date && <p>Release Date: {item.release_date}</p>}
          {item.first_air_date && <p>First Air Date: {item.first_air_date}</p>}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
  }),
};

export default Modal;
