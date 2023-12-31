import React, { useEffect, useState } from 'react';
import '../Assets/CSS/Style.css';
import Logo from '../Assets/images/logo.svg'



// const firstText = [
//     "GadgetPLUG",
//     "Always Available for you",
//     "Anywhere you go"
// ]



const texts = [
    "We are here for you . . ." ,
    "You can get your Phones here . . .",
    "We also have laptops . . .",
    "All your gadgets are availabe . . .",
    "We are just a Dm away . . .",
    "Waiting to hear from you . . .",
    "Thanks you for your patronage . . .",
    "Discover the latest in tech and gadgets . . .",
    "Shop a wide range of smartphones, laptops, and more . . .",
    "Stay connected with cutting-edge accessories . . .",
    "Find the perfect gift for tech enthusiasts . . .",
    "Explore top brands and innovative products . . .",
    "Enjoy fast and secure online shopping . . ",
    "Expert reviews and recommendations ! ! !",
    "Exclusive deals and discounts ! ! !",
    "Upgrade your tech game today ! ! !",
    "Your one-stop destination for all things gadgetry ! ! !",
    "Thank you"
  ];



const Home = () => {

    const [textIndex, setTextIndex] = useState(0);
    const [typingText, setTypingText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    // const [firstTextIndex, setfirstTextIndex] = useState(0);
    // const [firstTypingText, setfirstTypingText] = useState('');
    // const [firstIsTyping, setfirstIsTyping] = useState(true);


    // useEffect(() => {
    //   const firstCurrentText = firstText[firstTextIndex].split(" ");
    //   let firstCurrentWordIndex = 0;
    //   let firstCurrentWord = "";
    
    //   const typingInterval = setInterval(() => {
    //     if (isTyping) {
    //       if (firstCurrentWordIndex < firstCurrentText.length) {
    //         firstCurrentWord += firstCurrentText[firstCurrentWordIndex] + " ";
    //         setfirstTypingText(firstCurrentWord);
    //         firstCurrentWordIndex++;
    //       } else {
    //         setfirstIsTyping(false);
    //         setTimeout(() => {
    //           setfirstIsTyping(true);
    //           firstCurrentWordIndex = 0;
    //           firstCurrentWord = "";
    //           setfirstTextIndex((prevIndex) => (prevIndex + 1) % firstText.length);
    //         }, 40000);
    //       }
    //     } else {
    //       if (firstCurrentWord === "") {
    //         setTimeout(() => {
    //           setfirstTypingText("");
    //         }, 5000);
    //       } else {
    //         firstCurrentWord = firstCurrentWord.slice(0, -1);
    //         setfirstTypingText(firstCurrentWord);
    //       }
    //     }
    //   }, 3000);
    
    //   return () => clearInterval(typingInterval);
    // }, [firstTextIndex, firstIsTyping]);

    


    useEffect(() => {
        const currentText = texts[textIndex].split(" ");
        let currentWordIndex = 0;
        let currentWord = "";
      
        const typingInterval = setInterval(() => {
          if (isTyping) {
            if (currentWordIndex < currentText.length) {
              currentWord += currentText[currentWordIndex] + " ";
              setTypingText(currentWord);
              currentWordIndex++;
            } else {
              setIsTyping(false);
              setTimeout(() => {
                setIsTyping(true);
                currentWordIndex = 0;
                currentWord = "";
                setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
              }, 1000);
            }
          } else {
            if (currentWord === "") {
              setTimeout(() => {
                setTypingText("");
              }, 500);
            } else {
              currentWord = currentWord.slice(0, -1);
              setTypingText(currentWord);
            }
          }
        }, 500);
      
        return () => clearInterval(typingInterval);
      }, [textIndex, isTyping]);


   
    return (

        <div>

            <div className="bg-[#ece7e1] h-screen w-screen md:flex relative md:static">

            <section className="md:w-[50%] xl:w-[55%]">

                <h1 className="py-[20px] px-[20px]">
                    <span className="text-[20px] font-[600] font-['Lily_Script_One'] text-[#FF7576]">YOUR</span> 
                    <span id="sure" className="text-[15px] font-[500] font-['Amaranth'] italic">sure</span>
                    <span className="text-[20px] font-[600] font-['Lily_Script_One'] text-[#FF7576] ">PLug</span>
                </h1>

                <div className={`text-[35px] xl:text-[50px] font-[700] font-['Lily_Script_One'] text-[#FF7576] mt-[150px] md:mt-[300px] xl:mt-[350px] 2xl:mt-[300px] px-[20px] ${isTyping ? 'typing-animation' : ''}`}>
                  {/* {firstTypingText} */}
                  <div>
                  {typingText} 
                  {isTyping && <div className="typing-circle">
                  </div>}
                  </div>

                </div>

            </section>

            <section className="bg-[#171415] rounded-tl-[20px] rounded-tr-[20px] fixed bottom-0 md:static w-screen md:rounded-none text-white md:w-[50%] xl:w-[45%] md:flex md:flex-col md:justify-end md:gap-[200px] xl:gap-[380px] 2xl:gap-[290px] pb-0">


                <div>
                    <div className="flex justify-center mt-[15px]">
                    <h2 className="mt-[30px] text-[30px] font-[600] xl:text-[40px]">Get started with us</h2>
                    </div>


                    <div className="flex justify-center gap-[10px] mt-[20px]">

                        <button className="bg-[#1c19c2] px-[40px] py-[10px] rounded-[10px] xl:py-[20px] xl:px-[80px]"><a href="#">Sign Up</a></button>
                        <button className="bg-[#1c19c2] px-[50px] py-[10px] rounded-[10px] xl:py-[20px] xl:px-[90px]"><a href="#">Login</a></button>

                    </div>

                </div>

                <div>
                    <div className="flex justify-center mt-[40px] gap-[2px]">

                    <img src={Logo} alt="" /> 
                    <p className="mt-[5px]">GadgetPLUG</p>

                    </div>


                    <div className="flex justify-center gap-[20px] py-[50px]">
                        <p>Terms of Use</p>
                        <hr className="w-[1px] h-[10px] bg-white rotate-[180deg] mt-[8px]" />
                        <p>Privacy policy</p>
                    </div>

                </div>
 
            </section>

                
            </div>





        </div>
    )


}





export default Home;
