# API Endpoints

<h2>Users</h2>
<h3>GET '/api/users'</h3>
<p>-Retrieves all user objects in the database with <b>user_id</b>, <b>username</b>, and <b>password</b>.</p>

<h3>POST '/api/users'</h3>
<p>-<b>Username</b> and <b>password</b> fields must be filled. Returns the newly created user object upon successful creation.</p>

<h2>Locations</h2>
<h3>GET '/api/locations'</h3>
<p>-Retrieves all locations. Contains <b>location_id</b> and <b>location_name.</b></p>

<h2>Items</h2>
<h3>GET '/api/items'</h3>
<p>-Returns an array of all items in the database, each including <b>item ID</b>, the associated <b>username</b>, associated <b>location name</b>, <b>item name</b>, <b>category</b>, <b>price</b>, and <b>description</b>.</p>

<h3>GET '/api/items/:id'</h3>
<p>-Returns a single item given a valid <b>item_id</b>.</p>

<h3>PUT '/api/items/:id'</h3>
<p>-Updates a single item at the given ID and currently returns the number of items updated. <b>Item_category</b>, <b>item_name</b>, <b>item_price</b>, <b>location_id</b>, and <b>user_id</b> fields must all be filled. <b>Item_price</b> must be formatted as a decimal (eg. 2.10). <b>Item_description</b> is optional.</p>

<h3>POST '/api/items/'</h3>
<p>-Creates a new item in the database and returns the newly created item. <b>Item_category</b>, <b>item_name</b>, <b>item_price</b>, <b>location_id</b>, and <b>user_id</b> fields must all be filled. <b>Item_price</b> must be formatted as a decimal (eg. 2.10). <b>Item_description</b> is optional.</p>

<h3>DELETE '/api/items/:id'</h3>
<p>-Deletes a single item at the given ID and currently returns the number of items deleted.</p>
