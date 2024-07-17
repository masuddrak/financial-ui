const CashFlow = () => {
  return (
    <div className="relative">
      <ul className="text-xs relative z-40 text-gray-500 flex gap-3 pt-6">
        <li className="border-b-[4px] cursor-pointer border-[#003a4600] hover:border-b-[4px] hover:border-[#003a46] pb-2 ">
          Cash flow
        </li>
        <li className="border-b-[4px] cursor-pointer border-[#003a4600] hover:border-b-[4px] hover:border-[#003a46] pb-2 ">
          Cash transfer
        </li>
        <li className="border-b-[4px] cursor-pointer border-[#003a4600] hover:border-b-[4px] hover:border-[#003a46] pb-2 ">
          Cash in
        </li>
        <li className="border-b-[4px] cursor-pointer border-[#003a4600] hover:border-b-[4px] hover:border-[#003a46] pb-2 ">
          Cash out
        </li>
        <li className="border-b-[4px] cursor-pointer border-[#003a4600] hover:border-b-[4px] hover:border-[#003a46] pb-2 ">
          Bulk entries
        </li>
        <li className="border-b-[4px] cursor-pointer border-[#003a4600] hover:border-b-[4px] hover:border-[#003a46] pb-2 ">
          Cash out approval
        </li>
        <li className="border-b-[4px] cursor-pointer border-[#003a4600] hover:border-b-[4px] hover:border-[#003a46] pb-2 ">
          Cash in request
        </li>
        <li className="border-b-[4px] cursor-pointer border-[#003a4600] hover:border-b-[4px] hover:border-[#003a46] pb-2 ">
          Advance cash out
        </li>
        <li className="border-b-[4px] cursor-pointer border-[#003a4600] hover:border-b-[4px] hover:border-[#003a46] pb-2 ">
          Import
        </li>
      </ul>
      <hr className="border-b-[2px] z-10 absolute bottom-[1px] w-full border-[#ccc0e783]" />
    </div>
  );
};

export default CashFlow;
