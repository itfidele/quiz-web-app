import { Question } from "@/types/question";
import { Flex,Image,Text } from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { QuizResult } from "./QuestionsWidget";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";



export default function ResultWidget({results}:{results:QuizResult[]}){
    
    return <Flex gap={6} my={4}direction={"column"}>
        { JSON.stringify(results)} hhh
        <Flex bg={"#4950AE"}  p={4} >
            <Flex>
                
            </Flex>
            <Flex>
                <span>You answered</span>
                {results.length} / {results.length}
            </Flex>
        </Flex>

        <Suspense fallback={<LoadingSpinner/>}>
            <Flex direction={"column"} gap={6} p={4} bg={"#4950AE"}>
                <Text>Your Answers</Text>
                <Flex gap={4} direction={"column"}>
                    {results.map((result,index)=>{
                        return <Flex p={4} bg={"#FFFFFF"} key={result.question.id}>
                            <Text>{index+1}</Text>
                            <Flex flex={1} direction={"column"}>
                                <Flex color={"black"}>
                                    {result.question.question}
                                </Flex>
                                <Flex color={"#44C651"} gap={2} fontSize={"sm"}>
                                    { !result.isCorrect && <Text color={"red"}>{result.selectedAnswer}</Text>} <Text>{result.question.correctAnswer}</Text> 
                                </Flex>
                            </Flex>
                            
                            <Flex alignItems={"center"}><Image src={result.isCorrect ?"/images/check-fill.png":"/images/octicon-close.png"} alt=""/></Flex>
                        </Flex>
                    })}
                </Flex>
                    
            </Flex>
        </Suspense>
    </Flex>
}