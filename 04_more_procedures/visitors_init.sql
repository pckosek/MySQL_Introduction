DROP TABLE IF EXISTS visitors;

CREATE TABLE visitors(id INT, nickname VARCHAR(100), visits INT, PRIMARY KEY(id));

INSERT INTO visitors (id,visits) VALUE (0,101);
