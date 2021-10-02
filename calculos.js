document.getElementById("button-calcular").innerHTML = "¡Calcular!";
document.getElementById("span-commssion-pp").innerHTML = "Comisión PayPal 5.4%";


/*Adition event Enter on Input*/

document.getElementById("input_amount")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        let codigo = event.key;
        if (codigo === "Enter") {
            document.getElementById("button-calcular").click();
        }
    });

function cambiarTexto() {
    /*Commission max applied*/
    const COMMISION_APPLY = 0.054;
    let commission_pp = (COMMISION_APPLY * COMMISION_APPLY) + COMMISION_APPLY;

    /*calc valor with add commission max applied*/
    const USER_AMOUNT = parseFloat(document.getElementById("input_amount").value);
    let user_amount = USER_AMOUNT;
    if (!user_amount) {
        user_amount = 0;
    }
    user_amount = (user_amount * commission_pp) + user_amount;
    let amount_final = user_amount - (user_amount * COMMISION_APPLY);

    // Format values with lenguage code
    let amount_format = new Intl.NumberFormat("de-DE").format(user_amount.toFixed(2));
    let amount_final_format = new Intl.NumberFormat("de-DE").format(amount_final.toFixed(2));

    //Show Results
    document.getElementById("input_amount").value = "";
    document.getElementById("span_usser_info").innerHTML = "Deberás enviar:";
    document.getElementById("span-amount").innerHTML = `\$ ${amount_format}`;
    document.getElementById("span_commission").innerHTML = `Llegará el monto: \$${amount_final_format}`;
    document.getElementById("span_org_amount").innerHTML = `Monto original: ${USER_AMOUNT}`;
}