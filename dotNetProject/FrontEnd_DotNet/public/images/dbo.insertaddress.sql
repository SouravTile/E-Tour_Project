CREATE PROCEDURE insertaddress
@a int,
@b int,
@c varChar(60),
@d varChar(60),
@e varChar(60), 
@f varChar(60), 
@g int
AS
BEGIN

INSERT INTO AddressDetails
(aid,psngrID,add1,add2,district,city,pincode)
VALUES
(@a,@b,@c,@d,@e,@f,@g)

END