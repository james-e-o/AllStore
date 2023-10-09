import React from 'react'

const SalesInvoice = () => {
    const rows = [];
  for (let i = 1; i <= 25; i++) {
    rows.push(
    <tr key={i}>
        <td className="border-slate-300 border py-1 px-1 text-center text-sm">{i}</td>
        <td className="border-slate-300 border py-1 px-1 text-center text-sm">{i}</td>
        <td className="border-slate-300 border py-1 px-1 text-center text-sm"><input type="text" /></td>
        <td className="border-slate-300 border py-1 px-1 text-center text-sm">{i}</td>
        <td className="border-slate-300 border py-1 px-1 text-center text-sm">{i}</td>
        <td className="border-slate-300 border py-1 px-1 text-center text-sm">{i}</td>
        <td className="border-slate-300 border py-1 px-1 text-center text-sm">{i}</td>
    </tr>);
  }
  return (
    <div className="h-full flex">
        <div className="flex flex-col h-full w-[68%]">
            <div id='table-wrap' className="overflow-y-scroll h-[90%] border rounded border-slate-300 ">
                <div className="table h-full mx-1">
                    <thead>
                        <tr className="p-1">
                            <th className="border-slate-300 border py-1 text-sm px-[2px] text-center border-spacing-x-[5px] w-[6%]">S/N</th>
                            <th className="border-slate-300 border py-1 text-sm px-[2px] text-center border-spacing-x-[5px]  w-1/12">Code</th>
                            <th className="border-slate-300 border py-1 text-sm px-[2px] text-center border-spacing-x-[5px] w-[28%]">Item Description</th>
                            <th className="border-slate-300 border py-1 text-sm px-[2px] text-center border-spacing-x-[5px]  w-1/12">Cost Pr.</th>
                            <th className="border-slate-300 border py-1 text-sm px-[2px] text-center border-spacing-x-[5px] w-1/12">Discount</th>
                            <th className="border-slate-300 border py-1 text-sm px-[2px] text-center border-spacing-x-[5px]  w-[11%]">Stock bal.</th>
                            <th className="border-slate-300 border py-1 text-sm px-[2px] text-center border-spacing-x-[5px]  w-1/12">Sell Pr.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                    <tfoot></tfoot>
                </div>
            </div>
            <div className="border my-1 h-14 rounded border-slate-300 w-full">buy</div>
        </div>
        <div className="p-2 mx-5 rounded border border-slate-300 h-full w-[33%]">

        </div>
    </div>
  )
}

export default SalesInvoice