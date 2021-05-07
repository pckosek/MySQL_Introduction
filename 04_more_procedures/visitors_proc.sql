# drop existing visitors_proc
DROP PROCEDURE IF EXISTS visitors_proc; 
 
# change delimiter to $$ --> i.e. the statement terminator is changed to $$
DELIMITER $$ 
 
# name the procedure; this one will have no arguments
CREATE PROCEDURE visitors_proc() 
BEGIN

SELECT nickname FROM visitors WHERE id=0;

# statement (therefore, procedure) is over
END$$ 

# change the delimiter back to normal
DELIMITER ; 