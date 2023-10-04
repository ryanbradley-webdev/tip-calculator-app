import './App.css'

function App() {
  return (
    <main>
      
      <img
        src='/logo.svg'
        alt='SPLITTER'
      />

      <section>

        <div
          className='inputs'
        >

          <label htmlFor="bill">

            <h4>
              Bill
            </h4>

            <input
              type="text"
              name="bill"
              id="bill"
            />

          </label>

          <div
            className='options'
          >

            <h4>
              Select Tip %
            </h4>

            <label htmlFor="five">
              <span>
                5%
              </span>

              <input type="radio" name="percent" id="five" />
            </label>
            
            <label htmlFor="ten">
              <span>
                10%
              </span>

              <input type="radio" name="percent" id="ten" />
            </label>
            
            <label htmlFor="fifteen">
              <span>
                15%
              </span>

              <input type="radio" name="percent" id="fifteen" />
            </label>
            
            <label htmlFor="twentyfive">
              <span>
                25%
              </span>

              <input type="radio" name="percent" id="twentyfive" />
            </label>
            
            <label htmlFor="fifty">
              <span>
                50%
              </span>

              <input type="radio" name="percent" id="fifty" />
            </label>
            
            <label htmlFor="custom">

              <span>
                Custom
              </span>

              <input type="radio" name='percent' id='custom' />

            </label>

          </div>

          <label htmlFor="people">

            <h4>
              Number of People
            </h4>

            <input type="number" name="people" id="people" />

          </label>

        </div>

        <div
          className='totals'
        >

          <div>

            <div>

              <h3>
                Tip Amount
              </h3>

              <p>
                / person
              </p>

            </div>

            <h2>
              $4.27
            </h2>

          </div>

          <div>

            <div>

              <h3>
                Total
              </h3>

              <p>
                / person
              </p>

            </div>

            <h2>
              $32.79
            </h2>

          </div>

          <button>
            RESET
          </button>

        </div>

      </section>

    </main>
  )
}

export default App
