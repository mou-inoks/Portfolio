import React from 'react'
import styles from '../style';
import ReactTypingEffect from 'react-typing-effect'

const Home = () => {
  return (
   <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
   <div className={`flex-1 ${styles.flexStart} flex-col`}>
     <div className="flex flex-row justify-between items-center w-full">
       <h1 className="flex-1 font-poppins font-semibold ss:text-[82px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-center">
         Hi, I'm <br className="sm:block hidden" />
         <ReactTypingEffect
        text={["Salim Mouttaki", "Apprentice Developper"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        typingDelay={1600}
        eraseDelay={1000}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    className="text-gradient"
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
       </h1>
     </div>
   </div>
 </section>
);
}

export default Home;