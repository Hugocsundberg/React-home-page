import React from "react";
import Header from "./header";
import Video_block from "./video_block";
import Image_block from "./image_block";
import "./fadein.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Video_block
        video="2"
        height="60"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            enim ad magnam beatae, minus ipsum eius commodi eos quod
            consequuntur. Minima hic autem quas? Sunt hic optio error iste
            fugit."
        headline="Lorem Ipsum"
        tool1="react"
        tool2="js"
        buttontext="TESTTEXT"
      />
      <Image_block
        name="secondBlock"
        video="1"
        height="80"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            enim ad magnam beatae, minus ipsum eius commodi eos quod
            consequuntur. Minima hic autem quas? Sunt hic optio error iste
            fugit."
        headline="Lorem Ipsum"
        tool1="react"
        tool2="js"
      />
      <Image_block
        name="thirdBlock"
        video="1"
        height="80"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
            enim ad magnam beatae, minus ipsum eius commodi eos quod
            consequuntur. Minima hic autem quas? Sunt hic optio error iste
            fugit."
        headline="Lorem Ipsum"
        tool1="react"
        tool2="js"
        buttontext="Klicka här"
      />
    </div>
  );
}

export default App;
