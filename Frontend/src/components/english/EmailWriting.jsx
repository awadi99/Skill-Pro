import Button from "../ui/Button";

export const EmailWriting = () => {
    return (
        <div className="bg-black/10 border border-white/10 rounded-2xl p-5 sm:p-8 md:p-12 space-y-6">

            <div className="bg-neutral-900/70 border border-white/10 p-4 sm:p-5 rounded-3xl">
                <p className="text-md font-bold text-white">Scenario</p>
                <h2 className="text-sm sm:text-md font-semibold text-gray-400">
                    Draft an email to a recruiter thanking them for an interview and reiterating your interest in the Frontend Developer role.
                </h2>
            </div>

            <div className="space-y-4">
                <textarea
                    className="outline-none resize-none bg-transparent w-full h-52 sm:h-60 md:h-70 
         bg-black p-4 sm:p-5 rounded-2xl border-2 border-green-500/50 text-sm sm:text-base"
                    placeholder="Subject: Thank You - Frontend Developer Interview..."
                />
            </div>

            <div className="flex justify-end">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl bg-green-400/70">
                    Analyze Tone & Grammar
                </button>
            </div>

        </div>
    );
};

export default EmailWriting;