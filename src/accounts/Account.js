import Button from "./Button";

const Account = (props) => {
   return (
      <section>
         <div>
            <div
               className="account-header"
               style={{ backgroundColor: props.color }}
            >
               <h2>{props.name}</h2>
               <span>{props.balance.toFixed(2)}</span>
            </div>
            <div className="operation-list">
               {props.operations.map((elem, index) => {
                  return (
                     <div>
                        <div>{elem.date}</div>
                        <div>{elem.description}</div>
                        <div>{elem.amount.toFixed(2)}</div>
                     </div>
                  );
               })}
            </div>
         </div>
         <Button />
      </section>
   );
};

export default Account;
