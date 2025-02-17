// netlify/functions/cors-proxy.js

const fetch = require("node-fetch");

exports.handler = async function(event, context) {
  // Replace this with your actual Google Apps Script URL
  const targetUrl = "https://script.google.com/macros/s/AKfycbwS2sEWnXkIN3MVdw6Z-SnCPe2GfKdq2IovCu4gV2Re7VsB8g1CXwML_wTCnzwgLVZaGQ/exec";
  
  try {
    // Fetch data from your Apps Script
    const response = await fetch(targetUrl);
    // Read the response as text or JSON
    const data = await response.text();

    // Return data with the proper CORS headers
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",   // Allow all domains
        "Content-Type": "application/json"
      },
      body: data
    };
  } catch (error) {
    // Return error if fetch fails
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() })
    };
  }
};
