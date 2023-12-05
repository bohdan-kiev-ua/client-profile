'use client'

import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import InfoMobile from "@/components/InfoMobile";
import InfoDesktop from "@/components/InfoDesktop";

const firstGallery = [
    {
        height: '100%',
        src: "/images/photos/IMG_5563.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_6218.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_6220.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_6221.JPG",
        width: '100%',
    },
];
const secondGallery = [
    {
        height: '100%',
        src: "/images/photos/IMG_6222.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_6223.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_6651.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_6673.JPG",
        width: '100%',
    },
];
const thirdGallery = [
    {
        height: '100%',
        src: "/images/photos/IMG_6692.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_7401.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_7406.JPG",
        width: '100%',
    },
];
const fourthGallery = [
    {
        height: '100%',
        src: "/images/photos/IMG_7408.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_7418.JPG",
        width: '100%',
    },
    {
        height: '100%',
        src: "/images/photos/IMG_7423.JPG",
        width: '100%',
    },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center relative bg-black">
      <div className={`w-full h-auto flex justify-between flex-col max-w-[1920px] sm:mt-10 lg:mt-[80px] sm:px-10 lg:px-[80px]`}>
        <div className={`w-full flex justify-between xl:flex-row flex-col gap-[40px] mb-20`}>
            <div className={`aspect-[915/516] xl:max-w-[915px] w-full max-h-[516px] h-full`}>
                <iframe src="https://www.youtube.com/embed/Y-nUMmleGtg?si=Bb6BKIy1awQBuJB9"
                        className={`w-full h-full`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>
            <InfoMobile />
            <InfoDesktop />
        </div>
        <div className={`w-full hidden lg:grid grid-cols-3 xl:grid-cols-4 flex-wrap gap-8 mb-14 relative`}>
            <Gallery gallery={firstGallery}/>
            <Gallery gallery={secondGallery}/>
            <Gallery gallery={thirdGallery}/>
            <Gallery gallery={fourthGallery}/>
        </div>
        <div className={`flex sm:hidden flex-col gap-8 mb-8`}>
          <Gallery gallery={firstGallery}/>
          <Gallery gallery={secondGallery}/>
        </div>
        <div className={`flex justify-between flex-col sm:flex-row gap-16 mb-14`}>
          <div className={`aspect-[630/500] sm:max-w-[50%] w-full max-h-[300px] sm:max-h-[200px] lg:max-h-[300px] xl:max-h-[500px] h-full`}>
              <iframe src="https://www.youtube.com/embed/KrBykje3n3Y?si=rnLFram9AFcEOdcK"
                      className={`w-full h-full`}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>
              </iframe>
          </div>
          <div className={`aspect-[630/500] sm:max-w-[50%] w-full max-h-[300px] sm:max-h-[200px] lg:max-h-[300px] xl:max-h-[500px] h-full gap-8`}>
              <iframe src="https://www.youtube.com/embed/sNCMbE0l27U?si=StxAKTfCaCP-8gPj"
                      className={`w-full h-full`}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>
              </iframe>
          </div>
        </div>
          <div className={`flex sm:hidden flex-col gap-8 mb-8`}>
              <Gallery gallery={thirdGallery}/>
              <Gallery gallery={fourthGallery}/>
          </div>
      </div>
        <Footer />
    </div>
  )
}
