// "use client";

// import axios from "axios";
// import { useState } from "react";

// export default function Home() {

//   const [answer, setAnswer] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   async function note(event) {
//     event.preventDefault();
//     setIsLoading(true);

//     const gender = event.target.gender.value;
//     const appearance = event.target.appearance.value;

//     const response = await axios.post("/api/gen-music", {
//       gender,
//       appearance
//     })

//     console.log(response.data)
//     setAnswer(response.data.answer)
//     setIsLoading(false);
//   }

//   return (
//     <div>

//       <p className="p-4">{isLoading ? 'Loading...' : ''}</p>
//       {/* <p className="p-4">{answer}</p> */}
//       {answer && <img src={answer} className="w-full" alt ="AI generated image" />}
//     </div>
//   );

// }
