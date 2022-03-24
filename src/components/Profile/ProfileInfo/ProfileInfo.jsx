import reactDom from 'react-dom';
import pi from './ProfileInfo.module.css';


function ProfileInfo() {

    return(
        <div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=071cc90820434e8bb07924ca0e9cd923-5885656-images-thumbs&n=13" width='100%' height='100px'/>
            </div>
            <div>
                <img src="https://avatars.mds.yandex.net/i?id=8213a0b3dfa4e2e1896b902ee4a3f844-5707291-images-thumbs&n=13" width='200px' height='200px;'/>
            </div>
        </div>
    )

}

export default ProfileInfo;