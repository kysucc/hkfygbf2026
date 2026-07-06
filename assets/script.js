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
                        $('#votepopup,#tabItem'+currentTab).addClass('active');
                        $(this).addClass('active');
                        $('body,html').addClass('popup');
                        $('#nav-toggle-btn').addClass('open');
                    });
            });

            $("#InstantWritingView").click(function(){
                $('#submissionpopup,#Submissions').addClass('active');
                $('body,html').addClass('popup');
                $('#nav-toggle-btn').addClass('open');
            });

            

            $(' #votepopup .overlay, #submissionpopup .overlay,#overlay .overlay').click(function(){
                $('#votepopup,#submissionpopup').removeClass('active');
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

            const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfOftnBH9KBpcaRaQLOokzvuTUsfr9rFRO_q348SelTbG1i0w/formResponse?&callback=googleDocCallback";
            const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQV10NzWQim63QXQVv4hPFKFcc8lD_9aOYRzEgel20H1PpuVP6lR2hLFRvpK4dJrWBUu6PZQvGiJZL/pub?output=csv";

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
                        url: FORM_URL,
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
/*
            async function loadRandomSubmission() {
                console.log('loadfunction');
                const displayDiv = document.getElementById('randomDisplay');

                try {
                    // Fetching the public CSV version is highly optimized and rarely blocked
                    const response = await fetch(CSV_URL);
                    if (!response.ok) throw new Error("Could not fetch database.");

                    const csvText = await response.text();
                    
                    // Convert CSV text lines into an array
                    const rows = csvText.split("\n").map(row => row.split(","));
                    
                    // rows[0] is headers (Timestamp, Name, Message). 
                    // Real submissions start at row index 1.
                    if (rows.length <= 1 || rows[1][0].trim() === "") {
                        displayDiv.innerHTML = "<p>No submissions yet! Be the first.</p>";
                        return;
                    }

                    // Pick a random index between 1 and the last row
                    const randomIndex = Math.floor(Math.random() * (rows.length - 1)) + 1;
                    const randomRow = rows[randomIndex];

                    // Assuming your column sequence is: [0]Timestamp, [1]Name, [2]Message
                    const submitterName = randomRow[1] || "Anonymous";
                    const submitterMessage = randomRow[2] || "";

                    // Display it beautifully on your HTML page
                    displayDiv.innerHTML = `
                        <div class="card" style="border: 1px solid #ccc; padding: 15px; border-radius: 5px;">
                            <p><strong>"${submitterMessage.trim()}"</strong></p>
                            <small>— Posted by ${submitterName.trim()}</small>
                        </div>
                    `;

                } catch (error) {
                    console.error("Error reading database:", error);
                    //displayDiv.innerHTML = "<p style='color:red;'>Failed to load dynamic submissions.</p>";
                }
            }
            loadRandomSubmission();

*/

// Storage pools for our filtered submissions
let allSubmissions = [];
let databaseByTopic = {
    "倒楣時刻": [],
    "特別手信": [],
    "念念不忘": [],
    "難忘風景": []
};

let currentFilter = "全部";
let lastDisplayedSubmission = null; // Tracks the current active card to prevent repeats

// TASK 1: FETCH DATA & PRE-SORT & SHOW COUNTS
ffunction initDatabase() {
    $.ajax({
        url: CSV_URL,
        method: "GET",
        dataType: "text",
        success: function(csvText) {
            allSubmissions = [];
            databaseByTopic = { "倒楣時刻": [], "特別手信": [], "念念不忘": [], "難忘風景": [] };

            // 1. SAFE SPLIT: This regex splits rows ONLY when the newline is at the end of a line,
            // ignoring newlines inside quotes (multi-line contents).
            const rows = csvText.split(/\r?\n(?=(?:(?:[^"]*"){2})*[^"]*$)/);

            for (let i = 1; i < rows.length; i++) {
                const rowText = rows[i];
                if (!rowText || rowText.trim() === "") continue;

                // 2. SAFE COLUMN SPLIT: Splits by comma, but ignores commas inside quotes
                const row = rowText.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);

                // Helper to strip Google CSV wrapper quotes and keep multi-line breaks intact
                const clean = (val) => val ? val.replace(/^"|"$/g, "").trim() : "";

                const submission = {
                    id: i, 
                    location: clean(row[1]), 
                    topic: clean(row[2]),    
                    content: clean(row[3])   
                };

                // Prevent pushing if content is completely empty
                if (!submission.content) continue;

                allSubmissions.push(submission);

                if (databaseByTopic[submission.topic]) {
                    databaseByTopic[submission.topic].push(submission);
                }
            }

            updateFilterButtonCounts();
            showRandomSubmission();
        },
        error: function(xhr, status, error) {
            console.error("Database Error:", error);
            $('#Submissions').append(`<p style="color: red;">讀取失敗: 無法連接資料庫</p>`);
        }
    });
}

// HELPER: UPDATE BUTTON TEXTS WITH TOTALS
function updateFilterButtonCounts() {
    $('[data-filter="全部"]').text(`全部 (${allSubmissions.length})`);
    $('[data-filter="倒楣時刻"]').text(`倒楣時刻 (${databaseByTopic["倒楣時刻"].length})`);
    $('[data-filter="特別手信"]').text(`特別手信 (${databaseByTopic["特別手信"].length})`);
    $('[data-filter="念念不忘"]').text(`念念不忘 (${databaseByTopic["念念不忘"].length})`);
    $('[data-filter="難忘風景"]').text(`難忘風景 (${databaseByTopic["難忘風景"].length})`);
}

// PICK A *NEW* RANDOM SUBMISSION
function showRandomSubmission() {
    let currentPool = (currentFilter === "全部") ? allSubmissions : databaseByTopic[currentFilter];

    if ($('#SubmissionContent').length === 0) {
        $('#SubmissionItem').append('<div id="SubmissionContent"></div>');
    }

    const $displayZone = $('#SubmissionContent');

    if (!currentPool || currentPool.length === 0) {
        $displayZone.html(`
            <div class="no-data" style="margin-top:20px; color:#777; font-style:italic;">
                暫時沒有關於「${currentFilter}」的投稿。
            </div>`);
        lastDisplayedSubmission = null; // Clear tracking
        return;
    }

    let selected = null;

    if (currentPool.length > 1 && lastDisplayedSubmission !== null) {
        let uniquePool = currentPool.filter(item => item.id !== lastDisplayedSubmission.id);
        const randomIndex = Math.floor(Math.random() * uniquePool.length);
        selected = uniquePool[randomIndex];
    } else {
        // Fallback if there is only 1 item in total for this topic
        const randomIndex = Math.floor(Math.random() * currentPool.length);
        selected = currentPool[randomIndex];
    }

    lastDisplayedSubmission = selected;

    let selected_topic = selected.topic

    switch(selected.topic){
        case '倒楣時刻':
            selected_topic+='：請分享旅程中一段糟糕或崩潰的瞬間，後來你是如何化解，抑或是釋懷？';
            break;
        case '特別手信':
            selected_topic+='：請分享旅行時購買過「最特別」的一份手信（伴手禮）。';
            break;
        case '念念不忘':
            selected_topic+='：請分享在旅程中最令你想念的味道或店舖。';
            break;
        case '難忘風景':
            selected_topic+='：請分享旅程中那個令你印象深刻的畫面（關於風景、人、交通工具等）。';
            break;
    }

    $displayZone.hide().html(`
        
        <div class="item-topic-location item-topic-group-item">${selected.location}</div>
        <div class="item-topic-topic item-topic-group-item">${selected.topic}</div>
        ${selected.content}

    `).fadeIn(300); 
}

// BIND EVENTS

    initDatabase();

    $('#ViewSubmissions, #InstantWritingView, #nextSubmission').on('click', function() {
        showRandomSubmission();
    });

    $('#Submissions').on('click', 'button[data-filter]', function() {
        currentFilter = $(this).attr('data-filter');
        
        $('#Submissions button[data-filter]').removeClass('active');
        $(this).addClass('active');

        showRandomSubmission();
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