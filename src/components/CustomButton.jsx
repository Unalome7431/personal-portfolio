function CustomButton({ text, onClickFunction }) {

  return (
    <div className="relative inline-block">
      <div class="absolute inset-0 bg-emerald-700 translate-0.5 translate-y-0.5 rounded-4xl z-0"></div>

      <button className="relative z-1 bg-neutral-200 text-emerald-700 font-medium border-emerald-700 border-2 rounded-4xl p-3 min-w-30 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:-translate-0.5 translate-0.5 translate-y-0.5 active:translate-0.5 active:translate-y-0.5">
      {text}
      </button>
    </div>
  )
}

export default CustomButton