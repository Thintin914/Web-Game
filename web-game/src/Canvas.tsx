import { useEffect, useState } from "react";


export function Canvas(){



  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  useEffect(() =>{
    setCanvas(getCanvas());
    setContext(getContext())
  }, [])

  setInterval(() =>{
    if (!canvas) return;
    if (!context) return;

    context.fillStyle = "#1e1a24";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }, 500)

  return(
    <canvas id="canvas" width={1800} height={500}></canvas>
  )
}

export function getCanvas(): HTMLCanvasElement{
  let canvas = document.getElementById('canvas') as HTMLCanvasElement

  return canvas;

}

export function getContext(): CanvasRenderingContext2D{

  let canvas = getCanvas();
  let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  return ctx;
}