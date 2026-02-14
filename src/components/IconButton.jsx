function IconButton({ Icon, onClickFunction }) {

  return (
    <div className="relative inline-block">
      <div class="absolute inset-0 bg-emerald-700 translate-0.5 translate-y-0.5 rounded-2xl z-0"></div> 

      <button className="relative z-1 bg-neutral-200 p-1.5 border-2 border-emerald-700 rounded-2xl text-emerald-700 hover:text-emerald-600 translate-0.5 translate-y-0.5 hover:-translate-0.5 hover:-translate-y-0.5 transition-transform duration-300 ease-out active:translate-0.5 active:translate-y-0.5">
        <Icon className="transition-colors duration-100 ease-in"/>
      </button> 
    </div>
  )
}

export default IconButton