/*
    function addItemToList()

    Description:
        This function takes the value entered into the textbox on the form and adds it to the list
        as a new item.

    Parameters:
        none

    Returns:
        This function always returns false.  Otherwise the form will reload the page when the function returns.
 */
function addItemToList()
{
    // Get the text the user entered into the newItem text box
    var itemTextBox = document.getElementById("newItem");
    var itemText = itemTextBox.value;

    // find the table body for the shopping list
    var tableBody = document.getElementById('listTableBody');

    // determine how many rows are already in the shopping list table.  We'll use that as the index to our
    // new item, which we are about to add to the list
    var index = tableBody.childElementCount;
    var checkBoxId = "checkBox" + String(index);

    // create a new row, which will be added to the shopping list table and
    // set it as a member of the unchecked class
    var newRow = document.createElement('TR');
    newRow.setAttribute("class",UNCHECKED);

    // create a new table cell that will hold our checkbox
    var btnCell = document.createElement("TD");

    // create the checkbox div that will go in the new cell and give
    // it an id which will be passed to the checkItem function when it is clicked
    var newDiv = document.createElement("DIV");
    newDiv.setAttribute("class","checkBox");
    newDiv.setAttribute("id", checkBoxId);
    newDiv.setAttribute("onclick","checkItem('" + checkBoxId + "')");

    // add the new checkbox div to the new table cell
    btnCell.appendChild(newDiv);

    // add the new table cell to the new row
    newRow.appendChild(btnCell);

    // create a new cell to hold the text of the shopping list item
    var textCell = document.createElement("TD");
    textCell.setAttribute("class","listItem");
    textCell.innerHTML = itemText;

    // add the new text cell to the new row
    newRow.appendChild(textCell);

    // add the new row to the table body
    tableBody.appendChild(newRow);

    // clear the input textbox
    itemTextBox.value = "";

    // need to return false or else the form reloads the page
    return false;
}

/*
 function clearList()

 Description:
    This function removes all of the items from the shopping list.

 Parameters:
    none

 Returns:
    This function always returns false.  Otherwise the form will reload the page when the function returns.
 */
function clearList()
{
    // find the tableBody element
    var tableBody = document.getElementById('listTableBody');

    // while the table body still has children, remove the first child from the table body
    while (tableBody.children.length > 0)
    {
        tableBody.removeChild(tableBody.children[0]);
    }

    // return false so the form won't reload the page
    return false;
}

/*
    function checkItem(checkBoxId)

    Description:
        This function either checks or unchecks a shopping list item that's been clicked.

    Parameters:
        checkBoxId  = id of the element that was clicked

    Returns:
        N/A
 */
function checkItem(checkBoxId)
{
    // find the checkBox that was clicked
    var checkBox = document.getElementById(checkBoxId);

    // find the table cell containing the checkbox that was clicked
    var tableCell = checkBox.parentNode;

    // find the table row containing the checkbox that was clicked.  Note: the row's class will be used
    // to determine whether the shopping list item is currently checked or unchecked.
    var tableRow = tableCell.parentNode;

    // if the table row is currently unchecked, we need to check it
    if (tableRow.getAttribute("class") == UNCHECKED)
    {
        tableRow.setAttribute("class", CHECKED);
        checkBox.innerText = "X";
    }
    else // the row must be checked already, so let's uncheck it
    {
        tableRow.setAttribute("class", UNCHECKED);
        checkBox.innerText = " ";
    }
}

var CHECKED = "checked";
var UNCHECKED = "unchecked";

document.getElementById('btnAddItem').onclick=addItemToList;
document.getElementById('btnClearList').onclick=clearList;