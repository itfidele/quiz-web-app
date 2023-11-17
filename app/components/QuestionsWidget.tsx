"use client";

import { Question, Quiz } from "@/types/question";
import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";

// how to pass a function with prop type
export interface QuizResult{
    question:Question,
    isCorrect:boolean,
    selectedAnswer:string
}


export default function QuestionWidget({ questions,onResult }:{ questions:Question[],onResult:(results:QuizResult[])=>void}){
    
    const [currentQuestion,setCurrentQuestion] = React.useState(0); 
    const [selectedAnswer,setSelectedAnswer] = React.useState<number>(-1);
    const [results,setResults] = React.useState<QuizResult[]>([]);
    const [question,setQuestion] = React.useState<Question>(questions[currentQuestion]);
    const quiz = new Quiz(questions);
    const isLastQuestion = currentQuestion == questions.length-1;
    
    const onSubmit = ()=>{
        setResults([...results,{question:question,isCorrect: question.answers[currentQuestion] == question.correctAnswer,selectedAnswer:question.answers[currentQuestion]}]);
        setSelectedAnswer(-1);
        alert(results.length)
        onResult(results);
    }
    

    function next(index:number){
        setResults([...results,{question:question,isCorrect: question.answers[index] == question.correctAnswer,selectedAnswer:question.answers[index]}]);
        setSelectedAnswer(-1);
        if (!isLastQuestion) {  
            setQuestion(questions[currentQuestion+1]);
            setCurrentQuestion(currentQuestion+1);
        }
        
    }

    function prev(){
        setCurrentQuestion(currentQuestion-1);
    }

    return <>
        <Flex w={"100%"} gap={4} p={6} rounded={"md"} bg={"#4950AE"} direction={"column"}>

            <Flex flex={1} direction={"column"} w={"full"}>
                <h1>Question {currentQuestion+1} of {questions.length}</h1>
                <Text fontWeight={"bold"}>{question.question}</Text>
                <Flex my={4} direction={"column"} gap={4} width={"full"} justifyContent={"start"}>
                    {  
                        question.answers.map((answer,index)=>{
                            return <Flex style={{userSelect: 'none'}} gap={4} borderStyle={"solid"} rounded={"xl"} transition={"all"} transitionDuration={"300"} border={"1px"}  alignItems={"center"} onClick={ currentQuestion>=0 && !isLastQuestion ?()=>next(index): ()=>setSelectedAnswer(index)} bg={ selectedAnswer == index ? "#8F95EE":""} fontSize={"sm"} borderColor={"white"} cursor={"pointer"} _hover={{bg:"#8F95EE"}} px={4} py={2} key={index}>
                                {answer}
                            </Flex>
                        }) }
                </Flex>
            </Flex>
            
            { isLastQuestion && <Flex justifyContent={"center"}>
                <Button  variant={"solid"} w={"70%"} bg={"#3B199C"} rounded={"full"} onClick={onSubmit} disabled={selectedAnswer == -1}>Check Your Results</Button>
            </Flex>}

        </Flex>
    </>
}