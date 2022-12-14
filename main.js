$('.form-inline').on('input',function() {
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let fnVal = 'FN%3A'+firstName+'+'+lastName+'%0A';
    let nVal = 'N%3A'+lastName+'%3B'+firstName+'%0A';
    let posTitle = $('#posTitle').val();
    let posTitleVal = 'TITLE%3A'+posTitle+'%0A';
    let phoneMobile = $('#phoneMobile').val();
    let phoneMobileVal = 'TEL%3BCELL%3A'+phoneMobile+'%0A';
    let phoneBusiness = $('#phoneBusiness').val();
    let phoneBusinessVal = 'TEL%3BWORK%3BVOICE%3A'+phoneBusiness+'%0A';
    let phonePersonal = $('#phonePersonal').val();
    let phonePersonalVal = 'TEL%3BHOME%3BVOICE%3A'+phonePersonal+'%0A';
    let emailPersonal = $('#emailPersonal').val();
    let emailPersonalVal = 'EMAIL%3BHOME%3BINTERNET%3A'+emailPersonal+'%0A';
    let emailBusiness = $('#emailBusiness').val();
    let emailBusinessVal = 'EMAIL%3BWORK%3BINTERNET%3A'+emailBusiness+'%0A';
    let website = $('#website').val();
    let websiteVal = 'URL%3A'+website+'%0A';
    let addyStreet = $('#addyStreet').val();
    let addyStreetVal = addyStreet+'%3B';
    let addyCity = $('#addyCity').val();
    let addyCityVal = addyCity+'%3B';
    let addyState = $('#addyState').val();
    let addyStateVal = addyState+'%3B';
    let addyZip = $('#addyZip').val();
    let addyZipVal = addyZip+'%3B';
    let addyCountry = $('#addyCountry').val();
    let adrVal = 'ADR%3A%3B%3B'+addyStreetVal+addyCityVal+addyStateVal+addyZipVal+addyCountry+'%0A';
    let coName = $('#coName').val();
    let coNameVal = 'ORG%3A'+coName+'%0A';
    let qrUrlStart = 'https://api.qrserver.com/v1/create-qr-code/?data=BEGIN%3AVCARD%0AVERSION%3A2.1%0A';
    // let qrUrlStart = 'http://api.qrserver.com/v1/create-qr-code/?data=HelloWorld!';
    let qrUrlEnd = 'END%3AVCARD%0A';
    let qrURL = qrUrlStart + fnVal + nVal + posTitleVal + phoneMobileVal + phoneBusinessVal + phonePersonalVal + emailPersonalVal + emailBusinessVal + websiteVal + adrVal + coNameVal + qrUrlEnd;
    $('.qr-img').attr('src',qrURL);
    $('.biscard-out').html('<div class="biscard-img"><h3>'+firstName+' '+lastName+'</h3><div>'+posTitle+' | '+coName+'</div><div class="phone">w: <a href="tel:+1-'+phoneBusiness+'">'+phoneBusiness+'</a> | c: <a href="tel:+1-'+phoneMobile+'">'+phoneMobile+'</a></div><div class="email"><a href="mailto:'+emailBusiness+'">'+emailBusiness+'</a></div></div>');
});