import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Input, Upload, Row, Col } from "antd";
import html2canvas from "html2canvas";
const Home = () => {
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
    // console.log("image 1", img.length);
    // setImg([...img, image]);
    // console.log("image 2", img.length);
    // img.splice(-1);
  };
  const [profileImg, setProfileImg] = useState([]);
  const [array, setArray] = useState([]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [addvalue, setAddValue] = useState([]);
  const [img, setImg] = useState([]);
  const [newImg, setNewImg] = useState([]);
  const [newImg1, setNewImg1] = useState([]);
  console.log("items13", addvalue);
  console.log("index16", index);
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
  const dispatch = useDispatch();
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
  const exportAsImage = async (element) => {
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    setImg([...img, image]);

    if (img.length > 3) {
      setNewImg([...newImg, img[img.length - 1]]);
      setImg([]);
    }
    // setImg(image)
    setNewImg1(img[img?.length - 1]);
  };

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
          <Col style={{ width: "260px" }}>
            <Card style={{ height: "360px", width: "250px" }}>
              <Upload.Dragger
                // action={"http://localhost:3000/"}
                listType="picture"
                showUploadList={{ showRemoveIcon: true }}
                onChange={handleChange}
              >
                drag your file here or
                <br />
                <Button>Select image</Button>
              </Upload.Dragger>
              <br />
              <h4>Input menu items</h4>
              <Input
                placeholder="Menu Items"
                style={{ width: "150px" }}
                value={value}
                onChange={valueChange}
              />
              <br />
              <Button
                onClick={() => {
                  handelAdd(exportRef.current);
                  // exportAsImage(exportRef.current);
                }}
              >
                Add more items
              </Button>
              <Button
                onClick={() => {
                  handelExport(exportRef.current);
                }}
              >
                Export
              </Button>
            </Card>
            <br />

            <Card style={{ height: "360px", width: "250px" }}>
              <h4> ss taken </h4>
              {console.log("imgss96", img)}
              {/* <img src={img} /> */}
              {/* {newImg.length > 0 ? (
                newImg.map((item) => <img src={item} alt="asdfg" />)
              ) : (
                <img src={img[img.length - 1]} alt="asdfg" />
              )} */}
              {img.length > 0 ? (
                img.map((item) => <img src={item} alt="asdfg" />)
              ) : (
                <img alt="no image" />
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
                    //   marginLeft: "50px",
                    background: `url(${profileImg?.thumbUrl})`,
                  }}
                >
                  {d?.map((item) => (
                    <h3>{item}</h3>
                  ))}
                </Card>
              );
            })}
            <Card
              ref={exportRef}
              style={{
                width: "200px",
                height: "200px",
                marginLeft: "50px",
                background: `url(${profileImg?.thumbUrl})`,
              }}
            >
              {addvalue?.map((item) => (
                <h3>{item}</h3>
              ))}
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Home;
