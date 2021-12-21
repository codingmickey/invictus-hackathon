import Request from '../models/requestModel.js';
import vendor from '../models/vendorModel';

const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

// Add request by user
const addRequest = async (req, res) => {
  try {
    const reqAdd = new Request({
      ...req.body,
      requestPlacer: req.user._id,
    });
    const requestplaced = await reqAdd.save();
    await vendor.find(
      { productsSellerCat: req.body.productsSellerCat },
      (errr, foundVendors) => {
        foundVendors.forEach((vendor, i) => {
          // Your message.
          const text = `Hi ${names[i]}\nthese are the information of the things that the recent users requesetd!`;

          // Getting chatId from the number.
          // we have to delete "+" from the beginning and add "@c.us" at the end of the number.
          const chatId = vendor.mobileNumber.substring(1) + '@c.us';

          // Sending message.
          client.sendMessage(chatId, text);
          console.log('msg successfully sent to ' + names[i]);
        });
        res.status(201).json({
          success: true,
          message: 'Request placed successfully',
          reqAdd,
        });
      },
    );
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// List all the requests
const showAllRequests = async (req, res) => {
  try {
    const userRequests = await Request.find({ requestPlacer: req.user._id });
    res.status(200).json({
      success: true,
      message: 'Heres the list of all your requests',
      userRequests,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const showRequesById = async (req, res) => {
  try {
    const reqId = req.params.id;
    const request = await Request.findOne({
      _id: reqId,
      requestPlacer: req.user._id,
    });
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Request not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Heres your Request',
      request,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete users request
const removeRequest = async (req, res) => {
  try {
    const reqId = req.params.id;
    const request = await Request.findOne({
      _id: reqId,
      requestPlacer: req.user._id,
    });
    if (!request) {
      return res.status(404).json({
        success: false,
        message: 'Request not found',
      });
    }
    await Request.deleteOne(request);
    res.status(200).json({
      success: true,
      message: 'Request removed successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export { addRequest, showAllRequests, showRequesById, removeRequest };

client.initialize();
