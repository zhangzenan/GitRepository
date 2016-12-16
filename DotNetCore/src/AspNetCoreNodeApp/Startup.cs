using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using AspNetCoreNodeApp.Middlewares;
using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.Extensions.PlatformAbstractions;

namespace AspNetCoreNodeApp
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true);

            if (env.IsEnvironment("Development"))
            {
                // This will push telemetry data through Application Insights pipeline faster, allowing you to view results immediately.
                builder.AddApplicationInsightsSettings(developerMode: true);
            }

            builder.AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddApplicationInsightsTelemetry(Configuration);

            //api authorized middleware
            //services.AddApiAuthorized(options =>
            //{
            //    options.EncryptKey = Configuration.GetSection("ApiKey")["EncryptKey"];
            //    options.ExpiredSecond = Convert.ToInt32(Configuration.GetSection("ApiKey")["ExpiredSecond"]);
            //});

            //依赖注入容器中添加StopWatch
            //services.AddTransient<StopWatch>();
            services.AddMvc();

            //启用 Node Services
            //services.AddNodeServices();

            //添加Swagger
            services.AddSwaggerGen();
            services.ConfigureSwaggerGen(options =>
            {
                options.SingleApiVersion(new Swashbuckle.Swagger.Model.Info
                {
                    Version = "v1",
                    Title = "乐舱网API",
                    Description = "RESTful API for My Web Application",
                    TermsOfService = "None"
                });
                options.IncludeXmlComments(GetXmlCommentsPath());
                options.DescribeAllEnumsAsStrings();
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            //app.UseMiddleware<TimeMiddleware>();

            //Map
            //app.Map("/mapTest", HandleMap);

            //MapWhen
            //app.MapWhen(context =>
            //{
            //    return context.Request.Query.ContainsKey("q");
            //}, HandleQuery);

            //api authorized middleware
            //app.UseApiAuthorized();

            app.UseApplicationInsightsRequestTelemetry();

            app.UseApplicationInsightsExceptionTelemetry();

            ////添加Swagger
            app.UseStaticFiles();
            app.UseSwagger();
            app.UseSwaggerUi();

            app.UseMvc();


        }

        private static void HandleMap(IApplicationBuilder app)
        {
            app.Run(async context =>
            {
                await context.Response.WriteAsync("Hello ,that is Handle Map ");
            });
        }

        private static void HandleQuery(IApplicationBuilder app)
        {
            app.Run(async context =>
            {
                await context.Response.WriteAsync("  Hello ,this is Handle Query ");
            });
        }

        private string GetXmlCommentsPath()
        {
            var app = PlatformServices.Default.Application;
            return Path.Combine(app.ApplicationBasePath, "AspNetCoreNodeApp.xml");// 注意：此处替换成所生成的XML documentation的文件名。
        }

    }
}
