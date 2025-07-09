document.addEventListener('DOMContentLoaded', () => {
    const sidebar = `
    <div id="sidebar">
      <h3>FitSystem</h3>
      <a href="/views/dashboard.html">Inicio</a>
      <a href="/views/users/list.html">Usuarios</a>
      <a href="/views/clients/list.html">Clientes</a>
      <a href="/views/products/list.html">Productos</a>
      <a href="/views/invoices/list.html">Facturación</a>
      <a href="/views/auth/login.html" onclick="localStorage.removeItem('loggedUser')">Cerrar sesión</a>
    </div>
  `;
    const container = document.getElementById('sidebar-placeholder');
    if (container) container.innerHTML = sidebar;
});
