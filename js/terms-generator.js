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
    var wnOrgTerms = new Hashtable();
    var wnpersonsTerms = new Hashtable();
    var wnmiscTerms = new Hashtable();
    var wnlocationTerms = new Hashtable();

    var lines = 0;
    this.start = function (callback) {
        d3.tsv("data/wikinews.tsv", function (data) {


            data.forEach(function (d) {
                var persons = d.person;
                var time = d.time;
                var month = d.time.substring(0, 4) + " " + d.time.substring(5, 7);
               // ++lines;
                var personsArray = persons.split("|");
                personsArray.forEach(function (d) {

                    if (d != "") {
                        //allTerms consideration.
                        if (allTerms.containsKey(d) == true) {
                            var temp = allTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            if (temp.monthfreq.containsKey(month)) {
                                var val = temp.monthfreq.get(month);
                                temp.monthfreq.put(month, val + 1);
                            }
                            else {
                                temp.monthfreq.put(month, 1);
                            }
                         //   temp.blogs.push(lines);
                            allTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            value.monthfreq = new Hashtable();
                            value.monthfreq.put(month, 1);
                          //  value.blogs = [];
                           // value.blogs.push(lines);
                            // value.category="person"
                            allTerms.put(d, value);
                        }


                    }

                })

                //Organization Terms
                var orgs = d.organization;
                var orgsArray = orgs.split("|");
                orgsArray.forEach(function (d) {

                    if (d != "") {
                        //allTerms consideration.
                        if (allTerms.containsKey(d) == true) {
                            var temp = allTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            if (temp.monthfreq.containsKey(month)) {
                                var val = temp.monthfreq.get(month);
                                temp.monthfreq.put(month, val + 1);
                            }
                            else {
                                temp.monthfreq.put(month, 1);
                            }
                            //   temp.blogs.push(lines);
                            allTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            value.monthfreq = new Hashtable();
                            value.monthfreq.put(month, 1);
                            //  value.blogs = [];
                            // value.blogs.push(lines);
                            // value.category="person"
                            allTerms.put(d, value);
                        }


                    }
                })

                //Misc Terms
                var misc = d.miscellaneous;
                var miscArray = misc.split("|");
                miscArray.forEach(function (d) {

                    if (d != "") {
                        //allTerms consideration.
                        if (allTerms.containsKey(d) == true) {
                            var temp = allTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            if (temp.monthfreq.containsKey(month)) {
                                var val = temp.monthfreq.get(month);
                                temp.monthfreq.put(month, val + 1);
                            }
                            else {
                                temp.monthfreq.put(month, 1);
                            }
                            //   temp.blogs.push(lines);
                            allTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            value.monthfreq = new Hashtable();
                            value.monthfreq.put(month, 1);
                            //  value.blogs = [];
                            // value.blogs.push(lines);
                            // value.category="person"
                            allTerms.put(d, value);
                        }


                    }
                })

                //Location Terms
                var location = d.location;
                var locationArray = location.split("|");
                locationArray.forEach(function (d) {

                    if (d != "") {
                        //allTerms consideration.
                        if (allTerms.containsKey(d) == true) {
                            var temp = allTerms.get(d);
                            temp.frequency = temp.frequency + 1;
                            if (temp.monthfreq.containsKey(month)) {
                                var val = temp.monthfreq.get(month);
                                temp.monthfreq.put(month, val + 1);
                            }
                            else {
                                temp.monthfreq.put(month, 1);
                            }
                            //   temp.blogs.push(lines);
                            allTerms.put(d, temp);
                        }
                        else {
                            var value = {};
                            value.frequency = 1;
                            value.monthfreq = new Hashtable();
                            value.monthfreq.put(month, 1);
                            //  value.blogs = [];
                            // value.blogs.push(lines);
                            // value.category="person"
                            allTerms.put(d, value);
                        }


                    }
                })

            });


            // huffingpost
            d3.tsv("data/huffington.tsv", function (data) {
                data.forEach(function (d) {
                    var persons = d.person;
                    ++lines;
                    var personsArray = persons.split("|");
                    personsArray.forEach(function (d) {

                        if (d != "") {
                            //allTerms consideration.
                            if (allTerms.containsKey(d) == true) {
                                var temp = allTerms.get(d);
                                temp.frequency = temp.frequency + 1;
                                if (temp.monthfreq.containsKey(month)) {
                                    var val = temp.monthfreq.get(month);
                                    temp.monthfreq.put(month, val + 1);
                                }
                                else {
                                    temp.monthfreq.put(month, 1);
                                }
                                //   temp.blogs.push(lines);
                                allTerms.put(d, temp);
                            }
                            else {
                                var value = {};
                                value.frequency = 1;
                                value.monthfreq = new Hashtable();
                                value.monthfreq.put(month, 1);
                                //  value.blogs = [];
                                // value.blogs.push(lines);
                                // value.category="person"
                                allTerms.put(d, value);
                            }


                        }
                    })

                    //Organization Terms
                    var orgs = d.organization;
                    var orgsArray = orgs.split("|");
                    orgsArray.forEach(function (d) {
                        if (d != "") {
                            //allTerms consideration.
                            if (allTerms.containsKey(d) == true) {
                                var temp = allTerms.get(d);
                                temp.frequency = temp.frequency + 1;
                                if (temp.monthfreq.containsKey(month)) {
                                    var val = temp.monthfreq.get(month);
                                    temp.monthfreq.put(month, val + 1);
                                }
                                else {
                                    temp.monthfreq.put(month, 1);
                                }
                                //   temp.blogs.push(lines);
                                allTerms.put(d, temp);
                            }
                            else {
                                var value = {};
                                value.frequency = 1;
                                value.monthfreq = new Hashtable();
                                value.monthfreq.put(month, 1);
                                //  value.blogs = [];
                                // value.blogs.push(lines);
                                // value.category="person"
                                allTerms.put(d, value);
                            }


                        }
                    })

                    //Misc Terms
                    var misc = d.miscellaneous;
                    var miscArray = misc.split("|");
                    miscArray.forEach(function (d) {
                        if (d != "") {
                            //allTerms consideration.
                            if (allTerms.containsKey(d) == true) {
                                var temp = allTerms.get(d);
                                temp.frequency = temp.frequency + 1;
                                if (temp.monthfreq.containsKey(month)) {
                                    var val = temp.monthfreq.get(month);
                                    temp.monthfreq.put(month, val + 1);
                                }
                                else {
                                    temp.monthfreq.put(month, 1);
                                }
                                //   temp.blogs.push(lines);
                                allTerms.put(d, temp);
                            }
                            else {
                                var value = {};
                                value.frequency = 1;
                                value.monthfreq = new Hashtable();
                                value.monthfreq.put(month, 1);
                                //  value.blogs = [];
                                // value.blogs.push(lines);
                                // value.category="person"
                                allTerms.put(d, value);
                            }


                        }
                    })

                    //Location Terms
                    var location = d.location;
                    var locationArray = location.split("|");
                    locationArray.forEach(function (d) {
                        if (d != "") {
                            //allTerms consideration.
                            if (allTerms.containsKey(d) == true) {
                                var temp = allTerms.get(d);
                                temp.frequency = temp.frequency + 1;
                                if (temp.monthfreq.containsKey(month)) {
                                    var val = temp.monthfreq.get(month);
                                    temp.monthfreq.put(month, val + 1);
                                }
                                else {
                                    temp.monthfreq.put(month, 1);
                                }
                                //   temp.blogs.push(lines);
                                allTerms.put(d, temp);
                            }
                            else {
                                var value = {};
                                value.frequency = 1;
                                value.monthfreq = new Hashtable();
                                value.monthfreq.put(month, 1);
                                //  value.blogs = [];
                                // value.blogs.push(lines);
                                // value.category="person"
                                allTerms.put(d, value);
                            }


                        }
                    })

                });

            });

            var allTermsEntries = allTerms.entries();
            var allTermsJson = [];
            allTermsEntries.forEach(function (d) {
                var jsonEntry = {}
                jsonEntry.term = d[0];
                jsonEntry.properties = {};
                jsonEntry.properties.frequency = d[1].frequency;
                jsonEntry.properties.monthfreq = [];
                var month = d[1].monthfreq.entries();
                month.forEach(function (r) {
                    jsonEntry.properties.monthfreq.push({ month: r[0], freq: r[1] })
                })
                allTermsJson.push(jsonEntry);
                    
            })
            var finalJson = JSON.stringify(allTermsJson);


           // var downloadData = 'data:text/json;charset=utf-8,' + finalJson;
          ////  var url = URL.createObjectURL(new Blob([finalJson], { type: 'text/plain' }));
          //  var data = encodeURI(downloadData);

          //  link = document.createElement('a');
          //  link.setAttribute('href', data);
          //  link.setAttribute('download', filename);
          //  link.click();
            //

            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allTermsJson));
            var url = URL.createObjectURL(new Blob([finalJson], { type: 'text/json' }));
            var dlAnchorElem = document.createElement('a');
            dlAnchorElem.setAttribute("href", url);
            dlAnchorElem.setAttribute("download", "termsfrequency.json");
            dlAnchorElem.click();
            callback();

        });


    }

    this.getRelated = function (term) {
        //
        //var termDetails = allTerms.get(term);
        //var related = [];
        //var blogs = termDetails.blogs;
        //allTerms.each(function (key, value) {
        //    if (term != key) {
        //        var count = 0;
        //        var currblogs = value.blogs;
        //        for (var i = 0; i < blogs.length; i++) {
        //            if (currblogs.indexOf(blogs[i]) > -1) {
        //                ++count;
        //            }
        //        }
        //        if (count > 0) {
        //            var term = {};
        //            term.term = key;
        //            term.freq = count;
        //            related.push(term);
        //        }
        //    }
        //})
        //related.sort(function (a, b) {
        //    return b.freq - a.freq;
        //})
        //return related.slice(0, 49);

    }
    this.getMonthFreq = function (term) {
        //
        var termDetails = allTerms.get(term);
        var result = [];
        var Months=termDetails.monthfreq;
        Months.each(function (key, value) {
            result.push({ "month": key, "freq": value })
        });
        return result;
        //allTerms.each(function (key, value) {
        //    if (term != key) {
        //        var count = 0;
        //        var currblogs = value.blogs;
        //        for (var i = 0; i < blogs.length; i++) {
        //            if (currblogs.indexOf(blogs[i]) > -1) {
        //                ++count;
        //            }
        //        }
        //        if (count > 0) {
        //            var term = {};
        //            term.term = key;
        //            term.freq = count;
        //            related.push(term);
        //        }
        //    }
        //})
        //related.sort(function (a, b) {
        //    return b.freq - a.freq;
        //})
        //return related.slice(0, 49);

    }
    this.getPersonTerms = function () {
        return personsTerms.entries();
    }
    this.getOrganizationTerms = function () {
        return orgTerms.entries();
    }
    this.getMiscTerms = function () {
        return miscTerms.entries();
    }
    this.getLocationTerms = function () {
        return locationTerms.entries();
    }
    this.getTerm = function (iterm) {
        return allTerms.get('gop');
    }
    return this;
}