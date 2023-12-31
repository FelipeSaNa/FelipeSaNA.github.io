I have worked and done multiple research projects in universities, think tanks, NGOs, and international organizations, all of which had a vital component in data collection, processing, and analysis. Some of the projects I have implemented and achievements are briefly mentioned below:

## Data Analysis projects as part of the International Organization on Migration (IOM) 

As part of my work at the International Organization on Migration (Mexico), I have been in charge of the collection, cleaning, and data analysis of the statistical information on the cases arriving at the Protection Unit in the 7 IOM offices where the unit has a presence (Tapachula, Mexico City, Monterrey, Ciudad Juarez, Tenosique, Mexicali, Tijuana). The information is cleaned, merged, and analyzed monthly using the R programming language to ensure its quality and accessibility.

To ensure the information flow and its usability for decision-making within IOM, I designed two data visualization tools: 1) Interactive dashboards and 2) Automated reports.

### Data visualization dashboard

I generated two interactive dashboards in Power-BI based on case analysis and statistical information visualization of the information collected by the protection unit. The information was previously prepared with the R programming language and later exported to the dashboard.

![Alt Text](/docs/assets/images/dashboard_1.png)
![Alt Text](/docs/assets/images/dashboard_2.png)


### Automated reporting 

Using RMardown, I automated the statistical reporting of the Protection Unit, generating reports for the following thematics: crime victims, gender-based violence victims, right to legal identity, internal displacement, access to health services and fulfillment of basic needs, for the seven field offices of the Protection Unit.

The template was made using Inkscape and the IOM-Branding guidelines to ensure the reporting is in accordance with the organizational design standards.

![Alt Text](/docs/assets/images/Portada_reporte_delitos.PNG)

![Alt Text](/docs/assets/images/indice_reporte_delitos.PNG)

![Alt Text](/docs/assets/images/ejemplo_delitos_informe.png)


### Report on displacement

I co-designed, co-coordinated, and co-implemented a research project regarding the internally displaced persons, returnees, and migrants arriving at 12 points of interest in the northern Mexican border. For the project, a sample of 638 migrants (including information on their 1142 family members) was collected using KOBO toolbox. The data was cleaned and analyzed with the R programming language for a report (published in July 2023 by IOM).

![Alt Text](/docs/assets/images/Portada_informe_desplazamiento.PNG)

![Alt Text](/docs/assets/images/Ejemplo_1_desplazamiento.PNG)

![Alt Text](/docs/assets/images/Ejemplo_2_desplazamiento.PNG)


<a href="https://publications.iom.int/books/desplazamiento-interno-migracion-y-retorno-en-la-frontera-norte-de-mexico-una-perspectiva">The IOM report is available here</a>



## Data Analysis projects as part of the Office of the United Nations High Commissioner for Human Rights (OHCHR) 

I designed, supervised, and implemented a research project to analyze the racial profiling conducts of the Mexican Government in airports against asylum seekers and migrants. Obtained five governmental databases (from 2017 to 2021) of in-airport deportations. 

The databases were cleaned, merged, and analyzed through the R programming language. Conducted 60 semi-structured interviews with key stakeholders (NGOs, International Organizations, Embassies, and Immigrants). Interviews were later compiled, classified in a database, and analyzed with Natural Language Processing tools in R programming language, and analyzed in a confidential report given to the Mexican government (the following graphs were created with public information).

![Alt Text](/docs/assets/images/grafica_nacionalidades_no_visa.png)

![Airport rejections in Mexico](/docs/assets/images/gif_aeropuertos_200.gif)

## Data Analysis projects as part of México Unido Contra la Delincuencia 

### Homicides report

Obtained, cleaned, merged, and analyzed historical databases of crimes committed in Mexico from 1990 to 2021, with 1,954,282 observations. The data were georeferenced at the municipality or locality level. The databases were updated monthly, and the analysis results were published in a monthly bulletin and an annual research report named Atlas de Homicidios. 

![Alt Text](/docs/assets/images/Mapa_republica_homicidios.PNG)

![Alt Text](/docs/assets/images/Estadisticas_republica_general.PNG)

![Alt Text](/docs/assets/images/CDMX_homicidios.PNG)

![Alt Text](/docs/assets/images/Celaya_general.PNG)

<a href="https://www.mucd.org.mx/atlas-de-homicidios-mexico/">The MUCD homicides report is available here</a>

### Drug confiscations database and dashboard

Obtained, cleaned, and analyzed a governmental database of 918,468 observations of the actions implemented by the Mexican Government regarding drug confiscations between 1990 and 2021. The data was cleaned and analyzed using the R programming language, and later published in an interactive dashboard.


![Alt Text](/docs/assets/images/Postal_antidrogas.PNG)

![Alt Text](/docs/assets/images/Ejemplo_antidrogas_1.PNG)

![Alt Text](/docs/assets/images/Ejemplo_antidrogas_2.PNG)

<a href="https://datosabiertosdrogas.mucd.org.mx/">The MUCD drug confiscations dashboard is available here</a>


## Data Analysis projects as part of Elementa DDHH

Created an interactive network of more than 150 relevant actors and their relationships in 8 grave human rights violations cases and the Mexico-United States drug policy. The information was cleanded and analyzed with the R programming language (tidyverse, visNetwork, and igraph packages).


## Data Analysis projects as part of the Human Rights Center of Universidad Iberoamericana

As part of the Human Rights Center I supervised, managed, and implemented collaborative projects on various matters such as asylum policy, forced migration, enforced disappearances, clandestine graves, prison system reform, and use of force by police agents, among other human rights issues through Data-driven methodologies. Mainly in two relevant projects.

### International Protection Observatory

To fullfill the information gap regaring the Refugee Status Determinations emmitted by the Mexican Government, we created an International Protection Observatory to monitor and evaluate the implementation of the asylum policy.

To fullfil those goals, I obtained through litigation 6,331 refugee status determinations issued by the Mexican Government between 2011 to 2017. A representative sample of the determinations was analyzed through a database of 60 variables. In addition, ten thematic research reports were published to analyze the information in the database.



![Alt Text](/docs/assets/images/Portada_genero.PNG)

![Alt Text](/docs/assets/images/ejemplo_genero_1.PNG)

![Alt Text](/docs/assets/images/Ejemplo_genero_2.PNG)

<a href="https://asiloenmexico.ibero.mx/">The webpage of the International Protection Observatory is available here</a>


### Dissappearences and clandestine graves findings

As part of the researchers team, I participated in a project that aimed to quantify and map the clandestine graves phenomenon in Mexico as a consequence of the war against drugs. As a result of the project we quantified 390 clandesitne graves with 1,418 bodies and 5,786 human remains of dissappeared persons. 

![Alt Text](/docs/assets/images/violencia_y_terror_portada.PNG)

![Alt Text](/docs/assets/images/ejemplo_fosas_1.PNG)

![Alt Text](/docs/assets/images/ejemplo_fosas_2.PNG)


## Independent research projects

### Text mining of morning conferences "Mañaneras" of president Andrés Manuel López Obrador (AMLO)

To analyze the evolution of the migration narrative by the Mexican president, I analyze periodically the raw data of the daily morning conferencesthrough data mining and text analysis tools (tidytext, quanteda). The data is scraped (rvest) monthly from the official conferences web page. This project is currently in development.



### Deployment of the national guard (Guardia Nacional) and its relationship with migrant detentions

This project analyzes official information on the deployment of the National Guard and immigration detentions at the state level, with the objective of identifying the existence of coincidences or discrepancies between both practices (the following graphs were created with public information).

![Airport rejections in Mexico](/docs/assets/images/gif_detenciones_200.gif)

![Airport rejections in Mexico](/docs/assets/images/detenciones_despliegue_gif_200.gif)

<a href="https://seguridad.nexos.com.mx/guardia-nacional-y-detencion-de-personas-migrantes/">A short analysis is available here</a>

### Airbnb impact analysis

To measure the impact that airbnb has had in the Mexico City housing and renting, I compiled the information of airbnbs within the city, along with their median cost, and their geographical location. This project is currently in development.

<iframe src="/docs/assets/images/mapa.html" height="1000px" width="100%" style="border:none;"></iframe>

## Publications

As part of my work I have also created projects which purpose is to advance the academic literature of migration/refugees policies implementation through data analysis. As part of this effort I have written papers and book chapters outlining different aspects of policy implementation. 


For example, I co-authored a paper that used 565 refugee status determinations to analyze the systematic discriminatory implementation of the Cartagena Declaration within the mexican asylum system.

<a href="https://onlinelibrary.wiley.com/doi/abs/10.1111/imig.12910">The Cartagena Declaration analysis paper published in the journal International Migration is available here</a>

Another example is a book chapter where I analyzed the evoluiton of legislative and administrative migrant policies in Mexico, since the entry of force of the Migration Law. 

<a href="https://www.mqup.ca/voluntary-and-forced-migration-in-latin-america-products-9780228011842.php?page_id=46&#!prettyPhoto">The book published by Mc Gll is available here</a>


## For fun projects

### Platforming game

Created a simple platforming game in Javascript with a character drawn by my wife. The purpose was testing my basic Javscript programming skills. You can play it below!

<iframe src="/docs/assets/images/game/index.html" height="600px" width="100%" style="border:none;"></iframe>





![Thank you for visiting my portfolio!](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

Thank you for visiting my portfolio!