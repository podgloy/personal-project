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
        "meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb",
        {
          input: {
            top_k: 250,
            top_p: 0,
            prompt: `Create a ${genre} track with ${color} vibes and ${font} style, inspired by the word '${tagline}'`,
            duration: 8,
            temperature: 1,
            continuation: false,
            model_version: "stereo-large",
            output_format: "mp3",
            continuation_start: 0,
            multi_band_diffusion: false,
            normalization_strategy: "peak",
            classifier_free_guidance: 3
          }
        }
      );
      console.log(output);

  return Response.json({
    status: "ok",
    answer: output[0]
    
  });
}