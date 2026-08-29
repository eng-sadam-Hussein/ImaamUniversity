export default function Loading(){
  return <div className="min-h-[55vh] bg-white"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="h-3 w-36 animate-pulse rounded-full bg-imam-100"/><div className="mt-5 h-10 max-w-xl animate-pulse rounded-2xl bg-slate-100"/><div className="mt-4 h-5 max-w-2xl animate-pulse rounded-xl bg-slate-100"/><div className="mt-10 grid gap-5 md:grid-cols-3">{[1,2,3].map(x=><div key={x} className="h-52 animate-pulse rounded-3xl bg-imam-50"/>)}</div></div></div>
}
