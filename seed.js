module.exports = () =>`

DROP TABLE IF EXISTS states;
DROP TABLE IF EXISTS state_details;

CREATE TABLE states (
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(100) UNIQUE
   ); 
CREATE TABLE state_details (
    Id SERIAL PRIMARY KEY,
    postalCode VARCHAR(5),
    capitalCity VARCHAR(100),
    TimeZones VARCHAR(100)
    );
INSERT INTO states(name) VALUES('Alabama'); 
INSERT INTO states(name) VALUES('Alaska');      
INSERT INTO states(name) VALUES('Arizona');                    
INSERT INTO states(name) VALUES('Arkansas');                 
INSERT INTO states(name) VALUES('California');
INSERT INTO states(name) VALUES('Colorado'); 
INSERT INTO states(name) VALUES('Connecticut');
INSERT INTO states(name) VALUES('Delaware');                
INSERT INTO states(name) VALUES('Florida');                     
INSERT INTO states(name) VALUES('Georgia');                   
INSERT INTO states(name) VALUES('Hawaii');                      
INSERT INTO states(name) VALUES('Idaho');                        
INSERT INTO states(name) VALUES('Illinois');      
INSERT INTO states(name) VALUES('Indiana');                    
INSERT INTO states(name) VALUES('Iowa');                         
INSERT INTO states(name) VALUES('Kansas');                     
INSERT INTO states(name) VALUES('Kentucky');
INSERT INTO states(name) VALUES('Louisiana');
INSERT INTO states(name) VALUES('Maine');                      
INSERT INTO states(name) VALUES('Maryland');
INSERT INTO states(name) VALUES('Massachusetts');
INSERT INTO states(name) VALUES('Michigan');
INSERT INTO states(name) VALUES('Minnesota');              
INSERT INTO states(name) VALUES('Mississippi');             
INSERT INTO states(name) VALUES('Missouri');  
INSERT INTO states(name) VALUES('Montana');                 
INSERT INTO states(name) VALUES('Nebraska');
INSERT INTO states(name) VALUES('Nevada');                    
INSERT INTO states(name) VALUES('New Hampshire');
INSERT INTO states(name) VALUES('New Jersey');            
INSERT INTO states(name) VALUES('New Mexico');          
INSERT INTO states(name) VALUES('New York');
INSERT INTO states(name) VALUES('North Carolina');
INSERT INTO states(name) VALUES('North Dakota');
INSERT INTO states(name) VALUES('Ohio');                         
INSERT INTO states(name) VALUES('Oklahoma');               
INSERT INTO states(name) VALUES('Oregon');                    
INSERT INTO states(name) VALUES('Pennsylvania');
INSERT INTO states(name) VALUES('Rhode Island');
INSERT INTO states(name) VALUES('South Carolina');
INSERT INTO states(name) VALUES('South Dakota');
INSERT INTO states(name) VALUES('Tennessee');              
INSERT INTO states(name) VALUES('Texas');                        
INSERT INTO states(name) VALUES('Utah');                         
INSERT INTO states(name) VALUES('Vermont');                 
INSERT INTO states(name) VALUES('Virginia');    
INSERT INTO states(name) VALUES('Washington');           
INSERT INTO states(name) VALUES('West Virginia');
INSERT INTO states(name) VALUES('Wisconsin');               
INSERT INTO states(name) VALUES('Wyoming');  
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('AL', 'Montgomery', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('AK', 'Juneau', 'Alaska Standard Time (AKST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('AZ', 'Phoenix', 'Mountain Standard Time (MST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('AR', 'Little Rock', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('CA', 'Sacramento', 'Most of the state: Pacific Standard Time (PST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('CO', 'Denver', 'Mountain Standard Time (MST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('CT', 'Hartford', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('DE', 'Dover', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('FL', 'Tallahassee', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('GA', 'Atlanta', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('HI', 'Honolulu', 'Hawaii-Aleutian Standard Time (HST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('ID', 'Boise', 'Mountain Standard Time (MST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('IL', 'Springfield', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('IN', 'Indianapolis', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('IA', 'Des Moines', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('KS', 'Topeka', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('KY', 'Frankfort', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('LA', 'Baton Rouge', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('ME', 'Augusta', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('MD', 'Annapolis', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('MA', 'Boston', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('MI', 'Lansing', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('MN', 'St. Paul', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('MS', 'Jackson', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('MO', 'Jefferson City', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('MT', 'Helena', 'Mountain Standard Time (MST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('NE', 'Lincoln', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('NV', 'Carson City', 'Pacific Standard Time (PST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('NH', 'Concord', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('NJ', 'Trenton', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('NM', 'Santa Fe', 'Mountain Standard Time (MST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('NY', 'Albany', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('NC', 'Raleigh', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('ND', 'Bismarck', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('OH', 'Columbus', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('OK', 'Oklahoma City', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('OR', 'Salem', 'Most of the state: Pacific Standard Time (PST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('PA', 'Harrisburg', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('RI', 'Providence', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('SC', 'Columbia', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('SD', 'Pierre', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('TN', 'Nashville', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('TX', 'Austin', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('UT', 'Salt Lake City', 'Mountain Standard Time (MST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('VT', 'Montpelier', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('VA', 'Richmond', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('WA', 'Olympia', 'Pacific Standard Time (PST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('WV', 'Charleston', 'Eastern Standard Time (EST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('WI', 'Madison', 'Central Standard Time (CST)');
INSERT INTO state_details(postalcode, capitalcity, timezones) VALUES('WY', 'Cheyenne', 'Mountain Standard Time (MST)');       
`