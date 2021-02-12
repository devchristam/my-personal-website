const SelfIntro = () => {
    return (
      <div className="bg-white mt-20 mb-20">
        <div className="max-w-2xl px-6 text-center mx-auto">
          <h2 className="text-5xl font-semibold text-gray-800">Hello, my name is <span className="text-green-400">Chris Tam</span> </h2>
          <p className="font-light text-4xl text-gray-600 mt-4">I am a full-stack web developer.</p>

          <div className="flex items-end justify-center mt-16">
            <img className="rounded-full" height="200" src="image/avatar_small.jpg" alt=""/>
          </div>
        </div>
      </div>
    )
}

export default SelfIntro