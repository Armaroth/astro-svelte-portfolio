export const translations = {
  en: {
    header: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },

    main: {
      name: "Stefanos Palaiochoritis",
      tag: "Web developer, code enthusiast!",
      location: "Based in Athens",
      downloadCv: "Download My CV!",
    },
    personal: {
      info: {
        heading: `A few things about me`,
        content: `I have been working as a police offcer for ten years and for, the past two years, I'm
trying to build a profle to transition into web development. 
Through my occupation as a police offcer, I have developed a strong sense of
teamwork and adaptability. I highly value respect for others and I always work
towards cultivating a positive work environment.
At a basic level, I consider myself profcient with JavaScript/Typescript alongside
various JavaScript libraries like React, Vue, ExpressJS. I am confdent in my ability to
contribute effectively as part of a team and am eager to bring my skills to use.`,
      },
      futureGoals: {
        heading: `Future goals`,
        content: `In five years, I aspire to be a seasoned industry professional, contributing to a company with a vision I deeply believe in—one that fosters a healthy and supportive work environment. My goal is to apply and refine my skills in meaningful ways, achieving a sense of accomplishment and driving continuous growth both personally and professionally`,
      },

      interviewTakeaway: {
        heading: `Interview takeaway`,
        content: `
      What stood out to me during the interview was Web Eleven's approach to treating each business as a living organism, nurturing it with the care and resources needed to help it thrive—perfectly aligned with the company's inspiring motto, "Make it bloom." I also deeply appreciated the emphasis on employee well-being, particularly the opportunity to work in a flexible, hybrid environment that supports both productivity and balance.`,
      },
    },
    projects: [
      {
        title: "Regional Pricing API",
        description: `The scope of this project was to implement a web API that given an IP address
determines the pricing of Moby IT services. The app caches an IP-to-country map
using Redis and uses an external service to determine the country of a user.`,
        techStack: ["Deno"],
        link: `https://github.com/moby-it/regional-pricing`,
      },
      {
        title: "Gaming Grids",
        description: `Gaming Grids is a browser-based immaculate grid game that is League-of-Legends
themed.The rules are the same as any immaculate grid, but the restrictions and results relate to
League of Legends champions. The project is still in progress. The project is developed
in collaboration with George Spanos and Faraz Barbar. `,
        techStack: ["Nuxt", "Supabase"],
        link: "https://github.com/moby-it/gaming-grids",
      },
      {
        title: "Frontend-MovieRama",
        description: `MovieRama is a web application that fetches and displays movie data from The Movie Database (TMDB) API. The app allows users to view movies currently playing in theaters, search for a specific movie, fetch the next movies page using infinite scrolling and see detailed information about individual movies, including related videos, reviews, and similar movies.`,
        techStack: ["html", "css", "typescript"],
        link: "https://github.com/Armaroth/frontend-MovieRama-Stef_Palaiochoritis",
      },
    ],
    contact: {
      heading: "Contact me",
      labels: {
        name: "Name",
        email: "Email",
        message: "Message",
      },
      button: "Send",
    },
  },
  gr: {
    header: {
      home: "Αρχική",
      about: "Σχετικά με εμένα",
      projects: "Πρότεκτ",
      contact: "Επικοινωνία",
    },
    main: {
      name: "Στέφανος Παλαιοχωρίτης",
      tag: "Προγραμματιστής, λάτρης του κώδικα!",
      location: "Βασισμένος στην Αθήνα",
      downloadCv: "Κατεβάστε το βιογραφικό μου!",
    },
    personal: {
      info: {
        heading: `Λίγα λόγια για εμένα`,
        content: `Έχω εργαστεί ως αστυνομικός για δέκα χρόνια και, τα τελευταία δύο χρόνια, προσπαθώ να δημιουργήσω ένα προφίλ για να μεταβώ στον τομέα της ανάπτυξης ιστού.
Μέσα από την εργασία μου ως αστυνομικός, έχω αναπτύξει μια ισχυρή αίσθηση ομαδικότητας και προσαρμοστικότητας. Εκτιμώ ιδιαίτερα τον σεβασμό προς τους άλλους και πάντα εργάζομαι για την καλλιέργεια ενός θετικού εργασιακού περιβάλλοντος.
Σε βασικό επίπεδο, θεωρώ ότι έχω επάρκεια στη χρήση JavaScript/Typescript, καθώς και διαφόρων βιβλιοθηκών JavaScript όπως React, Vue, και ExpressJS. Είμαι σίγουρος για την ικανότητά μου να συνεισφέρω αποτελεσματικά ως μέλος μιας ομάδας και ανυπομονώ να αξιοποιήσω τις δεξιότητές μου.`,
      },
      futureGoals: {
        heading: ` Μελλοντικά σχέδια`,
        content: `Σε πέντε χρόνια, φιλοδοξώ να είμαι ένας καταξιωμένος επαγγελματίας στον κλάδο, συνεισφέροντας σε μια εταιρεία με όραμα στο οποίο πιστεύω βαθιά—μια εταιρεία που καλλιεργεί ένα υγιές και υποστηρικτικό εργασιακό περιβάλλον. Στόχος μου είναι να εφαρμόζω και να βελτιώνω τις δεξιότητές μου με ουσιαστικούς τρόπους, επιτυγχάνοντας ένα αίσθημα ολοκλήρωσης και διαρκούς εξέλιξης, τόσο προσωπικά όσο και επαγγελματικά.`,
      },
      interviewTakeaway: {
        heading: `Τι πήρα από τη συνέντευξη`,
        content: `
Αυτό που μου έκανε ιδιαίτερη εντύπωση κατά τη διάρκεια της συνέντευξης ήταν η προσέγγιση της Web Eleven, που αντιμετωπίζει κάθε επιχείρηση σαν έναν ζωντανό οργανισμό, προσφέροντας τη φροντίδα και τους πόρους που χρειάζονται για να ανθίσει—πλήρως ευθυγραμμισμένο με το εμπνευσμένο μότο της εταιρείας, «Make it bloom». Εκτίμησα επίσης ιδιαίτερα τη σημασία που δίνει στις ανάγκες των εργαζομένων, προσφέροντάς τους την ευκαιρία να εργάζονται σε ένα ευέλικτο, υβριδικό περιβάλλον που προάγει την παραγωγικότητα και την ισορροπία.`,
      },
    },
    projects: [
      {
        title: "Regional Pricing API",
        description: `Το αντικείμενο αυτού του έργου ήταν η υλοποίηση ενός web API που, δεδομένης μιας διεύθυνσης IP, καθορίζει την τιμολόγηση των υπηρεσιών της Moby IT.
Η εφαρμογή αποθηκεύει προσωρινά έναν χάρτη IP-σε-χώρα χρησιμοποιώντας το Redis και χρησιμοποιεί μια εξωτερική υπηρεσία για να προσδιορίσει τη χώρα του χρήστη.`,
        techStack: ["Deno"],
        link: `https://github.com/moby-it/regional-pricing`,
      },
      {
        title: "Gaming Grids",
        description: `
Το Gaming Grids είναι ένα παιχνίδι immaculate grid που βασίζεται σε περιηγητή και έχει θεματολογία από το League of Legends.
Οι κανόνες είναι ίδιοι με αυτούς κάθε immaculate grid, αλλά οι περιορισμοί και τα αποτελέσματα σχετίζονται με τους ήρωες του League of Legends.
Το έργο βρίσκεται ακόμα σε εξέλιξη και αναπτύσσεται σε συνεργασία με τον Γιώργο Σπανό και τον Faraz Barbar.`,
        techStack: ["Nuxt", "Supabase"],
        link: "https://github.com/moby-it/gaming-grids",
      },
      {
        title: "Frontend-MovieRama",
        description: `
Το MovieRama είναι μια διαδικτυακή εφαρμογή που αντλεί και προβάλλει δεδομένα ταινιών από το API του The Movie Database (TMDB).
Η εφαρμογή επιτρέπει στους χρήστες να βλέπουν ταινίες που παίζονται αυτή τη στιγμή στους κινηματογράφους, να αναζητούν συγκεκριμένες ταινίες, να φορτώνουν την επόμενη σελίδα ταινιών με τη χρήση infinite scrolling και να βλέπουν λεπτομερείς πληροφορίες για μεμονωμένες ταινίες, συμπεριλαμβανομένων σχετικών βίντεο, κριτικών και παρόμοιων ταινιών.`,
        techStack: ["html", "css", "typescript"],
        link: "https://github.com/Armaroth/frontend-MovieRama-Stef_Palaiochoritis",
      },
    ],
    contact: {
      heading: "Επικοινωνήστε μαζί μου",
      labels: {
        name: "Όνομα",
        email: "Ηλεκτονική διεύθυνση",
        message: "Μήνυμα",
      },
      button: "Αποστολή",
    },
  },
};
