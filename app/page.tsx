"use client";
import FileComponent from "@/components/Fileupload";
import Wave from "react-wavify";
import { Midground } from "@/components/Midground";

export default function Home() {
  return (
    <div>
      {/* Background Section */}

      <div
        className="relative mx-auto flex h-[80vh] w-screen bg-slate-100 bg-cover bg-center"
        style={{

        }}
      >
        {/* Left Section */}
        <div className="w-full px-4 md:w-1/2 md:px-0">
          {/* Mobile View Text */}
          <div className="absolute top-20 px-6 text-center md:hidden">
            <h1 className="text-xl font-bold leading-snug text-black sm:text-2xl">
              Share Files Instantly, Without Limits or Servers.
            </h1>
            <h2 className="text-sm font-light leading-relaxed text-slate-800 sm:text-base">
              Transfer files securely and seamlessly without a middleman.
            </h2>
          </div>
          <FileComponent />
        </div>

        {/* Right Section */}
        <div className="hidden w-1/2 items-start justify-center pt-20 md:flex">
          <div className="mt-40 flex h-1/2 flex-col gap-8 px-8 text-center md:px-12 md:text-left lg:px-20">
            <h1 className="text-2xl font-extrabold leading-snug text-black sm:text-3xl md:text-4xl lg:text-5xl">
              Share Files Instantly, Without Limits or Servers.
            </h1>
            <h2 className="text-sm font-light leading-relaxed text-slate-800 sm:text-lg md:text-xl lg:text-2xl">
              Transfer files securely and seamlessly without a middleman.
              Perfect for quick, private sharing.
            </h2>

            {/* Feature List */}
            <div className="flex flex-col items-center justify-center gap-6 text-sm text-black sm:flex-row sm:gap-12 sm:text-base md:items-start md:justify-start md:text-lg">
              <div className="flex flex-col items-center gap-4 sm:items-start">
                <p className="flex items-center gap-2">
                  <span role="img" aria-label="folder">
                    📂
                  </span>
                  <span>No File Size Limit</span>
                </p>
                <p className="flex items-center gap-2">
                  <span role="img" aria-label="lock">
                    🔒
                  </span>
                  <span>End-to-End Encryption</span>
                </p>
              </div>
              <div className="flex flex-col items-center gap-4 sm:items-start">
                <p className="flex items-center gap-2">
                  <span role="img" aria-label="speed">
                    ⚡
                  </span>
                  <span>Blazing Fast Speeds</span>
                </p>
                <p className="flex items-center gap-2">
                  <span role="img" aria-label="peer-to-peer">
                    🔄
                  </span>
                  <span>Peer-to-Peer Transfers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Midground Section */}
      <div className="relative h-[80vh] w-screen bg-slate-500 pt-20">
        <Midground />
      </div>
    </div>
  );
}
