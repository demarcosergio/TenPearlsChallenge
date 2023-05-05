namespace TenPearls.Application.Interfaces
{
    public interface IUnitOfWork
    {
        IContactRepository Contacts { get; }
    }
}
