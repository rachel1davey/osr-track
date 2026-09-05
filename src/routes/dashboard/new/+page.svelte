<form method="POST">
    <input type="text" name="name" placeholder="Commission Name">

    <textarea name="description" placeholder="Description"></textarea>

    <select name="status">
        <option value="Pending">Pending Payment</option>
        <option value="In Progress">Parts To Be Printed</option>
        <option value="Parts Printed">Parts Printed</option>
        <option value="Parts Sanded">Parts Sanded</option>
        <option value="Parts Primed & Painted">Parts Primed & Painted</option>
        <option value="Assembled">Assembled</option>
        <option value="Pending Shipping">Pending Shipping</option>
        <option value="Shipped">Shipped</option>
    </select>

    <input
        type="text"
        name="customer_name"
        placeholder="Customer Name"
    >

    <button type="submit">Create</button>
    <a href="/dashboard" class="btn btn-error">Cancel</a>
</form>