using System.Security.Cryptography;
using System.Text;

namespace Util;
public static class Encription
{
    public static string encriptPassword(string Password)
    {
        using (SHA512 sha512Hash = SHA512.Create())
        {
            // Convertir la contraseña a bytes
            byte[] bytesPassword = Encoding.UTF8.GetBytes(Password);

            // Generar el hash de la contraseña
            byte[] bytesHash = sha512Hash.ComputeHash(bytesPassword);

            // Convertir el hash a formato hexadecimal
            StringBuilder builder = new StringBuilder();
            for (int i = 0; i < bytesHash.Length; i++)
            {
                builder.Append(bytesHash[i].ToString("x2"));
            }
            return builder.ToString();
        }
    }
}