import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Heart3D } from "../components/heart";
import { Book } from "@/valentine-gift/components/book";

const generateHearts = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2 + 2,
    delay: Math.random() * 5,
  }));
};

export default function Home() {
  const [hearts, setHearts] = useState([]);
  const [openBook, setOpenBook] = useState(false);

  useEffect(() => {
    setHearts(generateHearts(20));
  }, []);

  return (
    <div>
      <div className="relative w-screen h-screen overflow-hidden bg-pink-100 flex flex-col items-center justify-center" style={ { display: "flex", flex: 1, maxHeight: "100vh" } }>
        { [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
          <div key={ e } className="absolute inset-0 z-0 flex flex-wrap" style={ { flex: 1 } }>
            { hearts.map((heart) => (
              <motion.div
                key={ heart.id + '-' + e }
                initial={ { y: "-10%", opacity: 0 } }
                animate={ { y: "110%", opacity: 1 } }
                transition={ { duration: 6, delay: heart.delay, repeat: Infinity } }
                className="absolute text-red-500"
                style={ { left: `${heart.left + e * 20}%`, top: `${heart.top}%`, fontSize: `${heart.size}rem` } }
              >
                ❤️
              </motion.div>
            )) }
          </div>
        )) }

      </div>
      { !openBook && <Heart3D setOpenBook={ setOpenBook } /> }
      { openBook && <Book setOpenBook={ setOpenBook } /> }

    </div >
  );
}
