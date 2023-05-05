using System;
using System.Data.SqlClient;
using System.Runtime.Serialization;

namespace TenPearls.Test.Helper
{
    public static class TestConstants
    {
        public static SqlException GetSqlException()
        {
            var sqlException = FormatterServices.GetUninitializedObject(typeof(SqlException)) as SqlException;

            return sqlException;
        }

        public static Exception GetGeneralException()
        {
            return new Exception("Test Exception");
        }

        public static class ContactTest
        {
            public static string FirstName = "Sergio";
            public static string LastName = "Demarco";
            public static string Email = "sergio@gmail.com";
            public static string PhoneNumber = "123456789";
            public static string NewEmail = "sergio@gmail.com";
        }
    }
}
