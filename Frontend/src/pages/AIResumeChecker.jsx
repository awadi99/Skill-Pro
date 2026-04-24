import { FileText } from "lucide-react";
import ResumeUploader from "../components/aiResumeChecker/ResumeUploader";
export default function AIResumeChecker() {

    return (
        <>
            <div className="flex justify-center">
                <div className="w-full max-w-3xl space-y-6">

                    <div className="flex-col items-center justify-center w-full max-w-7xl ">
                        <div className="  ">
                            <p className="mx-auto  bg-gradient-to-r from-blue-500 to-violet-500 h-17 w-16 px-3 py-3 rounded-3xl m-5 "><FileText size={40} color="white" /></p>

                            <p className="text-md sm:text-3xl font-bold text-white  text-center">AI Resume Checker</p>
                        </div>
                        <p className="text-gray-400 text-center text-md sm:text-[15px]">
                        Upload your resume and get instant AI-powered feedback, ATS score, keyword analysis, and section-by-section improvement tips.
                        </p>
                    </div>

                    <ResumeUploader/>






                </div>
            </div>

        </>
    )
}
      

