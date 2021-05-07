# drop existing visitors_proc
DROP PROCEDURE IF EXISTS visitors_proc; 
 
# change delimiter to $$ --> i.e. the statement terminator is changed to $$
DELIMITER $$ 
 
# name the procedure; this one will have no arguments
CREATE PROCEDURE visitors_proc(IN param INT) 
BEGIN

UPDATE visitors SET visits=visits+1 WHERE id=param;

SELECT visits FROM visitors WHERE id=param;

# procedure is over
END$$ 

# change the delimiter back to normal
DELIMITER ; 