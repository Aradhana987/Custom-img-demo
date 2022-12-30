import React, { useEffect, useState, useRef } from "react";
import { Button, Card, Input, Upload, Row, Col, Select, Form } from "antd";
import html2canvas from "html2canvas";
import "../../assets/styles/style.css";
// import Home2 from "./Home2";
import { SketchPicker } from "react-color";
const Home = () => {
  // const colors = ["#000000", "#B8860B", "#DC143C", "#FFFAF0"];
  const [sketchPickerColor, setSketchPickerColor] = useState({
    r: "241",
    g: "112",
    b: "19",
    a: "1",
  });

  const { r, g, b, a } = sketchPickerColor;

  const [newColor, setNewColor] = useState("");
  const exportRef = useRef();
  const handelAdd = async (element) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    if (addvalue.length > 2) {
      setArray([...array, addvalue]);
      setAddValue([value]);
      setValue(" ");
      img[img.length - 1] = image;
      setImg([...img, image]);
    } else {
      setAddValue([...addvalue, value]);
      setValue("");
      if (img.length > 0) {
        img[img.length - 1] = image;
      } else {
        setImg([...img, image]);
      }
    }
  };
  const handelExport = async (element) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    img[img.length - 1] = image;
    setImg([...img]);
  };

  const handelDownload = async (element, imageFileName) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image, imageFileName);
  };
  const downloadImage = (blob, fileName) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.style = "display:none;";
    fakeLink.download = fileName;
  
    fakeLink.href = blob;
  
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
  
    fakeLink.remove();
  };
  
  const [profileImg, setProfileImg] = useState([]);
  const [array, setArray] = useState([]);
  const [value, setValue] = useState("");
  const [addvalue, setAddValue] = useState([]);
  const [img, setImg] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  console.log("items13", addvalue);
  const handleChange = (event) => {
    console.log(
      "🚀 ~ file: Home.jsx:8 ~ handleChange ~ event",
      event.fileList?.[0]
    );

    setProfileImg(event.fileList?.[0]);
  };
  const valueChange = (event) => {
    setValue(event.target.value);
  };
  console.log("value", value);
  console.log("11img", profileImg);
  console.log("array34", array);
  useEffect(
    () => {
      console.log("11img------", profileImg);
    },
    [profileImg],
    [addvalue],
    [array],
    [value],
    [img]
  );
  console.log("valuesadd30", addvalue);
  return (
    <div>
      <Card
        style={{
          marginTop: "50px",
          marginLeft: "100px",
          width: 1200,
          height: 1200,
        }}
      >
        <Row>
          <Col style={{ width: "300px" }}>
            <Card style={{ height: "900px", width: "300px" }}>
              <Upload.Dragger
                listType="picture"
                showUploadList={{ showRemoveIcon: true }}
                onChange={handleChange}
                maxCount={1}
              >
                drag your file here or
                <br />
                <Button>Select image</Button>
              </Upload.Dragger>
              <br />

              {/* <Select
                onChange={(value) => {
                  setSelectValue(value);
                }}
                name="category"
                placeholder="Select menu items color"
                style={{ width: "200px" }}
              >
                <Select.Option value="#000000">Black</Select.Option>
                <Select.Option value="#B8860B">Golden</Select.Option>
                <Select.Option value="#A52A2A">Brown</Select.Option>
                <Select.Option value="#FFFAF0">White</Select.Option>
              </Select> */}
              {console.log("setSelectValue103", newColor)}
              <br />
              <br />
              <h5>Sketch Picker</h5>

              <SketchPicker
                onChange={(color) => {
                  setSketchPickerColor(color.rgb);
                  setNewColor(color.hex);
                }}
                color={sketchPickerColor}
              />
              {/* <h4>Input menu items</h4> */}
              <br />
              <br />
              <Input
                placeholder="Menu Items"
                style={{ width: "200px" }}
                value={value}
                onChange={valueChange}
              />
              <br />
              <br />
              <Button
                onClick={() => {
                  handelAdd(exportRef.current);
                }}
              >
                Add more items
              </Button>
              <br />
              <br />
              <Button
                onClick={() => {
                  handelExport(exportRef.current);
                }}
              >
                Export
              </Button>
              <Button
                onClick={() => {
                  handelDownload(exportRef.current,"test");
                }}
              >
                Download
              </Button>
            </Card>
            <br />

            <Card style={{ height: "450px", width: "300px" }}>
              <h4> ss taken </h4>
              {console.log("imgss96", img)}
              {img.length > 0 ? (
                img.map((item) => <img src={item} alt="asdfg" />)
              ) : (
                <img alt="no img" />
              )}
            </Card>
          </Col>
          <Col style={{ marginLeft: "20px" }}>
            {array?.map((d) => {
              return (
                <Card
                  style={{
                    width: "200px",
                    height: "200px",
                    background: `url(${profileImg?.thumbUrl})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    border: "none",
                  }}
                >
                  {d?.map((item) => (
                    <h3 style={{ color: `${newColor}` }}>{item}</h3>
                  ))}
                </Card>
              );
            })}
            <Card
              ref={exportRef}
              style={{
                width: "200px",
                height: "200px",
                background: `url(${profileImg?.thumbUrl})`,
                // objectFit: "cover",
                backgroundSize: "cover",
                // backgroundRepeat: "no-repeat",
                border: "none",
                // contentFit: "cover",
              }}
            >
              {addvalue?.map((item) => (
                <h3 style={{ color: `${newColor}` }}>{item}</h3>
              ))}
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Home;
