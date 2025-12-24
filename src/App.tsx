import React from "react";
import Header from "./components/Header";
import Post from "./components/Post";
import SideMenu from "./components/SideMenu";

const App = () => {
  return (
    <div>
      <Header />

      <div className="flex justify-center">
        {/* Posts & Side Menu Container */}
        <div className="flex w-[60%]">
          {/* Posts Container */}
          <div className="w-[70%]">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>

          {/* Side Menu Container */}
          <div className="w-[30%]">
            <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
