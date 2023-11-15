
import getQuiz from "@/services/quiz.service";
import { Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import React from "react";
import QuestionWidget from "../components/QuestionsWidget";
import Image from 'next/image'


export default async function Quiz(){
    

    const questions = await getQuiz();


    return <Flex as={'main'} bg={"#13163D"} alignItems={"center"} justifyContent={"center"} minH={"100vh"} w={"full"}>
        <Flex w={"50%"} direction={"column"} rounded={10} >
            <Suspense fallback={<LoadingSpinner/>}>
                <QuestionWidget questions={questions}/>
            </Suspense>
        </Flex>
    </Flex>
}