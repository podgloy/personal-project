import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export function GET(){
    return Response.json({
      status: "ok",
    });
  }
  
  export async function POST(req) {

    const { genre, color, font, tagline } = await req.json();

    const output = await replicate.run(
    "bytedance/sdxl-lightning-4step:5f24084160c9089501c1b3545d9be3c27883ae2239b6f412990e82d4a6210f8f",
    {
      input: {
        width: 1024,
        height: 1024,
        prompt: `abstract image of album cover that embodies the essence of ${genre} with ${color} hues and ${font} typography, inspired by the word ${tagline}'`,
        scheduler: "K_EULER",
        num_outputs: 1,
        guidance_scale: 0,
        negative_prompt: "worst quality, low quality",
        num_inference_steps: 4
      }
    }
  );
  console.log(output);

  return Response.json({
    status: "ok",
    answer: output[0]
    
  });
}