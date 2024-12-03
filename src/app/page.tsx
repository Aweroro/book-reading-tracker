import Header from './components/landing-page/header';
import Footer from './components/landing-page/footer';
import LandingPageBody from './components/landing-page/body';
import MaxWidthWrapper from './components/ui-components/wrapper/MaxWidthWrapper';

export default function Home() {
  return (
   <>
    <MaxWidthWrapper>
    <div className='flex flex-col min-h-screen'>
      <div className='container items-center'>
        <Header/>
        <LandingPageBody/>
      </div>
    </div>
    </MaxWidthWrapper>
    <Footer/>
   </>
  );
}

