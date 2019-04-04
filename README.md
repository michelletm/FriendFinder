# FriendFinder

The "Friend Finder" app is designed to match a user to a compatible friend based on their answers to a series of questions meant to understand various aspects of personality. The user inputs their name, a link to their picture, and then fills out a survey, the results of which are calculated and compared to the friends in the database. The friend with the most similar answers is then paired with the user, and offered in a pop-up modal, along with name and picture. 

This app employs Express and creates its own API calls that query a local data file populated with a list of potential friends and their attributes. JQuery is used to create the functions that compare the user answers to the friend scores, and populate the modal. Middelware is used, and requires the developer to handle routers and understand the specific file structure used. 

This app is created and maintained by michelletm, and remains without styling, which is a work in progress. Future work also includes adding questions to provide more accurate matches, and adding friends to the database. 