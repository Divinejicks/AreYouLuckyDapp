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
            </div>
          </div>
        </div>
      ); 
}

export default HowToPlay;