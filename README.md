# Yoga Poses API

An API to help you find yoga poses based on search parameters.  Relevant poses and their information are returned in a JSON format.

## Description

The following search parameters are accepted:
* Pose Name
  - Examples: Warrior, Downward-Facing Dog, etc.
* Category
  - Examples: Supine, Seated, Neutral, etc.
* Difficulty
  - Examples: Beginner, Intermediate, or Expert
* Benefits
  - Examples: Improve Balance, Strenthens Arms, etc.

To make a GET request to the api, use the following format for the URL:  
https://yoga-poses-api.herokuapp.com/api?name=nameValue&category=categoryValue&difficulty=difficultyValue&benefits=benefitsValue



## Example Requests
* To search for warrior poses that have a difficulty of expert:  
https://yoga-poses-api.herokuapp.com/api?name=warrior&difficulty=expert  

* To search for poses that have a benefit of "improve balance":  
https://yoga-poses-api.herokuapp.com/api?benefits=improve&balance  
Note that the character '&' is used to separate parameters with multiple words

* To get a JSON of all the poses in the database:  
https://yoga-poses-api.herokuapp.com/api?

## Authors
Chris Smith  
chriscolismith@gmail.com  
www.linkedin.com/in/chris-smith-a9279b90


## Acknowledgements 
Credit to https://github.com/Stuwert/yoga-builder/blob/staging/poses.json for poses.json

