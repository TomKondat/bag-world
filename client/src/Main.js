import {
  Container,
  Row,
  Form,
  ButtonGroup,
  ToggleButton,
  Col,
} from "react-bootstrap";
import Bag from "./Bag";
import RangeSlider from "react-bootstrap-range-slider";
import React, { useEffect, useState } from "react";

//main func
export default function Main(props) {
  const [bagList, setBagList] = useState([]);
  const [bagsInit, setBagsInit] = useState([]);
  const [radioValue, setRadioValue] = useState("");
  const { onAdd } = props;

  const [checked, setChecked] = useState(false);
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("-1");
  const [value, setValue] = useState(800);
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((bagsResponse) => {
        setBagList(bagsResponse);
        setBagsInit(bagsResponse);
      });
  }, []);

  useEffect(() => {
    //all filters
    function filterComb() {
      //--slider--
      let newBagList = [...bagsInit];
      newBagList = newBagList.filter(function (bag) {
        if (bag.onSale) return bag.salePrice <= value;
        else return bag.price <= value;
      });
      newBagList = newBagList.filter(function (bag) {
        //--color--type--gender
        return (
          bag.color.includes(color, 0) &&
          bag.type.includes(type, 0) &&
          bag.gender.includes(gender, 0)
        );
      });
      //--sale--
      if (checked === true)
        newBagList = newBagList.filter(function (bag) {
          return bag.onSale === true;
        });
      //--sort prices(hight and low)--
      if (sort !== "-1") {
        newBagList = newBagList.sort(function (a, b) {
          if (a.onSale === true && b.onSale === true)
            return a.salePrice - b.salePrice;
          else if (a.onSale === true && b.onSale === false)
            return a.salePrice - b.price;
          else if (a.onSale === false && b.onSale === true)
            return a.price - b.salePrice;
          else return a.price - b.price;
        });
        if (sort === "0") newBagList.reverse();
      }

      setBagList(newBagList);
    }
    filterComb();
  }, [checked, color, gender, type, sort, value]);

  //gender types
  const radios = [
    { name: "All ", value: "" },
    { name: "Male", value: "0" },
    { name: "Female", value: "1" },
  ];

  //filter by color
  function colorFilter(color) {
    setColor(color);
  }

  //filter by search
  function searchBarFilter(input) {
    clearFilters();
    const newBagList = bagsInit.filter((bag) => {
      if (input === "") {
        return bag;
      } else if (bag.title.toLowerCase().includes(input.toLowerCase())) {
        return bag;
      }
    });
    setBagList(newBagList);
  }

  //filter by type
  function typeFilter(typeSelect) {
    setType(typeSelect);
  }
  //filter by gender
  function genderFilter(genderSelect) {
    setGender(genderSelect);
  }
  //filter by price range
  function priceRangeFilter(price) {
    setValue(price);
  }
  //Sorting
  function sorting(sortSelect) {
    setSort(sortSelect);
  }
  //clear all values filter
  function clearFilters() {
    setSort("-1");
    setChecked("");
    setColor("");
    setType("");
    setValue(800);
    setGender("");
    setRadioValue("");
  }
  return (
    <React.Fragment>
      <Container>
        <Container>
          <Row className="headers">
            <Form>
              <Form.Group as={Row}>
                <Col xs="3" className="mt-2">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onInput={(e) => {
                      searchBarFilter(e.target.value);
                    }}
                  />
                </Col>
                <Col xs="3" className="mt-3">
                  <RangeSlider
                    value={value}
                    max={800}
                    min={0}
                    onChange={(e) => {
                      priceRangeFilter(e.target.value);
                      setValue(e.target.value);
                    }}
                  />
                </Col>

                <Col xs="2" className="mt-2">
                  <Form.Select
                    onChange={(e) => sorting(e.target.value)}
                    aria-label="Default select example"
                    value={sort}
                  >
                    <option className="Colors" value="-1">
                      Sort Price
                    </option>
                    <option value="0">High to low</option>
                    <option value="1">Low to high</option>
                  </Form.Select>
                </Col>

                <Col xs="2" className="mt-2 ">
                  <ToggleButton
                    className="mb-2"
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-danger"
                    checked={checked}
                    value="1"
                    onChange={(e) => {
                      setChecked(e.currentTarget.checked);
                    }}
                  >
                    Bags on sale
                  </ToggleButton>
                </Col>
              </Form.Group>
            </Form>
          </Row>
        </Container>
        <br></br>
        <Container style={{ width: "auto", maxWidth: "800px" }}>
          <Row className="nav2">
            <Form>
              <Form.Group as={Row}>
                <Col md="5">
                  <ButtonGroup className="mt-2 mb-2">
                    {radios.map((radio, idx) => (
                      <ToggleButton
                        key={idx}
                        id={`radio-${idx}`}
                        type="radio"
                        variant={idx % 2 ? "outline-success" : "outline-danger"}
                        name="radio"
                        value={radio.value}
                        checked={radioValue === radio.value}
                        onChange={(e) => {
                          setRadioValue(e.currentTarget.value);

                          genderFilter(e.currentTarget.value);
                        }}
                      >
                        {radio.name}
                      </ToggleButton>
                    ))}
                  </ButtonGroup>
                </Col>

                <Col xs="3" className="mt-2">
                  <Form.Select
                    onChange={(e) => colorFilter(e.target.value)}
                    aria-label="Default select example"
                    value={color}
                  >
                    <option className="Colors" value="">
                      Colors
                    </option>
                    <option value="Black">Black</option>
                    <option className="brownColor" value="Brown">
                      Brown
                    </option>
                    <option className="blueColor" value="Blue">
                      Blue
                    </option>
                    <option className="orangeColor" value="Orange">
                      Orange
                    </option>
                    <option className="redColor" value="Red">
                      Red{" "}
                    </option>
                    <option className="pinkColor" value="Pink">
                      Pink
                    </option>
                    <option className="greyColor" value="Grey">
                      Grey
                    </option>
                    <option className="greenColor" value="Green">
                      Green
                    </option>
                  </Form.Select>
                </Col>

                <Col xs="3" className="mt-2">
                  <Form.Select
                    onChange={(e) => typeFilter(e.target.value)}
                    aria-label="Default select example"
                    value={type}
                  >
                    <option className="Colors" value="">
                      Bag Type
                    </option>
                    <option value="Luxury">Luxury bags</option>
                    <option value="Gym">Gym bags</option>
                    <option value="Backpack">Backpacks</option>
                    <option value="Kids">Childrens bags</option>
                  </Form.Select>
                </Col>
              </Form.Group>
            </Form>
          </Row>
        </Container>
      </Container>

      <Row className="mt-2">
        {bagList.map((bag) => {
          return (
            <Bag
              bag={bag}
              key={bag.id}
              imgUrl={bag.img}
              price={bag.price}
              title={bag.title}
              type={bag.type}
              color={bag.color}
              onSale={bag.onSale}
              gender={bag.gender}
              onAdd={onAdd}
              salePrice={bag.salePrice}
            />
          );
        })}
      </Row>
    </React.Fragment>
  );
}
