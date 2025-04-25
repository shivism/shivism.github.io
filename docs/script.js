const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function () {
    const responses = [];

    const radios = document.querySelectorAll("input[type=radio]:checked");

    radios.forEach(radio => {
        responses.push(`${radio.name}:${radio.id}`);
    });

    let resultDiv = document.getElementById("result")
    if (!resultDiv) {
        resultDiv = document.createElement("div");
        resultDiv.id = "result";
        resultDiv.style.marginTop = "20px";
        resultDiv.style.fontWeight = "bold";
        document.body.appendChild(resultDiv);
    }

    resultDiv.textContent = "Email the following to churchofshivism@gmail.com: " + responses.join(":") + " (dont worry about any of this for now)";
})