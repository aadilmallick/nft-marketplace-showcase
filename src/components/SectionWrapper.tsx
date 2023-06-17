import React from "react";
import expo from "../assets/expo.png";
interface SectionWrapperProps {
  title: string;
  description: string;
  mockup: string;
  withBanner?: boolean;
  bannerNumber?: number;
}
export const SectionWrapper = ({
  title,
  description,
  mockup,
  withBanner = false,
  bannerNumber = 1,
}: SectionWrapperProps) => {
  const selectBanner = (bannerNumber: number): string => {
    if (bannerNumber > 1) {
      return `banner-${bannerNumber}`;
    } else {
      return `banner`;
    }
  };
  return (
    // if it is a banner section, have text be white and add banner class
    // fadeLeftMini and fadeRightMini are custom animations that slide in from the left and right
    <section
      className={`${
        withBanner ? selectBanner(bannerNumber) : ""
      } min-h-screen pt-48 grid place-items-center lg:place-items-start`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-7xl mx-auto w-[90vw] gap-4 justify-items-center">
        {/* col 1: content and button */}
        <div
          className={`space-y-4 max-w-[40rem] text-center flex flex-col items-center mx-auto lg:text-left lg:items-start fadeLeftMini ${
            withBanner ? "text-white" : ""
          }`}
        >
          <h1 className="text-5xl  font-bold tracking-tight">{title}</h1>
          <p className="  max-w-[25rem]">{description}</p>
          <a
            href="https://google.com"
            target="_blank"
            className="inline-flex px-4 py-2 rounded-md bg-black text-white space-x-4"
          >
            <img src={expo} alt="" className="w-8 object-contain" />
            <div className="flex flex-col -space-y-1">
              <p className="text-xs">View on</p>
              <p className="font-semibold">Expo store</p>
            </div>
          </a>
        </div>
        {/* col 2: image mockup */}
        <div className="fadeRightMini">
          <img src={mockup} alt="mockup" className="max-w-lg lg:max-w-full" />
        </div>
      </div>
    </section>
  );
};
