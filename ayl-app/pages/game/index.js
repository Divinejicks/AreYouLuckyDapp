import Head from "next/head";
import GameLayout from "../../components/Game/GameLayout/GameLayout";
import PlayGame from "../../components/Game/PlayGame";

export default function AreYouLucky() {
    return (
        <>
            <Head>
            <title>My Portfolio Landing Page </title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <GameLayout>
                <PlayGame />
            </GameLayout>
        </>
    )
}