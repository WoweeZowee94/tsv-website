import { React } from 'react'
import background from '../../images/banner.jpg'

const Banner = () => {
    return <div className="BannerImg" style={{
        backgroundImage: `url(${background})`,  
        height: '500px',
        width: '100%',
        alignSelf: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:  'auto auto',
        justifySelf: 'center',
        backgroundPosition: 'center',
    }} />
}

export default Banner 

