## This example shows how to run a sql script.

This will allow you to 'prewrite' sql commands, and then run as a batch - all at once! This functionality will be immensely useful if you have larger or complicated databases.

Here's the process:
* place the .sql file in a folder on your server
* open the sql command prompt (USE THE *ALTERNATE SHELL*) and type the command:
  ```
  SOURCE /site/sql_scripts_folder/foo.sql
  ```
* your sql script is in a folder different from above. I can't tell you where you put it, but you will need to run a command that looks like:
  ```
  SOURCE /site/web/the/full/file/path/foo.sql
  ```

 once you have run the initialization script, at the sql prompt you can run a command like
```
SELECT * FROM students;
```
to see all your sql wonderfulness!
