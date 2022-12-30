import { SketchPicker, BlockPicker } from "react-color";
import { useState } from "react";

function Home2() {
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });

  const { r, g, b, a } = sketchPickerColor;

  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

  return (
    <div
    //   className="App"
    //   style={{ display: "flex", justifyContent: "space-around" }}
    >
      <div >
        <h6>Sketch Picker</h6>

        <SketchPicker
          onChange={(color) => {
            setSketchPickerColor(color.rgb);
          }}
          color={sketchPickerColor}
        />
      </div>
    </div>
  );
}

export default Home2;
