import React, { useState } from 'react'

const CheckoutStepper = ({stepsConfig = []}) => {

    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);

    if(!stepsConfig.length){
        return <></>
    }

    const handleNext = () => {

    }
    
  return (
    <>
        <div className='stepper'>
        {
            stepsConfig.map((step, index) => {
                return (
                    <div key={step.name} className='step'>
                        <div className='step-number'>{index + 1}</div>
                        <div className='step-name'>{step.name}</div>
                    </div>
                )
            })
        }
        </div>
        {
            !isComplete && (
                <button className='btn' onClick={handleNext}>
                    {currentStep === stepsConfig.length ? "Finish" : "Next"}
                </button>
            )
        }
    </>
    
  )
}

export default CheckoutStepper