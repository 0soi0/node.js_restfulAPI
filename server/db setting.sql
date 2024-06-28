CREATE database node_js;

use node_js;

CREATE TABLE `store_info` (
	`id`	int(4)	NOT NULL AUTO_INCREMENT,
	`name`	varchar(20)	NULL,
	`code`	int(4)	NOT NULL,
	primary key (id)
);

CREATE TABLE `sido_code` (
	`code`	int(4)	NOT NULL,
	`sido`	varchar(8)	NULL
);

CREATE TABLE `sales` (
	`id`	int(4)	NOT NULL,
	`date`	date,
	`sale`	int(9)	NULL
);


=================================================================================================================================

ALTER database node_js default character set utf8;
ALTER TABLE sido_code CONVERT TO CHARACTER SET utf8;
ALTER TABLE store_info CONVERT TO CHARACTER SET utf8;

=================================================================================================================================

insert into sido_code VALUES (1,"서울특별시");
insert into sido_code VALUES (2,"부산광역시");
insert into sido_code VALUES (3,"대구광역시");
insert into sido_code VALUES (4,"인천광역시");
insert into sido_code VALUES (5,"광주광역시");
insert into sido_code VALUES (6,"대전광역시");
insert into sido_code VALUES (7,"울산광역시");
insert into sido_code VALUES (8,"세종특별자치시");
insert into sido_code VALUES (9,"경기도");
insert into sido_code VALUES (10,"강원틀별자치도");
insert into sido_code VALUES (11,"충청북도");
insert into sido_code VALUES (12,"충천남도");
insert into sido_code VALUES (13,"전북특별자치도");
insert into sido_code VALUES (14,"전라남도");
insert into sido_code VALUES (15,"경상북도");
insert into sido_code VALUES (16,"경상남도");
insert into sido_code VALUES (17,"제주특별자치도");

insert into store_info VALUES (0,'가게1번',1);
insert into store_info VALUES (0,'가게2번',2);
insert into store_info VALUES (0,'가게3번',3);
insert into store_info VALUES (0,'가게4번',4);
insert into store_info VALUES (0,'가게5번',5);
insert into store_info VALUES (0,'가게6번',6);
insert into store_info VALUES (0,'가게7번',7);
insert into store_info VALUES (0,'가게8번',8);
insert into store_info VALUES (0,'가게9번',9);
insert into store_info VALUES (0,'가게10번',10);
insert into store_info VALUES (0,'가게11번',11);
insert into store_info VALUES (0,'가게12번',12);
insert into store_info VALUES (0,'가게13번',13);
insert into store_info VALUES (0,'가게14번',14);
insert into store_info VALUES (0,'가게15번',15);
insert into store_info VALUES (0,'가게16번',16);
insert into store_info VALUES (0,'가게17번',17);

insert into sales VALUES (1,"2024-06-22",10000);
insert into sales VALUES (1,"2024-06-23",20000);
insert into sales VALUES (2,"2024-06-22",20000);
insert into sales VALUES (2,"2024-06-23",30000);
insert into sales VALUES (3,"2024-06-22",30000);
insert into sales VALUES (4,"2024-06-22",40000);
insert into sales VALUES (5,"2024-06-22",50000);
insert into sales VALUES (6,"2024-06-22",60000);
insert into sales VALUES (7,"2024-06-22",70000);
insert into sales VALUES (8,"2024-06-22",80000);
insert into sales VALUES (9,"2024-06-22",90000);
insert into sales VALUES (10,"2024-06-22",100000);
insert into sales VALUES (11,"2024-06-22",110000);
insert into sales VALUES (12,"2024-06-22",120000);
insert into sales VALUES (13,"2024-06-22",130000);
insert into sales VALUES (14,"2024-06-22",140000);
insert into sales VALUES (15,"2024-06-22",150000);
insert into sales VALUES (16,"2024-06-22",160000);
insert into sales VALUES (17,"2024-06-22",170000);



SELECT s.id,s.name,c.sido from store_info s INNER JOIN sido_code c ON(s.code=c.code) WHERE c.code=1;

SELECT c.sido,sum(d.sale) as sales from (SELECT * from sales WHERE month(date)=6) d INNER JOIN store_info s ON(d.id=s.id) INNER JOIN sido_code c ON(s.code=c.code) WHERE c.code = 1 GROUP BY c.code;

SELECT s.id,s.name,s.code,d.date,d.sale from store_info s INNER JOIN (SELECT * from sales WHERE month(date)=6) d on(s.id=d.id) WHERE s.id = 1 ORDER BY d.date DESC; 

INSERT INTO store_info VALUES(1,1,1);

UPDATE store_info set name = ?, code = ? WHERE id = ?;