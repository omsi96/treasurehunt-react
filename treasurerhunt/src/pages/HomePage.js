import React from "react";
import ItemsList from "../components/ItemsList";
import treasureStore from "../stores/TreasureStore";
const HomePage = () => {
  const things = [
    {
      text: "Garabage can",
      image:
        "https://images.homedepot-static.com/productImages/6f485c4a-3012-4f3e-b7c2-dc7e9d8abe7e/svn/toter-outdoor-trash-cans-79264-r2968-64_1000.jpg",
    },
    {
      text: "Garabage can",
      image:
        "https://images.homedepot-static.com/productImages/6f485c4a-3012-4f3e-b7c2-dc7e9d8abe7e/svn/toter-outdoor-trash-cans-79264-r2968-64_1000.jpg",
    },
    {
      text: "Garabage can",
      image:
        "https://images.homedepot-static.com/productImages/6f485c4a-3012-4f3e-b7c2-dc7e9d8abe7e/svn/toter-outdoor-trash-cans-79264-r2968-64_1000.jpg",
    },
    {
      text: "Garabage can",
      image:
        "https://images.homedepot-static.com/productImages/6f485c4a-3012-4f3e-b7c2-dc7e9d8abe7e/svn/toter-outdoor-trash-cans-79264-r2968-64_1000.jpg",
    },
    {
      text: "Garabage can",
      image:
        "https://images.homedepot-static.com/productImages/6f485c4a-3012-4f3e-b7c2-dc7e9d8abe7e/svn/toter-outdoor-trash-cans-79264-r2968-64_1000.jpg",
    },
  ];
  return (
    <div>
      <ItemsList items={things} />
    </div>
  );
};

export default HomePage;
