DROP TABLE IF EXISTS users;
CREATE TABLE users(
    id int(11),
    username varchar(30),
    password varchar(30),
    email varchar(50),
    jenisuser (1),
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS calonsiswas;
CREATE TABLE calonsiswas(
    id int(11),
    nisn varchar(16),
    nama varchar(30),
    alamat text,
    email varchar(50),
    tempatlahir varchar(30),
    tanggallahir date,
    namaorangtua varchar(30),
    pekerjaanorangtua text,
    jeniskelamin varchar(10),
    nomertelephone varchar(30),
    namasekolahsebelumnya varchar(30),
    hobby text,
    prestasi text,
    beratbadan int(11),
    tinggibadan int(11),
    golongandarah char(1),
    alamatsekolahsebelumnya varchar(100),
    nomertelponsekelahsebelumnya varchar(50),
    statuspendaftaran varchar(11), /* Status: Menunggu, Ditolak, Dijadwalkan, Diterima, Tidak Diterima*/
    tahunajaranid int(11),
    userid int(11),
    PRIMARY KEY (id)
);


 DROP TABLE IF EXISTS tahunajaranbaru;
 CREATE TABLE tahunajaranbaru(
    id int(11),
    tahunajaran date
 );

DROP TABLE IF EXISTS pegawai;
 CREATE TABLE IF EXISTS pegawai(
    
 )