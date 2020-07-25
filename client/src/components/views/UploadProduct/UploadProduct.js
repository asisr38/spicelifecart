import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "../../utils/FileUpload";
import Axios from "axios";
import "../view.css";

const { Title } = Typography;
const { TextArea } = Input;

const Category = [
  { key: 1, value: "Appetizer" },
  { key: 2, value: "Chef Special" },
  { key: 3, value: "Tikka Masala" },
  { key: 4, value: "Vindaloo" },
  { key: 5, value: "Korma" },
  { key: 6, value: "Vegetarian" },
  { key: 7, value: "Kadhai" },
  { key: 8, value: "Biryani" },
  { key: 9, value: "Breads" },
  { key: 10, value: "Dessert" },
];

function UploadProduct(props) {
  const [titleValue, setTitleValue] = useState("");
  const [discValue, setDiscValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);
  const [categoryValue, setCategoryValue] = useState(1);
  const [images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };
  const onDiscChange = (event) => {
    setDiscValue(event.currentTarget.value);
  };

  const onPriceChange = (event) => {
    setPriceValue(event.currentTarget.value);
  };
  const onCategorySelectChange = (event) => {
    setCategoryValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!titleValue || !discValue || !priceValue || !categoryValue || !images) {
      return alert("fill all the fields first!");
    }

    const variables = {
      writer: props.user.userData._id,
      title: titleValue,
      description: discValue,
      price: priceValue,
      images: images,
      category: categoryValue,
    };

    Axios.post("/api/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/menu");
      } else {
        alert("Failed to upload Product");
      }
    });
  };
  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBlock: "2rem" }}>
        <Title className="uploadFromheading" level={2}>
          Upload Food Item
        </Title>
      </div>

      <Form onSubmit={onSubmit}>
        <FileUpload refreshFunction={updateImages} />
        <br />
        <label className="uploadFromText"> Title</label>
        <Input onChange={onTitleChange} value={titleValue} />
        <br />
        <label className="uploadFromText"> Description</label>
        <TextArea onChange={onDiscChange} value={discValue} />
        <br />
        <label className="uploadFromText"> Price</label>
        <Input onChange={onPriceChange} value={priceValue} type="number" />
        <br />
        <br />
        <select onChange={onCategorySelectChange} value={categoryValue}>
          {Category.map((item) => (
            <option className="uploadFromText" key={item.key} value={item.key}>
              {item.value}
            </option>
          ))}
        </select>
        <br />
        <br />
        <Button onClick={onSubmit}>upload</Button>
      </Form>
    </div>
  );
}

export default UploadProduct;
