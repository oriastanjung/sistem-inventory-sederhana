"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { handleLogout } from "@/actions/auth";

function Sidebar() {
  const logout = async () => {
    await handleLogout();
  };
  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <aside className="hidden md:block md:w-1/6 bg-[#F4F7FF] container mx-auto px-11 pt-12 min-h-screen">
        <nav className="flex flex-col gap-y-24">
          <div className="flex flex-row gap-x-2 items-center">
            <img src="/gambar/logobpbatam.png" className="h-[48px]" />
            <h3 className="text-lg font-extrabold text-[#2B52A1] leading-snug">
              <Link href={"/"}>BUP</Link>
            </h3>
          </div>

          <div className="flex flex-col gap-y-44">
            <ul className="flex flex-col gap-y-8">
              <li className="flex flex-row gap-x-2 items-center text-[#282828] hover:text-[#2C71E1] group">
                {/* icon black */}
                <svg
                  className="group-hover:hidden"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_59_237)">
                    <path
                      d="M4.58301 3.95834H8.12467C8.12467 3.95834 8.74967 3.95834 8.74967 4.58334V9.37501C8.74967 9.37501 8.74967 10 8.12467 10H4.58301C4.58301 10 3.95801 10 3.95801 9.37501V4.58334C3.95801 4.58334 3.95801 3.95834 4.58301 3.95834Z"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.58301 12.5H8.12467C8.12467 12.5 8.74967 12.5 8.74967 13.125V15.4167C8.74967 15.4167 8.74967 16.0417 8.12467 16.0417H4.58301C4.58301 16.0417 3.95801 16.0417 3.95801 15.4167V13.125C3.95801 13.125 3.95801 12.5 4.58301 12.5Z"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.875 10H15.4167C15.4167 10 16.0417 10 16.0417 10.625V15.4167C16.0417 15.4167 16.0417 16.0417 15.4167 16.0417H11.875C11.875 16.0417 11.25 16.0417 11.25 15.4167V10.625C11.25 10.625 11.25 10 11.875 10Z"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.875 3.95834H15.4167C15.4167 3.95834 16.0417 3.95834 16.0417 4.58334V6.87501C16.0417 6.87501 16.0417 7.50001 15.4167 7.50001H11.875C11.875 7.50001 11.25 7.50001 11.25 6.87501V4.58334C11.25 4.58334 11.25 3.95834 11.875 3.95834Z"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.875 0.625H18.125C18.125 0.625 19.375 0.625 19.375 1.875V18.125C19.375 18.125 19.375 19.375 18.125 19.375H1.875C1.875 19.375 0.625 19.375 0.625 18.125V1.875C0.625 1.875 0.625 0.625 1.875 0.625Z"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_59_237">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                {/* icon blue */}
                <svg
                  className="group-hover:block hidden"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_490_2687)">
                    <path
                      d="M4.58301 3.95898H8.12467C8.12467 3.95898 8.74967 3.95898 8.74967 4.58398V9.37565C8.74967 9.37565 8.74967 10.0007 8.12467 10.0007H4.58301C4.58301 10.0007 3.95801 10.0007 3.95801 9.37565V4.58398C3.95801 4.58398 3.95801 3.95898 4.58301 3.95898Z"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.58301 12.5H8.12467C8.12467 12.5 8.74967 12.5 8.74967 13.125V15.4167C8.74967 15.4167 8.74967 16.0417 8.12467 16.0417H4.58301C4.58301 16.0417 3.95801 16.0417 3.95801 15.4167V13.125C3.95801 13.125 3.95801 12.5 4.58301 12.5Z"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.875 10H15.4167C15.4167 10 16.0417 10 16.0417 10.625V15.4167C16.0417 15.4167 16.0417 16.0417 15.4167 16.0417H11.875C11.875 16.0417 11.25 16.0417 11.25 15.4167V10.625C11.25 10.625 11.25 10 11.875 10Z"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.875 3.95898H15.4167C15.4167 3.95898 16.0417 3.95898 16.0417 4.58398V6.87565C16.0417 6.87565 16.0417 7.50065 15.4167 7.50065H11.875C11.875 7.50065 11.25 7.50065 11.25 6.87565V4.58398C11.25 4.58398 11.25 3.95898 11.875 3.95898Z"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.875 0.625H18.125C18.125 0.625 19.375 0.625 19.375 1.875V18.125C19.375 18.125 19.375 19.375 18.125 19.375H1.875C1.875 19.375 0.625 19.375 0.625 18.125V1.875C0.625 1.875 0.625 0.625 1.875 0.625Z"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_490_2687">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h4 className="text-base font-semibold leading-normal">
                  <Link href={"/"}>Dashboard</Link>
                </h4>
              </li>

              <li className="flex flex-row gap-x-2 items-center text-[#282828] hover:text-[#2C71E1] group">
                {/* icon black */}
                <svg
                  className="group-hover:hidden"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_490_1074)">
                    <path
                      d="M18.125 3.75H1.875C1.18464 3.75 0.625 4.30964 0.625 5V15C0.625 15.6903 1.18464 16.25 1.875 16.25H18.125C18.8153 16.25 19.375 15.6903 19.375 15V5C19.375 4.30964 18.8153 3.75 18.125 3.75Z"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5Z"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.75 7.1875C3.57741 7.1875 3.4375 7.04759 3.4375 6.875C3.4375 6.70241 3.57741 6.5625 3.75 6.5625"
                      stroke="#282828"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3.75 7.1875C3.92259 7.1875 4.0625 7.04759 4.0625 6.875C4.0625 6.70241 3.92259 6.5625 3.75 6.5625"
                      stroke="#282828"
                      stroke-width="1.5"
                    />
                    <path
                      d="M16.25 13.4375C16.0774 13.4375 15.9375 13.2976 15.9375 13.125C15.9375 12.9524 16.0774 12.8125 16.25 12.8125"
                      stroke="#282828"
                      stroke-width="1.5"
                    />
                    <path
                      d="M16.25 13.4375C16.4226 13.4375 16.5625 13.2976 16.5625 13.125C16.5625 12.9524 16.4226 12.8125 16.25 12.8125"
                      stroke="#282828"
                      stroke-width="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_490_1074">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                {/* icon blue */}
                <svg
                  className="group-hover:block hidden"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_490_1702)">
                    <path
                      d="M18.125 3.75H1.875C1.18464 3.75 0.625 4.30964 0.625 5V15C0.625 15.6903 1.18464 16.25 1.875 16.25H18.125C18.8153 16.25 19.375 15.6903 19.375 15V5C19.375 4.30964 18.8153 3.75 18.125 3.75Z"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61925 11.3807 7.5 10 7.5C8.61925 7.5 7.5 8.61925 7.5 10C7.5 11.3807 8.61925 12.5 10 12.5Z"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.75 7.1875C3.57741 7.1875 3.4375 7.04759 3.4375 6.875C3.4375 6.70241 3.57741 6.5625 3.75 6.5625"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                    />
                    <path
                      d="M3.75 7.1875C3.92259 7.1875 4.0625 7.04759 4.0625 6.875C4.0625 6.70241 3.92259 6.5625 3.75 6.5625"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                    />
                    <path
                      d="M16.25 13.4375C16.0774 13.4375 15.9375 13.2976 15.9375 13.125C15.9375 12.9524 16.0774 12.8125 16.25 12.8125"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                    />
                    <path
                      d="M16.25 13.4375C16.4226 13.4375 16.5625 13.2976 16.5625 13.125C16.5625 12.9524 16.4226 12.8125 16.25 12.8125"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_490_1702">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h4 className="text-base font-semibold leading-normal">
                  <Link href={"/tagihan"}>Tagihan</Link>
                </h4>
              </li>

              <li className="flex flex-row gap-x-2 items-center text-[#282828] hover:text-[#2C71E1] group">
                {/* icon black */}
                <svg
                  className="group-hover:hidden"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_59_239)">
                    <path
                      d="M19.3747 18.0358C19.386 18.379 19.2607 18.7127 19.0264 18.9637C18.7921 19.2147 18.4679 19.3626 18.1247 19.375H1.87472C1.53157 19.3626 1.20732 19.2147 0.973019 18.9637C0.738718 18.7127 0.613471 18.379 0.624721 18.0358V4.46417C0.613471 4.12098 0.738718 3.78732 0.973019 3.53631C1.20732 3.28529 1.53157 3.13739 1.87472 3.125H18.1247C18.4679 3.13739 18.7921 3.28529 19.0264 3.53631C19.2607 3.78732 19.386 4.12098 19.3747 4.46417V18.0358Z"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.375 0.625V4.375"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.125 0.625V4.375"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.875 0.625V4.375"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.625 0.625V4.375"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.625 8.125H14.375"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.625 11.875H14.375"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.625 15.625H10"
                      stroke="#282828"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_59_239">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                {/* icon blue */}
                <svg
                  className="group-hover:block hidden"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_490_1199)">
                    <path
                      d="M19.3757 18.0358C19.3869 18.379 19.2617 18.7127 19.0274 18.9637C18.7931 19.2147 18.4688 19.3626 18.1257 19.375H1.8757C1.53255 19.3626 1.2083 19.2147 0.973996 18.9637C0.739694 18.7127 0.614447 18.379 0.625697 18.0358V4.46417C0.614447 4.12098 0.739694 3.78732 0.973996 3.53631C1.2083 3.28529 1.53255 3.13739 1.8757 3.125H18.1257C18.4688 3.13739 18.7931 3.28529 19.0274 3.53631C19.2617 3.78732 19.3869 4.12098 19.3757 4.46417V18.0358Z"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.375 0.625V4.375"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.125 0.625V4.375"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.875 0.625V4.375"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.625 0.625V4.375"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.625 8.125H14.375"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.625 11.875H14.375"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.625 15.625H10"
                      stroke="#2C71E1"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_490_1199">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <h4 className="text-base font-semibold leading-normal">
                  <Link href={"/laporan"}>Laporan</Link>
                </h4>
              </li>
            </ul>

            <li className="flex flex-row gap-x-2 items-center text-[#282828] hover:text-[#FB5050] group">
              {/* icon black */}
              <svg
                className="group-hover:hidden"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6V3C12 2.44772 11.5523 2 11 2H3C2.44772 2 2 2.44772 2 3V17C2 17.5523 2.44772 18 3 18H11C11.5523 18 12 17.5523 12 17V14"
                  stroke="#282828"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M8 10H18M18 10L15 7M18 10L15 13"
                  stroke="#282828"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              {/* icon red */}
              <svg
                className="group-hover:block hidden"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6V3C12 2.44772 11.5523 2 11 2H3C2.44772 2 2 2.44772 2 3V17C2 17.5523 2.44772 18 3 18H11C11.5523 18 12 17.5523 12 17V14"
                  stroke="#FB5050"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
                <path
                  d="M8 10H18M18 10L15 7M18 10L15 13"
                  stroke="#FB5050"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h4
                className="text-base font-semibold leading-normal hover:cursor-pointer"
                onClick={logout}
              >
                Logout
              </h4>
            </li>
          </div>
        </nav>
      </aside>
      <nav className="md:hidden w-full  fixed z-[99]  ">
        <div className="absolute top-10 right-10 z-[100]">
          <button
            onClick={handleShowMenu}
            className="bg-primary p-2 rounded-lg "
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_513_4762)">
                <path
                  d="M2.52246 1.11719H22.0225C22.0225 1.11719 23.5225 1.11719 23.5225 2.61719V4.11719C23.5225 4.11719 23.5225 5.61719 22.0225 5.61719H2.52246C2.52246 5.61719 1.02246 5.61719 1.02246 4.11719V2.61719C1.02246 2.61719 1.02246 1.11719 2.52246 1.11719Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.52246 10.1172H22.0225C22.0225 10.1172 23.5225 10.1172 23.5225 11.6172V13.1172C23.5225 13.1172 23.5225 14.6172 22.0225 14.6172H2.52246C2.52246 14.6172 1.02246 14.6172 1.02246 13.1172V11.6172C1.02246 11.6172 1.02246 10.1172 2.52246 10.1172Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.52246 19.1172H22.0225C22.0225 19.1172 23.5225 19.1172 23.5225 20.6172V22.1172C23.5225 22.1172 23.5225 23.6172 22.0225 23.6172H2.52246C2.52246 23.6172 1.02246 23.6172 1.02246 22.1172V20.6172C1.02246 20.6172 1.02246 19.1172 2.52246 19.1172Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_513_4762">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.272461 0.363281)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <ul
          className={`h-screen bg-white pt-40 pl-20 absolute  flex flex-col gap-5 w-full  transform transition-all duration-300 ease-in-out ${
            showMenu ? "translate-x-100" : "-translate-x-100 hidden"
          } `}
        >
          <li className="text-base font-semibold leading-normal">
            <Link href={"/"}>Dashboard</Link>
          </li>
          <li className="text-base font-semibold leading-normal">
            <Link href={"/tagihan"}>Tagihan</Link>
          </li>
          <li className="text-base font-semibold leading-normal">
            <Link href={"/laporan"}>Laporan</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Sidebar;
