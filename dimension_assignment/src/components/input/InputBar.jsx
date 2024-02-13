import {
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";
import { MdKeyboardVoice } from "react-icons/md";

function InputBar() {
  return (
    <Box width="100%">
      <InputGroup flex="1" size="md">
        <Input pr="4.5rem" type="text" />
        <InputRightElement width="4.5rem">
          <MdKeyboardVoice h="1rem" color="#72bdf7" />
        </InputRightElement>
      </InputGroup>
      <Text fontWeight="500" mt="0.5rem" color="#72bdf7">
        Current License:
      </Text>
    </Box>
  );
}

export default InputBar;
