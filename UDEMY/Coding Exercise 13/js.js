function calculatePerimeter() {
    
    var height = parseFloat(document.getElementById('height').value);
    var width = parseFloat(document.getElementById('width').value);
    
    if (isNaN(height) || isNaN(width)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers for both height and width.";
        return;
    }
    
    var perimeter = 2 * height + 2 * width;

    document.getElementById('result').innerHTML = "The perimeter of the rectangle is: " + perimeter;
}