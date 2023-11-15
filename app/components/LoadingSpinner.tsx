"use client";
import { Flex, Spinner } from "@chakra-ui/react";



export default function LoadingSpinner(){
    return <Flex as={'main'} bg={"#13163D"} alignItems={"center"} justifyContent={"center"} height={"100vh"} w={"full"}>
            <Flex>
                <Spinner size={"xl"} />
            </Flex>
        </Flex>
}