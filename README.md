# African Marketplace

<h2>Pitch</h2>
<p>Sauti Africa empowers small business owners, particularly women, to improve their business and economic opportunities to grow out of poverty.<br/> 

You will build a platform to enable these business owners to create listing for items they have for sale.</p>

<h2>MVP</h2>
<ol>
  <li>A small business owner can login and see relevant prices in various categories to help them set their own prices.
  </li>
  <li>They can also make listing for items they want to sell, which will show up to all users.</li>
  <li>They add a new item by selecting their market location and typing in their item's name, description, and price.
  </li>
</ol>

<h2><i>Heroku API</i></h2>
<p>Deployed URL: <i>https://build-week-african-marketplace.herokuapp.com/</i>

<h2>Authentication</h2>
<ul>
  <li><h3>POST '/api/auth/register'</h3>
  <p>-Registers a new user and returns the newly created user object. <b>Username</b> and <b>password</b> are required, <b>is_owner</b> field is optional (defaults to false).</p>
  </li>

  <li><h3>POST '/api/auth/login'</h3>
  <p>-Returns a welcome message and JWT token upon successful login. <b>Username</b> and <b>password</b> are required.</p>
  </li>
</ul>

<h2>Locations</h2>
<ul>
  <li><h3>GET '/api/locations'</h3>
   <p>-Retrieves all locations. Contains <b>location_id</b> and <b>location_name.</b></p>
  </li>
</ul>

<h2>Items</h2>
<ul>
  <li><h3>GET '/api/items'</h3>
<p>-Returns an array of all items in the database, each including <b>item ID</b>, the associated <b>username</b>, associated <b>location name</b>, <b>item name</b>, <b>category</b>, <b>price</b>, and <b>description</b>.</p>
  </li>

  <li><h3>GET '/api/items/:id'</h3>
<p>-Returns a single item given a valid <b>item_id</b>.</p>
  </li>

  <li><h3>PUT '/api/items/:id' <i>(Requires Token)</i></h3>
<p>-Updates a single item at the given ID and currently returns the number of items updated. <b>Item_category</b>, <b>item_name</b>, <b>item_price</b>, <b>location_id</b>, and <b>user_id</b> fields must all be filled. <b>Item_price</b> must be formatted as a decimal (eg. 2.10). <b>Item_description</b> is optional.</p>
    </li>

  <li><h3>POST '/api/items/' <i>(Requires Token)</i></h3>
<p>-Creates a new item in the database and returns the newly created item. <b>Item_category</b>, <b>item_name</b>, <b>item_price</b>, <b>location_id</b>, and <b>user_id</b> fields must all be filled. <b>Item_price</b> must be formatted as a decimal (eg. 2.10). <b>Item_description</b> is optional.</p>
    </li>

  <li><h3>DELETE '/api/items/:id' <i>(Requires Token)</i></h3>
<p>-Deletes a single item at the given ID and currently returns the number of items deleted.</p>
    </li>
</ul>


<h2>Users <i>(for testing)</i></h2>
<ul>
  <li><h3>GET '/api/users'</h3>
    <p>-Retrieves all user objects in the database with <b>user_id</b>, <b>username</b>, and <b>password</b>.</p>
  </li>

  <li><h3>POST '/api/users'</h3>
    <p>-<b>Username</b> and <b>password</b> fields must be filled. Returns the newly created user object upon successful creation.</p>
  </li>
</ul>

<h3>The Team</h3>
<ul>
  <li>Bret Banger, Github: , LinkedIn:</li>
  <li>Mina Soha, Github: , LinkedIn:</li>
  <li>Aaron Reyes, Github: , LinkedIn:</li>
</ul>
