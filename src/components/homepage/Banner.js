import { React } from 'react'
import background from '../../images/banner.jpg'

const height = window.innerHeight
const width = window.innerWidth

const Banner = () => {
    return <div className="BannerImg" style={{
        backgroundImage: `url(${background})`,  
        height: '400px',
        width: '100%',
        alignSelf: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize:  'auto auto',
        top: '0',
        backgroundPosition: 'center',
    }} />
}

export default Banner 

