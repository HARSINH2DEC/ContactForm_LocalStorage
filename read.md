Javascript logic to handle a contact list :-

1) 
2) Add a retrieveFromStorage method that pulls the contact from localStorage
3) Populate the grid by iterating through the results arrey . Create a row for each record .
   Within each row we will have 
       a) Email address
       b) The full name
       c) Edit link . (The edit link will hold key-data attribute to hold the contacts index within the arrey)
       d) If arrey is empty display "No records available" message.
4) Use the index to find corresponding  item in the contacts arrey and then store contact object in record 
5)Save method (Update if new contact or save existing contact )



# Challange 1 :-

How to make multiple recods in local storage . Coz each time i was clicking on save button the contact was getting updated in same row and data was getting refreshed rather than creating new rows

# Solution :-

I was declaring the arrey to be saved inside the save function and hece it was getting emptied  or refreshed every time i was clicking on the save button .

# Challange 2 :-

After refresh the declared arrey was getting emptied . thus local storage was getting updated with the new arrey values and not retaining the old values 

#Solution :-
Code block 9-17

#Challenge 3 :-

concat() VS push() 

