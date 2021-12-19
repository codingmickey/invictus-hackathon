import Request from '../models/requestModel.js';

// Add request by user
const addRequest = async (req, res) => {
  try {
    const reqAdd = new Request({
      ...req.body,
      requestPlacer: req.user._id,
    });
    const requestplaced = await reqAdd.save();
    res.status(201).json({
      success: true,
      message: 'Request placed successfully',
      reqAdd,
    });
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
