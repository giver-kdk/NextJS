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
	- Create folder name with bracket as "[file_name]"
		- Eg: "[nested]"
	- Create "index.js" as its entry point
	- Now goto "parent/file_name" and "file_name" will be used as a variable to dynamically render a page
		- Eg: goto "dynamic_nested/nested"
	- Then goto "parent/file_name/child/child_file_name" to use "child_file" as variable. 
		- Eg: goto "dynamic_nested/nested/review/review_id"

- For catch all routing, (Eg: Routing for all nested menu like in a docs but with only page)
	- Create a parent folder. 
		- Eg: docs
	- Create child file as "[...file_name].js"
		- Eg: "[...params].js"
	- Now, goto "parent/file_name1/file_name2/file_name3/...", the "[...file_name].js" file will render
		- Eg: goto "docs/feature1/concept1"
	- File names after parent name will be taken as parameter in "[...file_name].js" file. Use that to render conditionally.
		- Eg: going to "docs/feature1/concept1" will be taken as ["feature1", "concept1"] 
	- Directly going to "parent" needs "index.js" file, but it can be eliminated by extra bracket as "[[...file_name]].js"
		- Eg: going to "docs"
	- NOTE: In catch all routing, route names after parent will be taken as array of strings.
		- Eg: Going to "docs/feature1/concept1" makes params = ["feature1", "concept1"]

- For routing by using "Link", see the code

- For routing programmatically, use "router.push("/file_name")" or "router.replace("file_name")"

- For making custom 404 error page, put 404.js file and "NextJS" will use that