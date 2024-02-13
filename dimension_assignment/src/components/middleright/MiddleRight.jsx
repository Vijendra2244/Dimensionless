import React from "react";
import Progressbar from "../progressbar/Progressbar";
import { CardBody, CardHeader, Card,Heading, Text,Button, Box } from "@chakra-ui/react";


function MiddleRight() {
  return (
    <Card width="43%">
      <CardHeader>
        <Heading fontWeight="600" size="md">Average Score</Heading>
      </CardHeader>

      <CardBody display="flex" gap="0.5rem" >
        <Progressbar/>
        <Box display="flex" flexDirection="column" alignItems="flex-start" gap="0.5rem" >

        <Text color="black" >75%</Text>
        <Text fontSize="0.8rem" opacity="0.8" >About Graph</Text>
        <Text  fontSize="0.8rem" cursor="pointer" color="#289CD6" borderBottom="1px solid #289CD6" backgroundColor="transparent" >See Details</Text>
        </Box>
      </CardBody>
    
    </Card>
  );
}

export default MiddleRight;
