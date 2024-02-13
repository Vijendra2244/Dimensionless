import {
  Table,
  TableContainer,
  Th,
  Thead,
  Tr,
  Tbody,
  Td,
  Button,
  Badge,
  Card,
} from "@chakra-ui/react";
import React from "react";

function LeftLower() {
  return (
    <Card>
      <TableContainer width="100%">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Type</Th>
              <Th>News</Th>
              <Th isNumeric>Score</Th>
              <Th>Impact</Th>
              <Th>Probability</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Badge padding="0.6rem" backgroundColor="yellow"></Badge>ERU
              </Td>
              <Td>The ERU has Steadied against the</Td>
              <Td isNumeric>+1</Td>
              <Td>Neutral</Td>
              <Td>
                <Button backgroundColor="transparent" color="#72bdf7">
                  High
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>
                {" "}
                <Badge padding="0.6rem" backgroundColor="#2396D5"></Badge>INR
              </Td>
              <Td>The ERU has Steadied against the</Td>
              <Td isNumeric>+1</Td>
              <Td>High</Td>
              <Td>
                <Button backgroundColor="transparent" color="#72bdf7">
                  High
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>
                {" "}
                <Badge padding="0.6rem" backgroundColor="red"></Badge>CAD
              </Td>
              <Td>The ERU has Steadied against the</Td>
              <Td isNumeric>+1</Td>
              <Td>Medium</Td>
              <Td>
                <Button backgroundColor="transparent" color="#72bdf7">
                  High
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>
                {" "}
                <Badge padding="0.6rem" backgroundColor="red"></Badge>CAD
              </Td>
              <Td>The ERU has Steadied against the</Td>
              <Td isNumeric>+1</Td>
              <Td>Low</Td>
              <Td>
                <Button backgroundColor="transparent" color="#72bdf7">
                  High
                </Button>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Badge padding="0.6rem" backgroundColor="green"></Badge>OIL
              </Td>
              <Td>The ERU has Steadied against the</Td>
              <Td isNumeric>+1</Td>
              <Td>Neutral</Td>
              <Td>
                <Button backgroundColor="transparent" color="#72bdf7">
                  High
                </Button>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default LeftLower;
