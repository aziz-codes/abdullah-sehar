
const Details = () => {
    return (
        <div className="flex justify-center items-center  flex-col">

            <div className="relative">
                <img className="w-md h-auto" src="/envelope-open.png" alt="" />
                <img className="absolute top-72 -left-14 h-auto w-30 z-10" src='/flowers-main.png' />
                <div className="relative flex items-start gap-0 ">
                    <div className="flex flex-col relative -top-12   -left-12">
                        <img src="/sehar.png" className="h-auto w-68 z-20 " />
                        <img src="/flower-frame.png" className="w-full object-cover -rotate-180 h-6" />
                        <div className="flex items-center relative">
                            <img src="nikaah.png" className="w-xs h-auto border-8 border-white z-50" />
                            <div className="">
                                <img src="/single-flower.png" className="w-16 object-contain z-40 -right-10 rotate-20 h-auto absolute top-0" />
                                <img src="/weeding-photos.png" className="w-xs h-auto absolute top-0" />
                                <div className="absolute left-2 top-6 bg-red-500 h-auto  w-80">
                                    <img src="/button-frame.png" className="h-full w-full object-cover" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative z-20 -top-20 -left-18">
                        <img src="/date-frame.png" className="h-auto w-70 " />
                        <img src="/flower-frame.png" className="w-70 h-20 absolute -bottom-12 object-contain z-10 -right-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details