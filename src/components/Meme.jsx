import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

export default function Meme() {
  const [meme, setMeme] = useState({
    randomImage: "http://i.imgflip.com/1bij.jpg",
    texts: [],
  });
  const inputText = useRef();
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
    console.log("Developed & Designed by Vikas Chauhan");
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function addText() {
    if (inputText.current.value === "") {
      return;
    } else {
      setMeme((oldMeme) => {
        const newText = oldMeme.texts;
<<<<<<< HEAD
=======
        // newText.push({inputText.current.value});
>>>>>>> 8c6adf45a5db6d5268075921ff8c361b0b64a623
        newText.push({
          text: inputText.current.value,
          id: nanoid(),
        });
        return {
          ...oldMeme,
          texts: newText,
        };
      });
    }
    // console.log(meme.texts);
  }

  //For Desktop
  function deleteTextDesktop(id) {
    setMeme((oldMeme) => {
      const updatedTexts = oldMeme.texts.filter((item) => item.id !== id);
      return {
        ...oldMeme,
        texts: updatedTexts,
      };
    });
  }

<<<<<<< HEAD
=======
  //for Mobile
  // function deleteTextMobile(id) {
  //   // if (isMobile && event.detail === 2) {
  //   //   setMeme((oldMeme) => {
  //   //     const updatedTexts = oldMeme.texts.filter((item) => item.id !== id);
  //   //     return {
  //   //       ...oldMeme,
  //   //       texts: updatedTexts,
  //   //     };
  //   //   });
  //   // }
  // }

>>>>>>> 8c6adf45a5db6d5268075921ff8c361b0b64a623
  const textElements = meme.texts.map((item) => (
    <Draggable bounds="parent" key={item.id}>
      <h1
        className="meme-text"
        id="double-tap"
<<<<<<< HEAD
        onDoubleClick={() => deleteTexts(item.id)}
=======
        onDoubleClick={() => deleteTextDesktop(item.id)}
>>>>>>> 8c6adf45a5db6d5268075921ff8c361b0b64a623
        key={item.id}
      >
        {item.text}
      </h1>
    </Draggable>
  ));

  const handleEnter = (e) => {
    if (e.key === "Enter") {
<<<<<<< HEAD
=======
      // console.log("Enter key pressed");
>>>>>>> 8c6adf45a5db6d5268075921ff8c361b0b64a623
      addText();
    }
  };

  function copyImage() {
<<<<<<< HEAD
    html2canvas(memeImage.current, { allowTaint: true, useCORS: true }).then(function (
=======
    console.log("copy image function called");
    let src = document.getElementById("meme");

    // html2canvas(src, { allowTaint: true, useCORS: true }).then(function (
    //   canvas
    // ) {
    //   canvas.toBlob(function (blob) {
    //     navigator.clipboard.write([
    //       new window.ClipboardItem({ "image/png": blob }),
    //     ]);
    //   });
    // });

    html2canvas(src, { allowTaint: true, useCORS: true }).then(function (
>>>>>>> 8c6adf45a5db6d5268075921ff8c361b0b64a623
      canvas
    ) {
      canvas.toBlob(function (blob) {
        if (
          navigator.userAgent.toLowerCase().indexOf("firefox") > -1 ||
          isMobile
        ) {
          open(URL.createObjectURL(blob));
        } else {
          navigator.clipboard.write([
            new window.ClipboardItem({ "image/png": blob }),
          ]);
        }
      });
    });
  }

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="form">
        <input
          type="text"
          className="form-input"
          id="a"
          placeholder="Add Text"
          ref={inputText}
          onKeyPress={handleEnter}
          autoComplete="off"
        />
        <motion.button
          className="form-button"
          id="b"
          onClick={addText}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Add Text
        </motion.button>
        <motion.button
          className="form-button"
          id="c"
          onClick={getMemeImage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Get a new meme image 🖼
        </motion.button>
        <motion.button
          className="form-button"
          id="d"
          onClick={copyImage}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          Copy Image
        </motion.button>
      </div>
<<<<<<< HEAD
      <div className="meme" ref={memeImage}>
        <img className="meme-image" src={meme.randomImage} alt="random meme" />
        {textElements}
      </div>
=======
      <div className="meme" id="meme">
        <img className="meme-image" src={meme.randomImage} alt="random meme" />
        {textElements}
      </div>
      {/* <div className="test"></div> */}
>>>>>>> 8c6adf45a5db6d5268075921ff8c361b0b64a623
    </motion.main>
  );
}
