
/* ### OPTIONS ###
---------------

    activeItemElem: The active element, e.g: the active navigation item.

    activeItemElemAttr: The active element attribute value, e.g: attribue "data-active-index".

    utilities: The TW utilities that will be added to the element, if it's been passed to the function (so not null).

 */

export const createLevels = (activeItemElem, activeItemElemAttr, utilities = null) => {
    // Numeric handbook header logic
    const activeItem = document.querySelector(activeItemElem);

    if  (activeItem) {
        const activeItemAttr = activeItem.getAttribute(activeItemElemAttr); // Calculated number of level in navigation--handbook.twig

        entryTitleLevelCreation(activeItemAttr, utilities);
        contentTitleLevelCreation(activeItemAttr);

    }
}

export const entryTitleLevelCreation = (activeItemAttr, utilities) => {

    const entryTitle =  document.querySelector('.header-section-title');

    // Create span element for calculated level number
    const span = document.createElement('span');

    // Add TW utitilties, if they've been passed to the function.
    if (utilities) {
        span.classList.add(utilities);
    }

    // Change span element value to activeItemAttr value
    span.textContent = activeItemAttr;

    // Combine entry title with calculated level number
    entryTitle.prepend(span);

}

const contentTitleLevelCreation = (activeItemAttr) => {
    const handbookElement = document.querySelector('.handbook').getElementsByTagName('*'); // Select all children elements of handbook
    const arrIndexes = [0, 0, 0, 0, 0]; // Create array for level indexes below activeItemAttr
    const lutHeadings = ['H2', 'H3', 'H4', 'H5', 'H6']; // Create lookup table for entry headings, instead of if statement
    let prevIndex = null; // Create starting value for previous heading

    // Convert HTML collection to array
    const arr = [].slice.call(handbookElement);

    arr.forEach((element) => {

        // Check if nodename is heading
        if (lutHeadings.includes(element.nodeName)) {
            const elementLevel = parseInt(element.nodeName.substring(1)); // Converts string to number e.g: H2 -> 2
            const arrLevel = elementLevel-2; // Get the right array index level e.g: H2 -> 2 = 0 position in arrIndexes
            arrIndexes[arrLevel]++; // Get the right array index level value and increase by 1 e.g: [0, 0, 0, 0, 0] -> H2 = [1, 0, 0, 0, 0]

            // Check if previous index is bigger than current index, and see if prevIndex exist
            if (prevIndex > parseInt(elementLevel) && prevIndex) {

                // Reset array level after active heading index
                // e.g: arrLevel = 0 (H2), prevIndex = 1 (H3) 
                // [1, 1, 0, 0, 0] -> [2, 0, 0, 0, 0]
                for(let i = arrLevel+1; i < arrIndexes.length; i++ ) {
                    arrIndexes[i] = 0;
                }

            }

            prevIndex = elementLevel; // Sets current element level as previous for next element iteration

            // activeItemAttr: prepend entry title level
            // Filter: filter out indexes equal to 0, and convert array to string joint by dot,
            // Title: add element title after the levels
            element.innerHTML = `${activeItemAttr}.${arrIndexes.filter(index => index > 0).join('.')} ${element.innerHTML}`;
        }

    });
}