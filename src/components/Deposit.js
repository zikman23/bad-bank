import React from 'react';
import { useState } from 'react';
import * as Yup from 'yup';

import { UserContext, loadAllUserData, saveAllUserData } from './Context';
import { Card } from './Card';
import Processing from './Processing';

export default function Deposit() {
  const ctx = React.useContext(UserContext);
  console.log('Deposit context:', ctx.user);
  const [balance, setBalance] = useState(() => ctx.user.balance);

  React.useEffect(() => {
    const userList = loadAllUserData();
    const theUser = userList.find((u) => u.id === ctx.user.id);
    theUser.balance = balance;
    ctx.user = theUser;
    saveAllUserData(userList);
  }, [balance]);

  const handleMoneyAccepted = (amount) => {
    const newBalance = balance + Number(amount);
    setBalance(newBalance);

    //alert with microtimeout, for apropiate on-screen result
    setTimeout(() => alert(`A deposit of ${amount} has been accepted. Your balance is: ${newBalance}`), 50);
  };

  return (
    <Card header={`Deposit for ${ctx.user.name}`} title={`Current balance: ${balance}`}>
      <Processing
        actionText="Deposit"
        balance={balance}
        handleMoneyAccepted={handleMoneyAccepted}
        amountValidationSchema={Yup.number()
          .required('This field is required')
          .min(0.01, 'You have to deposit at least 0.01')}></Processing>
    </Card>
  );
}
