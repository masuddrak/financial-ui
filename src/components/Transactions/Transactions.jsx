import CashFlow from "./CashFlow";
import FilteFlow from "./FilteFlow";
import Tabel from "./Tabel";
import TakaCard from "./TakaCard";

const Transactions = () => {
    return (
        <div className="space-y-3">
            <CashFlow></CashFlow>
            <FilteFlow></FilteFlow>
            <TakaCard></TakaCard>
            <Tabel></Tabel>
        </div>
    );
};

export default Transactions;