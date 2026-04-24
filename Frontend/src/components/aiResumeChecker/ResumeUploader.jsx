import React, { useRef, useState } from 'react';
import { Upload, Sparkles, ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Input from '../ui/Input';
import Button from '../ui/Button';

export default function ResumeUploader() {
    const fileInputRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const features = [
        "ATS Score", "Keyword Match", "Section Analysis", 
        "AI Suggestions", "Format Check"
    ];

    return (
        <div className="flex flex-col items-center p-6 sm:p-10 space-y-6 w-full max-w-2xl mx-auto ">
            
            {/* 1. Medium Dropzone - Perfect for Desktop & Tablet */}
            <div 
                onClick={() => fileInputRef.current.click()}
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                className={`
                    w-full aspect-[2/1] rounded-[2rem] border-2 border-dashed transition-all duration-300
                    flex flex-col items-center justify-center cursor-pointer p-6
                    ${isDragging ? 'border-blue-500 bg-blue-500/5' : 'border-white/10 bg-[#0a0a0a] hover:border-white/20'}
                `}
            >
                <Input
                    type="file" 
                    ref={fileInputRef}
                    className="hidden" 
                    accept=".pdf,.doc,.docx"
                />
                
                <div className="p-4 bg-white/5 rounded-2xl mb-4">
                    <Upload className="text-gray-400" size={28} />
                </div>

                <div className="text-center">
                    <h2 className="text-white text-lg font-bold">Drop your resume here</h2>
                    <p className="text-gray-500 text-sm mt-1">
                        or <span className="text-blue-500 font-medium">click to browse</span> · PDF, DOC, DOCX
                    </p>
                </div>
            </div>

            {/* 2. Action Button - Strong but not overwhelming */}
            <div className="w-full max-w-sm flex flex-col items-center gap-4">
                <Button 
                    className="relative group w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-md shadow-[0_0_20px_rgba(79,70,229,0.2)]"
                >
                    <Sparkles size={20} />
                    <span>Analyze Resume with AI</span>
                    <ArrowRight size={18} />
                </Button>

                <p className="text-gray-600 text-xs font-medium">
                    Works best with a sample — <span className="underline cursor-pointer hover:text-gray-400">try it free</span>
                </p>
            </div>

            {/* 3. Feature Chips - Clean Grid */}
            <div className="flex flex-wrap justify-center gap-3">
                {features.map((feature, i) => (
                    <div 
                        key={i} 
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5 text-gray-400 text-xs font-bold"
                    >
                        <Check size={12} className="text-blue-500" />
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    );
}