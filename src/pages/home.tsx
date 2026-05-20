import { useNavigate } from "react-router-dom"

const Main = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col gap-6 justify-center items-center h-full">
            <h1 className="text-primary text-center text-2xl font-aston">Abdullah <span className="text-secondary">&</span> Sehar</h1>
            <h4 className="text-secondary text-center text-xl">31.05.2026</h4>
            <div className="w-full flex justify-center relative">
                <img className="w-sm h-auto" src="/envelope-close.png" alt="" />
                <div onClick={() => navigate("/details")} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full  bg-transparent cursor-pointer " />
            </div>
            <h4 className="text-primary text-center text-lg font-normal">Click to open </h4>
        </div>
    )
}

export default Main