import React, { useRef, useEffect, ReactNode } from "react";
import "../styles/resize.css";

interface PropsResize {
    position: "right"
    minWidth: number
    maxWidth: number
    onClickX?: (e:React.PointerEvent<HTMLDivElement>)=>void
    onResize?: (width:number)=>void
    className?: string
    children: ReactNode
}

function Resize({position,minWidth,maxWidth,onClickX,onResize,children,...props}:PropsResize) {
  const ref = useRef(null);
  const refRight = useRef(null);

  useEffect(() => {
    const resizeableEle = ref.current;
    
    // Right resize
        const onMouseMoveRightResize = (event: MouseEvent) => {
            let width = event.clientX
            width = event.clientX < minWidth ? minWidth : event.clientX;
            width = event.clientX > maxWidth ? maxWidth : event.clientX;
            resizeableEle.style.width = `${width}px`;
            onResize(width)
          };
          
          const onMouseUpRightResize = () => {
            document.removeEventListener("mousemove", onMouseMoveRightResize);
          };
          
          const onMouseDownRightResize = (_event: MouseEvent) => {
            document.addEventListener("mousemove", onMouseMoveRightResize);
            document.addEventListener("mouseup", onMouseUpRightResize);
          };
          
        const resizerRight = refRight.current;
        resizerRight.addEventListener("mousedown", onMouseDownRightResize);
    
    
    return () => {
        resizerRight.removeEventListener("mousedown", onMouseDownRightResize);
    };
  }, []);

  return (
      <div {...props} ref={ref} className="resizeable"
      style={{
        minWidth: `${minWidth}px`,
        maxWidth: `${maxWidth}px`,
        width: `${maxWidth}px`,
      }}>
        <div className="grow overflow-auto">
            {children}
        </div>
        {
            position == "right" && 
            <div ref={refRight} className="resizer resizer-r bg-gray-500 w-[0.5rem]"
            onPointerDown={onClickX}>
            </div>
        }
      </div>
  );
}

export default Resize;