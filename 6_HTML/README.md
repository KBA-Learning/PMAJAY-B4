**HTML **

**Center align `<center>`**

HTML `<center>` tag in HTML is used to set the alignment of text into the center. This tag is not supported in HTML5. CSS’s property is used to set the alignment of the element instead of the center tag in HTML5.

Syntax: `<center> Contents... </center>`

**Line Break`<br>`**

The `<br>` tag inserts a single line break. The `<br>` tag is an empty tag which means that it has no end tag.

Syntax: `<br> `

**Bold`<b>`**

The `<b>` tag in HTML is for making text bold without adding extra importance.  Another one named, `<strong>` tag is used to provide semantic meaning to the content, indicating its importance to both browsers and developers.

Syntax:
`<b> Contents... </b>`

`<strong> Contents... </strong>`

**Italics `<i>`**

The `<i>` tag in HTML is used to display the content in italic style.

Syntax: `<i> Contents... </i>`

**Underline `<u>`**

The HTML `<u>`tag stands for underline which helps to underline the text enclosed within the `<u>` tag. 

**Non-breaking space `&nbsp;`**

`&nbsp;` is used to insert space.

**HTML Entities**

Reserved characters in HTML must be replaced with entities:

`<` (less than) = `&lt;`

`>` (greather than) = `&gt;`

**Horizontal Line `<hr>`**

 To insert a horizontal rule or a thematic break in an HTML page
 
`<hr>`

**Image `<img>`**

HTML `<img>` tag is used to display image on the web page.

`<img src="" alt="" width="" height="">`


**Attributes**

Attributes usually use the following syntax: 

`<tag attribute="value of attribute">content</tag>`

Some of the most commonly used attributes are: align, bgcolor, src, height, width, value, href, hspace, id, class, style, title, dir, lang etc.

**align:** Three possible values of align attribute: left, center and right.
**bgcolor:** Places a background color behind an element. Options can be hexadecimal, RGB values - https://www.computerhope.com/htmcolor.htm

`<body bgcolor="#ADD8E6">`

**background:** Places a background image behind an element. Value will be the url of image

  `<body bgcolor="#ADD8E6" background="https://kba.ai/wp-content/uploads/2023/04/Aipt-slide_IMG.png">`

**Comment `<!--...-->`**

Comments are some text or code written in your code to give an explanation about the code, and not visible to the user. You can add comments in your HTML file using `<!-- ... -->` tag. 

**Anchor `<a>`**

The `<a>` tag defines a hyperlink, which is used to link from one page to another. By default, links will appear as follows in all browsers:

An unvisited link is underlined and blue
A visited link is underlined and purple
An active link is underlined and red

`<a href="https://kba.ai">KBA Website</a> `

**Preserve Formatting `<pre>`**

`<pre>` tag can be used to preserve formatting. It maintains both space and line break.

**Table**

The HTML tables are created using the `<table>` tag in which the `<tr>` tag is used to create
table rows and `<td>` tag is used to create data cells. 

```
<table>
<tr>
<td>Row 1, Column 1</td>
<td>Row 1, Column 2</td>
</tr>
<tr>
<td>Row 2, Column 1</td>
<td>Row 2, Column 2</td>
</tr>
</table>
```

To display a table with borders, you will use the `border` attribute.

`<table border="1"> `

**Headings** in a table are defined with the `<th>` tag.

```
<tr>
<th>Heading1</th>
<th>Heading2</th>
</tr>
```

**Cellspacing** is the pixel width between the individual data cells in the table (The thickness of the lines making the table grid). The default is zero. If the border is set at 0, the cellspacing lines will be invisible. 

`<table border="1" cellspacing="5"> `

**Cellpadding** is the pixel space between the cell contents and the cell border. The default for this property is also zero. 

`<table border="1" cellspacing="5" cellpadding="10"> `

The **width** attribute can be used to define the width of your table. It can be defined as a fixed width or a relative width. A fixed table width is one where the width of the table is specified in pixels. For example, this code, `<table width="550">`, will produce a table that is 550 pixels wide. A relative table width is specified as a percentage of the width of the visitor's viewing window. Hence this code, `<table width="80%">`, will produce a table that occupies 80 percent of the screen. 

`<table border="1" cellspacing="5" cellpadding="10" width="50%">` 

You will use **colspan** attribute if you want to merge two or more columns into a single column. Similar way you will use **rowspan** if you want to merge two or more rows.

```
<table border="1">
<tr>
<th>Column 1</th>
<th>Column 2</th>
<th>Column 3</th>
</tr>
<tr><td rowspan="2">Row 1 Cell 1</td><td>Row 1 Cell 2</td><td>Row 1 Cell
3</td></tr>
<tr><td>Row 2 Cell 2</td><td>Row 2 Cell 3</td></tr>
<tr><td colspan="3">Row 3 Cell 1</td></tr>
</table>
```


**References**

https://www.javatpoint.com/html-tutorial

https://www.geeksforgeeks.org/html-tutorial

https://www.w3schools.com/html/default.asp












