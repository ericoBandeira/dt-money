import { Header } from "../../components/Header/intex";
import { Summary } from "../../components/Summary/intex";
import { SearchForm } from "./SearchForm/intex";
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Conta de luz</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 100,00</PriceHighLight>
              </td>
              <td>Conta</td>
              <td>18/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
