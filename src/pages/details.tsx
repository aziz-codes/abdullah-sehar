
const Details = () => {
    const calculateDaysLeft = () => {
        const weddingDate = new Date("2026-05-31T00:00:00");
        const today = new Date();
        const diffTime = weddingDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays > 0 ? diffDays : 0;
    };

    const daysLeft = calculateDaysLeft();

    return (
        <div className="flex justify-center items-center  flex-col relative">

            <div className="relative">
                <img className="w-md h-auto" src="/envelope-open.png" alt="" />
                <img className="absolute top-72 -left-14 h-auto w-30 z-10" src='/flowers-main.png' />
                <div className="relative flex items-start gap-0 ">
                    <div className="flex flex-col relative -top-12   -left-12">
                        <img src="/sehar.png" className="h-auto w-68 z-20 " />
                        <img src="/flower-frame.png" className="w-full object-cover -rotate-180 h-6" />
                        <div className="flex items-center relative">
                            <img src="nikaah.png" className="w-xs h-auto border-8 border-white z-50" />
                            <div className="relative ">
                                <div className="absolute -top-40 left-0 w-xs flex flex-col items-end">
                                    <img src="/single-flower.png" className="w-16 object-contain z-40 -right-10 rotate-20 h-auto absolute top-0" />
                                    <img src="/weeding-photos.png" className="w-full h-auto" />
                                    <div className="relative h-24 w-full flex justify-center mt-4">
                                        <img src="/button-frame.png" className="h-full w-full object-contain" />
                                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                                            <span className="text-white text-4xl font-serif leading-none">{daysLeft}</span>
                                            <span className="text-white text-sm font-aston leading-tight mt-1">Days to go!</span>
                                        </div>
                                    </div>
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