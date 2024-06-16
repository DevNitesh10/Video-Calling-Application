import { useParams } from 'react-router-dom';
import '../App.css';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomID } = useParams();

    let myMeeting = async (element) => {
        try {
            // Generate kit token
            const appID = Number(import.meta.env.VITE_APPID);  // Converting to number
            const serverSecret = import.meta.env.VITE_SERVERSECRET;
            console.log('App ID:', appID);  // Debugging
            console.log('Server Secret:', serverSecret);  // Debugging

            if (!appID || !serverSecret) {
                throw new Error('App ID or Server Secret is missing');
            }

            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Test");
            const zp = ZegoUIKitPrebuilt.create(kitToken);

            console.log('Created ZegoUIKitPrebuilt instance:', zp);  // Debugging

            if (!zp || typeof zp.joinRoom !== 'function') {
                throw new Error('ZegoUIKitPrebuilt instance is not valid');
            }

            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Copy Link',
                        url: window.location.protocol + '//' + window.location.host + window.location.pathname + '?roomID=' + roomID,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                }
            });
        } catch (error) {
            console.error('Error in myMeeting:', error);  // Debugging
        }
    };

    return (
        <div className='App' ref={myMeeting}>
        </div>
    );
};

export default Room;
