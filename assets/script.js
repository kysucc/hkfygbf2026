jQuery(document).ready(function ($){
            $('html, body').animate({scrollTop:0},0);

			var txt_submit = "提交";
			var txt_submitting = "提交中..";
			var txt_votesuccess = "投票成功！";
			var txt_submitsuccess="提交成功！";

            /*$('#TopNav .navbar-collapse a:not(.dropdown-toggle)').click(function(e){
                $('.navbar-collapse').removeClass('in');
            });*/
            
            $('#nav-toggle-btn').click(function(e){
                $('#nav-toggle-btn,#nav-toggle-content').toggleClass('open');
            });

            $('#TopNav a:not(#nav-toggle-btn)').click(function(e){
                $('#nav-toggle-btn,#nav-toggle-content').toggleClass('open');

                var animated = false;
                var animateDirection = 'left';
                var navH =/*$('#TopNav').outerHeight()*/0;
                var jump = $(this).attr('href');
                var istop = $(this).attr('href')=='#intro'?true:false;
                var new_position = istop==true?$(jump).offset():$(jump).find('h2').offset();
                var sectionname = $(this).attr('href');
                var topspace = 250;


                if($(sectionname).hasClass('aos-animate')){animated =true;}
                if($(sectionname).attr('data-aos')=='fade-down'){animateDirection='down'}
                if($(sectionname).is('div')){topspace=20;}

                if(animated==true){
                    $('html, body').stop().animate({ scrollTop: new_position.top -navH-topspace }, 500);
                }else{
                    if(animateDirection=='up'){ $('html, body').stop().animate({ scrollTop: new_position.top -navH-topspace -200}, 500); }
                    else{ $('html, body').stop().animate({ scrollTop: new_position.top -navH-topspace}, 500); }
                }e.preventDefault();
            });
            
         
            

            $(window).on('resize', function(){
            });

            const $layers = $('.parallax-layer');

            $(window).on('scroll', function(){
                var scrollPos = $(this).scrollTop();
                var scrollPos2 = $(this).scrollTop()-$(window).height()/3*2;
                var scrollPos3 = $(this).scrollTop()-$(window).height()/2;

                if(scrollPos<$(window).height()+300){

                    var posTimes = 0.005;

                    var opacityPos  = 1 - scrollPos * posTimes * 1.5;
                    var opacityPos0 = 0.15 - scrollPos * posTimes * 0.3;
                    var opacityPos1  = 0 + scrollPos2 * posTimes * 1.5 ;
                    var opacityPos2  = 1 - scrollPos3 * posTimes * 1.3;

                    var scalePos0    = 1 + scrollPos * posTimes ;
                    var translatePos0    = 1 + scrollPos * posTimes ;
                    var translatePos1    = 0 - scrollPos * posTimes ;
                    var rotatePos = 0 + scrollPos * 0.8;


                    //$('.img-layers').css({'transform':'translateY('+translatePos1+')'});
                    //$('.img-layer2').css({'transform':'scale('+scalePos0+')','opacity':opacityPos0});
                    //$('.img-layer3').css({'transform':'rotate('+rotatePos+'deg)'});
                    //$('.img-layer6').css({'transform':'translateX('+translatePos0+')','opacity':opacityPos});

                    $('#nav-sen1').css({'opacity':opacityPos});
                    //$('.img-hohoread').css({'opacity':opacityPos});
                    $('.heading').css({'opacity':opacityPos2});
                    $('.img-ticket').css({'opacity':opacityPos2});
                     $('#nav-sen2').css({'opacity':opacityPos1});

                    
                }

                $layers.each(function() {
                  // Fetch individual speed modifiers assigned via data attributes
                  const speed = $(this).data('speed') || 0.5;
                  
                  // Calculate depth translation vector
                  // A speed of 0.3 means it lags and moves at 30% of the normal scroll pace
                  const yPos = -(scrollPos * speed);
                  
                  // Apply the translation using highly performant 3D transforms
                  $(this).css({
                    'transform': `translate3d(0, ${yPos}px, 0)`
                  });
                });
            });

            $('#votepopup .owl-carousel').owlCarousel({
                loop: true,
                nav:true,
                dots:false,
                margin:20,
                autoHeight:true,
                items:1
            });
              
            function randomLoadTopic(){
                var $options = $('#iwtopic').find('option'),
                random = ~~(Math.random() * $options.length);
                var topictxt = $options.eq(random).text();
                $('#iwtopic').val(topictxt);
                $('#iwtopic_show').text(topictxt);
            }
            randomLoadTopic();

            $('#reloadTopicBtn').click(function(){
                randomLoadTopic();
                $('#write-des textarea').val('');
                $('#InstantWritingSubmitStatus').text('');
            });
            /*$('#tabPrimaryBtn').click(function(){
                $('#tabPrimary,#tabPrimaryBtn').addClass('active');
                $('#tabSecondary,#tabSecondaryBtn').removeClass('active');
                $('body').addClass('popup');
                $('#nav-toggle-btn').addClass('open');
            });
            $(' #tabSecondaryBtn').click(function(){
                $('#tabSecondary,#tabSecondaryBtn').addClass('active');
                $('#tabPrimary,#tabPrimaryBtn').removeClass('active');
                $('body').addClass('popup');
                $('#nav-toggle-btn').addClass('open');
            });*/
            $( "#award-details .award-btn" ).each(function() {
                  $(this).click(function(){
                    var currentTab = $(this).data('tab');
                    var currentGroup = $(this).data('group');
                        $('.tabitem,.award-btn').removeClass('active');
                        $('#tabItem'+currentTab).addClass('active');
                        $(this).addClass('active');
                        $('body,html').addClass('popup');
                        $('#nav-toggle-btn').addClass('open');
                    });
            });

            $(' #votepopup .overlay').click(function(){
                $('body,html').removeClass('popup');
                $('#nav-toggle-btn').removeClass('open');
            });
            

            $('#InstantWritingForm  .form-control,  #EnrollmentForm .form-control').keyup(function(){
                $(this).closest('.eitemgroup').removeClass('warn empty format');
            });
            /*$('#EnrollmentForm .countwords').keyup(function(){
                var str = $(this).val();
                var leng = str.replace(/\s/g,'').length;
                $(this).closest('.eitemgroup').find('.wordnum').text(leng);
            });*/
            function validateEmail(email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(String(email).toLowerCase());
            }
            function validateDOB(dob) {
         
                //Get the date from the TextBox.
                var dateString = dob;
                var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
         
                //Check whether valid dd/MM/yyyy Date Format.
                if (regex.test(dateString)) {
                    var parts = dateString.split("/");
                    var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
                    var dtCurrent = new Date();
                    
                        //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
                        if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                            return false;
                        }
                        if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                            //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                            if (dtCurrent.getDate() < dtDOB.getDate()) {
                                return false;
                            }
                        }
                    return true;
                } else {
                    return false;
                }
            }
            $('#InstantWritingSubmit').click(function(e){
                var iwstatus = true;
                var iwtopic1 = $('#iwtopic1').val();
                var iwtopic2 = $('#iwtopic2').val();
                var iwcontent = $('#iwcontent').val();console.log(iwtopic1,iwtopic2,iwcontent);

                $('#InstantWritingSubmitStatus').text('');

                // reject if blank
                if(iwtopic1 == 'N'){ $('#iwtopic1').closest('.eitemgroup').addClass('warn empty'); iwstatus = false; } 
                else {               $('#iwtopic1').closest('.eitemgroup').removeClass('warn empty'); }

                if(iwtopic2 == 'N'){ $('#iwtopic2').closest('.eitemgroup').addClass('warn empty'); iwstatus = false; } 
                else {               $('#iwtopic2').closest('.eitemgroup').removeClass('warn empty'); }

                if(iwcontent == ''){ $('#iwcontent').closest('.eitemgroup').addClass('warn empty'); iwstatus = false; } 
                else {               $('#iwcontent').closest('.eitemgroup').removeClass('warn empty'); }

                //pass
                if(iwstatus){
                    window.googleDocCallback = function () { return true; }
                    $.ajax({
                        url: "https://docs.google.com/forms/d/e/1FAIpQLSfOftnBH9KBpcaRaQLOokzvuTUsfr9rFRO_q348SelTbG1i0w/formResponse?&callback=googleDocCallback",
                        crossDomain: true,
                        data: {
                            "entry.1237223835": iwtopic1,
                            "entry.826613672": iwtopic2,
                            "entry.305100148": iwcontent,
                        },
                        type: "POST", 
                        dataType: "JSONP",
                        complete: function () {
							$('#InstantWritingSubmit').val(txt_submitting);
                            $('#InstantWritingForm').addClass('enrolling');
                            setTimeout(function() {
                                //$('#InstantWritingForm').removeClass('enrolling').addClass('enrol_success');
                                $('#InstantWritingSubmit').val(txt_submit);
                                $('#InstantWritingForm').removeClass('enrolling');
								$('#InstantWritingSubmitStatus').text(txt_submitsuccess);
                                $('#InstantWritingForm textarea').val('');
                                //$('.wordnum').text('');
                               }, 1500);
                            /*setTimeout(function() {
                                $('#InstantWritingForm').removeClass('enrol_success');
								$('#InstantWritingSubmit').val(txt_submit);
                               }, 3000);*/
                        }
                    });
                }
            });




















            
            $('#VotingSubmit').click(function(e){
                var vstatus = true;
                var vemail = $('#voteemail').val();
                var vprimary = $('#voteprimary').val();
                var vsecondary = $('#votesecondary').val();

                // reject if blank
                if(vemail == ''){ $('#voteemail').closest('.eitemgroup').addClass('warn empty'); vstatus = false; } 
                else { 
                    if(validateEmail(vemail)==false){  $('#voteemail').closest('.eitemgroup').removeClass('warn empty');
                                                       $('#voteemail').closest('.eitemgroup').addClass('warn format'); vstatus = false; } 
                    else {                             $('#voteemail').closest('.eitemgroup').removeClass('warn empty'); } 
                }
                if(vprimary == 'N' && vsecondary == 'N'){  
                    //must vote in at least 1 category
                    $('#voteprimary').closest('.eitemgroup').addClass('warn empty');    
                    $('#votesecondary').closest('.eitemgroup').addClass('warn empty');           
                    vstatus = false;     
                } else { 
                    $('#voteprimary').closest('.eitemgroup').removeClass('warn empty'); 
                    $('#votesecondary').closest('.eitemgroup').removeClass('warn empty'); 
                }

                //pass
                if(vstatus){
                    window.googleDocCallback = function () { return true; }
                    $.ajax({
                        url: "https://docs.google.com/forms/d/e/1FAIpQLScdkL9-je1zO8cZwQLSTz9syRnOfKyYgl92uoUNcXXckKabkg/formResponse?&callback=googleDocCallback",
                        crossDomain: true,
                        data: {
                            'entry.1251683583': vemail,
                            'entry.1540016184': vprimary,
                            'entry.87116624': vsecondary,
                        },
                        type: "POST",
                        dataType: "JSONP",
                        complete: function () {
							$('#VotingSubmit').val(txt_submitting);
                            $('#VotingForm').addClass('enrolling');
                            setTimeout(function() {
                               //$('#VotingForm').removeClass('enrolling').addClass('enrol_success');
                               $('#VotingForm').removeClass('enrolling');
                               $('#VotingSubmit').val(txt_votesuccess);
                               $('#VotingForm input[type=email]').val('');
                               $('#VotingForm select').val('N');
                               //$('.wordnum').text('');
                            }, 1500);
                            setTimeout(function() {
                                //$('#VotingForm').removeClass('enrol_success');
                               $('#VotingSubmit').val(txt_submit);
                            }, 3000);
                        }
                    });
                }
            });
			// .valueOf() gives time in milliseconds 
			var currentTime = new Date($.now());
			var startTime = new Date("June 28 2024 00:00:00 GMT+8");
            var endTime = new Date("July 21 2024 12:00:00 GMT+8");
			console.log(startTime,endTime,currentTime);
			if (startTime > currentTime) {
			   $('#timesuplabel').addClass('notstarted');
               $('#VotingForm').addClass('notstarted');
			} 
            if (endTime <= currentTime) {
               $('#timesuplabel').addClass('timesup');
               $('#VotingForm').addClass('timesup');
            } 
        });