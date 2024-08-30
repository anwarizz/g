import React, { useEffect, useRef, useState } from "react";
import PrologueNav from "../components/PrologueNav";
import backgroundPattern from "../assets/images/Rectangle.png";
import { getMessageFromDB, addMessageToDB } from "../firebase";
import { getCurrentTime } from "../utils/dateUtils";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { nabila } from "../data";

export default function Progolgue() {
  const chatBoxRef = useRef(null);
  const chatInputBoxRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [userMsg, setUserMsg] = useState();
  const [mengetik, setMengetik] = useState(false);

  const renderMessage = async () => {
    await getMessageFromDB("dialogue", (snapshot) => {
      let jsonString = snapshot.val();

      try {
        let msgArr = JSON.parse(jsonString);
        setMessages(msgArr);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });
  };

  useEffect(() => {
    renderMessage();
    AOS.init();
  }, []);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendUser = async () => {
    if (userMsg.length !== 0) {
      // User send a message
      messages.push({
        message: userMsg,
        sender: "user",
        date: getCurrentTime(),
      });
      chatInputBoxRef.current.value = "";
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      await addMessageToDB("dialogue", JSON.stringify(messages));
      setUserMsg("");

      const nabilaReadTime =
        Math.floor(Math.random() * 2) + 1 + (userMsg.split(" ").length - 1 - 2);

      if (
        userMsg.toLowerCase() === "pap dong" ||
        userMsg.toLowerCase() === "pap" ||
        userMsg.toLowerCase() === "minta pap"
      ) {
        setTimeout(async () => {
          setMengetik(true);

          const { data } = await axios.post(
            "https://nabilabe.vercel.app/apipercobaan/dialogue",
            { userMsg },
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          );

          const pictureIdx = Math.floor(
            Math.random() * nabila.postPictures.length
          );
          messages.push({
            message: data.content + "-papone89823ksdfhhhduwie-" + pictureIdx,
            sender: "Nabila",
            date: getCurrentTime(),
          });
          await addMessageToDB("dialogue", JSON.stringify(messages));
          setMengetik(false);
        }, nabilaReadTime * 5000);
        return;
      }

      setTimeout(async () => {
        setMengetik(true);

        const { data } = await axios.post(
          "https://nabilabe.vercel.app/apipercobaan/dialogue",
          { userMsg },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        messages.push({
          message: data.content,
          sender: "Nabila",
          date: getCurrentTime(),
        });
        await addMessageToDB("dialogue", JSON.stringify(messages));
        setMengetik(false);
      }, nabilaReadTime * 1000);

      // chatInputBoxRef.current.value = '';
      // chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  return (
    <div data-aos="fade-up" data-aos-duration="200">
      <header className="fixed w-full z-[2]">
        <PrologueNav mengetik={mengetik} />
      </header>
      <main
        style={{ backgroundImage: `url(${backgroundPattern})` }}
        className="bg-gray-500 w-full h-[100vh] relative top-0 pt-[65px] pb-[80px] px-[20px]"
      >
        <div className="flex flex-col h-full overflow-scroll" ref={chatBoxRef}>
          {messages?.map((msg, idx) => (
            <>
              {msg.sender === "Nabila" ? (
                <>
                  {!msg.message.includes("papone89823ksdfhhhduwie") ? (
                    <div className="mt-1" key={idx}>
                      <div className="float-left flex bg-[#ffffff] max-w-[255px] rounded-lg px-2 pt-1 pb-2">
                        <p>{msg.message}</p>
                        <div className="flex items-end  ml-[12px] text-[#8E8E93] text-[11px]">
                          <p className="flex items-center gap-[2px]">
                            {msg.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-1">
                      <div className=" flex bg-[#ffffff] w-[255px] flex-col rounded-lg px-1 pb-1">
                        <div className="max-h-[300px] min-h-[100px] pt-1 overflow-hidden rounded-[5px]">
                          <img
                            src={
                              nabila.postPictures[
                                Number(msg.message.split("-")[2])
                              ]
                            }
                            alt="post"
                            className="w-full"
                          />
                        </div>
                        <div className="flex items-end flex-col text-[#8E8E93] text-[11px]">
                          {/* <p>{msg.message}</p> */}
                          <p className="w-full text-black text-[16px] px-1">
                            {msg.message.split("-")[0]}
                          </p>
                          <p className="flex items-center gap-[2px]">
                            {msg.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="mt-1" key={idx}>
                  <div className="float-right flex bg-[#DCF7C5] max-w-[255px] rounded-lg px-2 pt-1 pb-2 overflow-hidden">
                    <p>{msg.message}</p>
                    <div className="flex items-end  ml-[12px] text-[#8E8E93] text-[11px]">
                      <p className="flex items-center gap-[2px]">
                        {msg.date}
                        <svg
                          width="14"
                          height="8"
                          viewBox="0 0 14 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.501 0.108955L14 0.59573L8.60042 8L6.41166 5.83835L7.33857 4.56645L8.60042 5.30239L13.501 0.108955ZM9.11925 0L9.61822 0.486775L4.21865 7.89105L0.5 4.23358L1.33033 3.42354L4.21865 5.19343L9.11925 0Z"
                            fill="#3497F9"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </div>
      </main>
      <footer className="fixed px-[20px] z-[2] bottom-0 bg-[#F6F6F6] left-0 w-full border-t flex justify-between items-center h-[65px] pt-1">
        <div className="flex items-center gap-[18px]">
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0996 0.706184L10.2 0.699951C10.6078 0.699951 10.9444 1.00514 10.9938 1.3996L11 1.49995V9.19995H18.7C19.1078 9.19995 19.4444 9.50514 19.4938 9.8996L19.5 9.99995C19.5 10.4078 19.1948 10.7444 18.8003 10.7937L18.7 10.8H11V18.5C11 18.9078 10.6948 19.2444 10.3003 19.2937L10.2 19.3C9.79215 19.3 9.45559 18.9948 9.40623 18.6003L9.39999 18.5V10.8H1.69999C1.29215 10.8 0.955592 10.4948 0.906227 10.1003L0.899994 9.99995C0.899994 9.59211 1.20518 9.25555 1.59964 9.20618L1.69999 9.19995H9.39999V1.49995C9.39999 1.09211 9.70518 0.75555 10.0996 0.706184L10.2 0.699951L10.0996 0.706184Z"
                fill="#007AFF"
              />
            </svg>
          </button>
          <div className="bg-white rounded-3xl h-[32px] flex items-center px-2 border border-gray-400 w-full">
            <input
              ref={chatInputBoxRef}
              onChange={(e) => setUserMsg(e.target.value)}
              type="text"
              className="bg-transparent w-full outline-none px-2 h-[32px]"
            />
            <button>
              <svg
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5 0.5C15.8137 0.5 18.5 3.18629 18.5 6.5C18.5 7.51226 18.4265 8.59716 18.2794 9.7547C17.8458 11.9033 17.0666 13.506 15.5006 15.072C14.0324 16.5401 12.4171 17.4497 10.1857 18.1737C8.95927 18.5404 6.5 18.5 6.5 18.5C3.18629 18.5 0.5 15.8137 0.5 12.5V6.5C0.5 3.18629 3.18629 0.5 6.5 0.5H12.5ZM12.5 1.7H6.5C3.84903 1.7 1.7 3.84903 1.7 6.5V12.5C1.7 15.151 3.84903 17.3 6.5 17.3L8.36029 17.3018C9.1201 17.2593 9.5 16.9041 9.5 16.2362L9.5 14.5925C9.5 11.8421 11.7214 9.60811 14.4717 9.59256L15.1304 9.58372L15.5425 9.57083C15.9195 9.55526 16.1913 9.53165 16.3578 9.5C16.95 9.38741 17.2646 8.93277 17.3016 8.13607L17.3 6.5C17.3 3.84903 15.151 1.7 12.5 1.7ZM16.5819 10.6789C16.7137 10.6538 16.8388 10.6203 16.9658 10.5762C16.4898 11.9428 15.7208 13.1547 14.652 14.2235C13.5572 15.3183 12.2211 16.1888 10.6353 16.8354C10.6778 16.6498 10.7 16.4499 10.7 16.2362L10.7 14.5925C10.7 12.5022 12.3883 10.8044 14.4785 10.7925L14.9668 10.7873C15.7316 10.7745 16.2544 10.7411 16.5819 10.6789Z"
                  fill="#007AFF"
                />
              </svg>
            </button>
          </div>
          {userMsg ? (
            <>
              <div className="flex items-center">
                <button onClick={handleSendUser}>
                  <svg
                    fill="#007AFF"
                    width="23"
                    height="20"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>ionicons-v5-q</title>
                    <path d="M476.59,227.05l-.16-.07L49.35,49.84A23.56,23.56,0,0,0,27.14,52,24.65,24.65,0,0,0,16,72.59V185.88a24,24,0,0,0,19.52,23.57l232.93,43.07a4,4,0,0,1,0,7.86L35.53,303.45A24,24,0,0,0,16,327V440.31A23.57,23.57,0,0,0,26.59,460a23.94,23.94,0,0,0,13.22,4,24.55,24.55,0,0,0,9.52-1.93L476.4,285.94l.19-.09a32,32,0,0,0,0-58.8Z" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <>
              <button>
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.2926 1.54944C14.8171 1.11529 14.1996 0.875 13.5593 0.875H10.0526C9.41249 0.875 8.7951 1.11517 8.31965 1.54911L7.63139 2.1773C7.16363 2.60423 6.55622 2.84052 5.92647 2.84052C3.06758 2.84052 0.75 5.18716 0.75 8.0819V14.6336C0.75 17.5284 3.06758 19.875 5.92647 19.875H17.5735C20.4324 19.875 22.75 17.5284 22.75 14.6336V8.0819C22.75 5.18716 20.4324 2.84052 17.5735 2.84052L17.3884 2.83282C16.8974 2.79189 16.4312 2.58904 16.0628 2.25267L15.2926 1.54944ZM10.0526 2.075H13.5593C13.8997 2.075 14.2287 2.20304 14.4835 2.43562L15.2537 3.13885C15.8168 3.65302 16.5321 3.9656 17.2887 4.02867L17.5237 4.03948C19.7663 4.04052 21.55 5.84658 21.55 8.0819V14.6336C21.55 16.8689 19.7663 18.675 17.5735 18.675H5.92647C3.7337 18.675 1.95 16.8689 1.95 14.6336V8.0819C1.95 5.91432 3.62723 4.15037 5.72829 4.04545L6.15806 4.0333C7.00389 3.98049 7.80922 3.63968 8.44035 3.06363L9.12862 2.43544C9.38332 2.20298 9.7123 2.075 10.0526 2.075ZM11.75 5.88C14.5114 5.88 16.75 8.11858 16.75 10.88C16.75 13.6414 14.5114 15.88 11.75 15.88C8.98858 15.88 6.75 13.6414 6.75 10.88C6.75 8.11858 8.98858 5.88 11.75 5.88ZM7.95 10.88C7.95 8.78132 9.65132 7.08 11.75 7.08C13.8487 7.08 15.55 8.78132 15.55 10.88C15.55 12.9787 13.8487 14.68 11.75 14.68C9.65132 14.68 7.95 12.9787 7.95 10.88Z"
                    fill="#007AFF"
                  />
                </svg>
              </button>
              <button onClick={handleSendUser}>
                <svg
                  width="17"
                  height="24"
                  viewBox="0 0 17 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.99999 0C10.4853 0 12.5 2.01472 12.5 4.5V11.5C12.5 13.9853 10.4853 16 7.99999 16C5.51471 16 3.49999 13.9853 3.49999 11.5V4.5C3.49999 2.01472 5.51471 0 7.99999 0ZM0.749994 10.3284C1.04823 10.3284 1.29564 10.546 1.34214 10.831L1.34999 10.9284V11.0603C1.34999 14.8004 4.32949 17.8284 7.99999 17.8284C11.5924 17.8284 14.5229 14.9278 14.646 11.2981L14.65 11.0603V10.9388C14.65 10.6074 14.9186 10.3388 15.25 10.3388C15.5482 10.3388 15.7956 10.5564 15.8421 10.8415L15.85 10.9388L15.8463 11.3084C15.7233 15.3891 12.5766 18.7005 8.59986 19.0055L8.59999 22.5C8.59999 22.8314 8.33136 23.1 7.99999 23.1C7.70176 23.1 7.45435 22.8824 7.40785 22.5973L7.39999 22.5L7.40046 19.0055C3.42608 18.7009 0.280692 15.3934 0.153964 11.3161L0.149994 10.9284C0.149994 10.597 0.418623 10.3284 0.749994 10.3284ZM4.69999 4.5C4.69999 2.67746 6.17745 1.2 7.99999 1.2C9.82253 1.2 11.3 2.67746 11.3 4.5V11.5C11.3 13.3225 9.82253 14.8 7.99999 14.8C6.17745 14.8 4.69999 13.3225 4.69999 11.5V4.5Z"
                    fill="#007AFF"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </footer>
    </div>
  );
}
