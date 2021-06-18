$('.displayRecords').hide();
        $('#noRecordsToDisplayMsg').hide();

        var viewstudentModel = function () {

                var self=this;
                var validateFirstName = ko.validatedObservable(self.FirstName);
                self.FirstName = ko.observable('').extend({
                    minLength:3,
                    maxLength:15,
                    required: true,
                    pattern: {
                        message: 'Firstname can only accept alphabets. Please enter a valid first name.',
                        params: '^([A-Za-z])+$'
                    }
                });

                self.LastName = ko.observable('').extend({ 
                required: true,
                    pattern: {
                        message: 'LastName can only accept alphabets. Please enter a valid last name.',
                        params: '^([A-Za-z])+$'
                    }
                });

                self.selectedDate = ko.observable(),
                self.selectedMonth = ko.observable(),
                self.selectedYear = ko.observable(),
                
                self.email = ko.observable('').extend({ // custom message
                    required: {
                        message: 'Email address cannot be blank. Please enter a valid email address..'
                    }, 
                    email:true,
                });

                self.Address = ko.observable('').extend({ required:true}),
                self.City = ko.observable('').extend({ required:true}),
                
                self.Zipcode = ko.observable('').extend({ 
                required: true,
                    maxLength:5,
                    pattern: {
                        message: 'ZipCode can only accept numbers. Please enter a valid zipcode.',
                        params: '^([0-9])+$'
                    },ZipCode:true,
                });

                self.selectedState=ko.observable(''),
                self.selectedCountry=ko.observableArray(''),
                self.agreeToTermsAndCondFlag = ko.observable(false),
                self.radioSelectedOptionValue = ko.observable('Male'),
                self.radioSelectedCourse = ko.observable('');
                self.hasHobbies = ko.observable(''),
                self.validationSummary = ko.observable("Complete missing fields below:");
                
                self.availableDates = ko.observableArray
                    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]),
                
                self.availableMonths = ko.observableArray
                    (["January","February","March","April","May","June","July","August","September","October","November","December"]),
                
                self.availableYears = ko.observableArray
                    ([1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]),

                self.availableStates = ko.observableArray
                    (["Delhi","UP","Punjab","MP","Gujrat","Orissa"]),
                
                self.availableCountry = ko.observableArray
                    (["India","US","UK","Europe","Japan"]),
                
                self.hasHobbies = ko.observableArray
                    (["others"]),

                self.engScoreClassX = ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },engScoreClassX:true,
                    });

                self.hindiScoreClassX =  ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },hindiScoreClassX:true,
                    });
                self.mathsScoreClassX =  ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },mathsScoreClassX:true,
                    });
                self.scienceScoreClassX =  ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },scienceScoreClassX:true,
                    });
                self.socialScoreClassX =  ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },socialScoreClassX:true,
                    });
                self.engScoreClassXII = ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },engScoreClassXII:true,
                    });
                self.hindiScoreClassXII =  ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },hindiScoreClassXII:true,
                    });
                self.mathsScoreClassXII =  ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },mathsScoreClassXII:true,
                    });
                self.scienceScoreClassXII =  ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },scienceScoreClassXII:true,
                    });
                self.socialScoreClassXII =  ko.observable().extend({ 
                    required: true,
                        maxLength:2,
                        pattern: {
                            message: 'This field can only accept numbers. Please enter valid marks.',
                            params: '^([0-9])+$'
                        },socialScoreClassXII:true,
                    });
                
                self.editStudent = ko.observable(),

                self.students = ko.observableArray([]) // This will store all the data
                
            // saveAndResetStudentData() is Submit function
            self.saveAndResetStudentData = function () {

                var errors = ko.validation.group(self.students);
                $('#noRecordsToDisplayMsg').hide();
                $('.displayRecords').show();
                var studentArray=[];
                var json1=
                        {
                        "firstname":self.FirstName(),
                        "lastname":self.LastName(),
                        "dob":self.selectedDate(),
                        "email":self.email(),
                        "gender":self.radioSelectedOptionValue(),
                        "address":self.Address(),
                        "city":self.City(),
                        "zipcode":self.Zipcode(),
                        "state":self.selectedState(),
                        "country":self.selectedCountry(),
                        "hobbies":self.hasHobbies = ko.observable(''),
                        "courseApplied":self.radioSelectedCourse(),                                                                                             
                        "agreeTerms":self.agreeToTermsAndCondFlag()                                                                                             
                        }

                    if (errors.length === 0) {
                        console.log('no errors on page');
                    }
                    else {
                        
                        self.errors.showAllMessages();
                    }

                //Storing Data in Local Storage
                studentArray.push(json1);
                localStorage.setItem("students",JSON.stringify(studentArray));
                var studenLocalData = JSON.parse(localStorage.getItem("students"));
                self.students.push('');
            }

            self.deleteStudentRecord = function(){
                
                self.students.removeAll();
                self.FirstName("");
                self.LastName(""), 
                self.selectedDate (""),
                self.selectedMonth (""),
                self.selectedYear (""),
                self.email(""),
                self.Address(""),
                self.City(""),
                self.Zipcode(""),
                self.selectedState(""),
                self.selectedCountry(""),
                self.radioSelectedOptionValue(""),
                self.hasHobbies(""),
                self.radioSelectedCourse(),
                self.engScoreClassX(""),
                self.hindiScoreClassX(""),
                self.mathsScoreClassX(""),
                self.scienceScoreClassX(""),
                self.socialScoreClassX(""),
                self.engScoreClassXII(""),
                self.hindiScoreClassXII(""),
                self.mathsScoreClassXII(""),
                self.scienceScoreClassXII(""),
                self.socialScoreClassXII("") 
            }
            
            self.editStudent = function(json1) {  
                self.students(json1);  
               
            }

            self.resetRecords = function(){
                
                self.FirstName("");
                self.LastName(""), 
                self.selectedDate (""),
                self.selectedMonth (""),
                self.selectedYear (""),
                self.email(""),
                self.Address(""),
                self.City(""),
                self.Zipcode(""),
                self.selectedState(""),
                self.selectedCountry(""),
                self.radioSelectedOptionValue(""),
                self.hasHobbies(""),
                self.radioSelectedCourse(),
                self.engScoreClassX(""),
                self.hindiScoreClassX(""),
                self.mathsScoreClassX(""),
                self.scienceScoreClassX(""),
                self.socialScoreClassX(""),
                self.engScoreClassXII(""),
                self.hindiScoreClassXII(""),
                self.mathsScoreClassXII(""),
                self.scienceScoreClassXII(""),
                self.socialScoreClassXII("")

            }

            self.showRecords = function(){
            
                console.log(self.length);

                 if(self.length == '0'){
                   $('#noRecordsToDisplayMsg').show();
                }else{
                    console.log('calling of submit button');
                    saveAndResetStudentData();
                }  
            }
            
        };
        ko.applyBindings(viewstudentModel);
