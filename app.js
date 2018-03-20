$(function () {
    var products = [


        { name: 'Apple', price: 20, id: 1, description: 'Svenska äpple', picture: 'bild/äpple.jpg', category: 'Mat' },
        { name: 'Banan', price: 30, id: 2, description: 'från Afrika', picture: 'bild/banan.jpeg', category: 'Mat' },
        { name: 'Mango', price: 15, id: 3, description: 'från Spanien', picture: 'bild/mango.jpg', category: 'Mat' },
        { name: 'Mjölk', price: 8, id: 4, description: 'från Sverige', picture: 'bild/mjölk.jpg', category: 'Mat' },
        { name: 'Bröd', price: 25, id: 6, description: 'Svensk bröd', picture: 'bild/bröd.jpg', category: 'Mat' },
        { name: 'Ägg', price: 16, id: 7, description: 'Från Sverige', picture: 'bild/ägg.jpg', category: 'Mat' },
        { name: 'Saft', price: 16, id: 9, description: 'Från svenska äpplena', picture: 'bild/saft.jpeg', category: 'Mat' },
        { name: 'Semple', price: 11, id: 10, description: 'Barn kläder.Didrikson', picture: 'bild/didrikson.jpg', category: 'Kläder' },
        { name: 'Didriksons', price: 18, id: 11, description: 'Barn kläder.Didrikson', picture: 'bild/didrikson1.jpg', category: 'Kläder'},
        { name: 'Telefon', price: 18, id: 11, description: 'Från Kina', picture: 'bild/telefon1.jpg', category: 'Telefon' },
        { name: 'Leksak', price: 18, id: 11, description: 'Svensk leksak', picture: 'bild/babblarna.jpg', category: 'Leksak'},
        { name: 'Boll', price: 18, id: 11, description: 'Svensk boll', picture: 'bild/boll.png', category: 'Sport' }
        
    ];

    var cart = [];

    var listToAppend = function (array, position) {
        var newarr = array.map(function (itemprodact, id) {
            return `<li class="product col-3">
                <img src="${itemprodact.picture}" alt="">
                <div class="product-content">
                <h3>${itemprodact.name} -
                    <span class="category">${itemprodact.category}</span> <small>${itemprodact.price}kr</small>
                 </h3>
                  <p>${itemprodact.description}</p>
                </div>
                <button type="button" id="${itemprodact.id}">Köp</button>
            </li>`;
        });
        $(position).html(newarr);
    };

    var addToCart = function (array, id, position) {
        var addproduct = array.find(function (i) {
            return i.id === id;
        });
        cart.push(addproduct);
        var item = `
        <li class="item" id="${addproduct.id}">
            <h4>${addproduct.name}</h4>
            <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(cart.length);
        $(position).append(item);
    };

    var removeFromCart = function (array, removedItem) {
        array.splice(removedItem, 1);

    };

    var populateCart = function (array, location) {
        var item = `
        <li class="item" id="${array.id}">
            <h4>${array.name}</h4>
            <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(array.length);
    };


    listToAppend(products, $('.product-list'));

    $('.product').on('click', 'button', function (event) {
        var id = $(this).attr('id');
        addToCart(products, +id, $('.cart-list'));
    });

    $('.cart-list').on('click', 'button', function (e) {
        var item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));
    });


});