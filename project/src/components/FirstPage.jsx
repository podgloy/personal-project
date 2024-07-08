import React from "react";
import Frame from "@/components/Frame";

export default function FirstPage() {
  return (
    <Frame
      header={
        <div className="flex flex-col">
          <div className="pt-14 flex flex-row justify-between">
            <h1 className="text-white text-m font-bold"> Logo </h1>
            <img src="/4dot.svg" />
          </div>

          <div className="pt-9 float-right">
            <h1 className="text-white text-right text-3xl font-bold">
              {" "}
              If your life{" "}
            </h1>
            <h1 className="text-white text-right text-3xl font-bold">
              {" "}
              were a movie,{" "}
            </h1>
          </div>

          <div className="pt-5">
            <h1 className="text-white opacity-60 text-3xl font-bold"> What </h1>
            <h1 className="pt-3 text-[#DBFC3B] text-6xl font-bold"> GENRE </h1>
            <h1 className="text-white opacity-60 text-3xl font-bold">
              {" "}
              would it belong to?{" "}
            </h1>
          </div>
        </div>
      }
      body={
        <div>
          <img className="absolute top-80 w-100" src="/img1.png" />
        </div>
      }
      footer={<div>footer</div>}
    />
  );
}

// <main>
//   <section className='m-5'>
//       <div className='pt-14 flex flex-row justify-between'>
//           <h1 className='text-white text-m font-bold'> Logo </h1>
//           <img src="/4dot.svg"/>
//       </div>

//       <div className='pt-9'>
//         <h1 className='text-white opacity-50 text-4xl font-bold'> If your life </h1>
//         <h1 className='text-white opacity-50 text-4xl font-bold'> were a movie, </h1>
//       </div>

//       <div className='pt-5 float-right'>
//         <h1 className='float-right text-white text-2xl font-bold'> what </h1>
//         <h1 className='text-lime-400 text-7xl font-bold italic'> GENRE </h1>
//         <h1 className='text-white text-2xl font-bold'> would it belong to? </h1>
//       </div>
//     </section>

//     <img src="/groupP.1.png"/>

// </main>

//     )

// }

{
  /* <Frame 
header={<div>
  Header
    <div className='pt-14 flex flex-row justify-between'>
      <h1 className='text-white text-m font-bold'> Logo </h1>
      <img src="/4dot.svg"/>
    </div>
</div>}
body={<div>
  body
</div>}
footer={
  <div>
    footer
  </div>
}
/> */
}
