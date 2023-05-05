using TenPearls.Application.Interfaces;
using TenPearls.Infrastructure.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace TenPearls.Infrastructure
{
    public static class ServiceCollectionExtension
    {
        public static void RegisterServices(this IServiceCollection services)
        {
            services.AddTransient<IContactRepository, ContactRepository>();
            services.AddTransient<IUnitOfWork, UnitOfWork>();
        }
    }
}
