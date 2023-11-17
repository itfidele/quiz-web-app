"use client";
import getQuiz from "@/services/quiz.service";
import { Button, Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import React from "react";
import QuestionWidget, { QuizResult } from "../components/QuestionsWidget";
import { Question } from "@/types/question";
import ResultWidget from "../components/ResultsWidget";
import Link from "next/link";


export default function Quiz(){
    const [results,setResults] = React.useState<QuizResult[]>([]);
    const [questions,setQuestions] = React.useState<Question[]>([]);
    const [view,setView] = React.useState<"quiz"|"result">("quiz");
    React.useEffect(()=>{
        const getQuestions = async ()=>{
            setQuestions(await getQuiz());
        }
        getQuestions();
    },[]);


    const onResults = (results:QuizResult[])=>{
        setResults(results);
        setView("result");
    }


    return <Flex as={'main'} bg={"#13163D"} direction={"column"} alignItems={"center"} justifyContent={"center"} minH={"100vh"} w={"full"}>
        <Flex w={"50%"} direction={"column"} rounded={10} >
            { view == "quiz" ? <Suspense fallback={<LoadingSpinner/>}>
                {questions.length > 0 ? <QuestionWidget questions={questions} onResult={onResults}/> : <LoadingSpinner/>}
            </Suspense>:<ResultWidget results={results}/>}
        </Flex>
        { view == "result" && <Flex w={"full"} p={6} alignItems={"center"} justifyContent={"center"} color={"black"} bg={"gray.50"}>
            <Flex w={"80%"} gap={4}>
                <Button as={Link} href={'/'} variant={"solid"} size={"lg"} bg={"#8F95EE"} _hover={{bg:"#868CE0"}}  p={4} w={"full"} rounded={"full"}>Back to Home Page</Button>
                <Button as={'a'} href={'/quiz'} variant={"solid"} size={"lg"} bg={"#3B199C"} _hover={{bg:"#491FC1"}} p={4} w={"full"} rounded={"full"}>Start New Quiz</Button>
            </Flex>
        </Flex>}
    </Flex>
}