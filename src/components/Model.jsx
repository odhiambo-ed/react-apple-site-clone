import ModelView from "./ModelView"

function Model() {
  return (
      <section className="common-padding">
          <div className="screen-max-width">
              <h1 id="heading" className="section-heading">
                  Take a closer look at the iPhone 15 Pro
              </h1>
              <div className="flex flex-col items-center mt-5">
                  <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                      <ModelView />
                  </div>
              </div>
          </div>
    </section>
  )
}

export default Model