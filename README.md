![Build Status](https://api.travis-ci.org/ramakay/CognitiveMerchandiser.svg)
# Cognitive Merchandiser
The Cognitive Merchandiser is a reference application built on the following Premise:

## Hypothesis: Uncaught Intents and Unstructured Web-experiences
While the former is an issue with Intents not being captured properly and responed to, the latter is the solution for the problem. 

Over $4.3 Trillion dollars worth of merchandise was left in checkout pages in 2014 ( http://www.businessinsider.com/heres-how-retailers-can-reduce-shopping-cart-abandonment-and-recoup-billions-of-dollars-in-lost-sales-2014-4)

Top reasons are shipping costs but also _I was just browsing_ The Retail experience wasn't able to complete a sale because of two reasons that I am Hypothesising

## Out of touch experience creation processes.
* User experience as well as persona's are getting built much prior to the actual application development.
* Once created , Designers draw based on these and leave.
* Implemented UX Personas are captured generically, sample this quote:

_Each persona represents a significant portion of people in the real world and enables the designer to focus on a manageable and memorable cast of characters, instead of focusing on thousands of individuals. Personas aid designers to create different designs for different kinds of people and to design for a specific somebody, rather than a generic everybody_ 
(https://www.smashingmagazine.com/2014/08/a-closer-look-at-personas-part-1/)

## Overload of Digital Marketing tools
![Chief Martec 2016 Map](http://cdn.chiefmartec.com/wp-content/uploads/2016/03/marketing_technology_landscape_2016_3000px.jpg)

## The solution

```A Cognitive layer is proposed on top of everything else, it caters to *One* and can operate on multiple concepts simultaneously and can scale at will.```


The Cognitive App  is considered a succcess if:
* It takes in a plainly worded but Intent oriented persona and returns a cognitive set of characteristics which will be used as a training set.
* The visual recognition API learns Catalog and Maps intents ( A Retailer sample in a catalog.js is checked in `data` folder)
* The _Relationship Extractor_ ML API retreives and matches information between the Persona and the Catalog.
* User supplies a search result say _White Jacket_, a NLP system undertands that White is a color and Jacket is in the Catalog matched to the _Alpha Male_
* System matches and returns all white jackets as a page on the Site
* This page was not defined anywhere.. The page components are automatically merged in and user experience components chosen accordingly.
* YMMV: The App should then attempt to Title this page and fetch potentially a related article.

##Key Technologies used
* `watson developer cloud`
* `webpack`
* `ReactJS`
* `Redux`

##Getting Started
* Node, NPM and Mongo are the only requirements right now.
* `npm install`
* `npm run dev` or `npm run build`
* Open `http://localhost:3000/Persona`
* Fill the Brand brief and submit ( See _Issues_)

#Status
## What works
Everything is wired up using the NodeJS SDK for Watson Cloud.
Actions, Reducers are all wired in and respond to changees.

#Boiler plate credits
React-Go for the Base React, Redux and Express Architecture: https://github.com/reactGo/reactGo 

#Roadmap
Re-inforcement learning using Pavlov
https://github.com/nathanEpstein/pavlov.js 


