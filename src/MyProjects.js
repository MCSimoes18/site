import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Player } from 'video-react';
import ReactPlayer from 'react-player'

class MyInfo extends React.Component {


  returnMealDeals = () => {
      return (
        <div className = "MealDeals">
          <h2> Meal Deals </h2>
          <p>Meal Deals is a restaurant marketing application built with React & Semantic UI front-end and Ruby on Rails back-end. The idea is to incentives customers to return to particular dining locations through exclusive offers. Existing Yelp businesses can create an account and post an offer. Each offer has an "earn" month and a "redeem" month. During the "earn" month, if the customer visits an eligible restaurant, they are able to "check in" using their geo-location. This feature compares the customer's current location with the latitude and longitude coordinates from the restaurant found in Yelp's API. Therefore, the "check-in" feature will only work, if the customer is actually on site at the restaurant''s location. Upon checking in, customers will receive a coupon to redeem. Coupons can have four statuses - "inactive", "redeemed", "upcoming", or "expired". "Inactive" coupons are "inactive" if they have not yet been redeemed and the current date falls within the "redeem" month. Only "inactive" coupons can be activated. Once activated, a coupon text with the current date will be sent to the customer's phone number (using Twilio), also, the coupon on the app will also flash colors with the current date. Either the text message or flashing coupon can be shown to the restaurant server so the offer may be redeemed. As a restaurant,the restaurant can log-in and view redemption data on all offers.

          When neither a customer or restaurant is logged in. The user still has the capability to search for any cuisine by location and receive top results (using Yelp''s API). Each restaurant result provide details, ratings, a link to Yelp and the ability to view location with Google Maps. In addition, all restaurants with an "earn" offer during the current month are viewable to all users. The user can see restaurant details, view all offers on google maps, but will need to sign in or create an account in order to earn coupons.</p>

          <ReactPlayer url='https://youtu.be/vsE2Q5T--8o'/>
      </div>
    )
  }

  render () {
      return (
        <div>
        {this.returnMealDeals()}
        <ReactPlayer url='https://youtu.be/vsE2Q5T--8o'/>
        <ReactPlayer url='https://youtu.be/V-6HR2zln8k'/>
        <ReactPlayer url='https://youtu.be/90gPXAhlPMw'/>
        <ReactPlayer url='https://youtu.be/70LmEmo09mc'/>
        </div>
      )
    }
  }

export default MyInfo
