import React, { useState } from "react";
import "../css/FilledForm.css";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

export default function FilledForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState();
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && dob !== undefined) {
      console.log(name, dob);
      history.push({ pathname: "/display", state: { name: name, dob: dob } });
    }
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box p={2}>
        <Box textAlign="center">
          <Heading>Your Information</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="My Full Name"
                onChange={(name) => setName(name.currentTarget.value)}
              />
            </FormControl>
            <FormControl mt={6} isRequired>
              <FormLabel>Your date of birth</FormLabel>
              <Box className="datePicker_border">
                <DatePicker
                  selected={dob}
                  onChange={(date) => setDob(date)}
                  showTimeSelect
                  selectedTime={true}
                  dateFormat="dd/MM/Y h:mm aa"
                  showMonthDropdown={true}
                  placeholderText="Select a date"
                  isClearable={true}
                  withPortal
                  showMonthYearDropdown
                  strictParsing
                />
              </Box>
            </FormControl>
            <Button
              type="submit"
              variantColor="teal"
              variant="outline"
              width="full"
              mt={4}
              onClick={handleSubmit}
            >
              Who am I ?
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}
