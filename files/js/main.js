// allow the formatNumber function to be used as a filter
Vue.filter('formatCurrency', function (value) {
	return formatNumber(value, 0, '.', ',');
});

function formatNumber(n, c, d, t){
	var c = isNaN(c = Math.abs(c)) ? 2 : c, 
		d = d === undefined ? '.' : d, 
		t = t === undefined ? ',' : t, 
		s = n < 0 ? '-' : '', 
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
		j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, 'دج1' + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : '');
};
  let wilayas_default_shipping_delivery_store_fee = {"1":800,"2":500,"3":500,"4":500,"5":500,"6":500,"7":500,"8":800,"9":500,"10":500,"12":500,"13":500,"14":500,"15":500,"16":500,"17":500,"18":500,"19":500,"20":500,"21":500,"22":500,"23":500,"24":500,"25":500,"26":500,"27":500,"28":500,"29":500,"30":500,"31":500,"32":500,"34":500,"35":500,"36":500,"38":500,"39":500,"40":500,"41":500,"42":500,"43":500,"44":500,"45":800,"46":500,"47":500,"48":500};

// vue toast
Vue.use(VueToast);

// vue scroll to
VueScrollTo.setDefaults({
    container: 'body',
    duration: 700,
    easing: 'linear',
    offset: 50,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});

// the shopping cart component
Vue.component('cart', {
	props: ['items'],
	computed: {
		Total() {
			let total = 0;
			this.items.forEach(item => {
				total += (item.price * item.quantity );
			});
			return total;
		}
		
	},
	methods: {
		// remove item by index
		removeItem(index) {
			this.items.splice(index, 1);

			this.$toast.open({
				message: "تم إزالة المنتج",
				type: "success",
				duration: 4000,
				dismissible: true
			});
		}
	}
});

new Vue({
	el: '#app',
	computed: {
		total() {
			let total = 0;
			this.cartItems.forEach(item => {
				total += (item.price * item.quantity );
			});
			return total + +this.wilayaPrice  ;
		}
	},
	data: {
		cartItems: [],
		items: products,
		currentFilter: 'all',
		wilayaPrice: 0,
	},
	
	methods: {
		// add items to cart
		addToCart(itemToAdd) {
			let found = false;
			// add the item or increase quantity
			let itemInCart = this.cartItems.filter(item => item.id===itemToAdd.id);
			let isItemInCart = itemInCart.length > 0;

			if (isItemInCart === false) {
				this.cartItems.push(Vue.util.extend({}, itemToAdd));

				this.$toast.open({
					message: "تم إضافة المنتج",
					type: "success",
					duration: 4000,
					dismissible: true
				});
			} else {
				itemInCart[0].quantity += itemToAdd.quantity ;
			}
			itemToAdd.quantity = 1;
		},
		// category filter
		setFilter(filter) {
			this.currentFilter = filter;
		}
	}
});


var product_price = [2200];


