import blocks from "@/mockData"

export default function Home() {
  return (
    <div className="
      flex
      flex-col
      w-[700px]
      m-auto
      border-x
      border-gray-20
      h-full
    ">
      <h1 className="border-b h-[70px]">Home</h1>
      <div className="flex flex-col align-middle">
        {
          blocks.map((block, i) => <div key={i}>this is a block</div>)
        }
      </div>
    </div>
  );
}
