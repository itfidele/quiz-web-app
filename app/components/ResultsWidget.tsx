import { Question } from "@/types/question";
import { Box, Button, Flex,Image,Text } from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { QuizResult } from "./QuestionsWidget";
import { Suspense } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { Doughnut } from 'react-chartjs-2';
import {Chart, ArcElement,Legend,Tooltip} from 'chart.js'
Chart.register(ArcElement,Tooltip);



export default function ResultWidget({results}:{results:QuizResult[]}){
    const chart_data = {
        labels: ['Correct', 'Incorrect'],
        datasets: [
          {
            data: [12, 19],
            backgroundColor: ['#FF6384', '#36A2EB',],
            hoverBackgroundColor: ['#FF6384', '#36A2EB'],
          },
        ],
    };
    const chart_options = {
        cutout: '70%', // Adjust the cutout percentage for the Doughnut hole
    };
    return <Flex gap={6} my={4}direction={"column"}>
        <Flex bg={"#4950AE"}  p={4} >
            
            <Flex w={"100px"}>
                <Doughnut data={chart_data} options={chart_options} />
            </Flex>
            <Flex direction={"column"} justifyContent={"center"} px={6} fontWeight={"bold"} alignItems={"start"}>
                <span>You answered</span>
                {results.filter(result => result.isCorrect === true).length} / {results.length} questions
            </Flex>
        </Flex>
        <Flex direction={"column"} gap={6} p={4} bg={"#4950AE"}>
            <Text>Your Answers</Text>
            <Flex gap={4} direction={"column"}>
                {results.map((result,index)=>{
                    return <Flex color={"black"} rounded={"lg"} p={4} bg={"#FFFFFF"} key={result.id}>
                        <Flex mx={2} alignItems={"start"}>
                            <Box p={2} w={10} textAlign={"center"} fontWeight={"bold"} color={"gray.100"} rounded={"full"} bg={"#8F95EE"}>{index+1}</Box>
                        </Flex>
                        <Flex flex={1} gap={2} direction={"column"}>
                            <Flex>
                                {result.question}
                            </Flex>
                            <Flex color={"#44C651"} flexWrap={"wrap"} gap={2} fontSize={"sm"}>
                                { !result.isCorrect && <Text color={"red"}>{result.selectedAnswer}</Text>} <Text>{result.correctAnswer}</Text> 
                            </Flex>
                        </Flex>
                        
                        <Flex alignItems={"center"}><Image rounded={"full"} src={result.isCorrect ?"/images/check-fill.png":"/images/octicon-close.png"} alt=""/></Flex>
                    </Flex>
                })}
            </Flex>
                
        </Flex>
        
    </Flex>
}