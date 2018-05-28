DROP TABLE IF EXISTS user;
CREATE TABLE IF NOT EXISTS user (
    `id` bigint(20) NOT NULL AUTO_INCREMENT,
    `name` varchar(200) NOT NULL,
    `email` varchar(200) NOT NULL,
    `age` int(3) NOT NULL,
    `phone` varchar(200) NOT NULL,
    PRIMARY KEY (`id`)
);