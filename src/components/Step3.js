import React from "react";
import {YellowLabel} from "./YellowLabel";
import {Contact} from "./Contact";

export const Step3 = ({currentStep, nextStep, prevStep}) => {

    if (currentStep !== 3) {
        return null
    }
    return (
        <>
            <YellowLabel text={"Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. " +
            "Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."}/>
            <div className={"row bear__container"}>
                <div className={"step3__container"}>
                    <h4 className={"step3__container-counter"}>krok 3/4</h4>
                    <form className={"step3__form"}>
                        <div className={"step3__select-container"}>
                            <h3 className={"step3__select-header"}>Lokalizacja:</h3>
                            <select className={"step3__select"}>
                                <option className={"step3__option"}>--Wybierz--</option>
                                <option className={"step3__option"}>Warszawa</option>
                                <option className={"step3__option"}>Poznań</option>
                                <option className={"step3__option"}>Kraków</option>
                                <option className={"step3__option"}>Wrocław</option>
                                <option className={"step3__option"}>Gdańsk</option>
                            </select>
                        </div>
                        <div className={"step3__recipient"}>
                            <h3 className={"step3__recipient-header"}>Komu chcesz pomóc?</h3>
                            <ul className={"step3__recipient-list"}>
                                <li className={"step3__recipient-item"}>dzieciom</li>
                                <li className={"step3__recipient-item"}>samotnym matkom</li>
                                <li className={"step3__recipient-item"}>bezdomnym</li>
                                <li className={"step3__recipient-item"}>niepełnosprawnym</li>
                                <li className={"step3__recipient-item"}>osobom starszym</li>
                            </ul>
                        </div>
                        <div className={"step3__input-container"}>
                            <label className={"step3__input-label"}>Wpisz nazwe konkretnej organizacji
                                (opcjonalne)
                            </label>
                            <input className={"step3__input-area"} type={"text"}/>
                        </div>
                        <div className={"step3__buttons"}>
                            <button onClick={prevStep} className={"step3__btn"}>Wstecz</button>
                            <button onClick={nextStep} className={"step3__btn"}>Dalej</button>
                        </div>
                    </form>
                </div>

            </div>
            <Contact/>
        </>
    )
}