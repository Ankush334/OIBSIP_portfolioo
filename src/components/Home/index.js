import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import Loader from 'react-loaders'

const Home = () => {

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
            <h1>Hi <br/>I'm
            <img src={LogoTitle} alt="Developer" />
             HARMA ANKUSH
            <br/>
            Web Developer
            </h1>

            <h2>Frontend Developer</h2>
            <Link to='/contact'className='flat-button'>CONTACT ME</Link>
            </div>



        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Home