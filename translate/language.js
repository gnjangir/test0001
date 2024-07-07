var a = document.getElementById('Page1a').textContent;

let currentLang = localStorage.getItem('Lang') || 'en'; // Default language


// add background image to button
var button = document.getElementById('laguage-button');
if(currentLang=='en'){
    button.style.backgroundImage = "url('../images/us.png')";
}else{
    button.style.backgroundImage = "url('../images/iq.png')";
}


// Function to fetch JSON content based on language
async function fetchContent(lang) {
    try {
        let response = await fetch(`translate/content_${lang}.json`);
        if (!response.ok) {
            throw new Error(`Cannot fetch content for ${lang}`);
        }
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching content:', error);
        return null;
    }
}

// Function to change language
async function changeLanguage() {
    // Toggle language
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('Lang',currentLang);
    // change laguage button background
    if(currentLang=='en'){
        button.style.backgroundImage = "url('../images/us.png')";
    }else{
        button.style.backgroundImage = "url('../images/iq.png')";
    }

    // Fetch content for current language
    let content = await fetchContent(currentLang);
    if (!content) {
        console.error('Content not available for', currentLang);
        return;
    }

    // Update content on page 1
    if(a=='Page1a'){
        document.getElementById('navHome').textContent = content.index.navHome;
        document.getElementById('navBio').textContent = content.index.navBio;
        document.getElementById('navArtwork').textContent = content.index.navArtwork;
        document.getElementById('navGallery').textContent = content.index.navGallery;
        document.getElementById('navAwards').textContent = content.index.navAwards;
        document.getElementById('navDesign').textContent = content.index.navDesign;
        document.getElementById('homeArtwork').textContent = content.index.homeArtwork;
        document.getElementById('homeGallery').textContent = content.index.homeGallery;
        document.getElementById('homeDesign').textContent = content.index.homeDesign;
        document.getElementById('heading01').textContent = content.index.heading01;
        document.getElementById('contact').textContent = content.index.contact;
        document.getElementById('mobile').textContent = content.index.mobile;
        document.getElementById('mail').textContent = content.index.mail;
        document.getElementById('p001').textContent = content.index.p001;
    }
    
    

    // Update content on page 2
    if(a=='Page2a'){
        document.getElementById('navHome').textContent = content.about.navHome;
        document.getElementById('navBio').textContent = content.about.navBio;
        document.getElementById('navArtwork').textContent = content.about.navArtwork;
        document.getElementById('navGallery').textContent = content.about.navGallery;
        document.getElementById('navAwards').textContent = content.about.navAwards;
        document.getElementById('navDesign').textContent = content.about.navDesign;
        document.getElementById('aboutName').textContent = content.about.aboutName;
        document.getElementById('aboutInfo').textContent = content.about.aboutInfo;
    }
    if(a=='Page3a'){
        document.getElementById('navHome').textContent = content.artwork.navHome;
        document.getElementById('navBio').textContent = content.artwork.navBio;
        document.getElementById('navArtwork').textContent = content.artwork.navArtwork;
        document.getElementById('navGallery').textContent = content.artwork.navGallery;
        document.getElementById('navAwards').textContent = content.artwork.navAwards;
        document.getElementById('navDesign').textContent = content.artwork.navDesign;
    }
    if(a=='Page4a'){
        document.getElementById('navHome').textContent = content.award.navHome;
        document.getElementById('navBio').textContent = content.award.navBio;
        document.getElementById('navArtwork').textContent = content.award.navArtwork;
        document.getElementById('navGallery').textContent = content.award.navGallery;
        document.getElementById('navAwards').textContent = content.award.navAwards;
        document.getElementById('navDesign').textContent = content.award.navDesign;
        document.getElementById('heading1').textContent = content.award.heading1;
        document.getElementById('heading2').textContent = content.award.heading2;
        document.getElementById('heading3').textContent = content.award.heading3;
        document.getElementById('paragraph101').textContent = content.award.paragraph101;
        document.getElementById('paragraph102').textContent = content.award.paragraph102;
        document.getElementById('paragraph103').textContent = content.award.paragraph103;
        document.getElementById('paragraph201').textContent = content.award.paragraph201;
        document.getElementById('paragraph202').textContent = content.award.paragraph202;
        document.getElementById('paragraph203').textContent = content.award.paragraph203;
        document.getElementById('paragraph301').textContent = content.award.paragraph301;
        document.getElementById('paragraph302').textContent = content.award.paragraph302;
        document.getElementById('paragraph303').textContent = content.award.paragraph303;
    }
    if(a=='Page5a'){
        document.getElementById('navHome').textContent = content.design.navHome;
        document.getElementById('navBio').textContent = content.design.navBio;
        document.getElementById('navArtwork').textContent = content.design.navArtwork;
        document.getElementById('navGallery').textContent = content.design.navGallery;
        document.getElementById('navAwards').textContent = content.design.navAwards;
        document.getElementById('navDesign').textContent = content.design.navDesign;
        document.getElementById('headingDesign').textContent = content.design.headingDesign;
        document.getElementById('paragraphDesign').textContent = content.design.paragraphDesign;
        document.getElementById('paragraphImg01').textContent = content.design.paragraphImg01;
        document.getElementById('paragraphImg02').textContent = content.design.paragraphImg02;
        document.getElementById('paragraphImg03').textContent = content.design.paragraphImg03;
        document.getElementById('paragraphImg04').textContent = content.design.paragraphImg04;
        document.getElementById('paragraphImg05').textContent = content.design.paragraphImg05;
        document.getElementById('paragraphImg06').textContent = content.design.paragraphImg06;
        document.getElementById('paragraphImg07').textContent = content.design.paragraphImg07;
        document.getElementById('paragraphImg08').textContent = content.design.paragraphImg08;
        document.getElementById('paragraphImg09').textContent = content.design.paragraphImg09;
    }
    if(a=='Page6a'){
        document.getElementById('navHome').textContent = content.gallery.navHome;
        document.getElementById('navBio').textContent = content.gallery.navBio;
        document.getElementById('navArtwork').textContent = content.gallery.navArtwork;
        document.getElementById('navGallery').textContent = content.gallery.navGallery;
        document.getElementById('navAwards').textContent = content.gallery.navAwards;
        document.getElementById('navDesign').textContent = content.gallery.navDesign;
    }

     
}

// Initial content load (optional)
document.addEventListener('DOMContentLoaded', async function() {
    let content = await fetchContent(currentLang);
    if (content) {
        if(a=='Page1a'){
            document.getElementById('navHome').textContent = content.index.navHome;
            document.getElementById('navBio').textContent = content.index.navBio;
            document.getElementById('navArtwork').textContent = content.index.navArtwork;
            document.getElementById('navGallery').textContent = content.index.navGallery;
            document.getElementById('navAwards').textContent = content.index.navAwards;
            document.getElementById('navDesign').textContent = content.index.navDesign;
            document.getElementById('homeArtwork').textContent = content.index.homeArtwork;
            document.getElementById('homeGallery').textContent = content.index.homeGallery;
            document.getElementById('homeDesign').textContent = content.index.homeDesign;
            document.getElementById('heading01').textContent = content.index.heading01;
            document.getElementById('contact').textContent = content.index.contact;
            document.getElementById('mobile').textContent = content.index.mobile;
            document.getElementById('mail').textContent = content.index.mail;
        document.getElementById('p001').textContent = content.index.p001;

        }
        if(a=='Page2a'){
            document.getElementById('navHome').textContent = content.about.navHome;
            document.getElementById('navBio').textContent = content.about.navBio;
            document.getElementById('navArtwork').textContent = content.about.navArtwork;
            document.getElementById('navGallery').textContent = content.about.navGallery;
            document.getElementById('navAwards').textContent = content.about.navAwards;
            document.getElementById('navDesign').textContent = content.about.navDesign;
            document.getElementById('aboutName').textContent = content.about.aboutName;
            document.getElementById('aboutInfo').textContent = content.about.aboutInfo;
        }
        if(a=='Page3a'){
            document.getElementById('navHome').textContent = content.artwork.navHome;
            document.getElementById('navBio').textContent = content.artwork.navBio;
            document.getElementById('navArtwork').textContent = content.artwork.navArtwork;
            document.getElementById('navGallery').textContent = content.artwork.navGallery;
            document.getElementById('navAwards').textContent = content.artwork.navAwards;
            document.getElementById('navDesign').textContent = content.artwork.navDesign;
        }
        if(a=='Page4a'){
            document.getElementById('navHome').textContent = content.award.navHome;
            document.getElementById('navBio').textContent = content.award.navBio;
            document.getElementById('navArtwork').textContent = content.award.navArtwork;
            document.getElementById('navGallery').textContent = content.award.navGallery;
            document.getElementById('navAwards').textContent = content.award.navAwards;
            document.getElementById('navDesign').textContent = content.award.navDesign;
            document.getElementById('heading1').textContent = content.award.heading1;
            document.getElementById('heading2').textContent = content.award.heading2;
            document.getElementById('heading3').textContent = content.award.heading3;
            document.getElementById('paragraph101').textContent = content.award.paragraph101;
            document.getElementById('paragraph102').textContent = content.award.paragraph102;
            document.getElementById('paragraph103').textContent = content.award.paragraph103;
            document.getElementById('paragraph201').textContent = content.award.paragraph201;
            document.getElementById('paragraph202').textContent = content.award.paragraph202;
            document.getElementById('paragraph203').textContent = content.award.paragraph203;
            document.getElementById('paragraph301').textContent = content.award.paragraph301;
            document.getElementById('paragraph302').textContent = content.award.paragraph302;
            document.getElementById('paragraph303').textContent = content.award.paragraph303;
        }
        if(a=='Page5a'){
            document.getElementById('navHome').textContent = content.design.navHome;
            document.getElementById('navBio').textContent = content.design.navBio;
            document.getElementById('navArtwork').textContent = content.design.navArtwork;
            document.getElementById('navGallery').textContent = content.design.navGallery;
            document.getElementById('navAwards').textContent = content.design.navAwards;
            document.getElementById('navDesign').textContent = content.design.navDesign;
            document.getElementById('headingDesign').textContent = content.design.headingDesign;
            document.getElementById('paragraphDesign').textContent = content.design.paragraphDesign;
            document.getElementById('paragraphImg01').textContent = content.design.paragraphImg01;
            document.getElementById('paragraphImg02').textContent = content.design.paragraphImg02;
            document.getElementById('paragraphImg03').textContent = content.design.paragraphImg03;
            document.getElementById('paragraphImg04').textContent = content.design.paragraphImg04;
            document.getElementById('paragraphImg05').textContent = content.design.paragraphImg05;
            document.getElementById('paragraphImg06').textContent = content.design.paragraphImg06;
            document.getElementById('paragraphImg07').textContent = content.design.paragraphImg07;
            document.getElementById('paragraphImg08').textContent = content.design.paragraphImg08;
            document.getElementById('paragraphImg09').textContent = content.design.paragraphImg09;
        }
        if(a=='Page6a'){
            document.getElementById('navHome').textContent = content.gallery.navHome;
            document.getElementById('navBio').textContent = content.gallery.navBio;
            document.getElementById('navArtwork').textContent = content.gallery.navArtwork;
            document.getElementById('navGallery').textContent = content.gallery.navGallery;
            document.getElementById('navAwards').textContent = content.gallery.navAwards;
            document.getElementById('navDesign').textContent = content.gallery.navDesign;
        }
    
    }
});
