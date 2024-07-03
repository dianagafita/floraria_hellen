export default function Search({ inputChanges, pChanges }) {
  return (
    <form className="w-full text-[#cdcdcd]">
      <p
        className={`border-b border-[#cdcdcd] text-[#cdcdcd] font-[300] text-[15px] mx-4 py-1 ${pChanges}`}
      >
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Cauta..."
          className={`focus:outline-none ${inputChanges} placeholder-[#cdcdcd]`}
        />
      </p>
    </form>
  );
}
