function CustomButton({ text, onClickFunction }) {

  return (
    <div className="relative inline-block">
      <div class="absolute inset-0 bg-emerald-700 translate-0.5 translate-y-0.5 rounded-3xl z-0"></div>

      <button className="relative z-1 bg-neutral-200 text-emerald-700 hover:text-emerald-600 font-medium border-emerald-700 border-2 rounded-3xl p-3 min-w-30 transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:-translate-0.5 translate-0.5 translate-y-0.5 active:translate-0.5 active:translate-y-0.5">
      <p className="transition-colors duration-100 ease-in">{text}</p>
      </button>
    </div>
  )
}

export default CustomButton