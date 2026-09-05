<form method="POST">
    <input type="text" name="name" placeholder="Commission Name">

    <textarea name="description" placeholder="Description"></textarea>

    <select name="status">
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
    </select>

    <input
        type="text"
        name="customer_name"
        placeholder="Customer Name"
    >

    <button type="submit">Create</button>
    <a href="/dashboard" class="btn btn-error">Cancel</a>
</form>