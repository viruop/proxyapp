import  Drop  from './components/Dropdown'


export default function Example() {
  return (
          <><section className="h-full w-full px-3 antialiased bg-indigo-600 lg:px-6 ">
      <div className="mx-auto max-w-7xl" />
      <div className="container py-32 mx-auto text-center sm:px-4">
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl">
          <span className="block">Simplify the way you</span> <span className="relative inline-block mt-3 text-white">design websites</span></h1>
        <div className="max-w-lg mx-auto mt-6 text-sm text-center text-indigo-200 md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">
          If you are ready to change the way you design websites, then you'll want to use our block builder to make it fun and easy!
        </div>
        <Drop />
        <div className="mt-8 text-sm text-indigo-300">By signing up, you agree to our terms and services.</div>
      </div>
    </section></>
  )
}