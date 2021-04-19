# Temperature Converter 

## General info

##### This Temperature Converter will take your desired temperature and covert it to either Fahrenheight or Celsius depending on your selection

---

## Technologies

1. HTML5
2. CSS
3. JS

---

## Features 

- Easily get your temperature converted
- Clear to start over 
- Clear bold response

---

## Examples

```function cToF (celsius) {
    let cTemp = celsius;
    let cToFahr = cTemp * 9 / 5 + 32;
    let message = cTemp+'\xB0C is ' + cToFahr + '\xB0F.';
    resultsText.innerText = message
    console.log(message);
}
```
```
<div class="buttons">
  <input type="radio" id="one" alt='Fahrenheit' name="temp" checked>
  <label for="one">Fahrenheit</label>
  <input type="radio" id="two" alt="Celsius" name="temp">
  <label for="two">Celsius</label>
  </div>
  ```

  ![alt text](/img/Tempconverter.png)

  ---








