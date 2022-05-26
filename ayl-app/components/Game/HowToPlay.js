const HowToPlay = ({}) => {
    return (
        <div
          className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
          id="howtoplay"
        >
          <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
            <div className="flex flex-col w-full">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed">
                How to play AYL (Are You Lucky)
              </h3>
                <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
                    Connect you wallet so we can keep track of you and know which address is playing the game. Make sure
                    that you have AYL coins in your wallet before playing. If you don't have you can get some by signing up 
                    if you are one of the first 500 signed up players.
                </p>
                <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
                    You can also get AYL coins if you are whitelisted, airdrops will be done to white listed addresses. You 
                    can also buy AYL coins or get some from the DEX.
                </p>
                <p className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center">
                 After connect your wallet, if you have not signed up, then sign up to receive some AYL coins.
                </p>
                <p><strong>How to approve</strong></p>
                <p>
                    To <strong>approve</strong> that your coins should be used for transaction in the game, specify the amount 
                    of ayl coins that you want this contract to spend. <strong>Then click on the approve button.</strong>
                </p>
                <br />
                <p><strong>Start a new game</strong></p>
                <p>
                    In order for you to start a new game, you have to <strong>first of all approve the contract to spend your 
                    coins.</strong> After approving, click on the <strong>Start New Game</strong> and specify the <strong>
                    number of players</strong> (When players reaches the specified number, a random winner will be chosen) and 
                    <strong> the entry fee</strong> (the amount of ayl token that players joining the game will have to provide).
                </p>
                <br />
                <p><strong>Joining an open game</strong></p>
                <p>
                    In order for you to join a game, you have to <strong>first of all approve the contract to spend your 
                    coins.</strong> After approving, click on the <strong>Join Game</strong> and specify the <strong>
                    game Id</strong> (which is the id of the opened game that you want to join) and 
                    <strong> the entry fee</strong> (which is the exact ayl coins that was specified by the person who started the game).
                </p>
            </div>
          </div>
        </div>
      ); 
}

export default HowToPlay;