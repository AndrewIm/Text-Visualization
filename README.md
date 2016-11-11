# Text-Visualization

Project to extract and visualize the texts from two blogs, The Wikinews data (roughly 3.3M) contains 11,267 articles and the Huffington Post data (roughly 29.4M) contains 75,293 political blogs.

#### Click the image below to watch a short video demo.
[![ScreenShot](/screenshots/thumbnail.PNG)](https://youtu.be/mo1HT_NMcc8)

The web application can be found at https://manorepo.github.io/Text-Visualization/.

Functionality description here.

### Data Processing

The application uses two datasets, one is from wiki news and other is from Huffington post. On intial page load the wiki news data will be loaded and Huffington data will be loaded on initial selection of Huffinton source button in the options pane.

It converts the rawdata into the format of key value pairs where key is the term and values contains the properties of category, total frequency and monthly wise object.

![Alt text](https://github.com/manorepo/Text-Visualization/blob/master/screenshots/data format.png)

Each monthly wise object contains the blog numbers in which the term occured and monthly frequency

![Alt text](https://github.com/manorepo/Text-Visualization/blob/master/screenshots/data_monthly_format.png)

The appication is using the saved blog numbers for calulating the frequency of related words.
Instead of going through all blogs, it will search for the respective blogs and counts the frequency.


### Interesting Findings

#### Correlation between news on Iraq and the US-Iraq Status of Forces Agreement

From the visualization, it is noticeable that Huffington Post news related to Iraq drops significantly from late 2008 to early 2009.  This drop occurs around the time the US-Iraq Status of Forces Agreement was signed.  It is likely that the effects of this agreement (the withdrawal of US troops in Iraq) led to less news reporting on Iraq.

![Alt text](/screenshots/iraq.PNG?raw=true "Iraq")

#### Comparison of 2008 and 2012 presidential election seasons

It is apparent from the visualization that news coverage of the top 50 terms is at a maximum during the 2008 and 2012 election seasons.

![Alt text](/screenshots/election-years.PNG?raw=true "Election years")

The visualization also shows that the term frequency of elected presidential candidates is substantially higher than the frequency of the other candidate during the months following the election.

![Alt text](/screenshots/post-election.PNG?raw=true "Post-2008 election")
![Alt text](/screenshots/post-election-2012.PNG?raw=true "Post-2012 election")

#### Team Responsibilities
Manohar Kotapati(manorepo) - Data Processing  
James Taber(jmtaber129) - Timeline  
Sunandha Perumalla(sunandha21) - Word Cloud and Chord Diagram
