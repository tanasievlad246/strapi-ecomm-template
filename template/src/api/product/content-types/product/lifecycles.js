
const discountProduct = (params) => {
    const { data } = params;
    const discount = data.price * data.discount;
    const price = data.price - discount;
    const taxPrice = price + (price * data.vat);
    return { price, taxPrice };
}

module.exports = {
    beforeCreate(event) {
        const { params } = event;
        const { taxPrice } = discountProduct(params);
        params.data.taxPrice = taxPrice;
    },

    beforeUpdate(event) {
        const { params } = event;
        const { taxPrice } = discountProduct(params);
        params.data.taxPrice = taxPrice;
    }
};