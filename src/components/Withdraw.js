import React from 'react';
import * as Yup from 'yup';
import { UserContext, loadAllUserData, saveAllUserData } from './Context';
import { Card } from './Card';
import Processing from './Processing';

export default function Withdraw() {
  const ctx = React.useContext(UserContext);
  const [balance, setBalance] = React.useState(() => ctx.user.balance);

  // Each balance change:
  // - updates the list of users and saves
  // - yields updated user for Context
  React.useEffect(() => {
    const userList = loadAllUserData();
    const theUser = userList.find((u) => u.id === ctx.user.id);
    theUser.balance = balance;
    ctx.user = theUser;
    saveAllUserData(userList);
  }, [balance]);

  const handleMoneyAccepted = (amount) => {
    const newBalance = Math.round((balance - Number(amount)) * 100) / 100;
    setBalance(newBalance);

    //alert with microtimeout, for apropiate on-screen result
    setTimeout(() => alert(`A withdrawal of ${amount} has been processed. Your balance is: ${newBalance}`), 50);
  };

  return (
    <Card header={`${ctx.user.name}, withdraw:`} title={`Current balance: ${balance}`}>
      <Processing
        actionText="Withdraw"
        balance={balance}
        handleMoneyAccepted={handleMoneyAccepted}
        amountValidationSchema={Yup.number()
          .required('This field is required')
          .min(0.01, 'Amount needs to be greater than 0.')
          .max(balance, 'Withdrawal cannot be larger than your balance.')}></Processing>
    </Card>
  );
}
