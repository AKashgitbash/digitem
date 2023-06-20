import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { reactstore } from "./counterSlice";

export default function Home() {
  const [data, setData] = useState([]);
  const [searchvalue, setSearchvalue] = useState("");
  const [count, setCount] = useState(3);

  const fetchData = () => {
    try {
      fetch(
        "https://api.unsplash.com/photos/?client_id=vH4dqWP1GgnMN_RFHFJ-HpjOUdxuRMcqj5AyG7zuJPA"
      )
        .then((res) => res.json())
        .then((response) => setData(response));
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = () => {
    setCount(count + 3);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <header>
        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="flex items-center px-8 py-5">
              <h1 className="text-[#f218fc] text-3xl font-bold">Postara</h1>
              <div className="flex space-x-8 ml-8 items-center font-bold">
                <p className="text-[#f218fc]">Home</p>
                <p>Live</p>
                <p>Explore</p>
                <p>Chat</p>
              </div>
              <div className="search ml-5 ">
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearchvalue(e.target.value)}
                  className="bg-[#dfe6e9] w-[340px] rounded-[32px] px-5 h-[40px]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </header>
      <section className="">
        <div className="grid grid-cols-12 bg-[#dfe6e9]  ">
          <div className="col-start-3 col-span-8 ">
            <div className="grid grid-cols-12 bg-[#dfe6e9]  ">
              <div className=" col-span-8 bg-white ">
                {/* <div>
                  <img src="./images/img7.png" width="10%" alt="" />
                </div> */}

                <div className=" flex justify-center">
                  <img src="./images/img7.png" alt="" />
                </div>
              </div>
              <div className=" col-span-4 space-y-4 ">
                <img src="./images/img8.png" alt="" />
                <img src="./images/img9.png" alt="" />
                <img src="./images/img10.png" alt="" />
              </div>
            </div>
            {/* <div className="card bg-white p-5">
              <div>
                <img src="./images/img7.png" alt="" />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="">
        <div className="">
          <div className="grid grid-cols-12  ">
            <div className="col-span-12 bg-[#dfe6e9]">
              <dir>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => setSearchvalue(e.target.value)}
                  name=""
                  className="bg-white w-[340px] rounded-[32px] px-5 h-[40px]"
                  id=""
                />
              </dir>
              <div className="grid grid-cols-12 mx-60 py-8">
                {data
                  .filter((value) => {
                    if (searchvalue === "") {
                      return value;
                    } else if (
                      value?.user?.first_name
                        ?.toLowerCase()
                        .includes(searchvalue?.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .map((itemdata, index) => (
                    <>
                      {index < count ? (
                        <div className="col-span-4 pb-8  ">
                          <div className="flex justify-center ">
                            <img
                              src={itemdata?.links?.download}
                              className="text-center h-36"
                              width="300px"
                              height="100px"
                              alt=""
                            />
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  ))}
                <div
                  onClick={handleScroll}
                  className="w-40 h-10 font-bold text-white ml-5 leading-10 cursor-pointer bg-[#f218fc]"
                >
                  Show images
                </div>
                {/* {data?.map((item) => {
                  return (
                    <div className="col-span-4 pb-8  ">
                      <div className="flex justify-center ">
                        <img
                          src={item?.links?.download}
                          className="text-center h-36"
                          width="300px"
                          height="100px"
                          alt=""
                        />
                      </div>
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
