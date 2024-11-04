import Header from './components/landing-page/header';
import Footer from './components/landing-page/footer';
import LandingPageBody from './components/landing-page/body';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex-grow container justify-center items-center'>
        <Header/>
        <LandingPageBody/>
      </div>
        <Footer/>
    </div>
  );
}
