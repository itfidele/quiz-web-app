import { Button, Flex, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Flex as={'main'} bg={"#13163D"} alignItems={"center"} justifyContent={"center"} height={"100vh"} w={"full"}>
      
        <Flex w={"6/12"} gap={8} direction={"column"} alignItems={"center"}>
          <Grid placeItems={"center"} gap={3}>
            <Image alt='' src={"/images/logo.png"} width={300} height={300}/>
            <Text fontSize={30} fontWeight={"bold"}>Test your knowledge!</Text>
            <Text as={'p'} color={"gray.300"} fontSize={"sm"}>Challenge yourself with randomly generated quizzes</Text>
          </Grid>
          <Button as={Link} href={'/quiz'} bgGradient={"linear(to-r, #8040FF, #09BAFE)"} _hover={{bgGradient:"linear(to-r, #3B199C, #2999FE)"}} rounded={"full"} width={"90%"}>Let’s Get Started</Button>
        </Flex>
        
    </Flex>
  )
}
