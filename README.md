# API Endpoints

<h2>Users</h2>
<h3>GET '/api/users'</h3>
<p>-Retrieves all user objects in the database with user_id, username, and password.</p>

<h3>POST '/api/users'</h3>
<p>-'Username' and 'password' fields must be filled. Returns the newly created user object upon successful creation.</p>

<h2>Locations</h2>
<h3>GET '/api/locations'</h3>
<p>-Retrieves all locations. Contains location_id and location_name.</p>

<h2>Items</h2>
<h3>GET '/api/items'</h3>
<p>-Returns an array of all items in the database, each including item ID, the associated username, associated location name, item name, category, price, and description.</p>

<h3>GET '/api/items/:id'</h3>
<p>-Returns a single item given a valid item_id.</p>

<h3>PUT '/api/items/:id'</h3>
<p>-Updates a single item at the given ID and currently returns the number of items updated. 'Item_category', 'item_name', 'item_price', 'location_id', and 'user_id' fields must all be filled. 'Item_price' must be formatted as a decimal (eg. 2.10). 'Item_description' is optional.</p>

<h3>POST '/api/items/'</h3>
<p>-Creates a new item in the database and returns the newly created item. 'Item_category', 'item_name', 'item_price', 'location_id', and 'user_id' fields must all be filled. 'Item_price' must be formatted as a decimal (eg. 2.10). 'Item_description' is optional.</p>

<h3>DELETE '/api/items/:id'</h3>
<p>-Deletes a single item at the given ID and currently returns the number of items deleted.</p>
