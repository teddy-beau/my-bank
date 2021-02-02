import Logo from "./header/Logo";
import User from "./header/User";

const Header = () => {
   return (
      <header>
         <div className="container">
            <Logo />
            <User />
         </div>
      </header>
   );
};

export default Header;
