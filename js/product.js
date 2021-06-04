//loading page with jquery    
$(window).on('load',()=>{
    $('.loading').fadeOut(2000)
})

    ////////   create main page ///////////////

///create  maincontainer from html
let mainContainer = document.querySelector('.main-div .container');
//create navbar
let navbar = document.createElement('div');
//add class 
    navbar.className = 'navbar navbar-expand-lg';
//create nav-container
let navContainer = document.createElement('div');
//add class
    navContainer.className = 'contianer';
//append nav-container into navbar
    navbar.appendChild(navContainer);
//append navbar to main container
    mainContainer.appendChild(navbar);

//create logo
let logo = document.createElement('span');
//add class
    logo.className = 'logo';
//create logo context1
let logoContext1 = document.createTextNode('B ');
//append logoContext1 to logo
    logo.appendChild(logoContext1);
//create O span
let doubleSpanO = document.createElement('span');
//add class 
    doubleSpanO.className = 'double-O';
//create text for TWO O
let doubleSpanOText = document.createTextNode('OO');
//append double O -text to double-O
    doubleSpanO.appendChild(doubleSpanOText);
//append double-O to logo
logo.appendChild(doubleSpanO);
//create logo-text2
let logoContext2 = document.createTextNode(' K');
//append logo-text2 to logo
    logo.appendChild(logoContext2);
//append logo to navbar
    navContainer.appendChild(logo);
//create logo arrow
let logoSpanArrow = document.createElement('span');
//add class
    logoSpanArrow.className = 'arrow-left';
//create logoSpanArrowText 
let logoSpanArrowText = document.createTextNode('(');
//append logoSpanArrowText to logoSpanArrow
    logoSpanArrow.appendChild(logoSpanArrowText);
//append logoSpanArrow to navbar
    navbar.appendChild(logoSpanArrow);

//create basket (buying car)
let cartForm = document.createElement('div')
    cartForm.className = 'buying-car'
let buyingCar = document.createElement('i')
    buyingCar.className = 'fas fa-shopping-cart'
//span to show count of buying
let buyingCarCounter = document.createElement('span')
    buyingCarCounter.className = 'car-counter'
    cartForm.appendChild(buyingCar)
    navContainer.appendChild(cartForm)
    navContainer.appendChild(buyingCarCounter)

//create icon div to hold spans
let iconHolderDiv = document.createElement('div');
//add class 
    iconHolderDiv.className = 'icon-holder';
//append icon-holder to navbarContainer
    navContainer.appendChild(iconHolderDiv);
//create icon
 for(let i = 0; i <= 2; i++){
    //create icon-span
    let iconSpan = document.createElement('span');
    //add class
    iconSpan.className = 'icon';
    //append iconsapan to navbar
    iconHolderDiv.appendChild(iconSpan)
 }


//create content page
let pageContent = document.createElement('div');
//add class
    pageContent.className = 'page-content';

//create page-container
let pageContainer = document.createElement('div');
//add class
    pageContainer.className = 'container';
//create paragraph-content
let pragraphContent = ['Hello there!',`you can buy stuff from our website,buy more than one kind of things and you have the choice to choose from our store stuff just click on icon to get stuff.`,'Thanks!'];
//create p classes
let pragraphClasses = ['p1','p2','p3'];
for(let i = 0; i < 3; i++){
    //create p
    let pragraph = document.createElement('p');
    //add class
    pragraph.className = pragraphClasses[i];
    //create p text
    let pragraphText = document.createTextNode(pragraphContent[i]) 
    //append text to p
    pragraph.appendChild(pragraphText);
    //append p to page-container
    pageContainer.appendChild(pragraph);
}
//append pageContainer to pageContent
    pageContent.appendChild(pageContainer)
//append page-conten to main-container
    mainContainer.appendChild(pageContent);

/////create contact us//
//create contact us container
let contactUs = document.createElement('div');
//add class
    contactUs.className = 'contact-us';
//create contact-us heading
let contactHeading = document.createElement('h3');
//create heading text
let contactHeadingText = document.createTextNode('Contact us');
//append contact-heading text to contact heading
    contactHeading.appendChild(contactHeadingText);
//append contact heading to contact us
    contactUs.appendChild(contactHeading);
//create iconsClasses
let iconClasses = ["fab fa-facebook-square","fab fa-instagram-square","fab fa-github-square","fab fa-linkedin"]
//add href
let contactLinks = ['https://www.facebook.com/profile.php?id=100006603252947',
                    '',
                    'https://github.com/Abdelhameedmeedo','https://www.linkedin.com/feed/'    
                    ]
//create loop on i icons
for(let i = 0; i < 4; i++){
    //create anchor
    let anchor = document.createElement('a');
    //add href
    anchor.href = contactLinks[i]
    //create icons
    let icons = document.createElement('i')
    //add class 
    icons.className = iconClasses[i]
    //append icons to anchor
    anchor.appendChild(icons)
    //append anchor to contact-us
    contactUs.appendChild(anchor);
    //append contact us to page-container
    pageContainer.appendChild(contactUs);
}
//create menu div
let menuParent = document.createElement('div');
//add class
    menuParent.className = 'menu'
//create ul
let menuUL = document.createElement('ul')
//add class
    menuUL.className = 'ul-links'
//appendmenu-ul to menu
    menuParent.appendChild(menuUL) 
//append menu to page-contaner
    mainContainer.appendChild(menuParent)
//create list items (li) with loop and li contents
let liContent = ['Home','Foods','Watches','Bags','Cars','Labtops','Mobiles']
for(let items = 0; items < liContent.length; items++){
    //create li
    let listItems = document.createElement('li');
    //create li content
    let listItemsContent = document.createTextNode(liContent[items])
    //append list-items-content to list-items
        listItems.appendChild(listItemsContent)
    //append list-items to ul
        menuUL.appendChild(listItems)

    
}

//function to click menu to open it
let getMenu = document.querySelector('.menu')
//get Menu icon
let getMenuIcon = document.querySelectorAll('.icon-holder span')
function openMenu(){    
    document.addEventListener('click',e=>{
        if(e.target.className == 'icon-holder' || e.target.className == 'icon-holder span'){
            getMenu.classList.toggle('open')
            //set menu icon animation
            for(let i=0;i<3;i++){
                getMenuIcon[i].classList.toggle('animation')
            }
        }else{
            getMenu.classList.remove('open')
            //remove menu icon animation
            for(let i =0;i<3;i++){
                getMenuIcon[i].classList.remove('animation')
            }
        }
    })
}
openMenu()
///////////////////////end main page ////////////////////////////////////

/////////////////// start mobile section ////////////////////

//create main Div
var mobileMainDiv = document.createElement('div');
//add class
    mobileMainDiv.className = 'mobile-mainD'
//create container
var mobileMainContainer = document.createElement('div')
//add class
    mobileMainContainer.className = 'container'
//append mobile main div to body
    document.body.appendChild(mobileMainDiv)
//append mobile container to mobile maindiv
    mobileMainDiv.appendChild(mobileMainContainer)
//create samsung and apple and huawie array imgs
let images = ['images/Samsung-Galaxy-A10s.jpg','images/Samsung-Galaxy-A21s.jpg','images/Samsung-Galaxy-A11.jpg',
               'images/Samsung-Galaxy-A71.jpg','images/Samsung-Galaxy-A51.jpg','images/Samsung-Galaxy-M31.jpg','images/Samsung-Galaxy-Note-20.jpg',
               'images/iphone-5.jpg','images/iphone-5s.jpg','images/iphone-6.jpg','images/iphone-6plus.jpg','images/iphone-6s.jpg',
               'images/iphone-6s-plus.jpg','images/iphone-7.jpg','images/huawie-p8.jpg','images/Huawei-Y9a.jpg','images/Huawei-Y9s.jpg','images/Huawei-nova-7.jpg',
               'images/Huawei-Y6p.jpg','images/Huawei-Y7a.jpg','images/huawei-y6-prime-2019.jpg'
            ]
//get data from json with fetch
async function getMobilesData(){
    fetch('json/mobiles.json')
    .then(reponse =>  reponse.json())
    .then(data =>{
        //loop on  data
        data.forEach(span => {
            //get mobileDta length
             let mobileLength = span.mobiles.length
            // //create samsung & apple data-containers
            for(let i =0; i < mobileLength; i++){
                //create div for data
                let dataContainer = document.createElement('div')
                //add class
                    dataContainer.className = 'data-container'
                //create anchor 
                let mobileAnchor = document.createElement('a')
                    mobileAnchor.href = 'https://mobizil.com/';
                //create img for data
                let dataImg = document.createElement('img')
                //set image source 
                    dataImg.src = images[i]
                //append data-img to anchor
                    mobileAnchor.appendChild(dataImg)
                //append mobileanchor to data-container
                    dataContainer.appendChild(mobileAnchor)
                //create  add item
                let addItem = document.createElement('i')
                //class add-item symbol
                    addItem.className = 'plus'
                //create text
                let addItemText = document.createTextNode('+')
                //append it to add item
                    addItem.appendChild(addItemText)
                //append add-item to data-container
                    dataContainer.appendChild(addItem)
                //create company spans
                let mobileCompany = document.createElement('span')
                //create company span text
                let mobileCompanyText = document.createTextNode(span.mobiles[i][`company_${i}`])
                //append company text to spans
                    mobileCompany.appendChild(mobileCompanyText)
                //append company spans to data-container
                    dataContainer.appendChild(mobileCompany)
                //create model spans
                let mobileModel = document.createElement('span')
                //create samsung model-text
                let mobileModelText = document.createTextNode(span.mobiles[i][`model_${i}`])
                //append samsungModelText to samsungModel
                    mobileModel.appendChild(mobileModelText)
                //append samsungModel to data-container
                    dataContainer.appendChild(mobileModel)
                //create price spans
                let mobilePrice = document.createElement('span')
                //create prices text
                let mobilePriceText = document.createTextNode(span.mobiles[i][`price_${i}`])
                //append prices-text to prices
                    mobilePrice.appendChild(mobilePriceText)
                //append prices to data-container
                    dataContainer.appendChild(mobilePrice)
                //create show details
                let showDetails = document.createElement('span')
                //add class
                    showDetails.className = 'details-arrow'
                //add title
                    showDetails.title = 'show details'
                //create details arrow
                let detailsArrow = document.createTextNode('>')
                //append arrow-details to details
                    showDetails.appendChild(detailsArrow)
                //append details to data-container
                    dataContainer.appendChild(showDetails)
                //append data-container to mobileMainContainer
                    mobileMainContainer.appendChild(dataContainer)
                    mainContainer.appendChild(mobileMainDiv)
            }
            //add event when clicking on arrow details
                //detail show arrow
            let getDetails = document.querySelectorAll('.data-container .details-arrow')
            let getDataContainer = document.querySelectorAll('.data-container')
            if(getDetails){
                for(let i = 0; i <= getDetails.length; i++){
                    (index=>{
                        getDetails[i].onclick = ()=>{
                            console.log("click",index)
                            //create div-container
                            let detailsContainer = document.createElement('div')
                            //add class
                                detailsContainer.className = 'detail-container'
                            //close btn
                            let closeDetails = document.createElement('button')
                                closeDetails.className = 'detail-btn'
                            //close text
                            let closeDetailsText = document.createTextNode('X')
                            //append text to close details
                                closeDetails.appendChild(closeDetailsText)
                            //span and label for pieces
                            let piecesLabel = document.createElement('label')
                            let piecesLabelText = document.createTextNode('count : ')
                            let pieces = document.createElement('span')
                                pieces.className = 'mobile-piece'
                            //pieces text
                            let piecesText = document.createTextNode(span.mobiles[i][`piece_${index}`])
                            //span for color
                            let colors = document.createElement('span')
                                colors.className = 'mobile-color'
                            //color-text
                            let colorsText = document.createTextNode("colors : "+span.mobiles[i][`color_${index}`])
                            //create button
                            let mobileButton = document.createElement('button')
                                mobileButton.className = 'add-btn'
                            //add text
                            let mobileButtonText = document.createTextNode('Add')
                            //append close btn to details container
                                detailsContainer.appendChild(closeDetails)
                            //append pieces text to piece
                                piecesLabel.appendChild(piecesLabelText)
                                piecesLabel.appendChild(pieces)
                                pieces.appendChild(piecesText)
                            //append pieces to details-container
                                detailsContainer.appendChild(piecesLabel)
                            //append color text to color
                                colors.appendChild(colorsText)
                            //append colors to details container
                                detailsContainer.appendChild(colors)
                            //append button text to button
                                mobileButton.appendChild(mobileButtonText)
                                detailsContainer.appendChild(mobileButton)
                                getDataContainer[i].appendChild(detailsContainer)
                            //show details
                                getDetails[i].classList.add('show')
                            //remove details when clicking on (x)
                            document.addEventListener('click',e=>{
                                //detail btn close
                               if(e.target.className == 'detail-btn'){
                                    //flip-details arrow  
                                    getDetails[index].classList.remove('show')
                                    //remove details show
                                    document.querySelectorAll('.detail-container')[i].remove()
                               }
                               //adding form
                               function addingFormFun(){
                                    if(e.target.className == 'add-btn'){
                                        let addingForm = document.createElement('div')
                                            addingForm.className = 'adding-form'
                                        let addingFormContainer = document.createElement('div')
                                            addingFormContainer.className = 'container'
                                            document.body.appendChild(addingForm)
                                            addingForm.appendChild(addingFormContainer)
                                        let addingInputsType = ['text','text','number','number','text']
                                        let addingInputsPlaceHolder = ['your name','your address','your number','count of pieces needing','color']
                                        let addingInputsLabels = ['Name','Address','Number','Count','color']
                                        let inputsClassNames = ['input-add1','input-add2','input-add3','input-add4','input-add5']
                                        for(let i =0; i < 5 ; i++){
                                            let inputsLabels = document.createElement('label')
                                            let inputsLabelsTexts = document.createTextNode(addingInputsLabels[i])                                 
                                            let addingInputs = document.createElement('input')
                                                addingInputs.className = inputsClassNames[i]
                                                addingInputs.placeholder = addingInputsPlaceHolder[i] 
                                                addingInputs.type = addingInputsType[i] 
                                                inputsLabels.appendChild(inputsLabelsTexts)
                                                addingFormContainer.appendChild(inputsLabels)
                                                addingFormContainer.appendChild(addingInputs)
                                        }  
                                        let addingCloseBtn = document.createElement('button')
                                            addingCloseBtn.className = 'adding-close-btn'
                                        let addingCloseBtnText = document.createTextNode('X')
                                            addingCloseBtn.appendChild(addingCloseBtnText)
                                            addingFormContainer.appendChild(addingCloseBtn)
                                    }
                               }addingFormFun()
                               //remove adding form
                               if(e.target.className == 'adding-close-btn'){
                                   document.querySelector('.adding-form').remove()
                               }
                            })
                            //determine how many pieces you want
                            document.addEventListener('keyup',e=>{
                                //decide how many piece u want
                                if(e.target.className == 'input-add4'){
                                    //decrement available pieces of mobiles
                                    let countArea = document.querySelector('.detail-container .mobile-piece')
                                    if(countArea.innerHTML > 0 && e.target.value > 0){
                                        console.log( countArea.innerHTML = span.mobiles[i][`piece_${index}`] - e.target.value)
                                        //put the count of buying in counter 
                                        document.querySelector('.car-counter').innerHTML = e.target.value
                                   }else if(e.target.value <= 0 || countArea.innerHTML < e.target.value){
                                       //problem in (countArea.innerHTML < e.target.value)
                                       alert("invalid")
                                   }
                                   else{
                                       alert('invalid')
                                   }
                                    
                                } 
                            })
                        }
                    })(i)
                }
            }    
        });
            
    })
}
getMobilesData()

/////start bags ///////////
//create main div
let bagsSection = document.createElement('div')
//add class
    bagsSection.className = 'bags'
//create main container
let bagsContainer = document.createElement('div')
//add class
    bagsContainer.className = 'container'
//append bags to body
    document.body.appendChild(bagsSection)
//append bags-container to bags
    bagsSection.appendChild(bagsContainer)
//function to get bags data
function bagsData(){
    //fetch data
    fetch('json/bags.json')
    .then(resp =>resp.json())
    .then(data=>{
        data.forEach(bag=>{
            //bags length
            let bagsLength = bag.bags.length;
            data.forEach(bag=>{
                //create bag header
                let bagHeader = document.createElement('h3')
                //bag-header context
                let bagHeaderText = document.createTextNode('Bags')
                //append header text to header
                    bagHeader.appendChild(bagHeaderText)
                //append header to bag-container
                    bagsContainer.appendChild(bagHeader)
                //create parent div
                let parentDiv = document.createElement('div')
                //add class
                    parentDiv.className = 'parent-content'
                //append parent div to bag-container
                    bagsContainer.appendChild(parentDiv)
                //loop for bag content
                for(let i =0;i < bagsLength;i++){
                    //create div
                    let bagMainDiv = document.createElement('div')
                    //add class
                        bagMainDiv.className = 'bag-content'
                    //create bag img
                    let bagImgs = document.createElement('img')
                    //add class
                        bagImgs.className = 'bag-img'
                        bagImgs.title = 'click to show details'
                    //set imgs
                        bagImgs.src = bag.bags[i][`img_${i}`]
                    //append imgs to maindiv
                        bagMainDiv.appendChild(bagImgs)
                    //append main-div to parent div
                        parentDiv.appendChild(bagMainDiv)
                    //append main div to bag-container
                        bagsContainer.appendChild(parentDiv)
                }
                //event when clicking on img(important code -function)
                let getBagImgParent = document.querySelectorAll('.bag-content')
                let getBagImg = document.querySelectorAll('.bag-img')
                for(let i=0;i<getBagImg.length;i++){
                    (function(clickedEle){
                        getBagImg[i].onclick = ()=>{
                            //create hover div
                            let hoverDive = document.createElement('div')
                            //add class
                                hoverDive.className = 'hover-div'
                            //create bag-name
                            let bagName = document.createElement('span')
                            //bag-name-text
                            let bagNameText = document.createTextNode(bag.bags[i][`name_${clickedEle}`])
                            //create bag price
                            let bagPrice = document.createElement('span')
                            //bag-price content
                            let bagPriceContent = document.createTextNode(bag.bags[i][`price_${clickedEle}`])
                            //add piece 
                            let bagPieces = document.createElement('span')
                            //add pieces text
                            let bagPiecesText = document.createTextNode(bag.bags[i][`piece_${clickedEle}`]+"piece")
                            //create button
                            let bagBuyButton = document.createElement('button')
                                bagBuyButton.className = 'bag-btn'
                            //add button text
                            let bagBuyButtonText = document.createTextNode('Add')
                            //append bag-name text to bag name
                                bagName.appendChild(bagNameText)
                            //append bag-name to hover div
                                hoverDive.appendChild(bagName)
                            //append price-content to price
                                bagPrice.appendChild(bagPriceContent)
                            //append price to hover div
                                hoverDive.appendChild(bagPrice)
                            //append piece text to piece
                                bagPieces.appendChild(bagPiecesText)
                            //append piece to buy section
                                hoverDive.appendChild(bagPieces)
                            //append button text to button
                                bagBuyButton.appendChild(bagBuyButtonText)
                            //append buy button to buy section
                                hoverDive.appendChild(bagBuyButton)
                            // parentDiv.appendChild(hoverDive)
                                getBagImgParent[i].appendChild(hoverDive)
                            //create buy form
                            document.addEventListener('click',e=>{
                                if(e.target.className == 'bag-btn'){
                                    //bag form overlay
                                    let bagOverlay = document.createElement('div')
                                        bagOverlay.className = 'bag-overlay'
                                        document.body.appendChild(bagOverlay)
                                    //bag overlay container
                                    let bagOverlayContainer = document.createElement('div')
                                        bagOverlayContainer.className = 'container'
                                        bagOverlay.appendChild(bagOverlayContainer)
                                    //close form
                                    let bagCloseBtn = document.createElement('button')
                                        bagCloseBtn.className = 'bag-btn-close'
                                    let bagCloseBtnText = document.createTextNode('X')
                                        bagCloseBtn.appendChild(bagCloseBtnText)
                                        bagOverlayContainer.appendChild(bagCloseBtn)
                                    //input placeholders,types
                                    let inputBagPlaceHolders = ['your name...','your address','your number','count of bags']
                                    let bagTypes = ['text','text','number','number']
                                    for(let i =0 ;i < 4;i++){
                                        let bagInputs = document.createElement('input')
                                            bagInputs.placeholder = inputBagPlaceHolders[i]
                                            bagInputs.type = bagTypes[i]
                                            bagOverlayContainer.appendChild(bagInputs)
                                    }
                                    //add btn
                                    let bagAddBtn = document.createElement('button')
                                        bagAddBtn.className = 'bag-btn-add'
                                        bagAddBtnText = document.createTextNode('Buy')
                                        bagAddBtn.appendChild(bagAddBtnText)
                                        bagOverlayContainer.appendChild(bagAddBtn)
                                }
                                if(e.target.className == 'bag-btn-close'){
                                    e.target.parentNode.remove()
                                    document.querySelector('.bag-overlay').remove()
                                }
                            })
                        }
                    })(i)
                }   
            })
        })
    })
}
bagsData()

///////food section //////////
function foodData(){
    //create food -div parent
    let foodMainDiv = document.createElement('div')
    //add class
        foodMainDiv.className = 'food-menu'
    //create food container
    let foodMainContainer = document.createElement('div')
    //add class
        foodMainContainer.className = 'container'
    //creat fod header
    let foodHeader = document.createElement('h3')
    //add text 
    let foodHeaderText = document.createTextNode('Food')
    //append food header text to header
        foodHeader.appendChild(foodHeaderText)
    //append main div to body
        document.body.appendChild(foodMainDiv)
    //append headerbto main container
        foodMainDiv.appendChild(foodHeader)
    //append main-containner to main div
        foodMainDiv.appendChild(foodMainContainer)
    //fetch data
    fetch('json/food.json')
    .then(respo=>respo.json())
    .then(foods=>{
        foods.forEach(food=>{
            //get food length
            let foodLength = food.food.length;
            //loop on food content
            for(let i = 0; i <= foodLength; i++){
                //create content-container
                let foodContent = document.createElement('div')
                //add class 
                    foodContent.className = 'food-content'
                //create img 
                let foodImg = document.createElement('img')
                //set img
                    foodImg.src = food.food[i][`img_${i}`]
                //create btn add
                let foodAdd = document.createElement('button')
                //add class
                    foodAdd.className = 'add'
                //add text to btn
                let foodAddText = document.createTextNode('Add')
                //append text t btn
                    foodAdd.appendChild(foodAddText)
                //create food name
                let foodName = document.createElement('span')
                //add class
                    foodName.className = 'food-name'
                //add name
                let foodNameContext = document.createTextNode(" الاسم : "+" "+food.food[i][`name_${i}`])
                //append food-context to food name
                    foodName.appendChild(foodNameContext)
                //create food country
                let foodCountry = document.createElement('span')
                //add class
                    foodCountry.className = 'food-country'
                //add country
                let foodCountryContext = document.createTextNode(food.food[i][`country_${i}`]+" "+" : البلد")
                //append country 
                    foodCountry.appendChild(foodCountryContext)
                //apppend food content to main-container
                    foodMainContainer.appendChild(foodContent)
                //append img to main-container
                    foodContent.appendChild(foodImg)
                //append btn to food content
                    foodContent.appendChild(foodAdd)
                //append food-name to food-content
                    foodContent.appendChild(foodName)
                //append food country to food-content
                    foodContent.appendChild(foodCountry)
                    foodMainContainer.appendChild(foodContent)  
            }
        })
    })

}
foodData()


//////addEventListeners//////
//1- plus icon
function plusForm(){
document.addEventListener('click',e=>{
    if(e.target.className == 'plus'){
        //create item form parent
        let itemForm = document.createElement('div')
        //add class
            itemForm.className = 'item-form'
        //create item container
        let itemContainer = document.createElement('div')
        //add class
            itemContainer.className = 'container'
        //add header title
        let itemFormHeader = document.createElement('h3')
        //add header content
            itemFormHeaderContent = document.createTextNode('Item Form')
        //append itemform to body
            document.body.appendChild(itemForm)
        //append item-header text to header
            itemFormHeader.appendChild(itemFormHeaderContent)
        //append header to item container
            itemContainer.appendChild(itemFormHeader)
        //append item container to item form
            itemForm.appendChild(itemContainer)
        //labels
         let inputLabels = ['Name','Address','Number','Item type','Item name','Item count']
        //input-types
         let inputTypes = ['text','text','number','text','text','number']
        //input place-holder
        let inputPlaceholder = ['your name','your address','your number','like apple,samsung..','like iphone-5,galaxy M20','how many item you want']
        for(let i=0;i < 6;i++){
            //create labels
            let labels = document.createElement('label')
            //create labels context
            let labelsContext = document.createTextNode(inputLabels[i])
            //create inputs
            let inputs = document.createElement('input')
            //add class
                inputs.className = 'inputs'
            //add type
                inputs.type = inputTypes[i]
            //add placeolder
                inputs.placeholder = inputPlaceholder[i]
            //append label text to label
                labels.appendChild(labelsContext)
            //append label to item-container
                itemContainer.appendChild(labels)
            //append input to item container
                itemContainer.appendChild(inputs)
        }
        //create close icon
        let closeIcon = document.createElement('i')
        //add class
            closeIcon.className = 'close-btn'
            closeIcon.onchange = removePlusIcon()
        //create close-icon-text
        let closeIconText = document.createTextNode('x')
        //append close-icon-text to close icon
            closeIcon.appendChild(closeIconText)
        //append close-iconn to item-form container
            itemContainer.appendChild(closeIcon)
    }
})
}
plusForm()
//remove overlay
function removePlusIcon(){
    document.addEventListener('click',e=>{
        if(e.target.className == 'close-btn'){
            e.target.parentNode.remove();
            document.querySelector('.item-form').remove()
        }
    })
}

//2-open mobile section
let ulListItems = document.querySelectorAll('ul li')[6];
ulListItems.addEventListener('click',e=>{
    e.preventDefault()
    //get mobile section
    document.querySelector('.mobile-mainD').style.display = 'block'
    //hide page-content
    document.querySelector('.page-content').style.display = 'none'
    //hide food section
    document.querySelector('.food-menu').style.display = 'none'
    //hide bag section
    document.querySelector('.bags').style.display = 'none'
})

//3- open bag section
//get bag section
let getBagSection = document.querySelector('.bags')
//get ul list item 2
let getListItemOfBag = document.querySelectorAll('ul li')[3]
getListItemOfBag.addEventListener('click',e=>{
    e.preventDefault()
    //appear bag section
    getBagSection.style.display = 'block'
    //get mobile section
    document.querySelector('.mobile-mainD').style.display = 'none'
    //hide page-content
    document.querySelector('.page-content').style.display = 'none'
    //open food-section
    document.querySelector('.food-menu').style.display = 'none'
})

//4- open food section
let foodSection = document.querySelectorAll('ul li')[1]
foodSection.addEventListener('click',e=>{
    e.preventDefault()
    //open food-section
    document.querySelector('.food-menu').style.display = 'block'
    //get mobile section
    document.querySelector('.mobile-mainD').style.display = 'none'
    //hide page-content
    document.querySelector('.page-content').style.display = 'none'
    //get bag section
    document.querySelector('.bags').style.display = 'none'
})

//5-buying food overlay
document.addEventListener('click',e=>{
    if(e.target.className == 'add'){
        let labelsContent = ['Name','Address','pieces_no']
        let foodInputPlaceholder = ['your name','your address','pieces number']
        //create overlay
        let foodOverlay = document.createElement('div')
        //add class
            foodOverlay.className = 'food-overlay'
        //overlay container
        let overlayContainer = document.createElement('div')
        //add class
            overlayContainer.className = 'container'
        //form
        let foodForm = document.createElement('form')
            overlayContainer.appendChild(foodForm)
        //create header
        let overlayHeader = document.createElement('h3')
        //header text
        let overlayHeaderText = document.createTextNode('Buy Form')
        //append header text to header
            overlayHeader.appendChild(overlayHeaderText)
        //append header to overlay
            foodForm.appendChild(overlayHeader)
        //create close btn
        let closeBtn = document.createElement('span')
        //add class
            closeBtn.className = 'overlay-close'
        //add text t btn 
        let closeBtnText = document.createTextNode('X')
        //append text to btn
            closeBtn.appendChild(closeBtnText)
        //append btn to overlay
            foodForm.appendChild(closeBtn)
        //append container to overlay
            foodOverlay.appendChild(overlayContainer)
        //append overlay to body
            document.body.appendChild(foodOverlay) 
        for(let i = 0; i < 3; i++){
            //create labels
            let overlayLabels = document.createElement('label')
            //labels content
            let overlayLabelsText = document.createTextNode(labelsContent[i])
            //append labels text to labels
                overlayLabels.appendChild(overlayLabelsText)
            //create inputs
            let overlayInputs = document.createElement('input')
            //add input type
                overlayInputs.type = 'text'
            // placer-holder
                overlayInputs.placeholder = foodInputPlaceholder[i]  
            //append labels to overlay
                foodForm.appendChild(overlayLabels)
            //append inputs to overlay
                foodForm.appendChild(overlayInputs)
        }

    }
})// when to post data to json put index of the element

//6-close food-overlay
document.addEventListener('click',e=>{
    if(e.target.className == 'overlay-close'){
        document.querySelector('.food-overlay').remove()
    }
})

//7- open home page
let homePage = document.querySelectorAll('ul li')[0]
homePage.addEventListener('click',e=>{
    e.preventDefault()
    //open home page
    document.querySelector('.page-content').style.display = 'block'
    //get mobile section
    document.querySelector('.mobile-mainD').style.display = 'none'
    //hide food section
    document.querySelector('.food-menu').style.display = 'none'
    //hide bag section
    document.querySelector('.bags').style.display = 'none'
})

//8-open buying form on navbar when clicking on cart icon
let getBuyingCart = document.querySelector('.navbar .buying-car')
getBuyingCart.addEventListener('click',e=>{  
    //create cart popup
    //overlay
    let buyingCarPopup = document.createElement('div')
        buyingCarPopup.className = 'car-popup'
        document.body.appendChild(buyingCarPopup)
    //container
    let buyingCarPopupContainer = document.createElement('div')
        buyingCarPopupContainer.className = 'container'
        buyingCarPopup.appendChild(buyingCarPopupContainer)
    //header
    let cartHeader = document.createElement('h3')
    let cartHeaderText = document.createTextNode('Buying Cart')
        cartHeader.appendChild(cartHeaderText)
        buyingCarPopupContainer.appendChild(cartHeader)
    //mobiles cart
    let mobilesCart = document.createElement('label')
    let mobilesCartText = document.createTextNode('mobiles count : ')
        mobilesCart.appendChild(mobilesCartText)
        buyingCarPopupContainer.appendChild(mobilesCart)
    //bags cart
    let bagsCart = document.createElement('label')
    let bagsCartText = document.createTextNode('bags count : ')
        bagsCart.appendChild(bagsCartText)
        buyingCarPopupContainer.appendChild(bagsCart)
    //food cart
    let foodCart = document.createElement('label')
    let foodCartText = document.createTextNode('food count : ')
        foodCart.appendChild(foodCartText)
        buyingCarPopupContainer.appendChild(foodCart)
    //close cart
    let closeCart = document.createElement('button')
        closeCart.className = 'car-close'
    let closeCartText = document.createTextNode('X')
        closeCart.appendChild(closeCartText)
        buyingCarPopupContainer.appendChild(closeCart)        
})

//9-remove cart popup
document.addEventListener('click',e=>{
    if(e.target.className == 'car-close'){
        e.target.parentNode.remove()
        document.querySelector('.car-popup').remove()
    }
})


///loading section ///
let loadingSection = document.createElement('div')
    loadingSection.className = 'loading'
let loadingContainer = document.createElement('div')
    loadingContainer.className = 'container'
let loadingHeader = document.createElement('h4')
    loadingHeader.className = 'header'
let loadingHeaderText = document.createTextNode('BOOK')
//book pages
let loadingBook1 = document.createElement('div')
    loadingBook1.className = 'left-book'
let loadingBook2 = document.createElement('div')
    loadingBook2.className = 'right-book'
let loadingBook3 = document.createElement('div')
    loadingBook3.className = 'mid-left-book'
let loadingBook4 = document.createElement('div')
    loadingBook4.className = 'mid-right-book'
let loadingBook5 = document.createElement('div')
    loadingBook5.className = 'center'
//appending
document.body.appendChild(loadingSection)
loadingSection.appendChild(loadingContainer)
loadingHeader.appendChild(loadingHeaderText)
loadingContainer.appendChild(loadingHeader)
loadingContainer.appendChild(loadingBook1)
loadingContainer.appendChild(loadingBook2)
loadingContainer.appendChild(loadingBook3)
loadingContainer.appendChild(loadingBook4)
loadingContainer.appendChild(loadingBook5)