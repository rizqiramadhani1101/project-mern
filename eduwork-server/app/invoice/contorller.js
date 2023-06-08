const { subject } = require('@casl/ability');
const { policyFor } = require('../../utills');
const Invoice = require('../invoice/model');

const show = async(req, res, next) => {
    try {
        let policy = policyFor(req.user);
        let subjectInvoice = subject('Invoice', { ...Invoice, user_id: Invoice.user._id });
        if(!policy.can('read'. subjectInvoice)) {
            return res.json({
                error: 1,
                message: 'Anda tidak memiliki akses untuk invoice ini'
            });
        }

        let {order_id} =req.params;
        let invoice = 
        await Invoice
        .findOne({order: order_id})
        .populate('order')
        .populate('user')

        return res.json(invoice);


    } catch (err) {
        if (err && err.name === 'ValidationError') {
            return res.json({
              error: 1,
              message: err.message,
              fields: err.errors
            });
          }
          next(err);
        
    }
}

module.exports = {
    show
}