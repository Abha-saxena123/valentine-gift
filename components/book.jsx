
import React, { useState } from "react";

const bookData = [{text:"The Place where we met the first time, Kuch to alg dikha tha tumme, Bhot bol rhi thi us din me, interview ke lie nervous thi, fr at the end tumne bol hi dia abhi interview ke lie jate hai. I felt ki yar kyu itni bak bak ki mene ",img:[""]},
{text:"The same day but after interview, I dont know you remember it or not, you touched my shirt and it was very awkward for me because itna close mere koi ladka kabhi nhi aaya tha, bhot ajib si feeling thi wo, and tum bilkul normal the",img:[""]},
{text:"Our First train Journey together, Jab hum sath college gye the, socha nhi tha itna lamba sath ho jayega",img:[""]},
{text:"Ye cycle tumne help ki khridne me, remember",img:[""]},
{text:"L Gate, Our meet point, double egg chicken roll, Sari duniya jahan ki bate krte the idhar",img:[""]},
{text:"SC, 6rs ka transfer kia tha mene tumhe fr tum date the aage se mt krna ye and Ynha ka wo ganda sa roll yad hai jo fr kutte ko khilaya tha humne. Hum roz beth te the udhr bhi, our walk",img:[""]},
{text:"Humara TA bhi sath me hona, dont you think sa kuch phle se written tha",img:[""]},
{text:"uff ye labs, Jnha pe tum faltu flirting marte the",img:[""]},
{text:"Ye Janmashtami ki dance night hai jo dono hostels ki sath hone wali thi but kuch ladkiyo ne oppose kia ki hume hmara alg krna hai, I was sad at that day, because me to tmhare sath aana chahti thi, dont know why",img:[""]},
{text:"Humari Freshers, jisme tumne thus thus ke khaya tha, or mujhe chodke sabke sath pics li thi",img:[""]},
{text:"Remember Puri, Humari one stop destination, Wo Beach party, wo prawns,wow momos bhaisahab. But every moment with you is just awesome",img:[""]},
{text:"Library ko to tum kabhi nhi bhul skte, H na. Wo lift upr niche, and wo first time we watch that movie before coming to Jaipur. I remember each and every detail",img:[""]},
{text:"CC: Inter IIT, wo first hug in badminton court, everything was amazing and confusing, sab kuch mixed up tha",img:[""]},
{text:"ye cycle ride yad hai? Mujhe to dar tha itni moti bhains ko bithake kaise chalaoge tum cycle",img:[""]},
{text:"I might not have pics but mere dil me har ek moment chapa hua hai",img:[""]},
{text:"Humara first confession, Humara first kiss, humara hug, BBS me bitayi har ek yad, Humari first phone chat",img:[""]},
{text:"New chapter start hua jab tum Bangalore aaye, bhot dari hui thi me",img:[""]},
{text:"Omkar hill, stony brook, best feeling ever",img:[""]},
{text:"Maysore trip, wo maysore masala dosa jo hume 2 din me bhi nhi mila tha",img:[""]},
{text:"",img:[""]},
{text:"",img:[""]},
{text:"",img:[""]},
{text:"",img:[""]},
{text:"",img:[""]},
{text:"Happy Valentine's Day, My Love",img:[""]}]


export const Book = ({ setOpenBook }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const currentPage = bookData[pageIndex];

  const handleNext = () => {
    if (pageIndex < bookData.length - 1) setPageIndex(pageIndex + 1);
    if(pageIndex===bookData.length-1) setOpenBook(false)
  };

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
    if(pageIndex===0) setOpenBook(false)
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" ,}}>
      {/* Text Section */}
      <div
        style={{
          position: "absolute",
          left: "20%",
          top: "20%",
          width: "30vw",
          height: "70vh",
          background: "pink",
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          border: "2px solid #900",
          padding: "20px",
          overflowY: "auto",
          justifyContent:"center",
          alignItems:"center",
          display:"flex",
          transform: "perspective(600px) rotateY(10deg) rotateX(0deg)", // 3D effect
        }}
      >
        <p style={{ fontSize: "28px", fontWeight: "bold" ,color:"maroon"}}>{currentPage.text}</p>
      </div>
      <div
        style={{
          borderRadius:"0px 6px 6px 0",
          position: "absolute",
          left: "48%",
          top: "22%",
          width: "15px",
          height: "66.3vh",
          background: "pink",
          border: "2px solid #900",
          padding: "15px",
          overflowY: "auto",
          justifyContent:"center",
          alignItems:"center",
          display:"flex",
          borderLeft:0,
          borderRight:"44px solid rgb(153,0,0)"
        }}
      />
      {/* Image Section */}
      <div
        style={{
          position: "absolute",
          left: "50.35%",
          top: "20%",
          width: "30vw",
          height: "70vh",
          background: "pink",
          boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
          borderRadius: "10px",
          border: "2px solid #900",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          padding: "10px",
transform:"perspective(600px) rotateY(-10deg) rotateX(0deg)"
        }}
      >
        {currentPage.img.length > 0 ? (
          currentPage.img.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`memory-${index}`}
              style={{
                maxWidth: "100%",
                maxHeight: "45%",
                margin: "5px",
                borderRadius: "5px",
                objectFit: "cover",
              }}
            />
          ))
        ) : (
          <p>No Images</p>
        )}
      </div>

      {/* Navigation Buttons */}
      <button className="heart-button" onClick={handlePrev} style={{ position: "absolute", left: "25%", top: "85%" }}>
       
 {pageIndex ===0? "💖":"Prev 💖"}
      </button>
      <button className="heart-button" onClick={handleNext}>
        {pageIndex ===bookData.length-1? "💖":"Turn 💖"}
      </button>
    </div>
  );
};
