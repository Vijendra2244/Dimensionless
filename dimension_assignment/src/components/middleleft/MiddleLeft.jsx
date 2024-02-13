import React from "react";
import styles from "./MiddleLeft.module.css";
import {
  Box,
  Card,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import BubbleChart from "../BubbleChart";

function MiddleLeft() {
  return (
    <Card p="0.5rem" width="100%">
      <Box display="flex" justifyContent="space-between">
        <Text>News & Data Flow</Text>
        <Menu>
          <MenuButton
            w="15%"
            p="0.3rem"
            transition="all 0.2s"
            borderRadius="md"
            borderWidth="1px"
            display="flex"
            flexDirection="row"
            alignItems="center"
            _hover={{ bg: "gray.400" }}
            _expanded={{ bg: "blue.400" }}
            _focus={{ boxShadow: "outline" }}
          >
            Filter
          </MenuButton>
          <MenuList>
            <MenuItem>Latest</MenuItem>
            <MenuItem>After 5 min</MenuItem>
            <MenuDivider />
            <MenuItem>After 10 min</MenuItem>
            <MenuItem>After 15 min</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <BubbleChart />
    </Card>
  );
}

export default MiddleLeft;
