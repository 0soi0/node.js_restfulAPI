CREATE database node_js;

use database node_js;

CREATE TABLE `store_info` (
	`id`	int(4)	NOT NULL,
	`code`	int(4)	NOT NULL,
	`name`	varchar(10)	NULL
);

CREATE TABLE `sido_code` (
	`code`	int(4)	NOT NULL,
	`sido`	varchar(8)	NULL
);

CREATE TABLE `sales` (
	`id`	int(4)	NOT NULL,
	`date`	datetime	NULL,
	`sale`	int(9)	NULL
);

ALTER TABLE `store_info` ADD CONSTRAINT `PK_STORE_INFO` PRIMARY KEY (
	`id`,
	`code`
);

ALTER TABLE `sido_code` ADD CONSTRAINT `PK_SIDO_CODE` PRIMARY KEY (
	`code`
);

ALTER TABLE `sales` ADD CONSTRAINT `PK_SALES` PRIMARY KEY (
	`id`
);

ALTER TABLE `store_info` ADD CONSTRAINT `FK_sido_code_TO_store_info_1` FOREIGN KEY (
	`code`
)
REFERENCES `sido_code` (
	`code`
);

ALTER TABLE `sales` ADD CONSTRAINT `FK_store_info_TO_sales_1` FOREIGN KEY (
	`id`
)
REFERENCES `store_info` (
	`id`
);

=================================================================================================================================

ALTER database node_js default character set utf8;
ALTER TABLE sido_code CONVERT TO CHARACTER SET utf8;
ALTER TABLE store_info CONVERT TO CHARACTER SET utf8;

insert into sido_code VALUES (1,"서울특별시");
insert into sido_code VALUES (2,"부산광역시");
insert into sido_code VALUES (4,"대구광역시");
insert into sido_code VALUES (5,"인천광역시");
insert into sido_code VALUES (6,"광주광역시");
insert into sido_code VALUES (7,"대전광역시");
insert into sido_code VALUES (8,"울산광역시");
insert into sido_code VALUES (9,"세종특별자치시");
insert into sido_code VALUES (10,"경기도");
insert into sido_code VALUES (12,"강원틀별자치도");
insert into sido_code VALUES (13,"충청북도");
insert into sido_code VALUES (14,"충천남도");
insert into sido_code VALUES (15,"전북특별자치도");
insert into sido_code VALUES (16,"전라남도");
insert into sido_code VALUES (17,"경상북도");
insert into sido_code VALUES (18,"경상남도");
insert into sido_code VALUES (19,"제주특별자치도");


