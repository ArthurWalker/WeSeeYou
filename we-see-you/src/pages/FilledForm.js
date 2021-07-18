import React, { useState } from "react";
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

import "react-datepicker/dist/react-datepicker.css";

export default function FilledForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && dob !== "") {
      alert(`Name: ${name} & DOB: ${dob}`);
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
              <Box>
                <DatePicker
                  selected={dob}
                  onChange={(date) => setDob(date)}
                  showTimeSelect
                  dateFormat="dd/MM/Y"
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
