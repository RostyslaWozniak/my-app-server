const Order = require('../../db/models/order-model');

class OrderActions {

    async getOrders(req, res){
        try{
            const admin = await Order.find();
            res.status(200).json(admin);
        } catch(err){
            res.status(500).json({message: err.message})
        }
    }
    

    async postOrder(req, res){
        
        const { userName, order, date, isOrderCompleted, totalPrice } = req.body;
        try{
            const orderItem = new Order();
            orderItem.userName = userName;
            orderItem.order = order;
            orderItem.date = date;
            orderItem.isOrderCompleted = isOrderCompleted;
            orderItem.totalPrice = totalPrice;
            orderItem.save();
            res.status(201).json(orderItem);
        }catch(err){
            res.status(500).json({message: err.message});
        }
    }

    async patchOrder(req, res){
        try{
            const { userName, order, date, isOrderCompleted, totalPrice} = req.body;
            const orderItem = await Order.findById(req.params.id);
            orderItem.userName = userName ?? orderItem.userName;
            orderItem.order = order ?? orderItem.order;
            orderItem.date = date ?? orderItem.date;
            orderItem.isOrderCompleted = isOrderCompleted ?? orderItem.isOrderCompleted;
            orderItem.totalPrice = totalPrice;
            res.status(201).json(orderItem);
        }catch(err){
            res.status(404).send(err.message);
        }
    }

    async deleteOrder(req, res){
        try{
            const order = await Order.findById(req.params.id);
            if(order == null){
                return res.status(404).json({message: 'Brak  artykułu z podanym ID'})
            }
            await order.deleteOne();
            res.sendStatus(204);

        }
        catch(err){
            res.status(500).send(err.message)
        }
    }
}
module.exports = new OrderActions();