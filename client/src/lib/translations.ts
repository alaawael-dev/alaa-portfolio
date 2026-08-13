export const translations = {
  en: {
    // Navigation
    nav: {
      skills: 'Skills',
      projects: 'Projects',
      resume: 'Resume',
      services: 'Services',
      contact: 'Contact',
    },
    // Hero Section
    hero: {
      name: 'Alaa Eldin Wael',
      title: 'Flutter Developer',
      bio: 'I build scalable, maintainable mobile apps using Clean Architecture and modern design patterns — with one app already live in Google Play Production. Specialized in Flutter, Firebase, and REST APIs.',
      hireMe: 'Hire Me on Fiverr',
      getInTouch: 'Get in Touch',
    },
    // Skills Section
    skills: {
      title: 'Skills & Expertise',
      categories: {
        mobile: 'Mobile',
        stateManagement: 'State Management',
        architecture: 'Architecture',
        storage: 'Storage & Data',
        deployment: 'App Deployment',
        backend: 'Backend',
        services: 'Services',
        tools: 'Tools',
        integrations: 'Integrations',
      },
    },
    // Projects Section
    projects: {
      title: 'Featured Projects',
      aura: {
        name: 'Aura',
        subtitle: 'E-Commerce App',
        description: 'Full-stack mobile e-commerce app with Flutter frontend and custom PHP/MySQL backend. Features multi-role system, cart, orders, and 30+ REST API endpoints.',
      },
      trackQR: {
        name: 'TrackQR',
        subtitle: 'QR-Based Real-Time Location Tracking App',
        description: 'Built and shipped a complete QR-based real-time location tracking app, now live on Google Play Production, for client Maverick. Features Firebase Auth (Google + email), real-time location tracking via Firebase Realtime Database, Firestore for user data, and QR-code generation tied to user UIDs. Diagnosed and fixed an Android platform bug where requesting foreground and background location permissions too close together suppressed the Allow all the time permission option. Implemented a foreground service with a persistent notification to keep background location tracking stable under Android process-management restrictions. Independently managed the entire Google Play release process — app signing, AAB generation, store listing setup, and release track management from Internal Testing through to a public production release. Currently refactoring the app to a stricter Clean Architecture using Cubit and GetIt for dependency injection.',
        badge: 'Live on Google Play',
      },
      studyRoom: {
        name: 'StudyRoom',
        subtitle: 'Real-Time Collaborative Study Platform',
        description: 'Building a real-time collaborative study platform using Flutter, BLoC/Cubit, and Clean Architecture with strict domain/data/presentation layer separation. Implementing Firebase Realtime Database and Firestore together for live session sync. Applying UseCase and Repository pattern architecture with Either/dartz error handling and get_it dependency injection.',
        badge: 'In Development',
      },
      mal3ab: {
        name: 'Mal3ab',
        subtitle: 'Football Field Booking Platform',
        description: 'A football field booking app I am building solo as a personal learning project, focused on deepening my GetX architecture skills beyond state management — including Controllers, Bindings, Route Management, and Middleware. Currently completed: project architecture and folder structure, a reusable design system, English/Arabic localization, a persistent onboarding flow, and a full authentication system (login, sign up, email verification, OTP, password reset) with form validation, password strength indicators, and reusable auth widgets. Designed for the Cairo market with a commission-plus-subscription business model.',
        badge: 'In Development',
      },
      firebaseChat: {
        name: 'Firebase Chat App',
        subtitle: 'Real-time Messaging',
        description: 'Real-time chat application using Firebase Auth and Cloud Firestore. Handles authentication, live message sync, and CRUD operations.',
      },

      techStack: 'Tech Stack',
      viewCode: 'View Code',
      backend: 'Backend',
    },
    // Resume Section
    resume: {
      title: 'Experience',
      downloadCV: 'Download CV',
      education: 'Education',
      degree: 'B.Sc. Business Information Systems',
      school: 'Arab Academy for Science and Technology',
      location: 'Cairo, Egypt',
      experience: 'Experience',
      jobTitle: 'Flutter Developer',
      company: 'Freelance (Self-employed)',
      period: 'Feb 2025 – Present',
      jobDescription: 'Built and delivered Flutter mobile applications including TrackQR, a QR-based location tracking app now live in Google Play Production, with a full-stack e-commerce app (PHP/MySQL backend), Firebase-integrated apps, and pixel-perfect UI from Figma designs. Diagnosed and fixed a production Android platform bug affecting background location permissions. Specialized in Clean Architecture, BLoC/Cubit, GetIt, and REST API integration.',
      fiverrTitle: 'Flutter Developer',
      fiverrCompany: 'Fiverr',
      fiverrPeriod: 'Ongoing',
      fiverrDescription: 'Delivering Flutter mobile apps for international clients. Completed projects include full-stack app development with Firebase, authentication, QR code integration, and real-time features. Maintained a 5-star rating.',
      certifications: 'Certifications',
      cert1: 'Flutter & Dart: SOLID Principles and Design Patterns',
      cert1Issuer: 'Udemy',
      cert1Date: 'December 2025',
      cert2: 'BLoC/Cubit State Management — Advanced Flutter',
      cert2Issuer: 'Udemy',
      cert2Date: '2026',
      cert3: 'Flutter Mobile App Development (Android & iOS)',
      cert3Issuer: 'Black Horse Courses',
      cert3Date: 'September 2024',
    },
    // Services Section
    testimonials: {
      title: 'Client Testimonials',
      reviews: [
        {
          author: 'trailblazer1805',
          rating: 5,
          text: 'Was exceptional with the project. Helped with the tasks too',
          highlights: 'Went above and beyond • Proactive communication • Professionalism of work'
        },
        {
          author: 'trailblazer1805',
          rating: 5,
          text: 'Thank you for making our idea to reality. Was exceptional with the work, advice in the process and delivered on time.',
          highlights: 'Level of cooperation • Proactive communication • Deep understanding'
        },
        {
          author: 'trailblazer1805',
          rating: 5,
          text: 'Alaa was really helpful with generating my AAB file. Went as far as helping with my console account and upload',
          highlights: 'Deep understanding • Went above and beyond • Professionalism of work'
        }
      ]
    },
        services: {
      title: 'Services',
      flutterDev: {
        title: 'Flutter Development',
        description: 'Build scalable, maintainable mobile apps using Clean Architecture and modern state management.',
      },
      firebase: {
        title: 'Firebase Integration',
        description: 'Implement real-time features, authentication, and cloud services in your Flutter apps.',
      },
      figmaFlutter: {
        title: 'Figma to Flutter',
        description: 'Convert UI designs into pixel-perfect Flutter implementations with attention to detail.',
      },
      bugFix: {
        title: 'Bug Fixing & Optimization',
        description: 'Debug complex issues and optimize app performance across Android and iOS.',
      },
    },
    // Contact Section
    contact: {
      title: 'Get in Touch',
      credibility: '3 five-star reviews on Fiverr · 1 app in Google Play Production',
      phone: '+20 115 266 0001',
      khamsat: 'khamsat.com/user/alaa_flutter',
      mostaql: 'alaa_flutter',
      contactInfo: 'Contact Information',
      readyToWork: 'Ready to work together?',
      readyDesc: 'I\'m available for freelance projects and full-time opportunities. Let\'s discuss how I can help bring your ideas to life.',
      sendEmail: 'Send me an Email',
    },
    // Footer
    footer: {
      copyright: '© 2026 Alaa Eldin Wael. All rights reserved.',
    },
  },
  ar: {
    // Navigation
    nav: {
      skills: 'المهارات',
      projects: 'المشاريع',
      resume: 'السيرة الذاتية',
      services: 'الخدمات',
      contact: 'التواصل',
    },
    // Hero Section
    hero: {
      name: 'علاء الدين وائل',
      title: 'مطور Flutter',
      bio: 'أبني تطبيقات جوال قابلة للتوسع والصيانة باستخدام Clean Architecture وأنماط التصميم الحديثة — مع تطبيق واحد بالفعل مباشر في Google Play Production. متخصص في Flutter و Firebase و REST APIs.',
      hireMe: 'استأجرني على Fiverr',
      getInTouch: 'تواصل معي',
    },
    // Skills Section
    skills: {
      title: 'المهارات والخبرات',
      categories: {
        mobile: 'الجوال',
        stateManagement: 'إدارة الحالة',
        architecture: 'العمارة',
        storage: 'التخزين والبيانات',
        deployment: 'نشر التطبيق',
        backend: 'الخادم',
        services: 'الخدمات',
        tools: 'الأدوات',
        integrations: 'التكاملات',
      },
    },
    // Projects Section
    projects: {
      title: 'المشاريع المميزة',
      aura: {
        name: 'Aura',
        subtitle: 'تطبيق التجارة الإلكترونية',
        description: 'تطبيق تجارة إلكترونية كامل مع واجهة Flutter أمامية وخادم PHP/MySQL مخصص. يتضمن نظام متعدد الأدوار وسلة تسوق وطلبات وأكثر من 30 نقطة نهاية REST API.',
      },
      trackQR: {
        name: 'TrackQR',
        subtitle: 'تطبيق تتبع الموقع في الوقت الفعلي بناءً على رمز QR',
        description: 'بنيت وأطلقت تطبيق تتبع موقع كامل بناءً على رمز QR من التطوير إلى إطلاق Google Play Production الكامل لعميل Maverick. يتميز بـ Firebase Auth (Google + البريد الإلكتروني) وإنشاء رمز QR المدعوم بـ Firestore مرتبط بـ UIDs المستخدم وتتبع الخريطة المباشر مع Google Maps Flutter واللافتات الديناميكية المدعومة بـ Firebase Remote Config. أدرت دورة حياة مراجعة متجر Play الكاملة بما في ذلك إصلاحات الامتثال للسياسة وتحسين قائمة المتجر.',
        badge: 'مباشر على Google Play',
      },
      studyRoom: {
        name: 'StudyRoom',
        subtitle: 'منصة دراسة تعاونية في الوقت الفعلي',
        description: 'بناء منصة دراسة تعاونية في الوقت الفعلي باستخدام Flutter و BLoC/Cubit و Clean Architecture مع فصل صارم بين طبقات المجال والبيانات والعرض. تطبيق Firebase Realtime Database و Firestore معاً لمزامنة الجلسات المباشرة. تطبيق معمارية UseCase و Repository مع معالجة الأخطاء Either/dartz وحقن التبعية get_it.',
        badge: 'قيد التطوير',
      },
      mal3ab: {
        name: 'Mal3ab',
        subtitle: 'منصة حجز ملاعب كرة القدم',
        description: 'التطوير المشترك لتطبيق حجز ملاعب كرة القدم لسوق القاهرة باستخدام معمارية MVC-first في Flutter. واجهة ثنائية اللغة (العربية/الإنجليزية) مع نظام هوية العلامة التجارية المخصص. إعادة هندسة Clean Architecture مخطط لها بعد MVP.',
        badge: 'قيد التطوير',
      },
      firebaseChat: {
        name: 'تطبيق الدردشة Firebase',
        subtitle: 'المراسلة الفورية',
        description: 'تطبيق دردشة فوري يستخدم Firebase Auth و Cloud Firestore. يتعامل مع المصادقة والمزامنة الفورية للرسائل وعمليات CRUD.',
      },
      notesApp: {
        name: 'تطبيق الملاحظات',
        subtitle: 'التخزين المحلي و API',
        description: 'تطبيق ملاحظات Flutter مع تسجيل الدخول والتسجيل متصل بـ REST API مخصص. يتميز بواجهة نظيفة وعمليات CRUD مباشرة.',
      },

      techStack: 'مكدس التكنولوجيا',
      viewCode: 'عرض الكود',
      backend: 'الخادم',
    },
    // Resume Section
    resume: {
      title: 'الخبرة',
      downloadCV: 'تحميل السيرة الذاتية',
      education: 'التعليم',
      degree: 'بكالوريوس نظم معلومات الأعمال',
      school: 'أكاديمية العربية للعلوم والتكنولوجيا',
      location: 'القاهرة، مصر',
      experience: 'الخبرة العملية',
      jobTitle: 'مطور Flutter',
      company: 'عمل حر (عامل لحسابي الخاص)',
      period: 'فبراير 2025 – الحالي',
      jobDescription: 'بنيت وسلمت تطبيقات Flutter جوال متعددة بما في ذلك TrackQR، تطبيق تتبع موقع بناءً على رمز QR الآن مباشر في Google Play Production، مع تطبيق تجارة إلكترونية كامل (خادم PHP/MySQL)، وتطبيقات متكاملة مع Firebase وواجهات مستخرجة من تصاميم Figma. قمت بتشخيص وإصلاح خطأ منصة Android في الإنتاج يؤثر على أذونات الموقع الخلفي. متخصص في Clean Architecture و BLoC/Cubit و GetIt وتكامل REST API.',
      certifications: 'الشهادات',
      cert1: 'Flutter & Dart: SOLID Principles and Design Patterns',
      cert1Issuer: 'Udemy',
      cert1Date: 'December 2025',
      cert2: 'BLoC/Cubit State Management — Advanced Flutter',
      cert2Issuer: 'Udemy',
      cert2Date: '2026',
      cert3: 'Flutter Mobile App Development (Android & iOS)',
      cert3Issuer: 'Black Horse Courses',
      cert3Date: 'September 2024',
    },
    // Services Section
    testimonials: {
      title: 'آراء العملاء',
      reviews: [
        {
          author: 'trailblazer1805',
          rating: 5,
          text: 'كان استثنائياً مع المشروع. ساعد في المهام أيضاً',
          highlights: 'تجاوز التوقعات • تواصل استباقي • احترافية العمل'
        },
        {
          author: 'trailblazer1805',
          rating: 5,
          text: 'شكراً لتحويل فكرتنا إلى واقع. كان استثنائياً مع العمل والنصائح والتسليم في الوقت المحدد.',
          highlights: 'مستوى التعاون • تواصل استباقي • فهم عميق'
        },
        {
          author: 'trailblazer1805',
          rating: 5,
          text: 'كان علاء مفيداً جداً في إنشاء ملف AAB الخاص بي. ذهب إلى حد مساعدتي في حساب وحدة التحكم والتحميل',
          highlights: 'فهم عميق • تجاوز التوقعات • احترافية العمل'
        }
      ]
    },
        services: {
      title: 'الخدمات',
      flutterDev: {
        title: 'تطوير Flutter',
        description: 'بناء تطبيقات جوال قابلة للتوسع والصيانة باستخدام Clean Architecture وإدارة حالة حديثة.',
      },
      firebase: {
        title: 'تكامل Firebase',
        description: 'تطبيق ميزات فورية والمصادقة والخدمات السحابية في تطبيقات Flutter الخاصة بك.',
      },
      figmaFlutter: {
        title: 'من Figma إلى Flutter',
        description: 'تحويل تصاميم الواجهات إلى تطبيقات Flutter بدقة البكسل مع الاهتمام بالتفاصيل.',
      },
      bugFix: {
        title: 'إصلاح الأخطاء والتحسين',
        description: 'تصحيح المشاكل المعقدة وتحسين أداء التطبيق عبر Android و iOS.',
      },
    },
    // Contact Section
    contact: {
      title: 'تواصل معي',
      credibility: '3 تقييمات بـ 5 نجوم على Fiverr · 1 تطبيق في Google Play Production',
      phone: '+20 115 266 0001',
      khamsat: 'khamsat.com/user/alaa_flutter',
      mostaql: 'alaa_flutter',
      contactInfo: 'معلومات التواصل',
      readyToWork: 'هل أنت مستعد للعمل معي؟',
      readyDesc: 'أنا متاح للمشاريع الحرة والفرص بدوام كامل. دعنا نناقش كيف يمكنني مساعدتك في تحقيق أفكارك.',
      sendEmail: 'أرسل لي بريد إلكتروني',
    },
    // Footer
    footer: {
      copyright: '© 2026 علاء الدين وائل. جميع الحقوق محفوظة.',
    },
  },
};
