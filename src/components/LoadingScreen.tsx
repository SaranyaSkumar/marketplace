// components/LoadingScreen.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

const LoadingScreen = () => {
    return (
        <div className='loadingScreen'>
            <FontAwesomeIcon icon={faCog} spin size="3x" />
        </div>
    );
}

export default LoadingScreen;
