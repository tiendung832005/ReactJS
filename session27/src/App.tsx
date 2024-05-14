// import B1 from "./components/B1.tsx"
import ListCourse from "./components/ListCourse.tsx"
import Calculation from "./components/Calculation.tsx"
import UserInfo from "./components/UserInfo.tsx"
import './index.css' 
import Header from "./components/Header.tsx"
import Navigation from "./components/Navigation.tsx"
import Article from "./components/Article.tsx"
import Menu from "./components/Menu.tsx"
import Cart from "./components/Cart.tsx"
export default function App() {
  return (
    <div>
      <ListCourse></ListCourse>
      <Calculation></Calculation>
      <UserInfo></UserInfo>
      
      <div className="container">
          <Header></Header>
          <Navigation></Navigation>
          
          <main className="main">
            <Menu></Menu>
            <Cart></Cart>
            <Article></Article>
          </main>
      </div>
    </div>
  )
}



