import React from 'react';
export default function Home(){
  return(
    <div className="Div bg-[#252B42] h-full w-full bg-cover min-h-screen flex flex-col items-center justify-center">
      <br /><br /><br />
      <h2  className=" Montserrat text-center font-extrabold text-[16px] ml-[88px] text-[#23A6F0]">Welcome</h2>
      <h3  className=" Montserrat font-bold text-center mr-[300px] text-white ">Selling on the
        <br />
         internet like a pro</h3>
        <br />
        <br />

        <p className=" para-graph text-center text-white Montserrat mr-[300px] ">We know how large objects will act, but things on a 
          <br /> 
          small scale just do right
        </p>
        <br />


        <div className="Divv flex justify-start w-[365px] h-[52px] ml-[400px] mr-[370px] font-Montserrat">

  
          <button className=" buy bg-[#23A6F0] text-center text-[#f8f9f9] rounded-md hover:bg-blue-500">Get Quote Now</button>

          <button className="buyy text-white text-center border px-4 py-2 ml-4 hover:bg-slate-700">Learn More</button>
        </div>


        
          
        <div className=" container mx-auto flex flex-row justify-center gap-4 mt-10 w-full">
  {/* Card 1 */}
  <div className="card w-[250px] p-[20px] border-r-3 bg-white shadow-md text-left h-[255px]">
    <div className="icon w-[55px] h-[65px] mb-2.5 rounded-md bg-[#ffddd2]"></div>
    <div className="title font-bold text-[15px] my-2.5">Training Courses</div>
    <div className="underline w-10 h-[2px] bg-[#ff4c61] my-1.5"></div>
    <div className="description text-[14px] text-gray-600 my-2.5">
      The gradual scale accumulation of information about atomic and small-scale behaviour...
    </div>
  </div>

  {/* Card 2 */}
  <div className="card w-[250px] p-5  bg-white shadow-md text-left h-[255px]">
    <div className="icon w-[65px] h-[70px] mb-2.5 rounded bg-[#d0f0c0]"></div>
    <div className="title font-bold text-[15px] my-2.5">2,769 Online Courses</div>
    <div className="underline w-10 h-[2px] bg-[#ff4c61] my-1.5"></div>
    <div className="description text-[14px] text-gray-600 my-2.5">
      The gradual accumulation of information about atomic and small-scale behaviour...
    </div>
  </div>

  {/* Card 3 */}
  <div className="card w-[250px] p-5  bg-[#23A6F0] shadow-md text-left h-[255px]">
    <div className="icon w-[65px] h-[70px] mb-2.5 rounded bg-[#FFFFFF]"></div>
    <div className="title font-bold text-[15px] my-2.5 text-white">Training Courses</div>
    <div className="underline w-10 h-[2px] bg-[#FFFFFF] my-1.5"></div>
    <div className="description text-[14px] text-white my-2.5">
      The gradual accumulation of information about atomic and small-scale behaviour...
    </div>
  </div>
</div>
<br /><br />


    </div>
  )
}