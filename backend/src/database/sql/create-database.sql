USE `mysql`;
UPDATE `user` SET host = '%' WHERE user = 'root' AND host = 'localhost';
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS `db_oncoclinicas`;
CREATE DATABASE IF NOT EXISTS `db_test`;

USE `db_oncoclinicas`; 

CREATE TABLE `tb_users` (
  `id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`email`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `tb_doctors` (
  `id` char(36) CHARACTER SET latin1 COLLATE latin1_bin NOT NULL,
  `name` varchar(255) NOT NULL,
  `crm` varchar(255) NOT NULL,
  `specialization` varchar(255) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `tb_users` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`, `deleted_at`) VALUES ('5538f3b1-bac9-4bc7-9697-9c2d245b5817', 'Master User', 'vento@oncoclinicas.com.br', '$2a$10$okPMWnwWjgM1QDHHDD43ouBuu7ldRqM09IIh4qr3tSX84qrKw9BEW', NOW(), NOW(), NULL);
