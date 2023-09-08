import bcrypt from "bcrypt";

const ComparePasswords = async (EncryptedPassword, ProvidedPassword) => {
  return await bcrypt.compare(EncryptedPassword, ProvidedPassword);
};


export default ComparePasswords