import React from "react";
import { Link } from "react-router-dom";
import { nabila } from "../data";

export default function Profile() {
  return (
    <div className="bg-[#EFEFF4]">
      <nav className="grid grid-cols-3 py-[17px] items-center px-[12px] ">
        <Link to={"/prologue"} className="flex items-center gap-[6px]">
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.60206 10.5L11.4062 2.55085C11.9866 1.9597 11.9778 1.00999 11.3867 0.429623C10.7955 -0.150747 9.84583 -0.142006 9.26546 0.449147L0.429623 9.44915C-0.143208 10.0326 -0.143208 10.9674 0.429623 11.5509L9.26546 20.5509C9.84583 21.142 10.7955 21.1507 11.3867 20.5704C11.9778 19.99 11.9866 19.0403 11.4062 18.4491L3.60206 10.5Z"
              fill="#007AFF"
            />
          </svg>
          <p className="text-[#007AFF] text-[18px] font-medium">
            {nabila.name}
          </p>
        </Link>
        <div className="flex justify-center">
          <p className="font-semibold">Contact info</p>
        </div>
        <div className="flex justify-end">
          <button className="text-[17px] text-[#007AFF]">Edit</button>
        </div>
      </nav>
      <div className="h-[370px] w-full bg-black overflow-hidden">
        <img className="" src={nabila.profilePicture} alt="" />
      </div>
      <div>
        <div className="bg-white mb-[17px]">
          <div className="ml-[18px] border-b border-[#3c3c4362] flex justify-between items-center">
            <div className="py-[15px] flex flex-col">
              <p className="text-[18px] font-medium">{nabila.name}</p>
              <p className="text-[16px] text-[#8E8E93]">+62 202 555 0181</p>
            </div>
            <div className="flex gap-4 mr-[18px]">
              <button>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
                    fill="#EDEDFF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 10.5C22.9706 10.5 27 13.7459 27 17.75C27 21.7541 22.9706 25 18 25C17.081 25 16.1941 24.889 15.359 24.6828C14.2841 26.5805 11.8627 26.1442 11.8627 26.1442C12.6759 25.8788 13.1265 25.1276 13.2144 23.8907C10.6825 22.6081 9 20.3373 9 17.75C9 13.7459 13.0294 10.5 18 10.5Z"
                    fill="#007AFF"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
                    fill="#EDEDFF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21 12.25C22.1046 12.25 23 13.1454 23 14.25V22.25C23 23.3546 22.1046 24.25 21 24.25H11C9.89543 24.25 9 23.3546 9 22.25V14.25C9 13.1454 9.89543 12.25 11 12.25H21ZM29 13.25V23.25L24 20.25V16.25L29 13.25Z"
                    fill="#007AFF"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
                    fill="#EDEDFF"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.1173 14.4238C15.3348 14.2634 15.3855 13.9593 15.2318 13.737L12.7458 10.1418C12.6021 9.9339 12.3276 9.86792 12.1198 10.0117C11.2848 10.5895 9.40116 12.2341 10.1701 14.916C11.1464 18.3213 14.3829 21.7919 14.3829 21.7919C14.3829 21.7919 19.0669 26.1107 21.255 26.1107C22.4794 26.1107 23.186 26.1183 24.6284 24.6486C24.7124 24.563 25.2542 23.8778 25.5414 23.5131C25.6481 23.3776 25.646 23.1941 25.5749 23.0369C25.1644 22.1296 22.3669 20.8344 21.3788 20.4C21.1745 20.3101 20.9382 20.3718 20.7992 20.5465L20.016 21.53C19.6874 21.9427 19.098 22.0253 18.6914 21.6892C18.1326 21.2273 17.3193 20.499 16.4709 19.5475C15.5155 18.476 14.5765 17.2366 14.0022 16.4513C13.6831 16.0149 13.7835 15.4074 14.2186 15.0865L15.1173 14.4238Z"
                    fill="#007AFF"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="px-[18px] py-[15px] border-b border-[#3c3c4362]">
            <p className="text-[15px]">Design adds value future</p>
            <p className="text-[13px] text-[#8E8E93]">Dec 18, 2019</p>
          </div>
        </div>

        <div className="bg-white mb-[17px] border-b border-[#3c3c4362]">
          <div className="flex items-center pl-[18px] gap-3">
            <div>
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="29" height="29" rx="6" fill="#3396FD" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 7C20.933 7 22.5 8.567 22.5 10.5V19.5C22.5 21.433 20.933 23 19 23H10C8.067 23 6.5 21.433 6.5 19.5V10.5C6.5 8.567 8.067 7 10 7H19ZM19 8H10C8.61929 8 7.5 9.11929 7.5 10.5V19.5C7.5 19.5847 7.50422 19.6685 7.51245 19.751L11.3417 15.9231C11.7322 15.5326 12.3653 15.5326 12.7559 15.9231L13.9784 17.1456L17.476 13.648C17.8665 13.2575 18.4997 13.2575 18.8902 13.648L21.5 16.258V10.5C21.5 9.11929 20.3807 8 19 8ZM14.5 12C14.5 10.8954 13.6046 10 12.5 10C11.3954 10 10.5 10.8954 10.5 12C10.5 13.1046 11.3954 14 12.5 14C13.6046 14 14.5 13.1046 14.5 12Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between w-full border-b border-[#3c3c4362] py-[13px]">
              <p>Media, Links, and Docs</p>
              <button className="flex items-center gap-2 pr-[18px]">
                <p className="text-[16px] text-[#3c3c43af]">12</p>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z"
                    fill="#3C3C43"
                    fill-opacity="0.3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center pl-[18px] gap-3">
            <div>
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="29" height="29" rx="6" fill="#FBB500" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 20.2185L9.95882 23.0382C9.57798 23.2747 9.10238 22.9291 9.20958 22.4938L10.4879 17.3036L6.40298 13.856C6.0604 13.5669 6.24206 13.0078 6.68917 12.9752L12.0204 12.5871L14.0369 7.63675C14.2061 7.22158 14.7939 7.22158 14.9631 7.63675L16.9796 12.5871L22.3108 12.9752C22.7579 13.0078 22.9396 13.5669 22.597 13.856L18.5121 17.3036L19.7904 22.4938C19.8976 22.9291 19.422 23.2747 19.0412 23.0382L14.5 20.2185Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between w-full border-b border-[#3c3c4362] py-[13px]">
              <p>Starred Messages</p>
              <button className="flex items-center gap-2 pr-[18px]">
                <p className="text-[16px] text-[#3c3c43af]">None</p>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z"
                    fill="#3C3C43"
                    fill-opacity="0.3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center pl-[18px] gap-3">
            <div>
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="29" height="29" rx="6" fill="#FE8D35" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.5 13.25C19.5 9.52208 16.4779 6.5 12.75 6.5C9.02208 6.5 6 9.52208 6 13.25C6 16.9779 9.02208 20 12.75 20C14.1626 20 15.4739 19.5661 16.5578 18.8242L20.7123 22.9801L20.8138 23.0712C21.3046 23.4661 22.0245 23.4357 22.4801 22.9801C22.9682 22.4919 22.9682 21.7005 22.4801 21.2123L18.3242 17.0578C19.0661 15.9739 19.5 14.6626 19.5 13.25ZM8 13.25C8 10.6266 10.1266 8.5 12.75 8.5C15.3734 8.5 17.5 10.6266 17.5 13.25C17.5 15.8734 15.3734 18 12.75 18C10.1266 18 8 15.8734 8 13.25Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between w-full py-[13px]">
              <p>Chat Search</p>
              <button className="flex items-center gap-2 pr-[18px]">
                <p className="text-[16px] text-[#3c3c43af]"></p>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z"
                    fill="#3C3C43"
                    fill-opacity="0.3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white mb-[17px]">
          <div className="flex items-center pl-[18px] gap-3">
            <div>
              <svg
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.5" width="29" height="29" rx="6" fill="#1FC434" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9069 8.18098C14.9674 8.26578 15 8.36738 15 8.4716V23.0284C15 23.3045 14.7761 23.5284 14.5 23.5284C14.3958 23.5284 14.2942 23.4958 14.2094 23.4353L8 19H6C5.44772 19 5 18.5523 5 18V13.5C5 12.9477 5.44772 12.5 6 12.5H8L14.2094 8.06473C14.4341 7.90422 14.7464 7.95627 14.9069 8.18098ZM21.2548 7.88934C21.454 7.69808 21.7706 7.70451 21.9618 7.9037C23.8814 9.90288 24.9 12.4907 24.9 15.3282C24.9 18.0113 23.8519 20.5521 21.967 22.5895C21.7795 22.7922 21.4632 22.8046 21.2605 22.617C21.0578 22.4295 21.0454 22.1132 21.233 21.9105C22.951 20.0533 23.9 17.7528 23.9 15.3282C23.9 12.7462 22.9793 10.4073 21.2405 8.5963C21.0492 8.39711 21.0557 8.08059 21.2548 7.88934ZM18.9545 9.88934C19.1537 9.69808 19.4702 9.70451 19.6615 9.9037C21.0584 11.3586 21.8 13.2426 21.8 15.3059C21.8 17.2593 21.0372 19.1085 19.667 20.5895C19.4795 20.7922 19.1632 20.8046 18.9605 20.617C18.7578 20.4295 18.7454 20.1132 18.933 19.9105C20.1363 18.6097 20.8 17.0008 20.8 15.3059C20.8 13.4981 20.1564 11.863 18.9402 10.5963C18.7489 10.3971 18.7553 10.0806 18.9545 9.88934ZM16.9502 11.6165C17.162 11.4393 17.4773 11.4674 17.6545 11.6792C18.4717 12.6562 18.903 13.9139 18.903 15.2863C18.903 16.5872 18.4594 17.8216 17.6598 18.8137C17.4866 19.0288 17.1718 19.0626 16.9568 18.8893C16.7418 18.716 16.7079 18.4013 16.8812 18.1863C17.5388 17.3703 17.903 16.3568 17.903 15.2863C17.903 14.1425 17.5499 13.1128 16.8875 12.3208C16.7103 12.109 16.7384 11.7936 16.9502 11.6165Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between w-full py-[13px]">
              <p>Mute</p>
              <button className="flex items-center gap-2 pr-[18px]">
                <p className="text-[16px] text-[#3c3c43af]">No</p>
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.292893 10.2929C-0.0976311 10.6834 -0.0976311 11.3166 0.292893 11.7071C0.683418 12.0976 1.31658 12.0976 1.70711 11.7071L6.70711 6.70711C7.09763 6.31658 7.09763 5.68342 6.70711 5.29289L1.70711 0.292893C1.31658 -0.0976311 0.683418 -0.0976311 0.292893 0.292893C-0.0976311 0.683418 -0.0976311 1.31658 0.292893 1.70711L4.58579 6L0.292893 10.2929Z"
                    fill="#3C3C43"
                    fill-opacity="0.3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
