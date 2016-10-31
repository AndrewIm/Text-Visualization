/**
 * Created by Manohar on 25-Oct-16.
 */
function preProcessData() {
    var topTerms = new Hashtable();
    var allTerms = new Hashtable();
    var orgTerms = new Hashtable();
    var personsTerms = new Hashtable();
    var miscTerms = new Hashtable();
    var locationTerms = new Hashtable();
    var wnallTerms = new Hashtable();
    var wnOrgTerms = new Hashtable();
    var wnpersonsTerms = new Hashtable();
    var wnmiscTerms = new Hashtable();
    var wnlocationTerms = new Hashtable();


    this.start = function (callback) {
        d3.tsv("data/wikinews.tsv", function (data) {


            data.forEach(function (d) {
                var sameBlogTerms = [];

                //Persons Terms
                var persons = d.person;
                var personsArray = persons.split("|");
                personsArray.forEach(function (d) {
                    if (d != "") {
                        sameBlogTerms.push(d);
                        //allTerms consideration.
                        if (allTerms.containsKey(d) == true) {
                            var temp = allTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            allTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            value.relatedTerms = new Hashtable();
                            // value.category="person"
                            allTerms.put(d, value);
                        }

                        //allwnTerms consideration.
                        if (wnallTerms.containsKey(d) == true) {
                            var temp = wnallTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            wnallTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;

                            wnallTerms.put(d, value);
                        }

                        //Persons array
                        if (personsTerms.containsKey(d) == true) {
                            var temp = personsTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            personsTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            // value.category="person"
                            personsTerms.put(d, value);
                        }

                        //wikinews Persons array
                        if (wnpersonsTerms.containsKey(d) == true) {
                            var temp = wnpersonsTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            wnpersonsTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            // value.category="person"
                            wnpersonsTerms.put(d, value);
                        }

                    }

                })

                //Location Terms
                var location = d.location;
                var locationArray = location.split("|");
                locationArray.forEach(function (d) {
                    if (d != "") {
                        sameBlogTerms.push(d);
                        //all Combined terms
                        if (allTerms.containsKey(d) == true) {
                            var temp = allTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            allTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            value.relatedTerms = new Hashtable();

                            //value.category="organization"
                            allTerms.put(d, value);
                        }
                        //wiki Terms
                        if (wnallTerms.containsKey(d) == true) {
                            var temp = wnallTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            wnallTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            //value.category="organization"
                            wnallTerms.put(d, value);
                        }
                        //
                        // combined data location terms
                        if (locationTerms.containsKey(d) == true) {
                            var temp = locationTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            locationTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            locationTerms.put(d, value);
                        }
                        //wiki location Terms
                        if (wnlocationTerms.containsKey(d) == true) {
                            var temp = wnlocationTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            wnlocationTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            wnlocationTerms.put(d, value);
                        }
                    }
                })

                //Organization Terms
                var orgs = d.organization;
                var orgsArray = orgs.split("|");
                orgsArray.forEach(function (d) {
                    if (d != "") {
                        sameBlogTerms.push(d);
                        //allterms
                        if (allTerms.containsKey(d) == true) {
                            var temp = allTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            allTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            value.relatedTerms = new Hashtable();

                            //value.category="organization"
                            allTerms.put(d, value);
                        }
                        //wiki Terms
                        if (wnallTerms.containsKey(d) == true) {
                            var temp = wnallTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            wnallTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            //value.category="organization"
                            wnallTerms.put(d, value);
                        }

                        //combined organization Terms
                        if (orgTerms.containsKey(d) == true) {
                            var temp = orgTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            orgTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            //value.category="organization"
                            orgTerms.put(d, value);
                        }
                        //wikinews organisation array
                        if (wnOrgTerms.containsKey(d) == true) {
                            var temp = wnOrgTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            wnOrgTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            //value.category="organization"
                            wnOrgTerms.put(d, value);
                        }
                    }
                })

                //Misc Terms
                var misc = d.miscellaneous;
                var miscArray = misc.split("|");
                miscArray.forEach(function (d) {
                    if (d != "") {
                        sameBlogTerms.push(d);
                        //allterms
                        if (allTerms.containsKey(d) == true) {
                            var temp = allTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            allTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            value.relatedTerms = new Hashtable();
                            //value.category="organization"
                            allTerms.put(d, value);
                        }

                        //wiki Terms
                        if (wnallTerms.containsKey(d) == true) {
                            var temp = wnallTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            wnallTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            //value.category="organization"
                            wnallTerms.put(d, value);
                        }


                        //Misc Terms
                        if (miscTerms.containsKey(d) == true) {
                            var temp = miscTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            miscTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            miscTerms.put(d, value);
                        }
                        //wiki news Misc Terms
                        if (wnmiscTerms.containsKey(d) == true) {
                            var temp = wnmiscTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            wnmiscTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            wnmiscTerms.put(d, value);
                        }
                    }
                })

               /* for (var i = 0; i < sameBlogTerms.length; i++) {
                    for (var j = 0; j < sameBlogTerms.length; j++) {
                        if (i == j)
                            continue
                        var relatedTemp = allTerms.get(sameBlogTerms[i]).relatedTerms;
                        if (relatedTemp.containsKey(sameBlogTerms[j])) {
                            var val = relatedTemp.get(sameBlogTerms[j]);
                            val.relFrequency = val.relFrequency + 1;
                            allTerms.get(sameBlogTerms[i]).relatedTerms.put(sameBlogTerms[j], val);
                        }
                        else {
                            var value = {};
                            value.relFrequency = 1;
                            allTerms.get(sameBlogTerms[i]).relatedTerms.put(sameBlogTerms[j], value);

                        }
                    }
                }*/
            })

            var allTermsEntries=allTerms.entries();
            var allTermsJson=[];
            allTermsEntries.forEach(function (d) {
                var jsonEntry={}
                jsonEntry.term=d[0];
                jsonEntry.properties={};
                jsonEntry.properties.frequency=d[1].frequency;
                jsonEntry.properties.relatedTerms=[];
                var related=d[1].relatedTerms.entries();
                related.forEach(function (r) {
                    jsonEntry.properties.relatedTerms.push({term:r[0],relfrequency:r[1].relFrequency})
                })
                allTermsJson.push(jsonEntry);

            })
            var finalJson=JSON.stringify(allTermsJson);
           // var file = '/data.json'


    //            jsonfile.writeFile(file, finalJson, function (err) {
      //          console.error(err)
        //    })
console.log(finalJson);
            var filename =  'export.json';


            var downloadData = 'data:text/csv;charset=utf-8,' + finalJson;

            var data = encodeURI(downloadData);

            link = document.createElement('a');
            link.setAttribute('href', data);
            link.setAttribute('download', filename);
            link.click();

        })

    }
    return this;
}
