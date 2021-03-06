// Contact.js
import { Box, Button, Flex, Image } from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import moment from "moment";
import { useState, useEffect } from "react";
import { DiamonLoading } from "react-loadingg";
import { axios } from "axios";
import "../css/FilledForm.css";

function DisplayResult() {
  const location = useLocation();
  const history = useHistory();
  const name = location.state.name;
  const dob = moment(location.state.dob).format("DD-MM-YYYY");
  const [number, setNumber] = useState();
  let lucky_number;

  function calLuckyNum(string_text) {
    var sum = 0;
    var numbers = string_text.replaceAll("-", "");
    for (var i = 0; i < numbers.length; i++) {
      sum += Number(numbers[i]);
    }
    return sum;
  }

  useEffect(() => {
    lucky_number = calLuckyNum(dob);
    // axios
    //   .get("https://tracuuthansohoc.com/xem-online/pdf/pdf_preview?c=")
    //   .then((response) => {});
    const timer = setTimeout(() => {
      setNumber(lucky_number);
    }, 2000);
    return () => clearTimeout(timer);
  }, [dob]);

  if (number === undefined) {
    return <DiamonLoading />;
  }

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box>
        <h1>Hello {name}!</h1>
        <h2>Your DOB: {dob}</h2>
        <h2>Your Lucky Number:{number}</h2>

        <Button
          type="submit"
          variantColor="teal"
          variant="outline"
          width="full"
          mt={4}
          onClick={() => history.goBack()}
        >
          BACK! BACk! BAck! Back! back!
        </Button>
      </Box>
    </Flex>
  );
}

export default DisplayResult;
