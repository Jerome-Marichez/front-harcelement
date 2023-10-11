import React, { useState } from 'react';
import './video.css';
import keep from '../img/keep.png';
//import ReactPlayer from 'react-player';
import { useNavigate } from 'react-router-dom';
import video from '../img/video.m4v';

function VideoPage() {
    const [showVideo, setShowVideo] = useState(true);
    const [showContinueButton, setShowContinueButton] = useState(false);
    const navigate = useNavigate();

    const handleVideoEnd = () => {
        setShowVideo(false); // Cacher la vidéo
        setShowContinueButton(true); // Afficher le bouton "Continuer"
    };

    const handleContinueClick = () => {
        navigate('/Scene');
    };

    return (
        <div className="video-container">
            {showVideo && (
                <div className="video-wrapper">
                    <video
                        controls
                        autoPlay
                        className="fullscreen-video"
                        width="100%"
                        height="100%"
                        onEnded={handleVideoEnd}
                    >
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>
                </div>
            )}
            {showContinueButton && (
                <div className="continue-container">
                    <img src={keep} alt="Bouton Continuer" />
                    <button className="continue-button" onClick={handleContinueClick}>
                        Continuer
                    </button>
                </div>
            )}
        </div>
    );
}

export default VideoPage;
