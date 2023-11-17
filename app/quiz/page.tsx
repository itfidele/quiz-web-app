"use client";
import getQuiz from "@/services/quiz.service";
import { Flex } from "@chakra-ui/react";
import { Suspense } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import React from "react";
import QuestionWidget, { QuizResult } from "../components/QuestionsWidget";
import { Question } from "@/types/question";
import ResultWidget from "../components/ResultsWidget";


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


    return <Flex as={'main'} bg={"#13163D"} alignItems={"center"} justifyContent={"center"} minH={"100vh"} w={"full"}>
        <Flex w={"50%"} direction={"column"} rounded={10} >
            { view == "quiz" ? <Suspense fallback={<LoadingSpinner/>}>
                {questions.length > 0 ? <QuestionWidget questions={questions} onResult={onResults}/> : <LoadingSpinner/>}
            </Suspense>:<ResultWidget results={results}/>}
        </Flex>
    </Flex>
}