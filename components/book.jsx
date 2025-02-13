
import React, { useState } from "react";

const bookData = [{ text: "The Place where we met the first time, Kuch to alg dikha tha tumme, Bhot bol rhi thi us din me, interview ke lie nervous thi, fr at the end tumne bol hi dia abhi interview ke lie jate hai. I felt ki yar kyu itni bak bak ki mene ", img: ["/ses.jpg"] },
{ text: "The same day but after interview, I dont know you remember it or not, you touched my shirt and it was very awkward for me because itna close mere koi ladka kabhi nhi aaya tha, bhot ajib si feeling thi wo, and tum bilkul normal the", img: ["/ses.jpg"] },
{ text: "Our First train Journey together, Jab hum sath college gye the, socha nhi tha itna lamba sath ho jayega", img: ["/train.jpg"] },
{ text: "Ye cycle tumne help ki khridne me, remember", img: ["/cycle.jpg"] },
{ text: "L Gate, Our meet point, double egg chicken roll, Sari duniya jahan ki bate krte the idhar", img: ["/l-gate.jpg"] },
{ text: "SC, 6rs ka transfer kia tha mene tumhe fr tum date the aage se mt krna ye and Ynha ka wo ganda sa roll yad hai jo fr kutte ko khilaya tha humne. Hum roz beth te the udhr bhi, our walk", img: ["/sc.png"] },
{ text: "Humara TA bhi sath me hona, dont you think sa kuch phle se written tha", img: ["TA1.jpg", "TA2.jpg"] },
{ text: "uff ye labs, Jnha pe tum faltu flirting marte the", img: ["/labs.jpg"] },
{ text: "Ye Janmashtami ki dance night hai jo dono hostels ki sath hone wali thi but kuch ladkiyo ne oppose kia ki hume hmara alg krna hai, I was sad at that day, because me to tmhare sath aana chahti thi, dont know why", img: ["janmashtmi1.jpg"] },
{ text: "Humari Freshers, jisme tumne thus thus ke khaya tha, or mujhe chodke sabke sath pics li thi", img: ["/fresher1.jpg", "/fresher2.jpg", "/fresher3.jpg"] },
{ text: "Remember Puri, Humari one stop destination, Wo Beach party, wo prawns,wow momos bhaisahab. But every moment with you is just awesome", img: ["/puri.jpg", "/puri1.jpg", "/puri2.jpg"] },
{ text: "Library ko to tum kabhi nhi bhul skte, H na. Wo lift upr niche, and wo first time we watch that movie before coming to Jaipur. I remember each and every detail", img: ["/library.jpg"] },
{ text: "CC: Inter IIT, wo first hug in badminton court, everything was amazing and confusing, sab kuch mixed up tha", img: ["/CC.jpg"] },
{ text: "Humari pehli diwali sath me, Sach batau to kuch tha nhi us wqt but bol lo ki tum hi ek achche dost the ya jo bhi tha i got ready and eagrly waiting for you to meet, but tumne kuch tarif bhi nhi ki thi to mu utr gya tha mera", img: ["/diwali.jpg", "/diwali2.jpg"] },
{ text: "ye cycle ride yad hai? Mujhe to dar tha itni moti bhains ko bithake kaise chalaoge tum cycle", img: ["/cycle-ride.jpg", "/cycle-ride1.jpg"] },
{ text: "Our first confesstion, isi road pe tha na, guest house se CC jane wali", img: ["/guest-house.jpg"] },
{ text: "Or ye holi yad hai, kaise kapde fad ke holi kheli thi bhai sahab", img: ["/holi.jpg", "/holi2.jpg"] },
{ text: "Some memories at chilka, nandan kanan. Kitna maza aata tha tmhare sath ghumne me. bhot jada, I hope hum hamesha hi ese ghumte rhe maze krte rhe", img: ["/nandan.jpg.jpg", "/chilka1.jpg", "/chilka2.jpg"] },
{ text: "Inter IIT to hamare lie life changing tha, whi se sab shurur hua tha, one of the best part of our life", img: ["/interiit1.jpg"] },
{ text: "I might not have pics but mere dil me har ek moment chapa hua hai", img: [] },
{ text: "Humara first confession, Humara first kiss, humara hug, BBS me bitayi har ek yad, Humari first phone chat", img: ["/college.jpg"] },
{ text: "New chapter start hua jab tum Bangalore aaye, bhot dari hui thi me", img: ["/blr1.jpg", "/blr2.jpg"] },
{ text: "Omkar hill, stony brook, best feeling ever", img: ["/omkar2.jpg", "/stonybrook.jpg"] },
{ text: "Mysore trip, wo maysore masala dosa jo hume 2 din me bhi nhi mila tha. Or vnha pe wo parking me, hum kaise khde ho gye the ek car ke piche ye smjh ke ki line me khde hai, Epic moment tha wo to", img: ["/mysore.jpg"] },
{ text: "Uske bad munnar trip, unforgottable. Kitni sari yaade hai ya humari sath me, bhot kam time me bhi. wo trip to alg hi level pe tha. pyara sa thoda tension bhra thoda gusse wala but achcha tha", img: ["/munnar1.jpg", "/munnar2.jpg", "/munnar2.jpg"] },
{ text: "Bangalore me wo mehul ke sath party you remember, bhai sahab wo chicken with cheese kya hi alg level pe bana tha and how can I forgot chicken chowmean", img: ["/chicken-chowmean.jpg", "/blr4.jpg", "/blr5.jpg"] },
{ text: "Banaglore ki bhi bhot sari yade hai hmare pas, wo rasgulla chaat, anda kulfi, paththar ghost and wo bina paise die bhag gye the jo. But shows topper was KBC Bun", img: ["/vvpuram2.jpg", "/blr.jpg"] },
{ text: "Dilli ko or shadi ko kaise bhule ye btao, Wo jo chicken roll banaya tha mene was epic, and kuch kuch bad memories bhi hai but lets not remember it. But i was looking good in this dress, h na", img: ["/dilli1.jpg", "dilli2.jpg"] },
{ text: "Thak gye kya pdhte pdhte, chalo thoda sa break lo or chai sutta pio", img: ["/sutta.jpg.jpg"] },
{ text: "Han to ab hum knha aaye hai bta do, are ye kya hum to Jaipur ghum rhe, kaisa lag rha tha tumhe, pehli bar ghr walo ko bta ke hum log sath me akele ghumne gye the, I was to feeling very proud and happy", img: ["/jpr1.jpg", "jpr2.jpg"] },
{ text: "Lo ji, roka ka din itni jaldi aa gya, Bhot hi ajib sa mixed feeling wala day tha ye, sab kuch itna jaldi ho rha tha, Tum bhot hi jada pyare lag rhe the is din, and tumse pyari me, ye me nhi bol rhi I read in your eyes", img: ["/roka1.jpg", "roka2.jpg"] },
{ text: "Or wo pondi ka trip, Kitne drame hue the jaye nhi jaye. But finally we made it and you made my whole trip by proposing me. That was my dream proposal", img: ["/pondi.jpg", "/pondi1.jpg", "/proposal2.jpg"] },
{ text: "I don't know mene phle tumhe kabhi bola tha ya nhi but wo din meri life ka best day tha Meri eyes me abhi bhi wo puri story hai with image scene by scene. I can never forgot that. Bhot hi pyara moment tha jo tumne banaya tha. me flex krti hu aaj bhi us chiz ka.", img: ["/proposal.jpg"] },
{ text: "Or roke ke bad, Sagai, kitna kuch prepare kia tha is din ke lie, kitna kuch plan kia tha wo dance , dress sab kuch... but hua wo to pta hi hai. Itna kand bhara din. But I was not able to take my eyes off from you at that day.", img: ["/sagai1.jpg", "/sagai2.jpg"] },
{ text: "Waiting to meet from that day, long video calls ab satane lage hai ki why you are not here. Why can't I come and hug you , why Can't I sit with with you but Thoda or intzar, but bhot bhari pad rha hai ye intzar", img: ["/vc1.jpg", "/vc2.jpg"] },
{ text: "I may be irritating sometimes, But irritates you because I love you, I want ki tum meri expectations puri kro, sometimes hoti hai sometimes nhi but it hurts but at the end we both are together and this assurance ki 'you will never leave me' mera pyar tumhare lie...", img: ["/us.jpg"] },
{ text: "or badha deta hai, I love you, and its exponentially increasing day by day. And ye sab to bs glimps hai. Baki mere anddr humari yado ka sagar samaya hua hai.", img: ["/us.jpg"] },
{ text: "Happy Valentine's Day, My Love.", img: ["/valentine.jpg", "/valentine1.jpg"] }]


export const Book = ({ setOpenBook }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const currentPage = bookData[pageIndex];

  const handleNext = () => {
    if (pageIndex < bookData.length - 1) setPageIndex(pageIndex + 1);
    if (pageIndex === bookData.length - 1) setOpenBook(false)
  };

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
    if (pageIndex === 0) setOpenBook(false)
  };

  return (
    <div style={ { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", } }>
      {/* Text Section */ }
      <div
        style={ {
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
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          transform: "perspective(600px) rotateY(10deg) rotateX(0deg)", // 3D effect
        } }
      >
        <p style={ { fontSize: "28px", fontWeight: "bold", color: "maroon" } }>{ currentPage.text }</p>
      </div>
      <div
        style={ {
          borderRadius: "0px 6px 6px 0",
          position: "absolute",
          left: "48%",
          top: "22%",
          width: "15px",
          height: "66.3vh",
          background: "pink",
          border: "2px solid #900",
          padding: "15px",
          overflowY: "auto",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          borderLeft: 0,
          borderRight: "44px solid rgb(153,0,0)"
        } }
      />
      {/* Image Section */ }
      <div
        style={ {
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
          transform: "perspective(600px) rotateY(-10deg) rotateX(0deg)"
        } }
      >
        { currentPage.img.length > 0 ? (
          currentPage.img.map((src, index) => (
            <img
              key={ index }
              src={ src }
              alt={ `memory-${index}` }
              style={ {
                maxWidth: "100%",
                maxHeight: "45%",
                margin: "5px",
                borderRadius: "5px",
                objectFit: "cover",
              } }
            />
          ))
        ) : (
          <p>No Images</p>
        ) }
      </div>

      {/* Navigation Buttons */ }
      <button className="heart-button" onClick={ handlePrev } style={ { position: "absolute", left: "25%", top: "85%" } }>

        { pageIndex === 0 ? "💖" : "Prev 💖" }
      </button>
      <button className="heart-button" onClick={ handleNext }>
        { pageIndex === bookData.length - 1 ? "💖" : "Turn 💖" } { (pageIndex + 1) + "/" + bookData.length }
      </button>

    </div>
  );
};
