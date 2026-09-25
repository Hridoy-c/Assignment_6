
const HomeSkeleton = () => {
  const skeletonCards = Array.from({ length: 12 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-[#0b0d0f] text-white animate-pulse">
      
      <section className="bg-[#0b0d0f] w-[94vw] m-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="relative overflow-hidden rounded-2xl border border-[#292d33] bg-[#15181e]">
            <div className="grid min-h-[440px] grid-cols-1 items-center lg:grid-cols-2">
              
              <div className="px-6 pt-10 text-center sm:px-10 md:px-14 lg:py-16 lg:text-left">
                <div className="mb-5 h-4 w-32 bg-neutral-800 rounded mx-auto lg:mx-0"></div>
                
                <div className="mx-auto max-w-2xl lg:mx-0 space-y-3">
                  <div className="h-10 w-full bg-neutral-800 rounded sm:h-12 md:h-14 lg:h-[50px]"></div>
                  <div className="h-10 w-4/5 bg-neutral-800 rounded sm:h-12 md:h-14 lg:h-[50px] mx-auto lg:mx-0"></div>
                </div>

                <div className="mx-auto mt-6 max-w-xl lg:mx-0 space-y-2">
                  <div className="h-3.5 w-full bg-neutral-900 rounded"></div>
                  <div className="h-3.5 w-11/12 bg-neutral-900 rounded mx-auto lg:mx-0"></div>
                </div>

                <div className="mt-7 flex justify-center lg:justify-start">
                  <div className="h-12 w-44 bg-neutral-800 rounded-md"></div>
                </div>
              </div>

              <div className="relative flex min-h-[260px] items-center justify-center px-6 py-10 lg:min-h-[440px] lg:py-0">
                <div className="h-[220px] w-[220px] bg-neutral-800/60 rounded-xl sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]"></div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="w-[94vw] m-auto pb-16">
        <div className="mb-8 mt-10 px-9 flex flex-col items-center sm:items-start">
          <div className="h-9 w-44 bg-neutral-800 rounded-lg"></div>
          <div className="mt-2 h-4 w-72 bg-neutral-900 rounded-md"></div>
        </div>

        <div className="w-[90vw] m-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skeletonCards.map((index) => (
            <div 
              key={index} 
              className="rounded-2xl border border-[#292d33] bg-[#15181e] p-4 flex flex-col h-[380px]"
            >
              <div className="w-full aspect-video rounded-xl bg-neutral-900 border border-neutral-800/40 mb-4 shrink-0"></div>
              
              <div className="flex gap-2 mb-3">
                <div className="h-5 w-14 bg-neutral-850 bg-neutral-800 rounded-full"></div>
                <div className="h-5 w-14 bg-neutral-850 bg-neutral-800 rounded-full"></div>
              </div>
              
              <div className="h-5 w-5/6 bg-neutral-800 rounded-md mb-2"></div>
              <div className="h-3.5 w-1/2 bg-neutral-900 rounded-md mb-6"></div>
              
              <div className="mt-auto pt-4 border-t border-neutral-800/40 flex items-center justify-between">
                <div className="h-3.5 w-14 bg-neutral-900 rounded-sm"></div>
                <div className="h-3.5 w-14 bg-neutral-900 rounded-sm"></div>
                <div className="h-3.5 w-14 bg-neutral-900 rounded-sm"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomeSkeleton;