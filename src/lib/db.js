const {adminname,adminpassword}=process.env;
// export const connectionSrt= "mongodb+srv://"+username+":"+password+"@cluster0.eybo8gi.mongodb.net/productDB?retryWrites=true&w=majority";

export const connectionSrt = "mongodb+srv://"+adminname+":"+adminpassword+"@cluster0.eybo8gi.mongodb.net/productDB?retryWrites=true&w=majority"