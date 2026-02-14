function IconButton({ Icon, onClickFunction }) {

  return (
    <button className="bg-neutral-200 p-1.5 rounded-2xl text-white hover:text-emerald-700">
      <Icon className="transition-colors duration-100 ease-in"/>
    </button>
  )
}

export default IconButton