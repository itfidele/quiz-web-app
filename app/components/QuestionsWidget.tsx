"use client";

import { Question, Quiz } from "@/types/question";
import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";


export default function QuestionWidget({ questions }:{ questions:Question[]}){
    
    const [currentQuestion,setCurrentQuestion] = React.useState(0); 
    const [selectedAnswer,setSelectedAnswer] = React.useState<number>(-1);
    const [quiz,setQuiz] = React.useState<Quiz>(new Quiz(questions));
    const [score,setScore] = React.useState(0);
    const [currentAnswers,setCurrentAnswers] = React.useState<string[]>([]);
    const [isRandomizing,setIsRandomizing] = React.useState(true);
    

    React.useEffect(()=>{
        
        setCurrentAnswers(quiz.getChoices(currentQuestion));
        setIsRandomizing(false);
    },[quiz,currentQuestion]);
    
    

    function next(){
        setSelectedAnswer(-1);
        setCurrentQuestion(currentQuestion+1);
    }

    function prev(){
        setCurrentQuestion(currentQuestion-1);
    }

    return <>
        { isRandomizing ? <LoadingSpinner/>: <Flex w={"100%"} gap={6} p={6} rounded={"md"} bg={"#4950AE"} direction={"column"}>

            <Flex flex={1} direction={"column"} w={"full"}>
                <h1>Question {currentQuestion+1} of {quiz.length}  {quiz.getQuestion(currentQuestion).correctAnswer}  {quiz.isCorrect(selectedAnswer,currentAnswers[selectedAnswer]) }  {selectedAnswer} </h1>
                <Text fontWeight={"bold"}>{quiz.getQuestion(currentQuestion).question}</Text>
                <Flex my={4} direction={"column"} gap={4} width={"full"} justifyContent={"start"}>
                    {  
                        currentAnswers.map((answer,index)=>{
                            return <Flex gap={4} border={2} alignItems={"center"} onClick={()=>setSelectedAnswer(index)} bg={ quiz.isCorrect(selectedAnswer,answer) ?"#44C651": selectedAnswer == index ? "#E24040":""} fontSize={"sm"} borderColor={"#8F95EE"} cursor={"pointer"} _hover={{bg:"#8F95EE"}} px={4} py={2} key={index}>
                                <Text fontSize={30}>{index+1} </Text>
                                <Flex flex={1}>{answer.replace('"',"")}</Flex>
                                <Flex>{index}</Flex>
                            </Flex>
                        }) }
                </Flex>
            </Flex>

            <Flex gap={4} w={"full"}>
                { currentQuestion != 0 && <Button rounded={"full"} w={"full"} onClick={prev}>back</Button> }
                { currentQuestion != quiz.length-1 && <Button rounded={"full"} w={"full"} bg={"#3B199C"} onClick={next}>Skip Question</Button> } 
            </Flex>

        </Flex>}
    </>
}