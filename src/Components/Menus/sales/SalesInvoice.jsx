import React from 'react'

const SalesInvoice = () => {
    const rows = [];
  for (let i = 1; i <= 25; i++) {
    rows.push(
    <tr key={i}>
        <td className="border-slate-300 border py-1 px-[3px] text-center text-xs">{i}</td>
        <td className="border-slate-300 border py-1 px-[3px] text-center text-xs">{"myboyeeee"}</td>
        <td className="border-slate-300 border py-1 px-[3px] text-center text-xs"><input type="text" /></td>
        <td className="border-slate-300 border py-1 px-[3px] text-center text-xs">{i}</td>
        <td className="border-slate-300 border py-1 px-[3px] text-center text-xs">{i}</td>
        <td className="border-slate-300 border py-1 px-[3px] text-center text-xs">{i}</td>
        <td className="border-slate-300 border py-1 px-[3px] text-center text-xs">{i}</td>
        <td className="border-slate-300 border py-1 px-[3px] text-center text-xs">{i}</td>
    </tr>);
  }
  return (
    <div className="h-full flex">
        <div className="flex flex-col h-full w-[68%]">
            <div id='table-wrap' className="overflow-y-scroll h-[90%] border rounded border-slate-300 ">
                <div className="table h-full mx-2 relative">
                    <thead className="sticky top-0 bg-slate-100 z-[1]">
                        <tr className="p-1">
                            <th className="border-slate-300 border py-1 text-xs px-[2px] text-center border-spacing-x-[5px] w-[6%]">S/N</th>
                            <th className="border-slate-300 border py-1 text-xs px-[2px] text-center border-spacing-x-[5px]  w-1/12">Code</th>
                            <th className="border-slate-300 border py-1 text-xs px-[2px] text-center border-spacing-x-[5px] w-[26%]">Item Description</th>
                            <th className="border-slate-300 border py-1 text-xs px-[2px] text-center border-spacing-x-[5px]  w-[7%]">Qty.</th>
                            <th className="border-slate-300 border py-1 text-xs px-[2px] text-center border-spacing-x-[5px]  w-[7%]">Cost Pr.</th>
                            <th className="border-slate-300 border py-1 text-xs px-[2px] text-center border-spacing-x-[5px] w-[6%]">Disc.</th>
                            <th className="border-slate-300 border py-1 text-xs px-[2px] text-center border-spacing-x-[5px]  w-1/12">Stock bal.</th>
                            <th className="border-slate-300 border py-1 text-xs px-[2px] text-center border-spacing-x-[5px]  w-1/12">Item total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                    <tfoot></tfoot>
                </div>
            </div>
            <div className="border flex justify-around mt-[6px] p-1 text-xs h-16 rounded border-slate-300 w-full">
                <div className="flex flex-col gap-1 rounded w-[19%] border border-slate-300">
                    <div className="text-center p-[2px] font-semibold">Markup%</div>
                    <div className="text-center font-bold"><input className="w-[85%] outline-none mb-1 text-center bg-slate-100 border-slate-300 p-[3px] rounded " type="text" /></div>
                </div>
                <div className="flex flex-col gap-1 rounded w-[19%] border border-slate-300">
                    <div className="text-center p-[2px] font-semibold">VAT%</div>
                    <div className="text-center font-bold"><input className="w-[85%] outline-none mb-1 text-center bg-slate-100 border-slate-300 p-[3px] rounded " type="text" /></div>
                </div>
                <div className="flex flex-col gap-1 rounded w-[19%] border border-slate-300">
                    <div className="text-center p-[2px] font-semibold">Total</div>
                    <div className="text-center font-bold"><input className="w-[85%] outline-none mb-1 text-center bg-slate-100 border-slate-300 p-[3px] rounded " type="text" /></div>
                </div>
                <div className="flex flex-col gap-1 rounded w-[19%] border border-slate-300">
                    <div className="text-center p-[2px] font-semibold">Total</div>
                    <div className="text-center font-bold"><input className="w-[85%] outline-none mb-1 text-center bg-slate-100 border-slate-300 p-[3px] rounded " type="text" /></div>
                </div>
                <div className="flex flex-col gap-1 rounded w-[19%] border border-slate-300">
                    <div className="text-center p-[2px] font-semibold">Total</div>
                    <div className="text-center font-bold"><input className="w-[85%] outline-none mb-1 text-center bg-slate-100 border-slate-300 p-[3px] rounded " type="text" /></div>
                </div>
            </div>
        </div>
        <div className="p-2 mx-5 rounded flex flex-col border border-slate-300 h-full w-[33%]">
            <div className="flex justify-center items-center gap-2">
                <div className="text-center p-[2px] font-semibold">Customer:</div>
                <div className="bg-slate-400 rounded pl-4 text-white border w-2/4 border-slate-300 text-start p-1 font-bold"> hello</div>  
            </div>
        </div>
    </div>
  )
}

export default SalesInvoice