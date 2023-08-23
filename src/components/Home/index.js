import logoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import BG from '../../assets/videos/BG.mp4'

const Home = () => {
  return (
    <>
    <div className="container home-page">
      <video src={BG } autoPlay loop muted></video>
      <div className="text-zone">
        <h1>Hi, I'm Itay shechter</h1>
        <br />
        <h2> deshakran retzini</h2>
        </div>
    </div>
    </>
  )
}

export default Home
