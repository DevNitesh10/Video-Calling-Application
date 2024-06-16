import { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [roomID, setRoomID] = useState('');  // Initialize with an empty string
    const navigate = useNavigate();

    const handleJoin = () => {
        if (roomID.trim()) {  // Ensure roomID is not empty
            navigate(`/room/${roomID}`);
        } else {
            alert("Please enter a Room ID");
        }
    }

    return (
        <div className="App">
            <input
                type="text"
                placeholder='Enter Room ID:'
                value={roomID}
                onChange={(e) => setRoomID(e.target.value)}
            />
            <button onClick={handleJoin}>Join</button>
        </div>
    )
}

export default Home;
    