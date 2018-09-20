import React from 'react';
import './DrumPad.css';

const DrumPad = () => {
  function aud_play_pause(audioID) {
    var myAudio = document.getElementById(audioID);
    myAudio.play();
  }
  return <div>
    <audio className="clip" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/SD2510.wav" autostart="false" id="Q"></audio>
    <audio className="clip" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/zapsplat_musical_cymbal_crash_tap_light_thin_stick_001_17604.mp3" autostart="false" id="W"></audio>
    <audio className="clip" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/14146.wav" autostart="false" id="E"></audio>
    <audio className="clip" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/initiatormindloop2.wav" autostart="false" id="A"></audio>
    <audio className="clip" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/sa9demo5.mp3" autostart="false" id="S"></audio>
    <audio className="clip" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/rim.wav" autostart="false" id="D"></audio>
    <audio className="clip" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/Ethnic-Tribal-Drums-13443-Free-Loops.com_.mp3" autostart="false" id="Z"></audio>
    <audio className="clip" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/ELTOM3.wav" autostart="false" id="X"></audio>
    <audio className="clip" src="https://avadawebsitesolutions.com/wp-content/uploads/2018/08/Beat-Box-Kick-1-3168-Free-Loops.com_.mp3" autostart="false" id="C"></audio>
    <button id="Q" className="col-3 drum-pad button" onClick={() => aud_play_pause("Q")}>Q</button>;
    <button id="W" className="col-3 drum-pad" onClick={() => aud_play_pause("W")}>W</button>;
    <button id="E" className="col-3 drum-pad" onClick={() => aud_play_pause("E")}>E</button>;
    <button id="A" className="col-3 drum-pad" onClick={() => aud_play_pause("A")}>A</button>;
    <button id="S" className="col-3 drum-pad" onClick={() => aud_play_pause("S")}>S</button>;
    <button id="D" className="col-3 drum-pad" onClick={() => aud_play_pause("D")}>D</button>;
    <button id="Z" className="col-3 drum-pad" onClick={() => aud_play_pause("Z")}>Z</button>;
    <button id="X" className="col-3 drum-pad" onClick={() => aud_play_pause("X")}>X</button>;
    <button id="C" className="col-3 drum-pad" onClick={() => aud_play_pause("C")}>C</button>;
  </div>
}

export default DrumPad;
