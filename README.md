# Cognitive Merchandiser
The Cognitive Merchandiser is a reference application built on the following Premise:

## Uncaught Intents and Unstructured Web-experiences
While the former is an issue with Intents not being captured properly and responed to, the latter is the solution for the 

##Operation
The Cognitive App  is considered a succcess if:
* It takes in a plainly worded but Intent oriented persona and returns a cognitive set of characteristics which will be used to crawl the system.
* The visual recognition API learns Catalog and Maps intents ( A Retailer sample in a catalog.js is checked in `data` folder)
* The _Relationship Extractor_ ML API retreives and matches information between the Persona and the Catalog.
* User supplies a search result say _White Jacket_
* System matches and returns all white jackets as a page on the Site
* This page was not defined anywhere.. The page components are automatically merged in and user experience components chosen accordingly.

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

##Issues
Right now in its Pre-alpha stage, all it does is the ability to input a brand brief and pass it on to a ML Api to get a JSON confidence level back on type of persona and intents that get weighed higher.

A Sample _AlphaMale.md_ exists in the app folder. 

*Issue:* The watson service currently returns `undefined` for a request to provide personality insights.



