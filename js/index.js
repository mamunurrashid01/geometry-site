/*
document.getElementById('btn-triangle').addEventListener('click', function(){
    const getInputBase = document.getElementById('input-triangle-base');
    const getInputBaseValue = getInputBase.value;
    const getInputBaseValueConvert = parseFloat(getInputBaseValue);
    
    const getInputHeight = document.getElementById('input-triangle-height');
    const getInputHeightValue = getInputHeight.value;
    const getInputHeightValueConvert = parseFloat(getInputHeightValue);
    
    const areaOfTriangle = 0.5 * getInputBaseValueConvert * getInputHeightValueConvert; 

    const valueOfTriangleArea = document.getElementById('triangle-area-value');
    const valueOfTriangleAreaStr = valueOfTriangleArea.innerText;
    valueOfTriangleArea.innerText = areaOfTriangle;
})

document.getElementById('btn-rectangle').addEventListener('click', function(){
    const getInputLength = document.getElementById('input-rectangle-length');
    const getInputRectangleLength = getInputLength.value;
   const  getInputLengthValue = parseFloat(getInputRectangleLength);

   const getInputWidth = document.getElementById('input-rectangle-width');
   const getInputWidthValue = getInputWidth.value;
   const getInputWidthValueConverter = parseFloat(getInputWidthValue);

   const areaOfRectangle = getInputLengthValue * getInputWidthValueConverter;
   
   const valueOfReactangleArea = document.getElementById('area-of-rectangle');
   const valueOfReactangleAreaStr = valueOfReactangleArea.innerText;
   valueOfReactangleArea.innerText = areaOfRectangle;
})
*/

function clickHandleBtn(target){
    const selectedItem = document.getElementById('list-items');
    const itemName = target.parentNode.parentNode.childNodes[1].innerText;
    const li = document.createElement('li');
    li.innerText = itemName;
    selectedItem.appendChild(li);

    const triangleBase = getInputsFieldValue('input-triangle-base');
    const triangleHeight = getInputsFieldValue('input-triangle-height');
    const area = 0.5 * triangleBase * triangleHeight;
    setElementInnerText('triangle-area-value', area);

    

    const rectangleLength = getInputsFieldValue('input-rectangle-length');
    const rectangleWidth = getInputsFieldValue('input-rectangle-width');
    const areaOfRectangle = rectangleLength * rectangleWidth;
    setElementInnerText('area-of-rectangle', areaOfRectangle);
    
    const parallelogramb = getInputsFieldValue('input-of-parallelogram');
    const parallelogramh = getInputsFieldValue('input-of-parallelogramh');
    const areaOfParallelogram = parallelogramb * parallelogramh;
    setElementInnerText('area-of-parallelogram', areaOfParallelogram);
   

}

function getInputsFieldValue(fieldids){
    const inputField = document.getElementById(fieldids);
    const inputFieldsValueText = inputField.value;
    const value = parseFloat(inputFieldsValueText);
    return value;
}

function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;

}