import { CiFilter } from "react-icons/ci";

const FilteFlow = () => {
  return (
    <form className="flex items-end gap-3">
      <div>
        <label htmlFor="" className="text-xs">From</label>
        <br />
        <input
          type="text"
          className="border-[1px] text-xs text-gray-800 px-3 py-2 rounded-[4px] outline-0"
          placeholder="June, 2024"
          name=""
          id=""
        />
      </div>
      <div>
        <label htmlFor="" className="text-xs">From</label>
        <br />
        <input
          type="text"
          className="border-[1px] text-xs text-gray-800 px-3 py-2 rounded-[4px] outline-0"
          placeholder="June, 2024"
          name=""
          id=""
        />
      </div>
      <div>
        <button className="bg-[#B0D1D8] flex items-center gap-1 text-xs px-3 py-2 rounded-[4px]"><CiFilter className="text-xl "></CiFilter> Filter</button>
      </div>
    </form>
  );
};

export default FilteFlow;
