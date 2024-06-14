import { appleImg, bagImg, searchImg } from "../utils";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
                  <img src={appleImg} alt="Apple" width={14} height={18} />
                  <div>
                      {["Phone", "Mac", "iPad", "Watch", "TV", "Music", "Support", "Where to Buy"].map((item) => (
                      <div key={item}>
                            {item}
                    </div>  
                ))}
                  </div>
                  <div>
                      <img src={searchImg} alt="Search" width={18} height={18} />
                      <img src={bagImg} alt="Bag" width={18} height={18} />
                  </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar