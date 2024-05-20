/* script.js */
window.addEvent('load', function() {
    new JCaption('img.caption');
  });
  
  var templateParams = {
    templatePrefix: "JSN_Epic_PRO-",
    templatePath: "/templates/jsn_epic_pro",
    enableRTL: false,
    enableMMFX: true,
    enableSMFX: true,
    enableGotopLink: false,
    enableMobile: false,
    mobileDevice: false,
    enableJQuery: false,
    enableEqualHeight: false
  };
  
  JSNTemplate.initTemplate(templateParams);
  
  window.addEvent('domready', function() {
    SqueezeBox.initialize({});
    SqueezeBox.assign($$('a.modal'), { parse: 'rel' });
  });
  
  var cssText = '#BJ_ImageSlider_672_out.gallery_out{background:#333333}#BJ_ImageSlider_672.gallery .overlay-background,#BJ_ImageSlider_672.gallery .overlay-background-left,#BJ_ImageSlider_672.gallery .overlay-background-right{background-color:#333333}';
  cssText += '#BJ_ImageSlider_672_out .mouseover{cursor:default}';
  var ref = document.createElement('style');
  ref.setAttribute("rel", "stylesheet");
  ref.setAttribute("type", "text/css");
  document.getElementsByTagName("head")[0].appendChild(ref);
  if (!!(window.attachEvent && !window.opera)) ref.styleSheet.cssText = cssText;
  else ref.appendChild(document.createTextNode(cssText));
  
  jQuery.noConflict();
  if (!jQuery) alert('JQuery is needed. Please choose to load JQuery at BJ Image Slider backend');
  
  jQuery().ready(function($) {
    $('#BJ_ImageSlider_672').galleryView({
      panel_width: 1148,
      panel_height: 198,
      transition_speed: 750,
      transition_interval: 4000,
      show_filmstrip: 0,
      show_captions: 1,
      filmstrip_position: 'bottom',
      overlay_position: 'right',
      caption_thickness: 300,
      caption_outside: 0,
      overlay_opacity: 0.7,
      show_next_item_title: 0,
      frame_gap: 8,
      pause_on_hover: 0,
      show_controller: 0,
      auto_hide_filmstrip: 1,
      play_at_first: 1,
      filmstrip_size: 5,
      panel_gradient: 0,
      gallery_padding: 1,
      easing: 'swing',
      image_transition_effect: 'blur',
      text_transition_effect: 'blur',
      panel_on_click: 'none',
      frame_opacity: 0.3,
      pointer_size: 8,
      show_panels: true,
      frame_width: 27,
      frame_height: 27,
      frame_margin: 8,
      start_frame: 1,
      nav_theme: 'dark',
      panel_scale: '',
      frame_scale: '',
      fade_panels: true,
      auto_hide_overlay: true
    });
  });
  
  var pausecontent = new Array();
  var cnti = 0;
  
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/28.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Εργάζομαι ως SAP NetWeaver Consultant, είμαι υπεύθυνος για τα διεθνή projects στους τομείς Real Estate, Finance & Control και Plant Management. To σημαντικό είναι ότι με την άφιξη μου στην Ελβετία, εκπαιδεύτηκα πλήρως στην SAP. Μπορεί να εργάζομαι γύρω στις 12 ώρες την ημέρα αλλά το αντικείμενο είναι πολύ ...</div><br /><em><strong>Μάριος Τουμάνης </strong><br /><small>BSc Computer Studies</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/27.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Αποφοίτησα από το Mediterranean College και το πρόγραμμα ΒΑ (Hons) Marketing το 2013. Εργαζόμουν ήδη στην Mediatel, εργασία την οποία κέρδισα μέσω του Career Office του κολεγίου. Η συνέχιση σπουδών ήταν για μένα μονόδρομος. Έγινα δεκτή στο MBA του πανεπιστημίου Derby στο οποίο φοιτώ αυτή την ακαδημαϊκή ...</div><br /><em><strong>Κωνσταντίνα Πρόκο </strong><br /><small>ΒΑ (Hons) Marketing</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/29.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Μετά από 25 χρόνια καριέρας στον τουρισμό, μετά από δύο παιδιά, μία δεκαετή ενασχόληση με την έρευνα της αρχαίας Ελληνικής φιλοσοφίας και το θέατρο, αποφάσισα το 2009 να ακολουθήσω για άλλη μια φορά την καρδιά μου... Να σπουδάσω Ψυχολογία. Όχι για να αποκτήσω άλλο ένα προσόν, ...</div><br /><em><strong>Λίνα Γαλλιλαία </strong><br /><small>HND in Counselling & Psychology </small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/31.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Στο ΜΕDCOLLEGE βρήκα αυτό που ήθελα, αυτό που μου έλειπε και έτσι το έκανα «δώρο» στον εαυτό μου, δώρο από τον Χρήστο για τον Χρήστο. Η συμβουλευτική ψυχολογία στο MED, δεν μου πρόσφερε μόνο γνώσεις και εφόδια, αλλά και αυτογνωσία, αυτοπεποίθηση, φίλους και κάλυψε το κενό που πάντα ...</div><br /><em><strong>Χρήστος Δασκαλάκης </strong><br /><small>ΗΝD Counselling Psychology</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/32.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Τα τρία έτη φοίτησής μου στο Mediterranean College, ήταν μια αξέχαστη εμπειρία γνώσης και μάθησης μέσα από το πρίσμα της εκπαίδευσης και της κατάρτισης. Το πρόγραμμα σπουδών του Πανεπιστημίου Derby είναι σύγχρονο, με πολύ ελκυστικά μαθήματα που κρατούν αμείωτο το ενδιαφέρον του ...</div><br /><em><strong>Κωνσταντίνος Βασιλείου </strong><br /><small>BA (Hons) Early Childhood</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/16.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Βρίσκομαι στον χώρο της εστίασης 17 χρόνια , ξεκίνησα να εργάζομαι σε μικρή ηλικία με αποτέλεσμα το ακαδημαϊκό κομμάτι να έχει μείνει πίσω , έτσι αποφάσισα να ξεκινήσω το ΜΒΑ με σκοπό να ανοίξουν οι ορίζοντες μου διότι είναι καλή η εργασιακή εμπειρία αλλά πολλές φορές δεν σε ...</div><br /><em><strong>Γεώργιος Hofmann </strong><br /><small>MBA, General Manager καταστήματος TGI Fridays Hellas </small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/17.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Διάλεξα το πρόγραμμα HND Counselling and Psychology το 2009 γιατί προσέφερε ένα πιστοποιημένο επαγγελματικό τίτλο σπουδών πανεπιστημιακού επιπέδου με διεθνή αναγνώριση και δυνατότητα διάφορων επιλογών ακαδημαϊκής εξέλιξης. Ήμουν πολύ ευχαριστημένη από τις εγκαταστάσεις του και την ...</div><br /><em><strong>Ελευθερία Καββαδία </strong><br /><small>HND Counselling & Psychology, Edexcel (2010)  Σύμβουλος Ψυχικής Υγείας</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/18.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Κατά τη διάρκεια των σπουδών μου στο Mediterranean College, είχα την ευκαιρία να έρθω σε επαφή με σπουδαίους ανθρώπους και ειδικά καθηγητές άριστα καταρτισμένους πάνω στο αντικείμενο τους. Τρία χρόνια μετά την αποφοίτησή μου και συνεχίζουν να είναι οι μέντορές μου! Οι συμφοιτητές ...</div><br /><em><strong>Μαρία Χαλκιά </strong><br /><small>Executive Diploma in Marketing</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/19.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Επέλεξα το Mediterranean College γιατί ήταν το μόνο κολέγιο που πρόσφερε την ειδικότητα με την οποία ήθελα να ασχοληθώ, την Λογοθεραπεία. Φυσικά δεν το μετάνιωσα, παρακολούθησα ένα πρόγραμμα ευέλικτο στο ωράριο, με ουσιαστικά και εξειδικευμένα μαθήματα που κρατούσαν αμείωτο το ...</div><br /><em><strong>Μαρία-Άννα Ούτσια </strong><br /><small>HND-Professional Diploma in Speech Tharapy-Edexcel</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/20.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Όσο περισσότερα χιλιόμετρα κάλυπτα στο κοντέρ της επαγγελματικής διαδρομής μου, τόσο πιο πολύ μεγάλωνε η ανάγκη μου για γνώση και απαντήσεις σε διάφορα ζητήματα που με απασχολούσαν, σχετικά αλλά και μη σχετικά με τη δημοσιογραφική δουλειά μου. Ως εργαζόμενη και μητέρα ...</div><br /><em><strong>Νέτη Φίλια </strong><br /><small>HND in Counseling and Psychology  - Δημοσιογράφος – Σύμβουλος Ψυχικής Υγείας</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/21.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Έχοντας αποφοιτήσει από το πρόγραμμα HND Advanced Practice in work with children & families, συνέχισα στο Mediterranean College και φέτος ολοκληρώνω τις σπουδές μου για το Bachelor στα Παιδαγωγικά. Παράλληλα, εργάζομαι ως παιδαγωγός 2 μικρών κοριτσιών. Μέσα από τα θεωρητικά και πρακτικά μαθήματα τα οποία ...</div><br /><em><strong>Ευαγγελία Πατελούδη </strong><br /><small>ΗΝD Advanced Practice in Work with Children & Families</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/22.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Ήταν εκείνη την φορά που ένα ταξίδι άρχισε. Προορισμός, το πέρας της φοίτησής μου στο Mediterranean College. Στόχος, όνειρο, η όσο δυνατή μόρφωσή μου στους τομείς των Παιδαγωγικών και του Management. Συνταξιδιώτες, όλοι οι εξαιρετικοί άνθρωποι που συνάντησα στην καθημερινότητα μου ως ...</div><br /><em><strong>Χριστίνα Τόλιου  </strong><br /><small>ΗΝD Advanced Practice in Work with Children & Families - Executive Diploma in  Management </small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/23.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Ήρθα στην Αθήνα αφήνοντας το νησί μου με σκοπό να ακολουθήσω το όνειρο μου, να σπουδάσω Λογοθεραπεία και Μαθησιακές Δυσκολίες. Επέλεξα το Μediterranean College για πολλούς και σημαντικούς για μένα λόγους. Καταρχήν με αντιμετώπισαν όλοι φιλικά και ένιωσα πολύ οικεία και ευχάριστα ...</div><br /><em><strong>Σεβαστή Τσουρουνάκη </strong></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/24.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Είμαι απόφοιτη του Φιλολογικού Τμήματος του Εθνικού Καποδιστριακού Πανεπιστημίου Αθηνών. Φέτος ολοκληρώνω το επαγγελματικό πρόγραμμα εξειδίκευσης πάνω στις δημόσιες σχέσεις, Executive Diploma in PR, που προσφέρει το Mediterranean μέσω του London Center of Management. Επέλεξα να συνεχίσω τις σπουδές ...</div><br /><em><strong>Αρετή Παπαδημητρίου </strong><br /><small>Executive Diploma in Public Relations</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/25.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Το πρόγραμμα HND Counselling Psychology, ξεπέρασε το σύνολο των προσδοκιών μου. Άμεση και αποτελεσματική εκμάθηση του αντικειμένου! Πριν καν ολοκληρώσω τις σπουδές μου και με την πολύτιμη βοήθεια του Γραφείου Εργασίας του Κολεγίου εργάζομαι βρήκα εργασία, έχω αναλάβει τη φύλαξη και ...</div><br /><em><strong>Βασιλική Παπαδημοπούλου </strong><br /><small>HND Counselling Psychology </small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/26.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Η φοίτησή μου στο Mediterranean College ήταν μια πολύ ωραία εμπειρία για μένα. Βρέθηκα και πάλι μετά από πολλά χρόνια, σε εκπαιδευτικό περιβάλλον και μάλιστα ως σπουδάστρια. Θέλω να εκφράσω τις ευχαριστίες μου τόσο στο εκπαιδευτικό όσο και στο διοικητικό προσωπικό για τις υψηλού ...</div><br /><em><strong>Ευαγγελία Γιαννακάκου  </strong><br /><small>Executive Diploma in Health Care Management </small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/8.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Ενθουσιάστηκα από το ανθρώπινο δυναμικό που πλαισιώνει το Mediterranean College, το άρτια εξοπλισμένο και παράλληλα φιλικό περιβάλλον, τις βιβλιοθήκες, τους χώρους ψυχαγωγίας των φοιτητών… Όλα συναινούν στο πιο κατάλληλο και ασφαλές ...</div><br /><em><strong>Ελένη - Δήμητρα Καρατσόλια  </strong><br /><small>BA (Hons) Business Management, Teeside University</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/9.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Η ζωή στο κολέγιο ήταν γεμάτη όνειρα, στόχους, αποτυχίες, επιτυχίες, δημιουργία, καλούς φίλους ,τρυφερές στιγμές, άγχη και έντονα συναισθήματα. Πάνω απ\' όλα, όμως, ήταν μια καθημερινότητα που δεν θα \'θελα να τελειώσει ...</div><br /><em><strong>Μαρία Λειβαδάρου  </strong><br /><small>BA (Hons) Marketing & Public Relations, Teeside University</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/10.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Σ’ αυτόν τον ακαδημαϊκό χώρο, κατάλαβα ότι η ανάγκη για γνώση και εκπαίδευση δεν σταματά. Μετά το πτυχίο Higher National Diploma in Mechanical Engineering και παρότι πλέον έχω μεγαλύτερες οικογενειακές υποχρεώσεις, συνέχισα τις σπουδές μου παρακολουθώντας μεταπτυχιακό πρόγραμμα στη Διοίκηση ...</div><br /><em><strong>Νικόλαος Μακρής </strong><br /><small>Executive Diploma in Human Resources Management, London Centre of Management</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/11.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Το Μediterranean college, όσον αφορά στο πρόγραμμα Bachelor of Science (Hons) Psychology and Counselling, είχε ένα πολύ ενδιαφέρον κύκλο μαθημάτων, που έκαναν την κάθε διάλεξη πολύ ελκυστική για το φοιτητή. Επίσης, οι καθηγητές ήταν τόσο μεταδοτικοί προς τους φοιτητές, που έκαναν μέχρι και το φοιτητή που ...</div><br /><em><strong>Άννα Γρηγορίου  </strong><br /><small>BSc (Hons) Psychology and Counselling, Teeside University</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/12.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Οι σπουδές μου στο Mediterranean College ήταν μια εμπειρία σημαντική για μένα. Είχα εισαχθεί από τις Πανελλήνιες στο ΤΕΙ Νοσηλευτικής, αλλά επέλεξα στο κολέγιο τον τομέα των Παιδαγωγικών, γιατί αυτό ήταν το όνειρό μου. Δεν το μετάνιωσα καθόλου, αντιθέτως ενισχύθηκε η πεποίθησή μου ...</div><br /><em><strong>Μαρία Αθανασοπούλου </strong><br /><small>ΗΝD Advanced Practice in Work with children & families, Edexcel (2011)</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/14.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Ήρθα στο κολέγιο ως απόφοιτος των ΙΕΚ Ξυνή για να συνεχίσω τις σπουδές μου και να αποκτήσω πτυχίο Bachelor. Κατάφερα το στόχο μου, ολοκλήρωσα τις σπουδές μου σε ένα πανεπιστημιακό περιβάλλον με ιδιαίτερες απαιτήσεις και αξιόλογους ...</div><br /><em><strong>Νικόλαος Ανταράκης  </strong><br /><small>BSc Computer Studies, University of Teeside (2011)</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/15.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Στο Mediterranean College απέκτησα νέο τρόπο σκέψης και νέο περιβάλλον ζωής. Ευχαριστώ τους καθηγητές που με βοήθησαν να φτάσω στο τέλος των σπουδών μου και να είμαι σήμερα τελειόφοιτη ...</div><br /><em><strong>Παναγιώτα Γκότση </strong><br /><small>BSc In Computing, University of Teesside (2011)</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/1.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Στο Mediterranean College απέκτησα 2 πτυχία, Bachelor στην πληροφορική και Master στο Marketing Management. Παρακολούθησα σύγχρονα προγράμματα σπουδών προσαρμοσμένα στις απαιτήσεις της αγοράς εργασίας με άκρως ενδιαφέροντα μαθήματα καθώς επίσης και ελκυστικό τρόπο αξιολόγησης αυτών με μεγάλο ...</div><br /><em><strong>James Pateras </strong><br /><small>MSc Marketing Management, University of Teesside (2011)</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/2.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>\"Η γνώση είναι ανάμνηση\". Oι αναμνήσεις πολλές από τις σπουδές μου στο Mediterranean College… το βέβαιο είναι ότι νιώθω πιο δυνατός, με μεγαλύτερη αυτοπεποίθηση και πολύ περισσότερη ...</div><br /><em><strong>Γεώργιος Γιάτσιος </strong><br /><small>ΜΒΑ, University of Teesside (2011)</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/3.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>“Καλύτερα να μετανιώνεις για πράγματα που έχεις κάνει παρά για πράγματα που δεν έχεις κάνει”. Το ΜΒΑ είναι μια από τις επιλογές για την οποία σίγουρα δεν θα μετανιώσεις ποτέ. Χρησιμοποιώντας τις γνώσεις και τις εμπειρίες που μου προσέφερε το Μεταπτυχιακό και ειδικότερα ...</div><br /><em><strong>Ανδρέας Ράμφος </strong><br /><small>ΜΒΑ, University of Teesside (2011)</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/4.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Δημιουργική και εποικοδομητική… Όπως ήταν η πορεία μου στις σπουδές, έτσι θέλω να είναι και η καριέρα μου. Εύχομαι σε όλους μας επαγγελματική επιτυχία και πνευματική ...</div><br /><em><strong>Ιφιγένεια - Ευαγγελία Θωμάκου </strong><br /><small>Msc Marketing Management, University of Teesside (2011)</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/5.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Στο Μεσογειακό Κολέγιο συνάντησα ανθρώπους ικανούς και πρόθυμους να με βοηθήσουν, καθ’ όλη τη διάρκεια των σπουδών μου. Εδώ, κατάφερα να διευρύνω τον ορίζοντα των γνώσεών μου και έμαθα να μην σκέφτομαι επιφανειακά. Το Μεσογειακό Κολέγιο σου δίνει όλα αυτά τα εφόδια που ...</div><br /><em><strong>Γεώργιος Στιβακτάς </strong><br /><small>ΒΑ(Hons) Business Management, University of Teesside (2011)</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/6.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Τα φοιτητικά μου χρόνια στο Mediterranean College ήταν τα πιο δημιουργικά και ευχάριστα της ζωής μου! Δεσμοί φιλίας , αξέχαστες στιγμές με τους συμφοιτητές και τους καθηγητές, έντονη προσπάθεια, στόχοι, αποτέλεσμα, επιτυχία, εικόνες ...</div><br /><em><strong>Μπλέρτα Χατζή </strong><br /><small>ΒΑ (Hons) in Business Management, University of Teesside (2011)</small></em>';
  pausecontent[cnti++] = '<div style="text-align:left;"><span style="float:left; margin-right:5px;"><img src="https://www.mc-alumni.gr/images/com_rsmonials/7.jpg" style="max-width:100px; max-height:100px; border:3px solid #DEDEDE;" /></span>Δανείζομαι τα λόγια του Αριστοτέλη «Αυτοί που δίνουν καλή εκπαίδευση στα παιδιά, πρέπει να τιμώνται περισσότερο από εκείνους που τα γέννησαν, γιατί οι γονείς τους έδωσαν μόνο τη ζωή, οι παιδαγωγοί όμως την ικανότητα να ζουν καλά». Ευχαριστώ τους καθηγητές του κολεγίου, για ...</div><br /><em><strong>Γιάννης Πολίτης </strong><br /><small>ΒΑ (Hons) in Marketing, University of Teesside (2011)</small></em>';
  
  function pausescroller(content, divId, divClass, delay) {
    this.content = content;
    this.tickerid = divId;
    this.delay = delay;
    this.mouseoverBol = 0;
    this.hiddendivpointer = 1;
    document.write('<div id="' + divId + '" class="' + divClass + '" style="position: relative; overflow: hidden"><div class="innerDiv" style="position: absolute; width: 100%" id="' + divId + '1">' + content[0] + '</div><div class="innerDiv" style="position: absolute; width: 100%; visibility: hidden" id="' + divId + '2">' + content[1] + '</div></div>');
    var scrollerinstance = this;
    if (window.addEventListener)
      window.addEventListener("load", function() { scrollerinstance.initialize() }, false);
    else if (window.attachEvent)
      window.attachEvent("onload", function() { scrollerinstance.initialize() });
    else if (document.getElementById)
      setTimeout(function() { scrollerinstance.initialize() }, 500);
  }
  
  pausescroller.prototype.initialize = function() {
    this.tickerdiv = document.getElementById(this.tickerid);
    this.visiblediv = document.getElementById(this.tickerid + "1");
    this.hiddendiv = document.getElementById(this.tickerid + "2");
    this.visibledivtop = parseInt(pausescroller.getCSSpadding(this.tickerdiv));
    this.visiblediv.style.width = this.hiddendiv.style.width = this.tickerdiv.offsetWidth - (this.visibledivtop * 2) + "px";
    this.getinline(this.visiblediv, this.hiddendiv);
    this.hiddendiv.style.visibility = "visible";
    var scrollerinstance = this;
    document.getElementById(this.tickerid).onmouseover = function() { scrollerinstance.mouseoverBol = 1 };
    document.getElementById(this.tickerid).onmouseout = function() { scrollerinstance.mouseoverBol = 0 };
    if (window.attachEvent)
      window.attachEvent("onunload", function() { scrollerinstance.tickerdiv.onmouseover = scrollerinstance.tickerdiv.onmouseout = null });
    setTimeout(function() { scrollerinstance.animateup() }, this.delay);
  }
  
  pausescroller.prototype.animateup = function() {
    var scrollerinstance = this;
    if (parseInt(this.hiddendiv.style.top) > (this.visibledivtop + 5)) {
      this.visiblediv.style.top = parseInt(this.visiblediv.style.top) - 5 + "px";
      this.hiddendiv.style.top = parseInt(this.hiddendiv.style.top) - 5 + "px";
      setTimeout(function() { scrollerinstance.animateup() }, 50);
    } else {
      this.getinline(this.hiddendiv, this.visiblediv);
      this.swapdivs();
      setTimeout(function() { scrollerinstance.setmessage() }, this.delay);
    }
  }
  
  pausescroller.prototype.swapdivs = function() {
    var tempcontainer = this.visiblediv;
    this.visiblediv = this.hiddendiv;
    this.hiddendiv = tempcontainer;
  }
  
  pausescroller.prototype.getinline = function(div1, div2) {
    div1.style.top = this.visibledivtop + "px";
    div2.style.top = Math.max(div1.parentNode.offsetHeight, div1.offsetHeight) + "px";
  }
  
  pausescroller.prototype.setmessage = function() {
    var scrollerinstance = this;
    if (this.mouseoverBol == 1)
      setTimeout(function() { scrollerinstance.setmessage() }, 100);
    else {
      var i = this.hiddendivpointer;
      var ceiling = this.content.length;
      this.hiddendivpointer = (i + 1 > ceiling - 1) ? 0 : i + 1;
      this.hiddendiv.innerHTML = this.content[this.hiddendivpointer];
      this.animateup();
    }
  }
  
  pausescroller.getCSSpadding = function(tickerobj) {
    if (tickerobj.currentStyle)
      return tickerobj.currentStyle["paddingTop"];
    else if (window.getComputedStyle)
      return window.getComputedStyle(tickerobj, "").getPropertyValue("padding-top");
    else
      return 0;
  }
  
  new pausescroller(pausecontent, "rsmsc_scroller", "rsmsc_scroller_class", 5000);
