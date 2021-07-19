// Contact.js
import { Box, Button, Flex } from "@chakra-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import moment from "moment";

function DisplayResult() {
  const location = useLocation();
  const history = useHistory();
  const name = location.state.name;
  const dob = moment(location.state.dob).format("DD-MM-YYYY");
  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box>
        <h1>Hello {name}!</h1>
        <h2>Your DOB: {dob}</h2>
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
