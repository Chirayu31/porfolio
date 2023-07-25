import '../styles/intro.css'
import mainImg from '../assets/01.gif'
const Intro = () => {
    return (
        <div className='container'>
            {/* Img */}


            <div className='img-div'>
                <img src={mainImg} alt="" />
            </div>

            {/* subheading */}
            <p className='subheading' > Hi, I'm Chirayu Pancholi</p>

            {/* Heading */}
            <p className='heading' >
                Building Full Stack Websites
                and User Experience
            </p>

            <div className='gradient'></div>
        </div>
    )
}

export default Intro