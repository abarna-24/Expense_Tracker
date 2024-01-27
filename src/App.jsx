import './index.css'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExp from './Components/IncomeExp'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'
import { GlobalProvider } from './Context/GlobalState'
function App() {

  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExp/>
      <TransactionList/>
      <AddTransaction/>
    </GlobalProvider>
  )
}

export default App
