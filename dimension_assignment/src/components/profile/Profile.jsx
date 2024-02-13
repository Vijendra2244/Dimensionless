import React from "react";
import {
  Avatar,
  Box,
  MenuButton,
  MenuItem,
  MenuList,
  Wrap,
  WrapItem,
  Menu,
  Button,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";

function Profile() {
  return (
    <Box display="flex" gap="0.5rem">
      <Wrap>
        <WrapItem>
          <Avatar cursor={"pointer"} width="2rem" height="2rem" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </WrapItem>
      </Wrap>
      <Box>

      <Menu>
        <MenuButton h="2rem" as={Button} rightIcon={<FaChevronDown />}>
          username
        </MenuButton>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>Register</MenuItem>
          <MenuItem>Account</MenuItem>
        </MenuList>
      </Menu>
      <Text fontSize="0.7rem"  color="black">Username,Welcome</Text>
      <Text fontSize="0.5rem" >Good to see you again</Text>
      </Box>
    </Box>
  );
}

export default Profile;
