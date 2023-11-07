'use client'

import Gallery from "@/components/Gallery";
import PrintButton from "@/components/PrintButton";
import Footer from "@/components/Footer";
import InfoMobile from "@/components/InfoMobile";
import InfoDesktop from "@/components/InfoDesktop";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center relative bg-black">
      <div className={`w-full h-auto flex justify-between flex-col max-w-[1920px] sm:mt-10 lg:mt-[80px] sm:px-10 lg:px-[80px]`}>
        <div className={`w-full flex justify-between xl:flex-row flex-col gap-[40px] mb-20`}>
            <div className={`aspect-[915/516] xl:max-w-[915px] w-full max-h-[516px] h-full`}>
                <iframe src="https://www.youtube.com/embed/VtVKiQOdwIY?si=jaV1gQXS-0u1FdpV"
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
            <Gallery />
            <Gallery />
            <Gallery />
            <Gallery />
        </div>
        <div className={`flex sm:hidden flex-col gap-8 mb-8`}>
          <Gallery />
          <Gallery />
        </div>
        <div className={`flex justify-between flex-col sm:flex-row gap-16 mb-14`}>
          <div className={`aspect-[630/500] sm:max-w-[50%] w-full max-h-[300px] sm:max-h-[200px] lg:max-h-[300px] xl:max-h-[500px] h-full`}>
              <iframe src="https://www.youtube.com/embed/VtVKiQOdwIY?si=jaV1gQXS-0u1FdpV"
                      className={`w-full h-full`}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>
              </iframe>
          </div>
          <div className={`aspect-[630/500] sm:max-w-[50%] w-full max-h-[300px] sm:max-h-[200px] lg:max-h-[300px] xl:max-h-[500px] h-full gap-8`}>
              <iframe src="https://www.youtube.com/embed/VtVKiQOdwIY?si=jaV1gQXS-0u1FdpV"
                      className={`w-full h-full`}
                      title="YouTube video player" frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>
              </iframe>
          </div>
        </div>
          <div className={`flex sm:hidden flex-col gap-8 mb-8`}>
              <Gallery />
              <Gallery />
          </div>
      </div>
        <Footer />
    </div>
  )
}
