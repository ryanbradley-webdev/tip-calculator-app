import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [bill, setBill] = useState('')
  const [tip, setTip] = useState<number | undefined>()
  const [customTip, setCustomTip] = useState(false)
  const [people, setPeople] = useState<string>('')

  const customTipRef = useRef<HTMLInputElement>(null)

  const inputIsNumber = (input: string) => {
    const digits = input.replace('.', '')
    const isNumber = digits.replace(/[0-9]/g, '').length === 0
    return isNumber
  }

  const formatCurrency = (value: string | number) => {
    const valueStr = typeof value === 'number' ? value.toString() : value

    const decimalIdx = valueStr.indexOf('.')

    if (decimalIdx < 0) {
      return valueStr + '.00'
    }

    if (valueStr.length === decimalIdx + 2) {
      return valueStr + '0'
    }

    return valueStr.slice(0, decimalIdx + 3)
  }

  const removePrependedZeros = (value: string): string => {
    if (value.length === 0 || value === '0' || value[0] !== '0') {
      return value
    }

    return removePrependedZeros(value.substring(1))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = e.target

    if (id === 'custom') {
      setTip(0)
      return setCustomTip(true)
    }

    if (inputIsNumber(value)) {
      if (name === 'bill') {
        let newBill = value[0] === '0' && value.length > 1 ? value.slice(1) : value
        const decimalIdx = newBill.indexOf('.')
        if (decimalIdx >= 0) {
          newBill = newBill.slice(0, decimalIdx + 3)
        }
        setBill(newBill)
      } else if (name === 'tip') {
        setTip(Number(value))
        setCustomTip(id === 'custom_tip_value')
      } else if (name === 'people') {
        setPeople(Number(value) < 0 ? '' : removePrependedZeros(value))
      }
    }
  }

  const validateCustomTip = () => {
    setCustomTip(!!tip)
  }

  const resetForm = () => {
    setBill('')
    setTip(undefined)
    setCustomTip(false)
    setPeople('')
  }

  useEffect(() => {
    if (customTip && customTipRef?.current) {
      customTipRef.current.focus()
      customTipRef.current.select()
    }
  }, [customTip])

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
              placeholder='0'
              value={bill}
              onChange={handleChange}
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

              <input type="radio" name="tip" id="five" checked={tip === 0.05 && !customTip} value={0.05} onChange={handleChange} />
            </label>
            
            <label htmlFor="ten">
              <span>
                10%
              </span>

              <input type="radio" name="tip" id="ten" checked={tip === 0.1 && !customTip} value={0.1} onChange={handleChange} />
            </label>
            
            <label htmlFor="fifteen">
              <span>
                15%
              </span>

              <input type="radio" name="tip" id="fifteen" checked={tip === 0.15 && !customTip} value={0.15} onChange={handleChange} />
            </label>
            
            <label htmlFor="twentyfive">
              <span>
                25%
              </span>

              <input type="radio" name="tip" id="twentyfive" checked={tip === 0.25 && !customTip} value={0.25} onChange={handleChange} />
            </label>
            
            <label htmlFor="fifty">
              <span>
                50%
              </span>

              <input type="radio" name="tip" id="fifty" checked={tip === 0.5 && !customTip} value={0.5} onChange={handleChange} />
            </label>
            
            <label htmlFor="custom">

              <span>
                Custom
              </span>

              <input type="radio" name='tip' id='custom' checked={customTip} onChange={handleChange} />

              <input
                type="number"
                name='tip'
                id='custom_tip_value'
                value={tip ? tip : ''}
                onChange={handleChange}
                onBlur={validateCustomTip}
                ref={customTipRef}
                data-show={customTip}
              />

            </label>

          </div>

          <label htmlFor="people">

            <h4>
              Number of People
            </h4>

            <input
              type="number"
              name="people"
              id="people"
              placeholder='0'
              value={people}
              onChange={handleChange}
              aria-invalid={people === '0'}
            />

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
              ${tip ? formatCurrency(tip * Number(bill) / (people && Number(people) ? Number(people) : 1)) : '0.00'}
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
              ${formatCurrency(Number(bill) * (1 + (tip ? tip : 0)) / (people && Number(people) ? Number(people) : 1))}
            </h2>

          </div>

          <button
            disabled={!bill && !tip && !people}
            onClick={resetForm}
          >
            RESET
          </button>

        </div>

      </section>

    </main>
  )
}

export default App
