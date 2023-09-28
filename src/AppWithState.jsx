import Counter from "./components/Counter";
import MultipleImages from "./components/MultipleImages";
import ImgThumbnail from "./components/imgThumbnail";

// useState -> Durum bilgisi ve durum bilgisini degistirecek fonksiyon(render)

export default function AppWithState() {
  // let counter = 0
  return (
    <>
    <h1>State Konusu</h1>
    <Counter />
    <hr />
    <MultipleImages />
    </> 
  )
}