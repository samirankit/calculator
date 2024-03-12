function onClickInsert(num) {
   document.form.textView.value = document.form.textView.value + num
}

function clearAll() {
    document.form.textView.value = ""
}

function calculate() {
    var val = document.form.textView.value
    if(val) {
        document.form.textView.value = eval(document.form.textView.value)
    }
}
