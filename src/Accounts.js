import data from "./data.json";
import Account from "./accounts/Account";

const Accounts = () => {
   return (
      <main className="container">
         {data.map((elem, index) => {
            return (
               <Account
                  name={elem.name}
                  balance={elem.balance}
                  color={elem.color}
                  operations={elem.operations}
               />
            );
         })}
      </main>
   );
};

export default Accounts;
