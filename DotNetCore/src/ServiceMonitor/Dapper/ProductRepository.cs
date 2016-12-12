using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace ServiceMonitor.Dapper
{
    public class ProductRepository
    {
        private string connectionString;
        private string connectionStringReadOnly;
        public ProductRepository()
        {
            //connectionString = @"Data Source=172.16.21.18;Initial Catalog=TestDB;Persist Security Info=True;User ID=sa;Password=lcang123.com;MultipleActiveResultSets=true;";
            connectionString = @"Data Source=Grp01Listener;Initial Catalog=TestDatabase;Persist Security Info=True;User ID=sa;Password=sa;MultipleActiveResultSets=true;";    
            connectionStringReadOnly =@"Data Source=Grp01Listener;Initial Catalog=TestDatabase;Persist Security Info=True;User ID=sa;Password=sa;ApplicationIntent=ReadOnly;MultipleActiveResultSets=true;";
           
        }

        public IDbConnection Connection
        {
            get
            {
                return new SqlConnection(connectionString);
            }
        }

        public IDbConnection ConnectionReadOnly
        {
            get
            {
                return new SqlConnection(connectionStringReadOnly);
            }
        }

        public void Add(Product prod)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = "INSERT INTO Products (Name, Quantity, Price)"
                                + " VALUES(@Name, @Quantity, @Price)";
                dbConnection.Open();
                dbConnection.Execute(sQuery, prod);
            }
        }

        public IEnumerable<Product> GetAll()
        {
            using (IDbConnection dbConnection = ConnectionReadOnly)
            {
                dbConnection.Open();
                return dbConnection.Query<Product>("SELECT * FROM Products");
            }
        }

        public Product GetByID(int id)
        {
            using (IDbConnection dbConnection = ConnectionReadOnly)
            {
                string sQuery = "SELECT * FROM Products"
                               + " WHERE ProductId = @Id";
                dbConnection.Open();
                return dbConnection.Query<Product>(sQuery, new { Id = id }).FirstOrDefault();
            }
        }

        public void Delete(int id)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = "DELETE FROM Products"
                             + " WHERE ProductId = @Id";
                dbConnection.Open();
                dbConnection.Execute(sQuery, new { Id = id });
            }
        }

        public void Update(Product prod)
        {
            using (IDbConnection dbConnection = Connection)
            {
                string sQuery = "UPDATE Products SET Name = @Name,"
                               + " Quantity = @Quantity, Price= @Price"
                               + " WHERE ProductId = @ProductId";
                dbConnection.Open();
                dbConnection.Query(sQuery, prod);
            }
        }
    }
}
