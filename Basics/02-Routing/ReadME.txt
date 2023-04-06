- Here, eslint is not being used. File Configuration is needed to use it.
- Routing is done by file structure in NextJS
- Goto "/file_name" to route to desired page like in html
	- Eg: localhost:3000/blog



- For nested routing, (Eg: Blog Page)
	- Method 1: create a folder with same name as parent page, then put child pages inside that folder
	- Method 2: create a folder with all the related pages, use index.js as its root page just like html

- For dynamic routing, (Eg: Routing for each product in an e-commerce website),
	- Create file name with bracket as "[file_name].js"
	- Now goto "parent/file_name" and "file_name" will be used as a variable to dynamically render a page

- For dynamic routing, (Eg: Routing for specific review of each product in an e-commerce website),
	- Create folder name with bracket as "[file_name]". 
		- Eg: "[nested]"
	- Create "index.js" as its entry point
	- Now goto "parent/file_name" and "file_name" will be used as a variable to dynamically render a page
		- Eg: goto "dynamic_nested/nested"
	- Then goto "parent/file_name/child/child_file_name" to use "child_file" as variable. 
		- Eg: goto "dynamic_nested/nested/review/review_id"