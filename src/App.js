import React, { useState, useRef, useEffect } from 'react';
import './App.css';

export default function App() {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [showPartners, setShowPartners] = useState(false);
  const [activeTab, setActiveTab] = useState('partners'); // 'partners', 'team', 'project'
  const [showGulfConsultLearnMore, setShowGulfConsultLearnMore] = useState(false);
  const [showGulfConsultArchQRModal, setShowGulfConsultArchQRModal] = useState(false);
  const [gulfConsultActiveTab, setGulfConsultActiveTab] = useState('tab1'); // 'tab1', 'tab2', 'tab3'
  const [showAntiqueLearnMore, setShowAntiqueLearnMore] = useState(false);
  const [antiqueActiveTab, setAntiqueActiveTab] = useState('tab3'); // 'tab1', 'tab2', 'tab3'
  const [showAMTLearnMore, setShowAMTLearnMore] = useState(false);
  const [amtActiveTab, setAmtActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [showAMTQRModal, setShowAMTQRModal] = useState(false);
  const [showGulfConsult2LearnMore, setShowGulfConsult2LearnMore] = useState(false);
  const [gulfConsult2ActiveTab, setGulfConsult2ActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [showGulfConsultQRModal, setShowGulfConsultQRModal] = useState(false);
  const [showGSGLearnMore, setShowGSGLearnMore] = useState(false);
  const [gsgActiveTab, setGsgActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Team, 'tab3' = Partners
  const [showGulfDorrahLearnMore, setShowGulfDorrahLearnMore] = useState(false);
  const [showCentralMedicalcareLearnMore, setShowCentralMedicalcareLearnMore] = useState(false);
  const [centralMedicalcareActiveTab, setCentralMedicalcareActiveTab] = useState('tab1'); // 'tab1' = Projects, 'tab2' = Partners, 'tab3' = Team
  const [showRKLearnMore, setShowRKLearnMore] = useState(false);
  const [showAHEnvironmentalLearnMore, setShowAHEnvironmentalLearnMore] = useState(false);
  const [ahEnvironmentalActiveTab, setAhEnvironmentalActiveTab] = useState('tab1'); // 'tab1' = Partners, 'tab2' = Team, 'tab3' = Projects
  const [showIDCLearnMore, setShowIDCLearnMore] = useState(false);
  const [showIDCQRModal, setShowIDCQRModal] = useState(false);
  const [showGTALearnMore, setShowGTALearnMore] = useState(false);
  const [dorrahVideoPlaying, setDorrahVideoPlaying] = useState(false);
  const [dorrahVideoFullscreen, setDorrahVideoFullscreen] = useState(false);
  const dorrahVideoContainerRef = useRef(null);
  const [amtVideoPlaying, setAmtVideoPlaying] = useState(false);
  const [amtVideoFullscreen, setAmtVideoFullscreen] = useState(false);
  const amtVideoContainerRef = useRef(null);
  const [tlcoVideoPlaying, setTlcoVideoPlaying] = useState(false);
  const [tlcoVideoFullscreen, setTlcoVideoFullscreen] = useState(false);
  const tlcoVideoContainerRef = useRef(null);
  const [gulfConsultVideoPlaying, setGulfConsultVideoPlaying] = useState(false);
  const [gulfConsultVideoFullscreen, setGulfConsultVideoFullscreen] = useState(false);
  const gulfConsultVideoContainerRef = useRef(null);
  const [gulfLogoVideoPlaying, setGulfLogoVideoPlaying] = useState(false);
  const [gulfLogoVideoFullscreen, setGulfLogoVideoFullscreen] = useState(false);
  const gulfLogoVideoContainerRef = useRef(null);
  const [antiqueVideoPlaying, setAntiqueVideoPlaying] = useState(false);
  const [antiqueVideoFullscreen, setAntiqueVideoFullscreen] = useState(false);
  const antiqueVideoContainerRef = useRef(null);
  const [idcVideoPlaying, setIdcVideoPlaying] = useState(false);
  const [idcVideoFullscreen, setIdcVideoFullscreen] = useState(false);
  const idcVideoContainerRef = useRef(null);
  const [gulfConsultArchVideoPlaying, setGulfConsultArchVideoPlaying] = useState(false);
  const [gulfConsultArchVideoFullscreen, setGulfConsultArchVideoFullscreen] = useState(false);
  const gulfConsultArchVideoContainerRef = useRef(null);
  const [centralMedicalcareVideoPlaying, setCentralMedicalcareVideoPlaying] = useState(false);
  const [centralMedicalcareVideoFullscreen, setCentralMedicalcareVideoFullscreen] = useState(false);
  const centralMedicalcareVideoContainerRef = useRef(null);

  // Home background sound + reveal animation (main page only)
  const [homeSoundEnabled, setHomeSoundEnabled] = useState(false);
  const [homeReveal, setHomeReveal] = useState(false);
  const [homeReturning, setHomeReturning] = useState(false);
  const [showChairmanMessage, setShowChairmanMessage] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [aboutUsTab, setAboutUsTab] = useState('who'); // 'who' | 'values' | 'vision'

  // Handle fullscreen change for Dorrah
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setDorrahVideoFullscreen(false);
        setDorrahVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for AMT
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setAmtVideoFullscreen(false);
        setAmtVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for TLCO
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setTlcoVideoFullscreen(false);
        setTlcoVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Gulf Consult
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setGulfConsultVideoFullscreen(false);
        setGulfConsultVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Gulf Logo (id === 12)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setGulfLogoVideoFullscreen(false);
        setGulfLogoVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Antique video (id === 2)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setAntiqueVideoFullscreen(false);
        setAntiqueVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for IDC video
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setIdcVideoFullscreen(false);
        setIdcVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Gulf Consult Architects video (id === 9)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setGulfConsultArchVideoFullscreen(false);
        setGulfConsultArchVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle fullscreen change for Central Medicalcare video (id === 3)
  useEffect(() => {
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        setCentralMedicalcareVideoFullscreen(false);
        setCentralMedicalcareVideoPlaying(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle Escape key to close AMT QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showAMTQRModal) {
        setShowAMTQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showAMTQRModal]);

  // Auto-close AMT QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showAMTQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowAMTQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showAMTQRModal]);

  // Handle Escape key to close IDC QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showIDCQRModal) {
        setShowIDCQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showIDCQRModal]);

  // Auto-close IDC QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showIDCQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowIDCQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showIDCQRModal]);

  // Handle Escape key to close Gulf Consult QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showGulfConsultQRModal) {
        setShowGulfConsultQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showGulfConsultQRModal]);

  // Auto-close Gulf Consult QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showGulfConsultQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowGulfConsultQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showGulfConsultQRModal]);

  // Handle Escape key to close Gulf Consult Arch QR Modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showGulfConsultArchQRModal) {
        setShowGulfConsultArchQRModal(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showGulfConsultArchQRModal]);

  // Auto-close Gulf Consult Arch QR Modal after 90 seconds of inactivity
  useEffect(() => {
    if (!showGulfConsultArchQRModal) return;

    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setShowGulfConsultArchQRModal(false);
      }, 90000); // 90 seconds (1.5 minutes)
    };

    const handleActivity = () => {
      resetTimer();
    };

    // Start the timer
    resetTimer();

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach(event => {
      document.addEventListener(event, handleActivity, true);
    });

    return () => {
      clearTimeout(inactivityTimer);
      events.forEach(event => {
        document.removeEventListener(event, handleActivity, true);
      });
    };
  }, [showGulfConsultArchQRModal]);

  // Auto-redirect to homepage after 90 seconds of inactivity on company/Learn More pages
  useEffect(() => {
    // Check if we're on a company page or Learn More page
    const isOnCompanyOrLearnMorePage = () => {
      return selectedCompany !== null || 
             showGulfConsultLearnMore || 
             showAntiqueLearnMore || 
             showAMTLearnMore || 
             showGulfConsult2LearnMore || 
             showGSGLearnMore || 
             showGulfDorrahLearnMore || 
             showCentralMedicalcareLearnMore || 
             showRKLearnMore || 
             showAHEnvironmentalLearnMore || 
             showIDCLearnMore || 
             showGTALearnMore;
    };

    // Check if any video is playing or modal/overlay is open
    const isVideoOrModalOpen = () => {
      return amtVideoFullscreen || 
             idcVideoFullscreen || 
             antiqueVideoFullscreen || 
             centralMedicalcareVideoFullscreen || 
             gulfConsultArchVideoFullscreen || 
             dorrahVideoFullscreen || 
             tlcoVideoFullscreen || 
             gulfConsultVideoFullscreen || 
             gulfLogoVideoFullscreen ||
             showChairmanMessage ||
             showAboutUs;
    };

    // Function to navigate back to homepage
    const navigateToHomepage = () => {
      // Close all company pages and Learn More modals
      setSelectedCompany(null);
      setShowGulfConsultLearnMore(false);
      setShowAntiqueLearnMore(false);
      setShowAMTLearnMore(false);
      setShowGulfConsult2LearnMore(false);
      setShowGSGLearnMore(false);
      setShowGulfDorrahLearnMore(false);
      setShowCentralMedicalcareLearnMore(false);
      setShowRKLearnMore(false);
      setShowAHEnvironmentalLearnMore(false);
      setShowIDCLearnMore(false);
      setShowGTALearnMore(false);
      setShowPartners(false);
      setActiveTab('partners');
      
      // Reset home state
      setHomeReturning(true);
      setTimeout(() => setHomeReturning(false), 600);
    };

    // Only run if we're on a company or Learn More page
    if (!isOnCompanyOrLearnMorePage()) {
      return;
    }

    let inactivityTimer = null;
    const INACTIVITY_TIMEOUT = 90000; // 90 seconds in milliseconds

    // Function to reset the inactivity timer
    const resetInactivityTimer = () => {
      // Clear existing timer
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }

      // Don't start timer if video or modal is open
      if (isVideoOrModalOpen()) {
        return;
      }

      // Set new timer
      inactivityTimer = setTimeout(() => {
        // Double-check we're still on a company/Learn More page and no video/modal is open
        if (isOnCompanyOrLearnMorePage() && !isVideoOrModalOpen()) {
          navigateToHomepage();
        }
      }, INACTIVITY_TIMEOUT);
    };

    // Activity event handlers
    const handleActivity = () => {
      resetInactivityTimer();
    };

    // Track mouse movement
    const handleMouseMove = () => {
      handleActivity();
    };

    // Track clicks
    const handleClick = () => {
      handleActivity();
    };

    // Track scrolling
    const handleScroll = () => {
      handleActivity();
    };

    // Track keyboard input
    const handleKeyDown = () => {
      handleActivity();
    };

    // Track touch events (for mobile)
    const handleTouchStart = () => {
      handleActivity();
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll, true); // Use capture for scroll
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, true);

    // Start the timer initially
    resetInactivityTimer();

    // Cleanup
    return () => {
      if (inactivityTimer) {
        clearTimeout(inactivityTimer);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [
    selectedCompany,
    showGulfConsultLearnMore,
    showAntiqueLearnMore,
    showAMTLearnMore,
    showGulfConsult2LearnMore,
    showGSGLearnMore,
    showGulfDorrahLearnMore,
    showCentralMedicalcareLearnMore,
    showRKLearnMore,
    showAHEnvironmentalLearnMore,
    showIDCLearnMore,
    showGTALearnMore,
    amtVideoFullscreen,
    idcVideoFullscreen,
    antiqueVideoFullscreen,
    centralMedicalcareVideoFullscreen,
    gulfConsultArchVideoFullscreen,
    dorrahVideoFullscreen,
    tlcoVideoFullscreen,
    gulfConsultVideoFullscreen,
    gulfLogoVideoFullscreen,
    showChairmanMessage,
    showAboutUs
  ]);

  // Disable right-click context menu globally across the entire website
  useEffect(() => {
    // Prevent context menu on right-click (works globally via event capture)
    const handleContextMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable common developer tools shortcuts
    const handleKeyDown = (e) => {
      // F12 - Developer Tools
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I - Developer Tools
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+J - Console
      if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+U - View Source
      if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+C - Element Inspector
      if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) {
        e.preventDefault();
        return false;
      }
      // Ctrl+S - Save Page (can be used to save images)
      if (e.ctrlKey && (e.key === 'S' || e.key === 's')) {
        e.preventDefault();
        return false;
      }
    };

    // Use capture phase to catch events before they reach target elements
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('keydown', handleKeyDown, true);
    
    // Also add to window for additional coverage
    window.addEventListener('contextmenu', handleContextMenu, true);
    window.addEventListener('keydown', handleKeyDown, true);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      window.removeEventListener('contextmenu', handleContextMenu, true);
      window.removeEventListener('keydown', handleKeyDown, true);
    };
  }, []);

  // Helper function to close video and exit fullscreen - use useCallback to ensure it's stable
  const closeVideo = React.useCallback((setVideoFullscreen, setVideoPlaying) => {
    // Small delay for smooth transition
    setTimeout(() => {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      setVideoFullscreen(false);
      setVideoPlaying(false);
    }, 300);
  }, []);

  // Handle video end events for all videos - auto-close when finished
  useEffect(() => {
    const handleMessage = (event) => {
      // Listen for Cloudinary player events from their domain
      if (!event.origin || !event.origin.includes('cloudinary.com')) {
        // Also check for events from the same origin (for local testing)
        if (event.origin && !event.origin.includes('localhost') && !event.origin.includes('127.0.0.1')) {
          return;
        }
      }
      
      // Cloudinary sends events in various formats
      if (event.data) {
        let eventType = null;
        let eventData = event.data;
        
        // Handle object format
        if (typeof eventData === 'object') {
          eventType = eventData.event || eventData.eventName || eventData.type || eventData.name || eventData.eventType;
          // Also check nested properties
          if (!eventType && eventData.data) {
            eventType = eventData.data.event || eventData.data.eventName || eventData.data.type;
          }
        }
        // Handle string format (JSON stringified)
        else if (typeof eventData === 'string') {
          try {
            const parsed = JSON.parse(eventData);
            eventType = parsed.event || parsed.eventName || parsed.type || parsed.name || parsed.eventType;
            if (!eventType && parsed.data) {
              eventType = parsed.data.event || parsed.data.eventName || parsed.data.type;
            }
          } catch (e) {
            // Not JSON, check if it's a direct string event
            const lowerData = eventData.toLowerCase();
            if (lowerData.includes('ended') || lowerData.includes('complete') || 
                lowerData.includes('videoend') || lowerData.includes('playback-ended')) {
              eventType = 'ended';
            }
          }
        }
        
        // Check for video end events - comprehensive list
        if (eventType === 'ended' || eventType === 'video-ended' || eventType === 'complete' || 
            eventType === 'playback-ended' || eventType === 'videoend' || eventType === 'end' ||
            eventType === 'video_complete' || eventType === 'playback_complete') {
          // Auto-close all videos when they end
          if (amtVideoFullscreen) {
            closeVideo(setAmtVideoFullscreen, setAmtVideoPlaying);
          }
          if (idcVideoFullscreen) {
            closeVideo(setIdcVideoFullscreen, setIdcVideoPlaying);
          }
          if (antiqueVideoFullscreen) {
            closeVideo(setAntiqueVideoFullscreen, setAntiqueVideoPlaying);
          }
          if (centralMedicalcareVideoFullscreen) {
            closeVideo(setCentralMedicalcareVideoFullscreen, setCentralMedicalcareVideoPlaying);
          }
          if (gulfConsultArchVideoFullscreen) {
            closeVideo(setGulfConsultArchVideoFullscreen, setGulfConsultArchVideoPlaying);
          }
          if (dorrahVideoFullscreen) {
            closeVideo(setDorrahVideoFullscreen, setDorrahVideoPlaying);
          }
          if (tlcoVideoFullscreen) {
            closeVideo(setTlcoVideoFullscreen, setTlcoVideoPlaying);
          }
          if (gulfConsultVideoFullscreen) {
            closeVideo(setGulfConsultVideoFullscreen, setGulfConsultVideoPlaying);
          }
          if (gulfLogoVideoFullscreen) {
            closeVideo(setGulfLogoVideoFullscreen, setGulfLogoVideoPlaying);
          }
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [amtVideoFullscreen, idcVideoFullscreen, antiqueVideoFullscreen, centralMedicalcareVideoFullscreen, gulfConsultArchVideoFullscreen, dorrahVideoFullscreen, tlcoVideoFullscreen, gulfConsultVideoFullscreen, gulfLogoVideoFullscreen]);

  // Additional detection: Listen for iframe visibility changes that might indicate video end
  useEffect(() => {
    const handleVisibilityChange = () => {
      // If page becomes visible and video is playing, check if it ended
      if (!document.hidden) {
        // This is a fallback - the postMessage handler should catch it first
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Company logos data - AMT أسفل Central Care (بين AH و GC)
  // GTA next to AMT, Antique next to AH Environmental
  const companies = [
    // Right side - pattern (1-2-2-1) moving southeast
    // Row 1: 2 squares - Gulf Logo between IDC and GSG (at top of TLCO)
    { id: 1, logo: '/IDC.png', row: 1, col: 4, name: 'IDC', bgImage: '/idcbg.png' },
    { id: 12, logo: '/gulf-logo.png', row: 1, col: 5, name: 'Gulf Logo', bgImage: '/gulfconsultbg.png', modalLogo: '/Gulf-white.png' },
    // Row 2: 2 squares
    { id: 10, logo: '/tico.png', row: 2, col: 4, name: 'TLCO', bgImage: '/elco-gif.gif' },
    { id: 11, logo: '/gsg.png', row: 2, col: 5, name: 'GSG', bgImage: '/gcg-gif.gif' },
    // Row 3: 4 squares - Gulf Consult next to Antique
    { id: 9,  logo: '/GULF-CONSULT.png', row: 3, col: 2, name: 'Gulf Consult', bgImage: '/GC-bg.jpeg', modalLogo: '/GULF-CONSULT.png' },
    { id: 2, logo: '/antique.png', row: 3, col: 3, name: 'Antique', bgImage: '/ant-git.gif', modalLogo: '/antiqqe.png' },
    { id: 5,  logo: '/AH-ENVIRONMENTAL.png', row: 3, col: 4, name: 'AH Environmental', bgImage: '/ah-gif.gif', modalLogo: '/ah-white.png' },
    { id: 3,  logo: '/cc.png', row: 3, col: 5, name: 'Central Care', bgImage: '/rk-gif.gif' },
    // Row 4: 4 squares - RK between Central Care and AMT (at left of AH Environmental)
    { id: 7,  logo: '/dorrah.png', row: 4, col: 2, name: 'Al Dorrah', bgImage: '/dorrah-gif.gif' },
    { id: 4,  logo: '/GTA.png', row: 4, col: 3, name: 'GTA', bgImage: '/GTA-bg.jpeg' },
    { id: 8,  logo: '/AMT.png', row: 4, col: 4, name: 'AMT', bgImage: '/amt-bg.JPEG', modalLogo: '/amt-internal.jpg' },
    { id: 6,  logo: '/RK.png', row: 4, col: 5, name: 'RK', bgImage: '/rk1-gif.gif' },
  ];







  return (
    <div
      className={`home-root${homeReveal ? ' is-reveal' : ''}${homeReturning ? ' is-return' : ''}`}
      style={{
      width: '100vw',
      height: '100vh',
      background: '#9FB2BC',
      display: 'flex',
      overflow: 'hidden',
      fontFamily: 'Arial, sans-serif',
      position: 'relative',
      aspectRatio: '16/9',
      minHeight: '100vh',
      minWidth: '100vw'
      }}
    >
      {/* Background Video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          opacity: homeSoundEnabled ? 1 : 0.3,
          overflow: 'hidden'
        }}
      >
        <iframe
          key={homeSoundEnabled ? 'bg-sound-on' : 'bg-sound-off'}
          src={`https://player.cloudinary.com/embed/?cloud_name=dl2rqs0lo&public_id=alika_final_2_pttcrz&profile=cld-default&autoplay=true&muted=${homeSoundEnabled ? 'false' : 'true'}&loop=true&controls=false&playsinline=true`}
          title="Alika Background Video"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100%',
            height: '100%',
            transform: 'translate(-50%, -50%) scale(1.2)',
            transformOrigin: 'center',
            border: 0,
            pointerEvents: 'none'
          }}
        />
      </div>

      {/* Home action button (enable sound + reveal animation) */}
      {!homeSoundEnabled && (
        <button
          type="button"
          className="home-sound-btn"
          onClick={() => {
            setHomeSoundEnabled(true);
            setHomeReveal(true);
            setHomeReturning(false);
            setShowChairmanMessage(false);
          }}
          aria-label="Enable background video sound"
        >
          Enable Sound
        </button>
      )}

      {/* Back button (return to main UI) */}
      {homeSoundEnabled && (
        <button
          type="button"
          className="home-back-btn"
          onClick={() => {
            setHomeSoundEnabled(false);
            setHomeReveal(false);
            setHomeReturning(true);
            window.setTimeout(() => setHomeReturning(false), 720);
            setShowChairmanMessage(false);
          }}
          aria-label="Back to Alika"
        >
          Back to Alika
        </button>
      )}

      {/* Chairman message button (home only) - always visible when not on sound screen */}
      {!homeSoundEnabled && (
        <button
          type="button"
          className={`home-chairman-btn ${showChairmanMessage ? 'active' : ''}`}
          onClick={() => {
            if (showChairmanMessage) {
              setShowChairmanMessage(false);
            } else {
              setShowChairmanMessage(true);
              setShowAboutUs(false);
            }
            setHomeReveal(false);
            setHomeReturning(false);
          }}
          aria-label="Message from the Chairman"
        >
          Message from the Chairman
        </button>
      )}

      {/* About us button (home only) - always visible when not on sound screen */}
      {!homeSoundEnabled && (
        <button
          type="button"
          className={`home-about-btn ${showAboutUs ? 'active' : ''}`}
          onClick={() => {
            if (showAboutUs) {
              setShowAboutUs(false);
            } else {
              setShowAboutUs(true);
              setAboutUsTab('who');
              setShowChairmanMessage(false);
            }
            setHomeReveal(false);
            setHomeReturning(false);
          }}
          aria-label="About us"
        >
          About us
        </button>
      )}

      {/* About us overlay */}
      {showAboutUs && (
        <div
          className="about-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="About us"
          onClick={() => setShowAboutUs(false)}
        >
          <div className="about-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="about-close"
              onClick={() => setShowAboutUs(false)}
              aria-label="Back to Alika"
            >
              Back to Alika
            </button>

            <div className="about-header">
              <div className="about-title">About us</div>
              <div className="about-tabs" role="tablist" aria-label="About us tabs">
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutUsTab === 'who'}
                  className={`about-tab${aboutUsTab === 'who' ? ' is-active' : ''}`}
                  onClick={() => setAboutUsTab('who')}
                >
                  Who We Are
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutUsTab === 'values'}
                  className={`about-tab${aboutUsTab === 'values' ? ' is-active' : ''}`}
                  onClick={() => setAboutUsTab('values')}
                >
                  Our Values
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={aboutUsTab === 'vision'}
                  className={`about-tab${aboutUsTab === 'vision' ? ' is-active' : ''}`}
                  onClick={() => setAboutUsTab('vision')}
                >
                  Our Vision
                </button>
              </div>
            </div>

            <div className="about-body">
              {aboutUsTab === 'who' && (
                <div className="about-who">
                  <div className="about-hero-wrapper">
                    <img className="about-hero" src="/whoweare.jpg" alt="Who we are" />
                  </div>
                  <div className="about-copy">
                    <div className="about-h1">Who We Are</div>
                    <div className="about-text">
                      We at ALIKA Holding Group, a leading Saudi investment group, we manage and grow our assets through a diversified portfolio that spans strategic sectors such as professional services, technology and communications, healthcare, and real estate development. We believe that smart investment is the true driver of sustainable growth; therefore, we rely on our innovative vision to seize promising opportunities and build long-term investments that enhance our operational efficiency and increase the value of our subsidiaries. Through this approach, we continue to strengthen our competitive position and create lasting value for our shareholders and partners.
                    </div>
                  </div>
                </div>
              )}

              {aboutUsTab === 'values' && (
                <div className="about-who">
                  <div className="about-hero-wrapper">
                    <img className="about-hero" src="/ourvalues.jpg" alt="Our values" />
                  </div>
                  <div className="about-copy">
                    <div className="about-h1">Our Values</div>
                    <div className="about-text">
                      At ALIKA Holding Group, we believe that our success is built on a solid foundation of values that guide every aspect of our work. Integrity and transparency represent our unwavering commitment in all dealings, while the spirit of teamwork defines our professional and inspiring work environment, fostering performance, quality, and innovation. We place quality and continuous improvement at the heart of our operations, recognizing that development and innovation are the path to sustainable success. Equally, we prioritize sustainability in our environmental and social impact, alongside our commitment to empowering national talent as the true driver of growth and progress.
                    </div>
                  </div>
                </div>
              )}

              {aboutUsTab === 'vision' && (
                <div className="about-who">
                  <div className="about-hero-wrapper">
                    <img
                      className="about-hero"
                      src="/ourvission.jpg"
                      alt="Our vision"
                    />
                  </div>
                  <div className="about-copy">
                    <div className="about-h1">Our Vision</div>
                    <div className="about-text vision-heading">
                      Strategic Investments for Sustainable Growth
                    </div>
                    <div className="about-text">
                      We manage a diversified portfolio of investment assets guided by well-defined strategies
                      designed to ensure sustainable growth and continuity. Our approach focuses on creating
                      long-term value that strengthens the interests of our partners and supports their future
                      ambitions.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Exit chairman message (button is rendered inside the chairman card for better proximity) */}

      {/* Foreground UI (logos / Alika / grid) */}
      <div className="home-foreground" style={{ display: 'flex', width: '100%', height: '100%' }}>
        {/* Left side - Company info */}
        <div className="home-left" style={{
          flex: '0 0 var(--left-panel-width, 35%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--main-padding, clamp(20px, 3vw, 60px)) clamp(20px, 2.5vw, 40px)',
          position: 'relative',
          zIndex: 10
        }}>
          {/* Logo or Chairman Message */}
          <div style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            minHeight: showChairmanMessage ? 'auto' : 'clamp(300px, 40vh, 600px)',
            maxHeight: showChairmanMessage ? '90vh' : 'none',
            overflowY: showChairmanMessage ? 'auto' : 'visible'
          }}>
            {!showChairmanMessage ? (
              <img
                src="/alika.png"
                alt="Alika Logo"
                className="left-hero-item left-hero-item--alika"
                style={{
                  width: 'var(--main-logo-size, clamp(200px, 30vw, 700px))',
                  height: 'auto',
                  maxWidth: '100%',
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
              />
            ) : (
              <div 
                className="chairman-message-container chairman-scrollable"
                style={{
                  width: '100%',
                  maxWidth: 'clamp(350px, 45vw, 600px)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  animation: 'slideUpFromBottom 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  padding: 'clamp(25px, 3vw, 40px)',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 41, 59, 0.9) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                }}
              >
                {/* Chairman Image */}
                <div style={{
                  position: 'relative',
                  width: 'clamp(120px, 12vw, 200px)',
                  height: 'clamp(120px, 12vw, 200px)',
                  marginBottom: 'clamp(15px, 2vw, 25px)'
                }}>
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '3px solid rgba(255, 255, 255, 0.4)',
                    padding: '6px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                  }}>
                    <img 
                      src="/chairman.png" 
                      alt="Eng. Ali Khudair Al Harbi"
                      style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block'
                      }}
                    />
                  </div>
                </div>

                {/* Title */}
                <div style={{
                  textAlign: 'center',
                  marginBottom: 'clamp(12px, 1.5vw, 20px)'
                }}>
                  <div style={{
                    fontSize: 'clamp(10px, 1vw, 14px)',
                    fontWeight: '600',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'rgba(255, 255, 255, 0.9)',
                    marginBottom: 'clamp(8px, 1vw, 12px)',
                    position: 'relative',
                    display: 'inline-block'
                  }}>
                    <span style={{
                      position: 'absolute',
                      left: '-25px',
                      top: '50%',
                      width: '20px',
                      height: '1px',
                      background: 'rgba(255, 255, 255, 0.4)'
                    }} />
                    Message from the Chairman
                    <span style={{
                      position: 'absolute',
                      right: '-25px',
                      top: '50%',
                      width: '20px',
                      height: '1px',
                      background: 'rgba(255, 255, 255, 0.4)'
                    }} />
                  </div>
                  <h2 style={{
                    fontSize: 'clamp(16px, 1.8vw, 28px)',
                    fontWeight: '300',
                    letterSpacing: '1px',
                    color: '#ffffff',
                    margin: 0,
                    lineHeight: '1.3',
                    fontFamily: 'inherit'
                  }}>
                    Eng. Ali Khudair Al Harbi
                  </h2>
                </div>

                {/* Message Text */}
                <div style={{
                  position: 'relative',
                  padding: 'clamp(20px, 2.5vw, 35px) clamp(18px, 2vw, 28px)',
                  marginBottom: 0,
                  width: '100%'
                }}>
                  <p 
                    dir="ltr"
                    style={{
                      fontSize: 'clamp(12px, 1.2vw, 18px)',
                      lineHeight: '1.7',
                      color: '#ffffff',
                      fontWeight: '400',
                      letterSpacing: '0.3px',
                      margin: 0,
                      textAlign: 'center',
                      fontStyle: 'italic',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.4), 0 0 3px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    A legacy of success, leadership, and development supports our promising long-term investment strategy and strengthens our ambitious vision for sustainable growth. We move forward toward a future that extends from one generation to the next.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Diamond grid */}
        <div className="home-right" style={{
          flex: '0 0 var(--right-panel-width, 65%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: 'var(--main-padding, clamp(20px, 3vw, 60px)) clamp(20px, 2.5vw, 40px) clamp(20px, 3vw, 60px) clamp(20px, 4vw, 80px)',
          overflow: 'hidden'
        }}>

        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(5, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
          gridTemplateRows: `repeat(4, var(--grid-item-size, clamp(70px, 7vw, 115px)))`,
          gap: 'var(--grid-gap, clamp(12px, 1.2vw, 20px))',
          transform: 'rotate(45deg) translate(clamp(20px, 4vw, 60px), clamp(30px, 5vh, 90px))',
          position: 'relative'
        }}>
          {companies.map((company) => {
            const isGulfConsult = company.logo.toLowerCase().includes('gulf-consult');

            return (
              <div
                key={company.id}
                style={{
                  gridColumn: company.col,
                  gridRow: company.row,
                  position: 'relative'
                }}
              >
              {/* Backlighting glow effect - REMOVED */}
                  <div
                    style={{
                      cursor: company.id === 10 || company.id === 3 || company.id === 11 || company.id === 1 || company.id === 6 || company.id === 5 || company.id === 2 || company.id === 7 || company.id === 8 || company.id === 9 || company.id === 12 || company.id === 4 ? 'pointer' : 'default',
                      width: '100%',
                      height: '100%',
                      minWidth: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                      minHeight: 'var(--grid-item-size, clamp(70px, 7vw, 115px))',
                      background: '#E8E8E8',
                      border: '1px solid rgba(200, 200, 200, 0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      borderRadius: '4px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                      position: 'relative',
                      zIndex: 1
                    }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
                }}
                onClick={(e) => {
                  if (company.id === 10 || company.id === 3 || company.id === 11 || company.id === 1 || company.id === 6 || company.id === 5 || company.id === 2 || company.id === 7 || company.id === 8 || company.id === 9 || company.id === 12 || company.id === 4) {
                    // احصل على موضع العنصر الحالي
                    const rect = e.currentTarget.getBoundingClientRect();
                    sessionStorage.setItem('logoStartX', rect.left);
                    sessionStorage.setItem('logoStartY', rect.top);
                    setSelectedCompany(company);
                  }
                }}
              >
              <div style={{
                transform: 'rotate(-45deg)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100%',
                padding: '10px'
              }}>
                <img 
                  src={company.logo} 
                  alt={isGulfConsult ? 'Gulf Consult' : 'Company logo'}
                  style={{
                    maxWidth: isGulfConsult ? '98%' : '90%',
                    maxHeight: isGulfConsult ? '90%' : '75%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    marginBottom: '0px',
                    filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
              </div>
            </div>
            );
          })}
        </div>
        </div>
      </div>


      {/* Full Screen Background */}
      {selectedCompany && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: selectedCompany.id === 8 ? 'none' : `url(${selectedCompany.bgImage || selectedCompany.logo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: selectedCompany.id === 8 ? '#0a0a0a' : 'transparent',
          zIndex: 1000,
          animation: 'fadeIn 0.6s ease-in-out'
        }}>
          {/* Special layout for AMT */}
          {selectedCompany.id === 8 ? (
            <>
              {/* AMT Background Image */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${selectedCompany.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.3,
                zIndex: 1
              }} />
              
              {/* AMT Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: 'clamp(30px, 3vh, 60px)',
                left: 'clamp(40px, 4vw, 80px)',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--amt-logo-size, clamp(300px, 25vw, 500px))',
                    maxHeight: 'var(--amt-logo-height, clamp(150px, 12vw, 250px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(255, 0, 0, 0.5))'
                  }}
                />
              </div>

              {/* AMT Internal Image - Top Right */}
              <div style={{
                position: 'fixed',
                top: 'clamp(280px, 28vh, 420px)',
                right: 'clamp(50px, 5vw, 100px)',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both'
              }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src={selectedCompany.modalLogo}
                  alt="AMT Internal"
                  style={{
                    maxWidth: 'var(--amt-internal-image-size, clamp(450px, 50vw, 700px))',
                    maxHeight: 'var(--amt-internal-image-size, clamp(450px, 50vw, 700px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
                
                {/* Play Button on AMT Image */}
                {!amtVideoFullscreen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      zIndex: 12,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer'
                    }}
                    onClick={async (e) => {
                      e.stopPropagation();
                      if (amtVideoContainerRef.current) {
                        try {
                          // فتح fullscreen
                          setAmtVideoFullscreen(true);
                          setAmtVideoPlaying(true);
                          
                          let fullscreenPromise;
                          if (amtVideoContainerRef.current.requestFullscreen) {
                            fullscreenPromise = amtVideoContainerRef.current.requestFullscreen();
                          } else if (amtVideoContainerRef.current.webkitRequestFullscreen) {
                            fullscreenPromise = amtVideoContainerRef.current.webkitRequestFullscreen();
                          } else if (amtVideoContainerRef.current.msRequestFullscreen) {
                            fullscreenPromise = amtVideoContainerRef.current.msRequestFullscreen();
                          }
                          
                          // انتظار fullscreen
                          if (fullscreenPromise) {
                            await fullscreenPromise;
                          }
                        } catch (error) {
                          console.error('Error opening fullscreen:', error);
                        }
                      }
                    }}
                  >
                    {/* Animation Text */}
                    <div
                      style={{
                        color: '#ffffff',
                        fontSize: 'clamp(14px, 1.6vw, 22px)',
                        fontWeight: '600',
                        marginBottom: 'clamp(16px, 2vh, 24px)',
                        textAlign: 'center',
                        animation: 'pulse 2s ease-in-out infinite',
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                      }}
                    >
                      Click to play video
                    </div>
                    
                    {/* Play Button */}
                    <div
                      style={{
                        width: 'var(--amt-play-button-size, clamp(90px, 8vw, 130px))',
                        height: 'var(--amt-play-button-size, clamp(90px, 8vw, 130px))',
                        borderRadius: '50%',
                        background: 'rgba(255, 75, 75, 0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 20px rgba(255, 75, 75, 0.4)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 75, 75, 1)';
                        e.currentTarget.style.transform = 'scale(1.1)';
                        e.currentTarget.style.boxShadow = '0 6px 30px rgba(255, 75, 75, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 75, 75, 0.9)';
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 75, 75, 0.4)';
                      }}
                    >
                      <svg
                        width="clamp(40px, 4vw, 60px)"
                        height="clamp(40px, 4vw, 60px)"
                        viewBox="0 0 24 24"
                        fill="white"
                        style={{ marginLeft: '6px' }}
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}
                </div>
              </div>

              {/* AMT Video - Hidden for fullscreen */}
              <div
                ref={amtVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: amtVideoFullscreen ? '0' : '-9999px',
                  top: amtVideoFullscreen ? '0' : '-9999px',
                  width: amtVideoFullscreen ? '100vw' : '0',
                  height: amtVideoFullscreen ? '100vh' : '0',
                  zIndex: amtVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {amtVideoFullscreen && (
                  <video
                    key={`amt-video-${amtVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/amt_ecx4u7.mp4"
                    autoPlay
                    controls
                    style={{
                      height: '100%',
                      width: '100%',
                      maxHeight: '100vh',
                      maxWidth: '100vw',
                      objectFit: 'contain'
                    }}
                    onEnded={() => {
                      closeVideo(setAmtVideoFullscreen, setAmtVideoPlaying);
                    }}
                  />
                )}
                {amtVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setAmtVideoFullscreen(false);
                      setAmtVideoPlaying(false);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10000
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* AMT Text Content - Bottom Left */}
              <div
                className="amt-content"
                style={{
                  maxWidth: 'var(--amt-content-max-width, clamp(600px, 50vw, 900px))',
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--amt-title-size, clamp(28px, 3.8vw, 52px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 2vh, 24px)',
                    letterSpacing: '1.6px',
                    color: '#ff4b4b',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
                  }}
                >
                  ADVANCED MICRO TECHNOLOGIES
                </h1>

                <p
                  style={{
                    fontSize: 'var(--amt-text-size, clamp(15px, 1.7vw, 24px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(20px, 3vh, 32px)',
                    color: '#f9fafb',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  Advanced Micro Technologies (AMT) is a Saudi company providing IT and telecommunications services, including data center design, cybersecurity, and low current systems such as surveillance and alarms.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(20px, 4vw, 50px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                    marginBottom: '8px'
                  }}
                >
                  <div style={{
                    fontSize: 'var(--amt-info-size, clamp(15px, 1.7vw, 24px))',
                    lineHeight: '2',
                    color: '#f9fafb',
                    flex: '1'
                  }}>
                  <div style={{ marginBottom: 'clamp(10px, 1.5vh, 18px)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Managers:</strong>
                    <span>Eyad Matar</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(10px, 1.5vh, 18px)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Mobile:</strong>
                    <span>050 582 7033</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(10px, 1.5vh, 18px)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Email:</strong>
                    <span>eyad.matar@amt-arabia.net</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Website:</strong>
                    <span>www.amt-arabia.net</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/amtqr.jpeg"
                      alt="AMT QR Code"
                      onClick={() => setShowAMTQRModal(true)}
                      style={{
                        maxWidth: 'var(--amt-qr-size, clamp(160px, 18vw, 240px))',
                        maxHeight: 'var(--amt-qr-size, clamp(160px, 18vw, 240px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 12px)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowAMTLearnMore(true)}
                  style={{
                    marginTop: 'clamp(20px, 3vh, 36px)',
                    padding: 'var(--amt-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                    fontSize: 'var(--amt-button-font, clamp(16px, 1.8vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#ff4b4b',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 75, 75, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 75, 75, 0.5)';
                    e.currentTarget.style.background = '#ff6666';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 75, 75, 0.4)';
                    e.currentTarget.style.background = '#ff4b4b';
                  }}
                >
                  Learn More
                </button>
              </div>
            </>
          ) : selectedCompany.id === 1 ? (
            <>
              {/* IDC Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: 'var(--idc-logo-top, clamp(10px, 1.5vh, 30px))',
                left: 'var(--idc-logo-left, clamp(30px, 3vw, 60px))',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--idc-logo-size, clamp(200px, 18vw, 300px))',
                    maxHeight: 'var(--idc-logo-size, clamp(200px, 18vw, 300px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* IDC Content - Left */}
              <div className="idc-content" style={{
                maxWidth: 'var(--idc-content-max-width, 720px)',
                color: '#0b2239',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: 'var(--idc-title-size, clamp(26px, 3.2vw, 40px))',
                  fontWeight: '900',
                  marginBottom: 'var(--idc-content-gap, clamp(16px, 2vh, 24px))',
                  letterSpacing: '1.5px',
                  color: '#0b6fbf',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  IDC CONTRACTING COMPANY
                </h1>

                <p style={{
                  fontSize: 'var(--idc-text-size, clamp(13px, 1.35vw, 17px))',
                  lineHeight: '1.9',
                  marginBottom: 'var(--idc-content-gap, clamp(16px, 2vh, 24px))',
                  color: '#0b2239',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  IDC Contracting Company is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). IDC specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}>
                  <div style={{
                  fontSize: 'var(--idc-info-size, clamp(13px, 1.35vw, 17px))',
                  lineHeight: '2',
                    color: '#0b2239',
                    flex: '1'
                }}>
                  <div style={{ marginBottom: 'calc(var(--idc-content-gap, 16px) * 0.6)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '800' }}>Managers:</strong>
                    <span>Bassam Al Masri.</span>
                  </div>
                  <div style={{ marginBottom: 'calc(var(--idc-content-gap, 16px) * 0.6)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '800' }}>Mobile:</strong>
                    <span>050 833 8830</span>
                  </div>
                  <div style={{ marginBottom: 'calc(var(--idc-content-gap, 16px) * 0.6)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '800' }}>Email:</strong>
                    <span>bassam.almasri@idc-arabia.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '800' }}>Website:</strong>
                    <span>www.idc-arabia.com</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/idcqr.jpeg"
                      alt="IDC QR Code"
                      onClick={() => setShowIDCQRModal(true)}
                      style={{
                        maxWidth: 'var(--idc-qr-size, clamp(150px, 20vw, 200px))',
                        maxHeight: 'var(--idc-qr-size, clamp(150px, 20vw, 200px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowIDCLearnMore(true)}
                  style={{
                    marginTop: 'var(--idc-content-gap, clamp(24px, 2.5vh, 32px))',
                    padding: 'var(--idc-button-padding, clamp(14px, 1.6vw, 22px) clamp(32px, 3.2vw, 48px))',
                    fontSize: 'var(--idc-button-font, clamp(15px, 1.6vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#0b6fbf',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(11, 111, 191, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(11, 111, 191, 0.5)';
                    e.currentTarget.style.background = '#0d7fd4';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(11, 111, 191, 0.4)';
                    e.currentTarget.style.background = '#0b6fbf';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* IDC Play Button - Right Side (on image) */}
              {!idcVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '5%',
                    top: '40%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                >
                  {/* Video Thumbnail Container - Relative positioning */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                      animation: 'fadeInUp 0.8s ease-out 0.5s both'
                    }}
                  >
                    {/* IDC Internal Photo */}
                    <img
                      src="/idc-internal.jpg"
                      alt="IDC Contracting"
                      style={{
                        maxWidth: 'clamp(500px, 60vw, 2000px)',
                        maxHeight: 'clamp(350px, 50vh, 1200px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '12px',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                        display: 'block'
                      }}
                    />
                    
                    {/* Overlay Group - Text and Play Button centered together */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        gap: 'clamp(16px, 2vh, 24px)'
                      }}
                    >
                      {/* Click to play video text */}
                      <div
                        style={{
                          color: '#ffffff',
                          fontSize: 'var(--idc-play-text-size, clamp(14px, 1.8vw, 32px))',
                          fontWeight: '600',
                          textAlign: 'center',
                          animation: 'pulse 2s ease-in-out infinite',
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Click to play video
                      </div>
                      
                      {/* Play Button - Centered within the text */}
                      <div
                        onClick={async () => {
                          if (idcVideoContainerRef.current) {
                            try {
                              // فتح fullscreen
                              setIdcVideoFullscreen(true);
                              setIdcVideoPlaying(true);

                              let fullscreenPromise;
                              if (idcVideoContainerRef.current.requestFullscreen) {
                                fullscreenPromise = idcVideoContainerRef.current.requestFullscreen();
                              } else if (idcVideoContainerRef.current.webkitRequestFullscreen) {
                                fullscreenPromise = idcVideoContainerRef.current.webkitRequestFullscreen();
                              } else if (idcVideoContainerRef.current.msRequestFullscreen) {
                                fullscreenPromise = idcVideoContainerRef.current.msRequestFullscreen();
                              }

                              if (fullscreenPromise) {
                                await fullscreenPromise;
                              }
                            } catch (error) {
                              console.error('Error opening fullscreen:', error);
                            }
                          }
                        }}
                        style={{
                          width: 'var(--idc-play-button-size, clamp(100px, 9vw, 220px))',
                          height: 'var(--idc-play-button-size, clamp(100px, 9vw, 220px))',
                          borderRadius: '50%',
                          background: 'rgba(11, 111, 191, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 20px rgba(11, 111, 191, 0.4)',
                          flexShrink: 0
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(11, 111, 191, 1)';
                          e.currentTarget.style.transform = 'scale(1.1)';
                          e.currentTarget.style.boxShadow = '0 6px 30px rgba(11, 111, 191, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(11, 111, 191, 0.9)';
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(11, 111, 191, 0.4)';
                        }}
                      >
                        <svg
                          width="calc(var(--idc-play-button-size, clamp(100px, 9vw, 220px)) * 0.5)"
                          height="calc(var(--idc-play-button-size, clamp(100px, 9vw, 220px)) * 0.5)"
                          viewBox="0 0 24 24"
                          fill="white"
                          style={{ marginLeft: '6px' }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* IDC Video - Hidden for fullscreen (Cloudinary iframe) */}
              <div
                ref={idcVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: idcVideoFullscreen ? '0' : '-9999px',
                  top: idcVideoFullscreen ? '0' : '-9999px',
                  width: idcVideoFullscreen ? '100vw' : '0',
                  height: idcVideoFullscreen ? '100vh' : '0',
                  zIndex: idcVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {idcVideoFullscreen && (
                  <video
                    key={`idc-video-${idcVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/idc_egyila.mp4"
                    autoPlay
                    controls
                    style={{
                      height: '100%',
                      width: '100%',
                      maxHeight: '100vh',
                      maxWidth: '100vw',
                      objectFit: 'contain'
                    }}
                    onEnded={() => {
                      closeVideo(setIdcVideoFullscreen, setIdcVideoPlaying);
                    }}
                  />
                )}
                {idcVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setIdcVideoFullscreen(false);
                      setIdcVideoPlaying(false);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10000
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          ) : selectedCompany.id === 2 ? (
            <>
              {/* Antique overlay to hide text embedded in the background image */}
              <div
                style={{
                  position: 'fixed',
                  inset: 0,
                  zIndex: 10,
                  pointerEvents: 'none',
                  background:
                    'linear-gradient(90deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.58) 46%, rgba(0,0,0,0) 76%)'
                }}
              />
              {/* Antique Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: 'var(--antique-logo-top, 40px)',
                left: 'var(--antique-logo-left, 40px)',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--antique-logo-size, 260px)',
                    maxHeight: 'var(--antique-logo-size, 260px)',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 26px rgba(0, 0, 0, 0.5))'
                  }}
                />
              </div>

              {/* Antique Content - Left */}
              <div className="antique-content" style={{
                position: 'fixed',
                top: 'var(--antique-content-top, 200px)',
                left: 'var(--antique-content-left, 40px)',
                width: 'min(var(--antique-content-max-width, 620px), 48vw)',
                maxWidth: 'var(--antique-content-max-width, 620px)',
                zIndex: 12,
                color: '#ffffff',
                direction: 'ltr',
                textAlign: 'left',
                textShadow: '0 2px 10px rgba(0,0,0,0.45)'
              }}>
                <h1 style={{
                  fontSize: 'var(--antique-title-size, clamp(22px, 2.6vw, 36px))',
                  fontWeight: '900',
                  marginBottom: 'var(--antique-content-gap, 20px)',
                  letterSpacing: '1.6px',
                  color: '#f3c06b',
                  textTransform: 'uppercase',
                  animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                  whiteSpace: 'nowrap'
                }}>
                  ANTIQUE CREATIONS
                </h1>

                <p style={{
                  fontSize: 'var(--antique-text-size, clamp(12px, 1.15vw, 15px))',
                  lineHeight: '1.75',
                  marginBottom: 'var(--antique-content-gap, 20px)',
                  color: '#ffffff',
                  animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                }}>
                  Antique Creations (ACWM) is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). Antique Creations specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                  marginBottom: 'var(--antique-content-gap, 20px)'
                }}>
                  <div style={{
                    fontSize: 'var(--antique-info-size, clamp(12px, 1.1vw, 15px))',
                    lineHeight: '2',
                    color: '#ffffff',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: 'calc(var(--antique-content-gap, 20px) * 0.6)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '800' }}>Managers:</strong>
                      <span>Mohammed Ghanem.</span>
                    </div>
                    <div style={{ marginBottom: 'calc(var(--antique-content-gap, 20px) * 0.6)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '800' }}>Mobile:</strong>
                      <span>056 952 6806</span>
                    </div>
                    <div style={{ marginBottom: 'calc(var(--antique-content-gap, 20px) * 0.6)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '800' }}>Email:</strong>
                      <span>info@acwm-sa.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '800' }}>Website:</strong>
                      <a
                        href="https://acwm-sa.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#ffffff', textDecoration: 'underline' }}
                      >
                        acwm-sa.com
                      </a>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 600ms both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/antiqueqr.jpeg"
                      alt="Antique QR Code"
                      style={{
                        maxWidth: 'var(--antique-qr-size, clamp(150px, 20vw, 200px))',
                        maxHeight: 'var(--antique-qr-size, clamp(150px, 20vw, 200px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowAntiqueLearnMore(true)}
                  style={{
                    marginTop: 'var(--antique-content-gap, 20px)',
                    padding: 'var(--antique-button-padding, 14px 32px)',
                    fontSize: 'var(--antique-button-font, 15px)',
                    fontWeight: '700',
                    color: '#000000',
                    background: '#f3c06b',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(243, 192, 107, 0.3)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(243, 192, 107, 0.4)';
                    e.currentTarget.style.background = '#f5c97a';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(243, 192, 107, 0.3)';
                    e.currentTarget.style.background = '#f3c06b';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Antique Play Button - Right Side (on craftsman image) */}
              {!antiqueVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '20%',
                    top: '45%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (antiqueVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setAntiqueVideoFullscreen(true);
                        setAntiqueVideoPlaying(true);

                        let fullscreenPromise;
                        if (antiqueVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = antiqueVideoContainerRef.current.requestFullscreen();
                        } else if (antiqueVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = antiqueVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (antiqueVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = antiqueVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'var(--antique-play-text-size, clamp(14px, 1.5vw, 18px))',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: 'var(--antique-play-button-size, 100px)',
                      height: 'var(--antique-play-button-size, 100px)',
                      borderRadius: '50%',
                      background: 'rgba(243, 192, 107, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(243, 192, 107, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(243, 192, 107, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(243, 192, 107, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(243, 192, 107, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(243, 192, 107, 0.4)';
                    }}
                  >
                    <svg
                      width="calc(var(--antique-play-button-size, 100px) * 0.5)"
                      height="calc(var(--antique-play-button-size, 100px) * 0.5)"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Antique Video - Hidden for fullscreen (Cloudinary iframe) */}
              <div
                ref={antiqueVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: antiqueVideoFullscreen ? '0' : '-9999px',
                  top: antiqueVideoFullscreen ? '0' : '-9999px',
                  width: antiqueVideoFullscreen ? '100vw' : '0',
                  height: antiqueVideoFullscreen ? '100vh' : '0',
                  zIndex: antiqueVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {antiqueVideoFullscreen && (
                  <video
                    key={`antique-video-${antiqueVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/WhatsApp_Video_2026-02-04_at_11.38.28_AM_mhpll7.mp4"
                    autoPlay
                    controls
                    style={{
                      height: '100%',
                      width: '100%',
                      maxHeight: '100vh',
                      maxWidth: '100vw',
                      objectFit: 'contain'
                    }}
                    onEnded={() => {
                      closeVideo(setAntiqueVideoFullscreen, setAntiqueVideoPlaying);
                    }}
                  />
                )}
                {antiqueVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setAntiqueVideoFullscreen(false);
                      setAntiqueVideoPlaying(false);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10000
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          ) : selectedCompany.id === 3 ? (
            <>
              {/* Central Medicalcare Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: 'clamp(10px, 1.5vh, 30px)',
                left: 'clamp(30px, 3vw, 60px)',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--central-logo-size, clamp(180px, 14vw, 280px))',
                    maxHeight: 'var(--central-logo-size, clamp(180px, 14vw, 280px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* Central Medicalcare Content - Left */}
              <div className="central-medicalcare-content" style={{
                maxWidth: 'var(--central-content-max-width, clamp(600px, 50vw, 900px))',
                color: '#ffffff',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: 'var(--central-title-size, clamp(22px, 3.2vw, 44px))',
                  fontWeight: '900',
                  marginBottom: 'clamp(12px, 2vh, 20px)',
                  letterSpacing: '1.5px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                  whiteSpace: 'nowrap'
                }}>
                  CENTRAL MEDICALCARE
                </h1>

                <p style={{
                  fontSize: 'var(--central-text-size, clamp(13px, 1.5vw, 20px))',
                  lineHeight: '1.75',
                  marginBottom: 'clamp(16px, 2.5vh, 28px)',
                  color: '#ffffff',
                  animation: 'textReveal 1100ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                }}>
                  CENTRAL MEDICALCARE is a comprehensive medical and aesthetic center located in Al-Khobar, Saudi Arabia. The center provides high-quality medical services including dermatology, laser treatments, and aesthetic care.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 50px)',
                  alignItems: 'flex-start',
                  animation: 'textReveal 1100ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                }}>
                  <div style={{
                  fontSize: 'var(--central-info-size, clamp(13px, 1.5vw, 20px))',
                  lineHeight: '2',
                    color: '#ffffff',
                    flex: '1'
                }}>
                  <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 160px)', fontWeight: '800' }}>Managers:</strong>
                    <span>Dr. Atif Idress.</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 160px)', fontWeight: '800' }}>Mobile:</strong>
                    <span>050 471 5053</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 160px)', fontWeight: '800' }}>Email:</strong>
                    <span>hshash@centralmedicalcare.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 160px)', fontWeight: '800' }}>Website:</strong>
                    <span>www.centralmedicalcare.com</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1100ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/centralcareqr.jpeg"
                      alt="Central Medicalcare QR Code"
                      style={{
                        maxWidth: 'var(--central-qr-size, clamp(160px, 18vw, 240px))',
                        maxHeight: 'var(--central-qr-size, clamp(160px, 18vw, 240px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 12px)'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => {
                    setShowCentralMedicalcareLearnMore(true);
                    setCentralMedicalcareActiveTab('tab1');
                  }}
                  style={{
                    marginTop: 'clamp(20px, 3vh, 32px)',
                    padding: 'var(--central-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                    fontSize: 'var(--central-button-font, clamp(16px, 1.8vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#bfa874',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(191, 168, 116, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1100ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(191, 168, 116, 0.5)';
                    e.currentTarget.style.background = '#c9b584';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(191, 168, 116, 0.4)';
                    e.currentTarget.style.background = '#bfa874';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Central Medicalcare Play Button - Right Side (on dental image) */}
              {!centralMedicalcareVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: 'clamp(18%, 20vw, 22%)',
                    top: '40%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (centralMedicalcareVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setCentralMedicalcareVideoFullscreen(true);
                        setCentralMedicalcareVideoPlaying(true);

                        let fullscreenPromise;
                        if (centralMedicalcareVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = centralMedicalcareVideoContainerRef.current.requestFullscreen();
                        } else if (centralMedicalcareVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = centralMedicalcareVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (centralMedicalcareVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = centralMedicalcareVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(14px, 1.6vw, 22px)',
                      fontWeight: '600',
                      marginBottom: 'clamp(16px, 2vh, 24px)',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: 'var(--central-play-button-size, clamp(90px, 8vw, 130px))',
                      height: 'var(--central-play-button-size, clamp(90px, 8vw, 130px))',
                      borderRadius: '50%',
                      background: 'rgba(191, 168, 116, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(191, 168, 116, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(191, 168, 116, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(191, 168, 116, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(191, 168, 116, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(191, 168, 116, 0.4)';
                    }}
                  >
                    <svg
                      width="clamp(40px, 4vw, 60px)"
                      height="clamp(40px, 4vw, 60px)"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Central Medicalcare Video - Hidden for fullscreen */}
              <div
                ref={centralMedicalcareVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: centralMedicalcareVideoFullscreen ? '0' : '-9999px',
                  top: centralMedicalcareVideoFullscreen ? '0' : '-9999px',
                  width: centralMedicalcareVideoFullscreen ? '100vw' : '0',
                  height: centralMedicalcareVideoFullscreen ? '100vh' : '0',
                  zIndex: centralMedicalcareVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {centralMedicalcareVideoFullscreen && (
                  <video
                    key={`central-video-${centralMedicalcareVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/WhatsApp_Video_2026-02-03_at_4.02.50_PM_wo8g32.mp4"
                    autoPlay
                    controls
                    style={{
                      height: '100%',
                      width: '100%',
                      maxHeight: '100vh',
                      maxWidth: '100vw',
                      objectFit: 'contain'
                    }}
                    onEnded={() => {
                      closeVideo(setCentralMedicalcareVideoFullscreen, setCentralMedicalcareVideoPlaying);
                    }}
                  />
                )}
                {centralMedicalcareVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setCentralMedicalcareVideoFullscreen(false);
                      setCentralMedicalcareVideoPlaying(false);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10000
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          ) : selectedCompany.id === 9 ? (
            <>
              {/* Gulf Consult Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: 'var(--gulf-logo-top, clamp(10px, 1.5vh, 30px))',
                left: 'var(--gulf-logo-left, clamp(30px, 3vw, 60px))',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--gulf-logo-size, clamp(180px, 12vw, 280px))',
                    maxHeight: 'var(--gulf-logo-size, clamp(180px, 12vw, 280px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* Gulf Consult Content - Left */}
              <div style={{
                position: 'fixed',
                bottom: 'var(--gulf-content-bottom, clamp(40px, 5vh, 80px))',
                left: 'var(--gulf-content-left, clamp(30px, 3vw, 60px))',
                width: 'min(var(--gulf-content-max-width, clamp(600px, 50vw, 900px)), 48vw)',
                maxWidth: 'var(--gulf-content-max-width, clamp(600px, 50vw, 900px))',
                zIndex: 12,
                color: '#16348a',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: 'var(--gulf-title-size, clamp(32px, 4vw, 56px))',
                  fontWeight: '900',
                  marginBottom: 'calc(var(--gulf-content-gap, 18px) * 0.4)',
                  letterSpacing: '1.5px',
                  color: '#16348a',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  GULF CONSULT
                </h1>

                <div style={{
                  fontSize: 'var(--gulf-subtitle-size, clamp(13px, 1.3vw, 20px))',
                  fontWeight: '800',
                  marginBottom: 'calc(var(--gulf-content-gap, 18px) * 0.6)',
                  color: '#16348a',
                  letterSpacing: '0.4px',
                  animation: 'fadeInUp 0.8s ease-out 0.3s both'
                }}>
                  (Architects and Engineers)
                </div>

                <p style={{
                  fontSize: 'var(--gulf-text-size, clamp(14px, 1.6vw, 22px))',
                  lineHeight: '1.75',
                  marginBottom: 'var(--gulf-content-gap, clamp(18px, 2.5vh, 28px))',
                  color: '#16348a',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  Gulf Consult (Architects and Engineers) is a leading Saudi-based contracting company established in 2016 and proudly part of the Ali Al-Harbi Group (Alika). Gulf Consult specializes in engineering, finishing, and comprehensive Mechanical, Electrical, and Plumbing (MEP) building services, holding the highest first-degree classification for contracting in Saudi Arabia.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 50px)',
                  alignItems: 'flex-start',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}>
                  <div style={{
                  fontSize: 'var(--gulf-info-size, clamp(15px, 1.7vw, 24px))',
                  lineHeight: '2',
                    color: '#16348a',
                    flex: '1'
                }}>
                  <div style={{ marginBottom: 'calc(var(--gulf-content-gap, 18px) * 0.5)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Managers:</strong>
                    <span>Eng. Abdullah Maqboul.</span>
                  </div>
                  <div style={{ marginBottom: 'calc(var(--gulf-content-gap, 18px) * 0.5)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Mobile:</strong>
                    <span>055 518 7280</span>
                  </div>
                  <div style={{ marginBottom: 'calc(var(--gulf-content-gap, 18px) * 0.5)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Email:</strong>
                    <span>abdullah@gc-eng.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Website:</strong>
                    <a
                      href="https://www.gc-eng.com"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: '#16348a', textDecoration: 'underline', fontWeight: 700 }}
                    >
                      gc-eng.com
                    </a>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/gcqr.jpeg"
                      alt="Gulf Consult QR Code"
                      onClick={() => setShowGulfConsultArchQRModal(true)}
                      style={{
                        maxWidth: 'var(--gulf-qr-size, clamp(160px, 18vw, 240px))',
                        maxHeight: 'var(--gulf-qr-size, clamp(160px, 18vw, 240px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 12px)',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGulfConsultLearnMore(true)}
                  style={{
                    marginTop: 'var(--gulf-content-gap, clamp(20px, 2.5vh, 32px))',
                    padding: 'var(--gulf-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                    fontSize: 'var(--gulf-button-font, clamp(16px, 1.8vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#16348a',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(22, 52, 138, 0.3)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.4)';
                    e.currentTarget.style.background = '#1e42a5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(22, 52, 138, 0.3)';
                    e.currentTarget.style.background = '#16348a';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Gulf Consult Architects Play Button - Right Side (on architectural sketch) */}
              {!gulfConsultArchVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '20%',
                    top: '40%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (gulfConsultArchVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setGulfConsultArchVideoFullscreen(true);
                        setGulfConsultArchVideoPlaying(true);

                        let fullscreenPromise;
                        if (gulfConsultArchVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = gulfConsultArchVideoContainerRef.current.requestFullscreen();
                        } else if (gulfConsultArchVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = gulfConsultArchVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (gulfConsultArchVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = gulfConsultArchVideoContainerRef.current.msRequestFullscreen();
                        }

                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'var(--gulf-play-text-size, clamp(14px, 1.5vw, 18px))',
                      fontWeight: '600',
                      marginBottom: '20px',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: 'var(--gulf-play-button-size, 100px)',
                      height: 'var(--gulf-play-button-size, 100px)',
                      borderRadius: '50%',
                      background: 'rgba(22, 52, 138, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(22, 52, 138, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(22, 52, 138, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(22, 52, 138, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(22, 52, 138, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(22, 52, 138, 0.4)';
                    }}
                  >
                    <svg
                      width="calc(var(--gulf-play-button-size, 100px) * 0.5)"
                      height="calc(var(--gulf-play-button-size, 100px) * 0.5)"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              {/* Gulf Consult Architects Video - Hidden for fullscreen */}
              <div
                ref={gulfConsultArchVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: gulfConsultArchVideoFullscreen ? '0' : '-9999px',
                  top: gulfConsultArchVideoFullscreen ? '0' : '-9999px',
                  width: gulfConsultArchVideoFullscreen ? '100vw' : '0',
                  height: gulfConsultArchVideoFullscreen ? '100vh' : '0',
                  zIndex: gulfConsultArchVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {gulfConsultArchVideoFullscreen && (
                  <video
                    key={`gulf-arch-video-${gulfConsultArchVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/WhatsApp_Video_2026-02-03_at_4.03.03_PM_h59upq.mp4"
                    autoPlay
                    controls
                    style={{
                      height: '100%',
                      width: '100%',
                      maxHeight: '100vh',
                      maxWidth: '100vw',
                      objectFit: 'contain'
                    }}
                    onEnded={() => {
                      closeVideo(setGulfConsultArchVideoFullscreen, setGulfConsultArchVideoPlaying);
                    }}
                  />
                )}
                {gulfConsultArchVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setGulfConsultArchVideoFullscreen(false);
                      setGulfConsultArchVideoPlaying(false);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10000
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          ) : selectedCompany.id === 7 ? (
            <>
              {/* Al Dorrah Left Block: logo + title + text */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(20px, 3vh, 50px)',
                  left: 'clamp(30px, 3vw, 60px)',
                  maxWidth: 'var(--dorrah-content-max-width, clamp(600px, 50vw, 850px))',
                  zIndex: 12,
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                {/* Logo */}
                <div
                  style={{
                    marginBottom: 'clamp(16px, 2vh, 28px)',
                    animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}
                >
                  <img
                    src={selectedCompany.modalLogo || selectedCompany.logo}
                    alt={selectedCompany.name}
                    style={{
                      maxWidth: 'var(--dorrah-logo-size, clamp(220px, 18vw, 320px))',
                      maxHeight: 'var(--dorrah-logo-size, clamp(220px, 18vw, 320px))',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.45))'
                    }}
                  />
                </div>

                {/* Title under logo */}
                <h1 style={{
                  fontSize: 'var(--dorrah-title-size, clamp(24px, 3vw, 40px))',
                  fontWeight: '900',
                  marginBottom: 'clamp(6px, 1vh, 10px)',
                  letterSpacing: '1.5px',
                  color: '#33d18f',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both'
                }}>
                  GULF DORRAH REAL
                </h1>
                <h1 style={{
                  fontSize: 'var(--dorrah-title-size, clamp(24px, 3vw, 40px))',
                  fontWeight: '900',
                  marginBottom: 'clamp(12px, 2vh, 20px)',
                  letterSpacing: '1.5px',
                  color: '#29a4ff',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.25s both'
                }}>
                  ESTATE DEVELOPMENT
                </h1>

                <p style={{
                  fontSize: 'var(--dorrah-text-size, clamp(13px, 1.5vw, 20px))',
                  lineHeight: '1.75',
                  marginBottom: 'clamp(14px, 2vh, 22px)',
                  color: '#e5f8ff',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  Gulf Dorrah Real Estate Development is a Saudi-based company specializing in luxury residential properties with modern designs and high-quality construction. The company focuses on creating community apartments that offer comfort, privacy, and contemporary design, ensuring long-term value for families and residents. Each project is carefully developed with attention to detail, quality materials, and practical layouts that support a modern lifestyle.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}>
                  <div style={{
                    fontSize: 'var(--dorrah-info-size, clamp(13px, 1.5vw, 20px))',
                    lineHeight: '2',
                    color: '#ffffff',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Managers:</strong>
                      <span>Fadel Muhialdeen.</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Mobile:</strong>
                      <span>050 084 0440</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Email:</strong>
                      <span>adel@gulfdorrah.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Website:</strong>
                      <span>https://dorrah.topacademy.website/#</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/dorrahqr1.jpeg"
                      alt="Gulf Dorrah QR Code"
                      style={{
                        maxWidth: 'var(--dorrah-qr-size, clamp(150px, 20vw, 200px))',
                        maxHeight: 'var(--dorrah-qr-size, clamp(150px, 20vw, 200px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGulfDorrahLearnMore(true)}
                  style={{
                    marginTop: 'clamp(20px, 3vh, 32px)',
                    padding: 'var(--dorrah-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                    fontSize: 'var(--dorrah-button-font, clamp(16px, 1.8vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(51, 209, 143, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(51, 209, 143, 0.5)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #3de09f 0%, #35b4ff 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(51, 209, 143, 0.4)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #33d18f 0%, #29a4ff 100%)';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Al Dorrah Video - Right Side */}
              {/* Hidden video element for fullscreen */}
              <div
                ref={dorrahVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: dorrahVideoFullscreen ? '0' : '-9999px',
                  top: dorrahVideoFullscreen ? '0' : '-9999px',
                  width: dorrahVideoFullscreen ? '100vw' : '0',
                  height: dorrahVideoFullscreen ? '100vh' : '0',
                  zIndex: dorrahVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {dorrahVideoFullscreen && (
                  <video
                    key={`dorrah-video-${dorrahVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/dorrah_ei9ijx.mp4"
                    autoPlay
                    controls
                    style={{
                      height: '100%',
                      width: '100%',
                      maxHeight: '100vh',
                      maxWidth: '100vw',
                      objectFit: 'contain'
                    }}
                    onEnded={() => {
                      closeVideo(setDorrahVideoFullscreen, setDorrahVideoPlaying);
                    }}
                  />
                )}
                {dorrahVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setDorrahVideoFullscreen(false);
                      setDorrahVideoPlaying(false);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10000
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Play Button - Right Side (Center of 3D Building Image) */}
              {!dorrahVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: 'clamp(20%, 24vw, 28%)',
                    top: '40%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                  onClick={async () => {
                    if (dorrahVideoContainerRef.current) {
                      try {
                        // فتح fullscreen
                        setDorrahVideoFullscreen(true);
                        setDorrahVideoPlaying(true);
                        
                        let fullscreenPromise;
                        if (dorrahVideoContainerRef.current.requestFullscreen) {
                          fullscreenPromise = dorrahVideoContainerRef.current.requestFullscreen();
                        } else if (dorrahVideoContainerRef.current.webkitRequestFullscreen) {
                          fullscreenPromise = dorrahVideoContainerRef.current.webkitRequestFullscreen();
                        } else if (dorrahVideoContainerRef.current.msRequestFullscreen) {
                          fullscreenPromise = dorrahVideoContainerRef.current.msRequestFullscreen();
                        }
                        
                        // انتظار fullscreen
                        if (fullscreenPromise) {
                          await fullscreenPromise;
                        }
                      } catch (error) {
                        console.error('Error opening fullscreen:', error);
                      }
                    }
                  }}
                >
                  {/* Animation Text */}
                  <div
                    style={{
                      color: '#ffffff',
                      fontSize: 'clamp(14px, 1.6vw, 22px)',
                      fontWeight: '600',
                      marginBottom: 'clamp(16px, 2vh, 24px)',
                      textAlign: 'center',
                      animation: 'pulse 2s ease-in-out infinite',
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                    }}
                  >
                    Click to play video
                  </div>
                  
                  {/* Play Button */}
                  <div
                    style={{
                      width: 'var(--dorrah-play-button-size, clamp(90px, 8vw, 130px))',
                      height: 'var(--dorrah-play-button-size, clamp(90px, 8vw, 130px))',
                      borderRadius: '50%',
                      background: 'rgba(51, 209, 143, 0.9)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(51, 209, 143, 0.4)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(51, 209, 143, 1)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                      e.currentTarget.style.boxShadow = '0 6px 30px rgba(51, 209, 143, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(51, 209, 143, 0.9)';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(51, 209, 143, 0.4)';
                    }}
                  >
                    <svg
                      width="clamp(40px, 4vw, 60px)"
                      height="clamp(40px, 4vw, 60px)"
                      viewBox="0 0 24 24"
                      fill="white"
                      style={{ marginLeft: '6px' }}
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </>
          ) : selectedCompany.id === 4 ? (
            <>
              {/* Logo - Top Left with fly-in animation */}
              <div style={{
                position: 'fixed',
                top: 'var(--gta-logo-top, clamp(10px, 1.5vh, 30px))',
                left: 'var(--gta-logo-left, clamp(30px, 3vw, 60px))',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--gta-logo-size, clamp(200px, 18vw, 300px))',
                    maxHeight: 'var(--gta-logo-size, clamp(200px, 18vw, 300px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* Red Curve - Bottom */}
              <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: '180px',
                zIndex: 10,
                overflow: 'hidden',
                pointerEvents: 'none'
              }}>
                <svg
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '100%'
                  }}
                  viewBox="0 0 1200 180"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 180 L 0 130 Q 200 90 400 100 Q 600 110 800 105 Q 1000 100 1200 115 L 1200 180 Z"
                    fill="#dc2626"
                  />
                </svg>
              </div>

              {/* GTA Content - Bottom Left */}
              <div className="gta-content" style={{
                maxWidth: 'var(--gta-content-max-width, 650px)',
                color: '#000000',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                {/* Title */}
                <h1 style={{
                  fontSize: 'var(--gta-title-size, clamp(24px, 3vw, 36px))',
                  fontWeight: '900',
                  marginBottom: 'var(--gta-content-gap, clamp(15px, 2vh, 25px))',
                  letterSpacing: '2px',
                  color: '#dc2626',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  GERMAN TECHNOLOGY AUTO
                </h1>

                {/* Description */}
                <p style={{
                  fontSize: 'var(--gta-text-size, clamp(13px, 1.4vw, 17px))',
                  lineHeight: '1.8',
                  marginBottom: 'var(--gta-content-gap, clamp(15px, 2vh, 25px))',
                  color: '#000000',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  German Technology Auto Services Company is one of the leading maintenance companies in the Eastern Region, which includes German car services under one roof.
                </p>
                <p style={{
                  fontSize: 'var(--gta-text-size, clamp(13px, 1.4vw, 17px))',
                  lineHeight: '1.8',
                  marginBottom: 'var(--gta-content-gap, clamp(15px, 2vh, 25px))',
                  color: '#000000',
                  animation: 'fadeInUp 0.8s ease-out 0.5s both'
                }}>
                  We promise to give you the best service at competitive prices. We warranty all our work. Our company strives on the best customer service we can offer.
                </p>

                {/* Contact Info */}
                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}>
                  <div style={{
                  fontSize: 'var(--gta-info-size, clamp(13px, 1.4vw, 17px))',
                  lineHeight: '2',
                    color: '#000000',
                    flex: '1'
                }}>
                  <div style={{ marginBottom: 'calc(var(--gta-content-gap, 15px) * 0.6)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '700' }}>Managers:</strong>
                    <span>Mr. Tamam Hussain.</span>
                  </div>
                  <div style={{ marginBottom: 'calc(var(--gta-content-gap, 15px) * 0.6)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '700' }}>Mobile:</strong>
                    <span>053 240 4666</span>
                  </div>
                  <div style={{ marginBottom: 'calc(var(--gta-content-gap, 15px) * 0.6)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '700' }}>Email:</strong>
                    <span>tammam.hussein@yahoo.com</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: '700' }}>Website:</strong>
                    <span>https://www.gtaksa.com</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/gtaqr.jpeg"
                      alt="GTA QR Code"
                      style={{
                        maxWidth: 'var(--gta-qr-size, clamp(150px, 20vw, 200px))',
                        maxHeight: 'var(--gta-qr-size, clamp(150px, 20vw, 200px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGTALearnMore(true)}
                  style={{
                    marginTop: 'var(--gta-content-gap, clamp(24px, 2.5vh, 32px))',
                    padding: 'var(--gta-button-padding, clamp(14px, 1.6vw, 22px) clamp(32px, 3.2vw, 48px))',
                    fontSize: 'var(--gta-button-font, clamp(15px, 1.6vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#dc2626',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(220, 38, 38, 0.5)';
                    e.currentTarget.style.background = '#ef4444';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(220, 38, 38, 0.4)';
                    e.currentTarget.style.background = '#dc2626';
                  }}
                >
                  Learn More
                </button>
              </div>
            </>
          ) : selectedCompany.id === 10 ? (
            <>
              {/* TLCO Logo - Top Left */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(30px, 3vh, 60px)',
                  left: 'clamp(30px, 3vw, 60px)',
                  zIndex: 11,
                  animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--tlco-logo-width, clamp(220px, 18vw, 320px))',
                    maxHeight: 'var(--tlco-logo-height, clamp(130px, 10vw, 200px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 18px rgba(0, 0, 0, 0.25))'
                  }}
                />
              </div>

              {/* TLCO Text Content - Bottom Left */}
              <div
                style={{
                  position: 'fixed',  
                  bottom: 'clamp(40px, 5vh, 80px)',
                  left: 'clamp(30px, 3vw, 60px)',
                  maxWidth: 'var(--tlco-content-max-width, clamp(600px, 50vw, 850px))',
                  zIndex: 12,
                  color: '#0b3b25',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--tlco-title-size, clamp(26px, 3.5vw, 44px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 2vh, 20px)',
                    letterSpacing: '1.4px',
                    color: '#008c4a',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both'
                  }}
                >
                  ENVIRONMENTAL TESTING AND LABORATORIES
                </h1>

                <p
                  style={{
                    fontSize: 'var(--tlco-text-size, clamp(13px, 1.5vw, 20px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(14px, 2vh, 22px)',
                    color: '#0b3b25',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  Environmental Testing and Laboratory Company (ETLCO) is a leading provider of comprehensive environmental
                  solutions, offering cutting-edge testing, analysis, and consultancy services. With a commitment to
                  sustainability and regulatory compliance, we help industries and organizations minimize their environmental
                  impact while ensuring the highest standards of quality and safety.
                </p>

                <div
                  style={{
                    display: 'flex',
                    gap: 'clamp(20px, 4vw, 40px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both'
                  }}
                >
                  <div style={{
                    fontSize: 'var(--tlco-info-size, clamp(13px, 1.5vw, 20px))',
                    lineHeight: '2',
                    color: '#0b3b25',
                    flex: '1'
                  }}>
                  <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Managers:</strong>
                    <span>Mr.elyas Othman.</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Mobile:</strong>
                    <span>053 927 5739</span>
                  </div>
                  <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                    <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Email:</strong>
                    <span>G.M@etlco.com.sa</span>
                  </div>
                  <div>
                    <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Website:</strong>
                    <span>https://www.etlco.com.sa</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 580ms both',
                      flexShrink: 0,
                      marginLeft: '-6px'
                    }}
                  >
                    <img
                      src="/tlcoqr.jpeg"
                      alt="ETLCO QR Code"
                      style={{
                        maxWidth: 'var(--tlco-qr-size, clamp(160px, 18vw, 240px))',
                        maxHeight: 'var(--tlco-qr-size, clamp(160px, 18vw, 240px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: 'clamp(6px, 0.8vw, 12px)'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowPartners(true)}
                  style={{
                    marginTop: 'clamp(20px, 3vh, 32px)',
                    padding: 'var(--tlco-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                    fontSize: 'var(--tlco-button-font, clamp(16px, 1.8vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#008c4a',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 140, 74, 0.3)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 140, 74, 0.4)';
                    e.currentTarget.style.background = '#00a055';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 140, 74, 0.3)';
                    e.currentTarget.style.background = '#008c4a';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* TLCO Internal Image on the Right */}
              <div
                style={{
                  position: 'fixed',
                  right: 'clamp(5%, 7vw, 9%)',
                  top: 'clamp(20%, 25vh, 30%)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  width: 'var(--tlco-internal-image-size, clamp(480px, 46vw, 650px))',
                  height: 'auto',
                  overflow: 'visible',
                  boxShadow: 'none',
                  borderRadius: '0',
                  border: 'none',
                  background: 'transparent',
                  animation: 'slideInScale 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 160ms both'
                }}
              >
                <div style={{ position: 'relative', display: 'inline-block' }}>
                <img
                  src="/tlco-internal1.png"
                  alt="TLCO Internal"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    animation:
                      'slideInScale 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 160ms both, tlcoFloat 4s ease-in-out 1200ms infinite'
                  }}
                />
                  
                  {/* Play Button on TLCO Image */}
                  {!tlcoVideoFullscreen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 12,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}
                      onClick={async (e) => {
                        e.stopPropagation();
                        if (tlcoVideoContainerRef.current) {
                          try {
                            // فتح fullscreen
                            setTlcoVideoFullscreen(true);
                            setTlcoVideoPlaying(true);
                            
                            let fullscreenPromise;
                            if (tlcoVideoContainerRef.current.requestFullscreen) {
                              fullscreenPromise = tlcoVideoContainerRef.current.requestFullscreen();
                            } else if (tlcoVideoContainerRef.current.webkitRequestFullscreen) {
                              fullscreenPromise = tlcoVideoContainerRef.current.webkitRequestFullscreen();
                            } else if (tlcoVideoContainerRef.current.msRequestFullscreen) {
                              fullscreenPromise = tlcoVideoContainerRef.current.msRequestFullscreen();
                            }
                            
                            // انتظار fullscreen
                            if (fullscreenPromise) {
                              await fullscreenPromise;
                            }
                          } catch (error) {
                            console.error('Error opening fullscreen:', error);
                          }
                        }
                      }}
                    >
                      {/* Animation Text */}
                      <div
                        style={{
                          color: '#ffffff',
                          fontSize: 'clamp(14px, 1.6vw, 22px)',
                          fontWeight: '600',
                          marginBottom: 'clamp(16px, 2vh, 24px)',
                          textAlign: 'center',
                          animation: 'pulse 2s ease-in-out infinite',
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)'
                        }}
                      >
                        Click to play video
                      </div>
                      
                      {/* Play Button */}
                      <div
                        style={{
                          width: 'var(--tlco-play-button-size, clamp(90px, 8vw, 130px))',
                          height: 'var(--tlco-play-button-size, clamp(90px, 8vw, 130px))',
                          borderRadius: '50%',
                          background: 'rgba(0, 140, 74, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 20px rgba(0, 140, 74, 0.4)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 140, 74, 1)';
                          e.currentTarget.style.transform = 'scale(1.1)';
                          e.currentTarget.style.boxShadow = '0 6px 30px rgba(0, 140, 74, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 140, 74, 0.9)';
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 140, 74, 0.4)';
                        }}
                      >
                        <svg
                          width="clamp(40px, 4vw, 60px)"
                          height="clamp(40px, 4vw, 60px)"
                          viewBox="0 0 24 24"
                          fill="white"
                          style={{ marginLeft: '6px' }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* TLCO Video - Hidden for fullscreen */}
              <div
                ref={tlcoVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: tlcoVideoFullscreen ? '0' : '-9999px',
                  top: tlcoVideoFullscreen ? '0' : '-9999px',
                  width: tlcoVideoFullscreen ? '100vw' : '0',
                  height: tlcoVideoFullscreen ? '100vh' : '0',
                  zIndex: tlcoVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {tlcoVideoFullscreen && (
                  <video
                    key={`tlco-video-${tlcoVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/tlco_onczo4.mp4"
                    autoPlay
                    controls
                    style={{
                      height: '100%',
                      width: '100%',
                      maxHeight: '100vh',
                      maxWidth: '100vw',
                      objectFit: 'contain'
                    }}
                    onEnded={() => {
                      closeVideo(setTlcoVideoFullscreen, setTlcoVideoPlaying);
                    }}
                  />
                )}
                {tlcoVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setTlcoVideoFullscreen(false);
                      setTlcoVideoPlaying(false);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10000
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          ) : selectedCompany.id === 11 ? (
            <>
              {/* GSG Logo - Top Left (keep as current) */}
              <div
                style={{
                  position: 'fixed',
                  top: 'clamp(10px, 1.5vh, 30px)',
                  left: 'clamp(30px, 3vw, 60px)',
                  zIndex: 11,
                  animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--gsg-logo-size, clamp(200px, 15vw, 320px))',
                    maxHeight: 'var(--gsg-logo-size, clamp(200px, 15vw, 320px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* GSG Text Content - Left */}
              <div
                className="gsg-content"
                style={{
                  maxWidth: 'var(--gsg-content-max-width, clamp(600px, 50vw, 900px))',
                  color: '#07373c',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--gsg-title-size, clamp(26px, 3.5vw, 48px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(6px, 1vh, 12px)',
                    letterSpacing: '1.4px',
                    color: '#07373c',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    lineHeight: '1.1'
                  }}
                >
                  GROUND SYSTEMS
                </h1>
                <h1
                  style={{
                    fontSize: 'var(--gsg-title-size, clamp(26px, 3.5vw, 48px))',
                    fontWeight: '900',
                    marginBottom: 'clamp(12px, 2vh, 20px)',
                    letterSpacing: '1.4px',
                    color: '#07373c',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 180ms both',
                    lineHeight: '1.1'
                  }}
                >
                  GEOPHYSICAL (GSG)
                </h1>

                <p
                  style={{
                    fontSize: 'var(--gsg-text-size, clamp(14px, 1.6vw, 22px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(14px, 2vh, 22px)',
                    color: '#07373c',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  Is a leading provider of geophysical, geological, environmental, and engineering solutions across Saudi Arabia and the GCC region. With a dedicated team of scientists, engineers, and experts, we specialize in delivering advanced, reliable, and innovative services that support site assessments, resource exploration, and real-time monitoring across various industries.
                </p>
                <p
                  style={{
                    fontSize: 'var(--gsg-text-size, clamp(14px, 1.6vw, 22px))',
                    lineHeight: '1.75',
                    marginBottom: 'clamp(18px, 2.5vh, 28px)',
                    color: '#07373c',
                    fontWeight: '600',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 380ms both'
                  }}
                >
                  Integrated Solutions for Your Projects, Backed by Decades of Expertise
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'clamp(20px, 4vw, 40px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 500ms both',
                    marginBottom: '-8px',
                    position: 'relative',
                    zIndex: 13
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--gsg-info-size, clamp(14px, 1.6vw, 22px))',
                      lineHeight: '2',
                      color: '#07373c',
                      flex: '1'
                    }}
                  >
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 12px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Managers:</strong>
                      <span>Eng. Rabah Yehya.</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 12px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Mobile:</strong>
                      <span>055 584 6667</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 12px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Email:</strong>
                      <span>faisal@gulfconsult.com &amp; rabah@gulfconsult.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: 'clamp(110px, 11vw, 150px)', fontWeight: 800 }}>Website:</strong>
                      <span>https://www.gulfconsult.com</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 700ms both',
                      flexShrink: 0,
                      marginTop: '0',
                      alignSelf: 'flex-start',
                      zIndex: 13,
                      position: 'relative',
                      minWidth: 'clamp(140px, 16vw, 220px)',
                      maxWidth: 'clamp(140px, 16vw, 220px)'
                    }}
                  >
                    <img
                      src="/gsgqr.jpeg"
                      alt="GSG QR Code"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: 'clamp(140px, 16vw, 220px)',
                        maxHeight: 'clamp(140px, 16vw, 220px)',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px',
                        display: 'block'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGSGLearnMore(true)}
                  style={{
                    marginTop: 'clamp(8px, 1.5vh, 16px)',
                    padding: 'var(--gsg-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                    fontSize: 'var(--gsg-button-font, clamp(16px, 1.8vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#00bcd4',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(0, 188, 212, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 620ms both',
                    position: 'relative',
                    zIndex: 13
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 188, 212, 0.5)';
                    e.currentTarget.style.background = '#00d4e6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 188, 212, 0.4)';
                    e.currentTarget.style.background = '#00bcd4';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* GSG composite image (big + small circles) on the right */}
              <div
                style={{
                  position: 'fixed',
                  right: 'clamp(4%, 6vw, 8%)',
                  top: 'clamp(12%, 15vh, 18%)',
                  transform: 'translateY(-50%)',
                  zIndex: 11,
                  width: 'var(--gsg-internal-image-size, clamp(450px, 45vw, 650px))',
                  height: 'auto',
                  overflow: 'visible',
                  background: 'transparent',
                  animation: 'slideInScale 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 160ms both'
                }}
              >
                <img
                  src="/gsg-internal.png"
                  alt="GSG Internal"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>
            </>
          ) : selectedCompany.id === 6 ? (
            <>
              {/* Logo - Top Left with fly-in animation */}
              <div style={{
                position: 'fixed',
                top: 'clamp(-20px, -2vh, 0px)',
                left: 'clamp(-30px, -2vw, 0px)',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--rk-logo-width, clamp(250px, 35vw, 450px))',
                    maxHeight: 'var(--rk-logo-height, clamp(350px, 35vh, 550px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* RK Content - Bottom Left */}
              <div className="rk-content" style={{
                maxWidth: 'var(--rk-content-max-width, clamp(600px, 50vw, 850px))',
                color: '#000000',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                {/* Description */}
                <p style={{
                  fontSize: 'var(--rk-text-size, clamp(14px, 1.6vw, 22px))',
                  lineHeight: '1.75',
                  marginBottom: 'clamp(14px, 2vh, 22px)',
                  color: '#000000',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  Al-Rakaez Technical Co. Ltd. (RK) is a Saudi based company that specializes in Civil, Finishing, Mechanical, Electrical and Plumbing (MEP) building services.
                </p>
                <p style={{
                  fontSize: 'var(--rk-text-size, clamp(14px, 1.6vw, 22px))',
                  lineHeight: '1.75',
                  marginBottom: 'clamp(20px, 3vh, 30px)',
                  color: '#000000',
                  animation: 'fadeInUp 0.8s ease-out 0.5s both'
                }}>
                  RK strives to deliver the highest standards of Civil, Finishing and MEP installation, carefully paying attention to each of its client's requirements and ideas, collaborating in the development of the right scope of work in order to develop a unique approach towards each customer.
                </p>

                {/* Contact Info */}
                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both'
                }}>
                  <div style={{
                    fontSize: 'var(--rk-info-size, clamp(14px, 1.6vw, 22px))',
                    lineHeight: '2',
                    color: '#000000',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '700' }}>Managers:</strong>
                      <span>Jaffar Al Sayori.</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '700' }}>Mobile:</strong>
                      <span>054 989 5927</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(8px, 1.2vh, 14px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '700' }}>Email:</strong>
                      <span>jafar.syouri@rk-arabia.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '700' }}>Website:</strong>
                      <span>https://www.rk-arabia.com</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0
                    }}
                  >
                    <img
                      src="/rkqr.jpeg"
                      alt="RK QR Code"
                      style={{
                        maxWidth: 'var(--rk-qr-size, clamp(150px, 20vw, 200px))',
                        maxHeight: 'var(--rk-qr-size, clamp(150px, 20vw, 200px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowRKLearnMore(true)}
                  style={{
                    marginTop: 'clamp(20px, 3vh, 32px)',
                    padding: 'var(--rk-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                    fontSize: 'var(--rk-button-font, clamp(16px, 1.8vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#000000',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(244, 164, 96, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(244, 164, 96, 0.5)';
                    e.currentTarget.style.background = '#f5b575';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(244, 164, 96, 0.4)';
                    e.currentTarget.style.background = '#F4A460';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* RK Internal Image - Right Side */}
              <div style={{
                position: 'fixed',
                top: 'clamp(12%, 14vh, 16%)',
                right: 'clamp(40px, 5vw, 80px)',
                transform: 'translateY(-50%)',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both'
              }}>
                <img
                  src="/rk-internal.png"
                  alt="RK Internal"
                  style={{
                    maxWidth: 'var(--rk-internal-image-width, clamp(450px, 40vw, 650px))',
                    maxHeight: 'var(--rk-internal-image-height, clamp(540px, 50vh, 750px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
            </>
          ) : selectedCompany.id === 5 ? (
            <>
              {/* AH Environmental Logo - Top Left */}
              <div
                style={{
                  position: 'fixed',
                  top: 'var(--ah-logo-top, clamp(30px, 3vh, 50px))',
                  left: 'var(--ah-logo-left, clamp(30px, 3vw, 60px))',
                  zIndex: 11,
                  animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: 'var(--ah-logo-size, clamp(200px, 18vw, 300px))',
                    maxHeight: 'var(--ah-logo-height, clamp(150px, 14vw, 220px))',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 18px rgba(0, 0, 0, 0.25))'
                  }}
                />
              </div>

              {/* AH Environmental Text Content - Left */}
              <div
                className="ah-environmental-content"
                style={{
                  maxWidth: 'var(--ah-content-max-width, 580px)',
                  color: '#ffffff',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                <h1
                  style={{
                    fontSize: 'var(--ah-title-size, clamp(24px, 3vw, 36px))',
                    fontWeight: '900',
                    marginBottom: 'calc(var(--ah-content-gap, 10px) * 0.4)',
                    letterSpacing: '1px',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 120ms both',
                    lineHeight: '1.1'
                  }}
                >
                  AH ENVIRONMENTAL
                </h1>
                <h1
                  style={{
                    fontSize: 'var(--ah-title-size, clamp(24px, 3vw, 36px))',
                    fontWeight: '900',
                    marginBottom: 'var(--ah-content-gap, clamp(10px, 1.5vh, 18px))',
                    letterSpacing: '1px',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    animation: 'textReveal 900ms cubic-bezier(0.2, 0.9, 0.2, 1) 180ms both',
                    lineHeight: '1.1'
                  }}
                >
                  CONSULTING
                </h1>

                <p
                  style={{
                    fontSize: 'var(--ah-text-size, clamp(13px, 1.4vw, 17px))',
                    lineHeight: '1.6',
                    marginBottom: 'var(--ah-content-gap, clamp(10px, 1.5vh, 18px))',
                    color: '#ffffff',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 260ms both'
                  }}
                >
                  AHEC is a leading environmental engineering and consulting firm established in 2010, providing sustainable and compliant solutions across multiple industries Certified Category A by NCEC and accredited by the Royal Commission for Jubail and Yanbu, AHEC delivers integrated environmental services to government and industrial clients, supporting sustainability, safety, and regulatory compliance
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'clamp(20px, 4vw, 40px)',
                    alignItems: 'flex-start',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 420ms both',
                    marginBottom: 'var(--ah-content-gap, clamp(10px, 1.5vh, 18px))',
                    position: 'relative',
                    zIndex: 13
                  }}
                >
                  <div
                    style={{
                      fontSize: 'var(--ah-info-size, clamp(13px, 1.4vw, 17px))',
                      lineHeight: '1.8',
                      color: '#ffffff',
                      flex: '1'
                    }}
                  >
                    <div style={{ marginBottom: 'calc(var(--ah-content-gap, 10px) * 0.8)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: 800 }}>Managers:</strong>
                      <span>Ennacer Besghaier.</span>
                    </div>
                    <div style={{ marginBottom: 'calc(var(--ah-content-gap, 10px) * 0.8)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: 800 }}>Mobile:</strong>
                      <span>054 292 9702</span>
                    </div>
                    <div style={{ marginBottom: 'calc(var(--ah-content-gap, 10px) * 0.8)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: 800 }}>Email:</strong>
                      <span>g.m@ahenviro.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: 'clamp(130px, 12vw, 180px)', fontWeight: 800 }}>Website:</strong>
                      <span>https://www.ahenviro.com</span>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 600ms both',
                      flexShrink: 0,
                      marginTop: '0',
                      alignSelf: 'flex-start',
                      zIndex: 13,
                      position: 'relative',
                      minWidth: 'clamp(140px, 16vw, 220px)',
                      maxWidth: 'clamp(140px, 16vw, 220px)'
                    }}
                  >
                    <img
                      src="/ahqr.jpeg"
                      alt="AH Environmental QR Code"
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxWidth: 'clamp(140px, 16vw, 220px)',
                        maxHeight: 'clamp(140px, 16vw, 220px)',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px',
                        display: 'block'
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowAHEnvironmentalLearnMore(true)}
                  style={{
                    marginTop: 'var(--ah-content-gap, clamp(20px, 2vh, 28px))',
                    padding: 'var(--ah-button-padding, clamp(14px, 1.6vw, 22px) clamp(32px, 3.2vw, 48px))',
                    fontSize: 'var(--ah-button-font, clamp(15px, 1.6vw, 22px))',
                    fontWeight: '700',
                    color: '#040075',
                    background: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'textReveal 1000ms cubic-bezier(0.2, 0.9, 0.2, 1) 540ms both',
                    position: 'relative',
                    zIndex: 13
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 255, 255, 0.4)';
                    e.currentTarget.style.background = '#f5f5f5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                >
                  Learn More
                </button>
              </div>
            </>
          ) : selectedCompany.id === 12 ? (
            <>
              {/* Gulf Logo - Top Left */}
              <div style={{
                position: 'fixed',
                top: '10px',
                left: '40px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '210px',
                    maxHeight: '210px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>

              {/* Gulf Consult Content - Left */}
              <div className="gulf-consult-content" style={{
                maxWidth: 'var(--gulf-content-max-width, clamp(600px, 50vw, 900px))',
                color: '#ffffff',
                direction: 'ltr',
                textAlign: 'left'
              }}>
                <h1 style={{
                  fontSize: 'var(--gulf-title-size, clamp(32px, 4vw, 56px))',
                  fontWeight: '900',
                  marginBottom: 'clamp(12px, 2vh, 24px)',
                  letterSpacing: '1.5px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  animation: 'fadeInUp 0.8s ease-out 0.2s both',
                  whiteSpace: 'nowrap'
                }}>
                  GULF CONSULT
                </h1>

                <p style={{
                  fontSize: 'var(--gulf-text-size, clamp(14px, 1.6vw, 22px))',
                  lineHeight: '1.75',
                  marginBottom: 'clamp(20px, 3vh, 36px)',
                  color: '#ffffff',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both'
                }}>
                  is an independent multidisciplinary consultancy firm established in 1981 with over 42 years of experience providing high-quality engineering and environmental services across the Gulf region, particularly in the Kingdom of Saudi Arabia.
                </p>

                <div style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 40px)',
                  alignItems: 'flex-start',
                  animation: 'fadeInUp 0.8s ease-out 0.6s both',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    fontSize: 'var(--gulf-info-size, clamp(15px, 1.7vw, 24px))',
                    lineHeight: '2',
                    color: '#ffffff',
                    flex: '1'
                  }}>
                    <div style={{ marginBottom: 'clamp(10px, 1.5vh, 18px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Managers:</strong>
                      <span>Eng. Faisal Sir AlHarbi - CEO, and Eng. Rabah Yehya - GM.</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(10px, 1.5vh, 18px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Mobile:</strong>
                      <span>055 584 6667</span>
                    </div>
                    <div style={{ marginBottom: 'clamp(10px, 1.5vh, 18px)' }}>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Email:</strong>
                      <span>faisal@gulfconsult.com &amp; rabah@gulfconsult.com</span>
                    </div>
                    <div>
                      <strong style={{ display: 'inline-block', width: 'clamp(120px, 12vw, 180px)', fontWeight: '800' }}>Website:</strong>
                      <a
                        href="https://www.gulfconsult.com"
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 700 }}
                      >
                        www.gulfconsult.com
                      </a>
                    </div>
                  </div>

                  {/* QR Code */}
                  <div
                    style={{
                      animation: 'fadeInUp 0.8s ease-out 0.8s both',
                      flexShrink: 0,
                      marginTop: 'clamp(110px, 4vh, 150px)',
                      alignSelf: 'flex-start'
                    }}
                  >
                    <img
                      src="/gulfconsultrectangleqr.jpeg"
                      alt="Gulf Consult QR Code"
                      onClick={() => setShowGulfConsultQRModal(true)}
                      style={{
                        maxWidth: 'var(--gulf-qr-size, clamp(160px, 18vw, 240px))',
                        maxHeight: 'var(--gulf-qr-size, clamp(160px, 18vw, 240px))',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '8px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                        backgroundColor: '#ffffff',
                        padding: '8px',
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease, boxShadow 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                  </div>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setShowGulfConsult2LearnMore(true)}
                  style={{
                    marginTop: 'clamp(20px, 3vh, 36px)',
                    padding: 'var(--gulf-button-padding, clamp(16px, 1.8vw, 24px) clamp(36px, 3.5vw, 48px))',
                    fontSize: 'var(--gulf-button-font, clamp(16px, 1.8vw, 22px))',
                    fontWeight: '700',
                    color: '#ffffff',
                    background: '#16348a',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(22, 52, 138, 0.4)',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.5px',
                    textTransform: 'uppercase',
                    animation: 'fadeInUp 0.8s ease-out 0.8s both'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(22, 52, 138, 0.5)';
                    e.currentTarget.style.background = '#1e42a5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(22, 52, 138, 0.4)';
                    e.currentTarget.style.background = '#16348a';
                  }}
                >
                  Learn More
                </button>
              </div>

              {/* Gulf Logo Play Button - Right Side (on diamond images) */}
              {!gulfLogoVideoFullscreen && (
                <div
                  style={{
                    position: 'fixed',
                    right: '5%',
                    top: '30%',
                    transform: 'translate(50%, -50%)',
                    zIndex: 11,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    animation: 'fadeInUp 0.8s ease-out 0.3s both'
                  }}
                >
                  {/* Video Thumbnail Container - Relative positioning */}
                  <div
                    style={{
                      position: 'relative',
                      display: 'inline-block',
                      animation: 'fadeInUp 0.8s ease-out 0.5s both'
                    }}
                  >
                    {/* Gulf Photo - Increased size for better visual impact */}
                    <img
                      src="/gulfphoto.jpg"
                      alt="Gulf Consult"
                      style={{
                        maxWidth: 'clamp(600px, 55vw, 1600px)',
                        maxHeight: 'clamp(400px, 45vh, 1000px)',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain',
                        borderRadius: '12px',
                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.6)',
                        display: 'block'
                      }}
                    />
                    
                    {/* Overlay Group - Text and Play Button centered together */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        gap: 'clamp(16px, 2vh, 24px)'
                      }}
                    >
                      {/* Click to play video text */}
                      <div
                        style={{
                          color: '#ffffff',
                          fontSize: 'clamp(14px, 1.8vw, 32px)',
                          fontWeight: '600',
                          textAlign: 'center',
                          animation: 'pulse 2s ease-in-out infinite',
                          textShadow: '0 2px 10px rgba(0, 0, 0, 0.8)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Click to play video
                      </div>
                      
                      {/* Play Button - Centered within the text */}
                      <div
                        onClick={async () => {
                          if (gulfLogoVideoContainerRef.current) {
                            try {
                              // فتح fullscreen
                              setGulfLogoVideoFullscreen(true);
                              setGulfLogoVideoPlaying(true);

                              let fullscreenPromise;
                              if (gulfLogoVideoContainerRef.current.requestFullscreen) {
                                fullscreenPromise = gulfLogoVideoContainerRef.current.requestFullscreen();
                              } else if (gulfLogoVideoContainerRef.current.webkitRequestFullscreen) {
                                fullscreenPromise = gulfLogoVideoContainerRef.current.webkitRequestFullscreen();
                              } else if (gulfLogoVideoContainerRef.current.msRequestFullscreen) {
                                fullscreenPromise = gulfLogoVideoContainerRef.current.msRequestFullscreen();
                              }

                              if (fullscreenPromise) {
                                await fullscreenPromise;
                              }
                            } catch (error) {
                              console.error('Error opening fullscreen:', error);
                            }
                          }
                        }}
                        style={{
                          width: 'var(--gulf-play-button-size, clamp(90px, 9vw, 220px))',
                          height: 'var(--gulf-play-button-size, clamp(90px, 9vw, 220px))',
                          borderRadius: '50%',
                          background: 'rgba(22, 52, 138, 0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 20px rgba(22, 52, 138, 0.4)',
                          flexShrink: 0
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(22, 52, 138, 1)';
                          e.currentTarget.style.transform = 'scale(1.1)';
                          e.currentTarget.style.boxShadow = '0 6px 30px rgba(22, 52, 138, 0.6)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(22, 52, 138, 0.9)';
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = '0 4px 20px rgba(22, 52, 138, 0.4)';
                        }}
                      >
                        <svg
                          width="clamp(40px, 4.5vw, 110px)"
                          height="clamp(40px, 4.5vw, 110px)"
                          viewBox="0 0 24 24"
                          fill="white"
                          style={{ marginLeft: '6px' }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Gulf Logo Video - Hidden for fullscreen (Cloudinary iframe) */}
              <div
                ref={gulfLogoVideoContainerRef}
                style={{
                  position: 'fixed',
                  right: gulfLogoVideoFullscreen ? '0' : '-9999px',
                  top: gulfLogoVideoFullscreen ? '0' : '-9999px',
                  width: gulfLogoVideoFullscreen ? '100vw' : '0',
                  height: gulfLogoVideoFullscreen ? '100vh' : '0',
                  zIndex: gulfLogoVideoFullscreen ? 9999 : -1,
                  backgroundColor: '#000000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {gulfLogoVideoFullscreen && (
                  <video
                    key={`gulf-logo-video-${gulfLogoVideoFullscreen}`}
                    src="https://res.cloudinary.com/dl2rqs0lo/video/upload/gulfconsult_pjinhc.mp4"
                    autoPlay
                    controls
                    style={{
                      height: '100%',
                      width: '100%',
                      maxHeight: '100vh',
                      maxWidth: '100vw',
                      objectFit: 'contain'
                    }}
                    onEnded={() => {
                      closeVideo(setGulfLogoVideoFullscreen, setGulfLogoVideoPlaying);
                    }}
                  />
                )}
                {gulfLogoVideoFullscreen && (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      // إغلاق fullscreen يدوياً
                      if (document.exitFullscreen) {
                        document.exitFullscreen();
                      } else if (document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                      } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                      }
                      setGulfLogoVideoFullscreen(false);
                      setGulfLogoVideoPlaying(false);
                    }}
                    style={{
                      position: 'absolute',
                      top: '20px',
                      right: '20px',
                      width: '50px',
                      height: '50px',
                      borderRadius: '50%',
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      zIndex: 10000
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.9)';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="white"
                    >
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                    </svg>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Logo - Top Left with fly-in animation */}
              <div style={{
                position: 'fixed',
                top: '10px',
                left: '40px',
                zIndex: 11,
                animation: 'logoFlyIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}>
                <img
                  src={selectedCompany.modalLogo || selectedCompany.logo}
                  alt={selectedCompany.name}
                  style={{
                    maxWidth: '250px',
                    maxHeight: '250px',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 6px 20px rgba(0, 0, 0, 0.3))'
                  }}
                />
              </div>
            </>
          )}

          {/* Back to Alika button - Top Right */}
          <button
            onClick={() => setSelectedCompany(null)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: selectedCompany.id === 8 ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.35)',
              border: '1px solid rgba(255, 255, 255, 0.28)',
              color: 'rgba(255, 255, 255, 0.95)',
              padding: 'clamp(10px, 1.2vw, 14px) clamp(18px, 2vw, 24px)',
              borderRadius: '12px',
              fontSize: 'clamp(13px, 1.2vw, 16px)',
              fontWeight: '800',
              letterSpacing: '0.35px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 10,
              boxShadow: '0 16px 45px rgba(0, 0, 0, 0.35)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = selectedCompany.id === 8 ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.45)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 18px 50px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = selectedCompany.id === 8 ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.35)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 16px 45px rgba(0, 0, 0, 0.35)';
            }}
          >
            Back to Alika
          </button>
        </div>
      )}

      {/* Our Partners Modal */}
      {showPartners && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',

          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'hidden'
        }}>
          {/* Content Container */}
          <div style={{
            width: '100%',
            height: '100vh',
            padding: '20px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '30px',
              zIndex: 10
            }}>
              <button
                onClick={() => setActiveTab('partners')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: activeTab === 'partners' ? '#ffffff' : '#2d8659',
                  background: activeTab === 'partners' ? '#2d8659' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #2d8659',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'partners') {
                    e.currentTarget.style.background = 'rgba(45, 134, 89, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'partners') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our Partners
              </button>
              <button
                onClick={() => setActiveTab('team')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: activeTab === 'team' ? '#ffffff' : '#2d8659',
                  background: activeTab === 'team' ? '#2d8659' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #2d8659',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'team') {
                    e.currentTarget.style.background = 'rgba(45, 134, 89, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'team') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our Team
              </button>
              <button
                onClick={() => setActiveTab('project')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: activeTab === 'project' ? '#ffffff' : '#2d8659',
                  background: activeTab === 'project' ? '#2d8659' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #2d8659',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== 'project') {
                    e.currentTarget.style.background = 'rgba(45, 134, 89, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== 'project') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our Project
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'partners' && (
              <>
                {/* Title */}
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#2d8659',
                  marginBottom: '10px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>

                {/* Partners Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridTemplateRows: 'repeat(4, 1fr)',
              gap: '0px',
              maxWidth: '500px',
              width: '100%',
              height: 'calc(100vh - 80px)',
              padding: '0'
            }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                <div
                  key={num}
                  style={{
                    background: 'transparent',
                    borderRadius: '0',
                    padding: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '0',
                    height: '100%'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <img
                    src={`/${num}.png`}
                    alt={`Partner ${num}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transform: 'scale(1)'
                    }}
                  />
                </div>
              ))}
            </div>
              </>
            )}

            {activeTab === 'team' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#2d8659'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#2d8659',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  OUR TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#2d8659'
                }}>
                  Our dedicated team of professionals is committed to delivering excellence in environmental testing and consulting services.
                </p>
              </div>
            )}

            {activeTab === 'project' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#2d8659'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#2d8659',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  OUR PROJECT
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#2d8659'
                }}>
                  Explore our portfolio of successful environmental projects and initiatives.
                </p>
              </div>
            )}
          </div>

          {/* Back button - text only */}
          <button
            onClick={() => setShowPartners(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.95)',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '700',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* Gulf Consult Learn More Modal */}
      {showGulfConsultLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/gc-engineer-learnmore-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'hidden'
        }}>
          {/* Content Container */}
          <div style={{
            width: '100%',
            height: '100vh',
            padding: '10px 40px 20px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '50px',
            overflow: 'auto'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '10px',
              zIndex: 10
            }}>
              <button
                onClick={() => setGulfConsultActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsultActiveTab === 'tab3' ? '#ffffff' : '#6a1b9a',
                  background: gulfConsultActiveTab === 'tab3' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #6a1b9a',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsultActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsultActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setGulfConsultActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsultActiveTab === 'tab2' ? '#ffffff' : '#6a1b9a',
                  background: gulfConsultActiveTab === 'tab2' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #6a1b9a',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsultActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsultActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setGulfConsultActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsultActiveTab === 'tab1' ? '#ffffff' : '#6a1b9a',
                  background: gulfConsultActiveTab === 'tab1' ? '#6a1b9a' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #6a1b9a',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsultActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(106, 27, 154, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsultActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our PROJECT
              </button>
            </div>

            {/* Tab Content */}
            {gulfConsultActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#6a1b9a',
                  marginBottom: '60px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>

                {/* Partners Logos Grid */}
                <div style={{
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  marginTop: '20px'
                }}>
                  <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    flexShrink: 0
                  }}>
                    <img
                      src="/gcpartner4.png"
                      alt="Partner 4"
                      onError={(e) => {
                        e.target.src = '/elco-gif.gif';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    flexShrink: 0
                  }}>
                    <img
                      src="/gcpartner3.png"
                      alt="Partner 3"
                      onError={(e) => {
                        e.target.src = '/dorrah-gif.gif';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    flexShrink: 0
                  }}>
                    <img
                      src="/gcpartner2.png"
                      alt="Partner 2"
                      onError={(e) => {
                        e.target.src = '/dorrah.png';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    flexShrink: 0
                  }}>
                    <img
                      src="/gcpartner1.png"
                      alt="Partner 1"
                      onError={(e) => {
                        e.target.src = '/cc.png';
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            {gulfConsultActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#6a1b9a',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#6a1b9a',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#6a1b9a'
                }}>
                  Our dedicated team of professionals is committed to delivering excellence.
                </p>
              </div>
            )}

            {gulfConsultActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '5px 20px 20px 20px',
                color: '#6a1b9a',
                minHeight: 'calc(100vh - 180px)',
                overflow: 'visible'
              }}>
                <h1 style={{
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: '1000',
                  color: '#6a1b9a',
                  marginBottom: '10px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PROJECTS
                </h1>

                {/* Projects Grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  width: '100%',
                  alignItems: 'center',
                  flex: 1,
                  justifyContent: 'flex-start'
                }}>
                  {/* First Row - 3 images */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <img
                      src="/gc-project1.png"
                      alt="Project 1"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                    <img
                      src="/gc-project2.png"
                      alt="Project 2"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                    <img
                      src="/gc-project3.png"
                      alt="Project 3"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                  </div>

                  {/* Second Row - 2 images */}
                  <div style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    <img
                      src="/gc-project4.png"
                      alt="Project 4"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                    <img
                      src="/gc-project5.png"
                      alt="Project 5"
                      style={{
                        width: 'clamp(200px, 22vw, 320px)',
                        height: 'auto',
                        maxHeight: '180px',
                        objectFit: 'cover',
                        borderRadius: '6px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                      }}
                    />
                  </div>
                </div>

                {/* Project Info */}
                <div style={{
                  marginTop: '12px',
                  textAlign: 'center',
                  marginBottom: '0px',
                  paddingBottom: '10px'
                }}>
                  <h2 style={{
                    fontSize: 'clamp(18px, 1.8vw, 24px)',
                    fontWeight: '900',
                    color: '#6a1b9a',
                    marginBottom: '8px',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                  }}>
                    LAND RIG
                  </h2>
                  <p style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    color: '#000000',
                    fontWeight: '400',
                    margin: '0'
                  }}>
                    Ras Al Khair
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Back button - text only */}
          <button
            onClick={() => setShowGulfConsultLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: '#4a148c',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '800',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
              e.currentTarget.style.color = '#3d0f6f';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.color = '#4a148c';
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* Gulf Consult Arch QR Code Modal */}
      {showGulfConsultArchQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGulfConsultArchQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowGulfConsultArchQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 1)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page3"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="Gulf Consult Arch QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* Antique Learn More Modal */}
      {showAntiqueLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/antiquelearnmore.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto'
        }}>
          {/* Content Container */}
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '50px 40px 20px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            zIndex: 1,
            overflow: 'auto'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '10px',
              zIndex: 10
            }}>
              <button
                onClick={() => setAntiqueActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: antiqueActiveTab === 'tab3' ? '#ffffff' : '#f3c06b',
                  background: antiqueActiveTab === 'tab3' ? '#f3c06b' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #f3c06b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (antiqueActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(243, 192, 107, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (antiqueActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setAntiqueActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: antiqueActiveTab === 'tab2' ? '#ffffff' : '#f3c06b',
                  background: antiqueActiveTab === 'tab2' ? '#f3c06b' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #f3c06b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (antiqueActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(243, 192, 107, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (antiqueActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setAntiqueActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: antiqueActiveTab === 'tab1' ? '#ffffff' : '#f3c06b',
                  background: antiqueActiveTab === 'tab1' ? '#f3c06b' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #f3c06b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (antiqueActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(243, 192, 107, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (antiqueActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our PROJECT
              </button>
            </div>

            {/* Tab Content */}
            {antiqueActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#f3c06b',
                  marginBottom: '40px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                {/* Partners content will be added here */}
              </div>
            )}

            {antiqueActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#f3c06b',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#f3c06b',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#f3c06b'
                }}>
                  Our dedicated team of professionals is committed to delivering excellence.
                </p>
              </div>
            )}

            {antiqueActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '5px 20px 20px 20px',
                color: '#f3c06b',
                minHeight: 'calc(100vh - 180px)',
                overflow: 'visible'
              }}>
                <h1 style={{
                  fontSize: 'clamp(20px, 2vw, 28px)',
                  fontWeight: '900',
                  color: '#f3c06b',
                  marginBottom: '5px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PROJECTS
                </h1>

                {/* Projects Grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '12px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  marginTop: '70px'
                }}>
                  <img
                    src="/antique-project1.png"
                    alt="Project 1"
                    style={{
                      width: 'clamp(280px, 28vw, 400px)',
                      height: 'auto',
                      maxHeight: '250px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                    }}
                  />
                  <img
                    src="/antique-project2.png"
                    alt="Project 2"
                    style={{
                      width: 'clamp(280px, 28vw, 400px)',
                      height: 'auto',
                      maxHeight: '250px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                    }}
                  />
                  <img
                    src="/antique-project3.png"
                    alt="Project 3"
                    style={{
                      width: 'clamp(280px, 28vw, 400px)',
                      height: 'auto',
                      maxHeight: '250px',
                      objectFit: 'cover',
                      borderRadius: '6px',
                      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)'
                    }}
                  />
                </div>

                {/* Project Info */}
                <div style={{
                  marginTop: '12px',
                  textAlign: 'center',
                  marginBottom: '0px',
                  paddingBottom: '10px'
                }}>
                  <p style={{
                    fontSize: 'clamp(16px, 1.5vw, 20px)',
                    color: '#ffffff',
                    fontWeight: '400',
                    margin: '0'
                  }}>
                    supply and installation of furniture at dialysis center
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Back to Alika button */}
          <button
            onClick={() => setShowAntiqueLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.95)',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '700',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* AMT Learn More Modal */}
      {showAMTLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'url(/amt-bg.JPEG)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto'
        }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#ffffff',
            paddingTop: '80px'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10
            }}>
              <button
                onClick={() => setAmtActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab3' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab3' ? '#ff4b4b' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setAmtActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab2' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab2' ? '#ff4b4b' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setAmtActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: amtActiveTab === 'tab1' ? '#ffffff' : '#ff4b4b',
                  background: amtActiveTab === 'tab1' ? '#ff4b4b' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid #ff4b4b',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (amtActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 75, 75, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (amtActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                Our PROJECTS
              </button>
            </div>

            {/* Tab Content */}
            {amtActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#ffffff',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ff4b4b',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our PROJECTS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#ffffff'
                }}>
                  Our projects showcase our expertise in advanced micro technologies and innovative solutions.
                </p>
              </div>
            )}

            {amtActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#ffffff',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ff4b4b',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#ffffff'
                }}>
                  Our dedicated team of experts brings years of experience in advanced micro technologies and innovation.
                </p>
              </div>
            )}

            {amtActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ff4b4b',
                  marginBottom: 'clamp(20px, 3vh, 30px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partners Grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(15px, 2vh, 20px)',
                  width: '100%',
                  maxWidth: '1000px',
                  alignItems: 'center',
                  marginLeft: 'clamp(20px, 3vw, 40px)'
                }}>
                  {/* Row 1: 5 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%'
                  }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 82.png"
                      alt="Kingdom of Saudi Arabia"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 83.png"
                      alt="Imam Abdulrahman Bin Faisal University"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 84.png"
                      alt="Ma'aden"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 85.png"
                      alt="King Faisal University"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 86.png"
                      alt="Marafiq"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                  
                  {/* Row 2: 5 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%'
                  }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 87.png"
                      alt="Saudi Arabia"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 90.png"
                      alt="Ministry of Health"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 91.png"
                      alt="Ministry of Finance"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 92.png"
                      alt="King Saud University"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 95.png"
                      alt="Aramco"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowAMTLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              color: '#fff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '28px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 2001,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
            Back
          </button>
        </div>
      )}

      {/* AMT QR Code Modal */}
      {showAMTQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowAMTQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAMTQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 1)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page1"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="AMT QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* Gulf Consult 2 Learn More Modal */}
      {showGulfConsult2LearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: 'url(/gulfconsultbg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto'
        }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#ffffff',
            paddingTop: '80px'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10
            }}>
              <button
                onClick={() => setGulfConsult2ActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsult2ActiveTab === 'tab3' ? '#ffffff' : '#ffffff',
                  background: gulfConsult2ActiveTab === 'tab3' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(33, 150, 243, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setGulfConsult2ActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsult2ActiveTab === 'tab2' ? '#ffffff' : '#ffffff',
                  background: gulfConsult2ActiveTab === 'tab2' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(33, 150, 243, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setGulfConsult2ActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gulfConsult2ActiveTab === 'tab1' ? '#ffffff' : '#ffffff',
                  background: gulfConsult2ActiveTab === 'tab1' ? 'rgba(33, 150, 243, 0.9)' : 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(33, 150, 243, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(33, 150, 243, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gulfConsult2ActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                Our PROJECTS
              </button>
            </div>

            {/* Tab Content */}
            {gulfConsult2ActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                padding: 'clamp(5px, 1vh, 10px)'
              }}>
                <h1 style={{
                  fontSize: 'clamp(20px, 2.2vw, 32px)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: 'clamp(10px, 1.5vh, 15px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PROJECTS
                </h1>
                
                {/* Project Image */}
                <div style={{
                  width: '100%',
                  marginBottom: 'clamp(20px, 3vh, 30px)',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <img
                    src="/image 65.png"
                    alt="Our Projects - Geotechnical Investigation"
                    style={{
                      width: '100%',
                      maxWidth: 'clamp(450px, 55vw, 700px)',
                      maxHeight: 'clamp(250px, 30vh, 350px)',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      boxShadow: 'none',
                      background: 'transparent'
                    }}
                  />
                </div>
                
                {/* Project Description */}
                <div style={{
                  width: '100%',
                  maxWidth: 'clamp(450px, 55vw, 700px)',
                  textAlign: 'left',
                  padding: '0 20px',
                  marginTop: 'clamp(15px, 2vh, 25px)'
                }}>
                  <p style={{
                    fontSize: 'clamp(12px, 1.1vw, 16px)',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    marginBottom: '10px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'normal',
                    textTransform: 'lowercase'
                  }}>
                    gulf consult has recently completed an extensive geotechnical investigation for amiral project pre-feed/feed - block 15 and other areas; at jubail
                  </p>
                  <p style={{
                    fontSize: 'clamp(12px, 1.1vw, 16px)',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    marginBottom: '10px',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'normal',
                    textTransform: 'lowercase'
                  }}>
                    our scope of work includes drilling and sampling of over 900 boreholes and cross hole seismic test, soil electrical resistivity, plate load test, surface seismic refraction test
                  </p>
                  <p style={{
                    fontSize: 'clamp(12px, 1.1vw, 16px)',
                    lineHeight: '1.6',
                    color: '#ffffff',
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: 'normal',
                    textTransform: 'lowercase'
                  }}>
                    the client for this project is worley parsons
                  </p>
                </div>
              </div>
            )}

            {gulfConsult2ActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#ffffff',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#ffffff'
                }}>
                  Our dedicated team brings over 42 years of combined experience in providing high-quality engineering and environmental services.
                </p>
              </div>
            )}

            {gulfConsult2ActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(10px, 2vh, 20px)'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: 'clamp(20px, 3vh, 30px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partners Grid */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(15px, 2vh, 20px)',
                  width: '100%',
                  maxWidth: '1000px',
                  alignItems: 'center'
                }}>
                  {/* Row 1: 4 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%'
                  }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 61.png"
                      alt="Al-Watania Poultry"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 60.png"
                      alt="United Global Contractors"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 59.png"
                      alt="HUTA HEGERFELD"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 58.png"
                      alt="Saudi Aramco"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                  
                  {/* Row 2: 5 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%'
                  }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 53.png"
                      alt="Saudi Electricity Company"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 54.png"
                      alt="Samsung Engineering"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 55.png"
                      alt="KBR"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 56.png"
                      alt="C.A.T. GROUP"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    background: 'transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  >
                    <img
                      src="/Group 57.png"
                      alt="ARCHIRODON"
                      style={{
                        width: 'clamp(140px, 18vw, 200px)',
                        height: 'auto',
                        maxHeight: 'clamp(140px, 18vw, 200px)',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowGulfConsult2LearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.95)',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '700',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* Gulf Consult QR Code Modal */}
      {showGulfConsultQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowGulfConsultQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowGulfConsultQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 1)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page3"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="Gulf Consult QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* GSG Learn More Modal */}
      {showGSGLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#e0f7fa',
          backgroundImage: 'url(/gsg-ourpartnersbg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto'
        }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#07373c',
            paddingTop: '80px'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10
            }}>
              <button
                onClick={() => setGsgActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gsgActiveTab === 'tab1' ? '#ffffff' : '#07373c',
                  background: gsgActiveTab === 'tab1' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #07373c',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gsgActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gsgActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our PROJECTS
              </button>
              <button
                onClick={() => setGsgActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gsgActiveTab === 'tab2' ? '#ffffff' : '#07373c',
                  background: gsgActiveTab === 'tab2' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #07373c',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gsgActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gsgActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setGsgActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: gsgActiveTab === 'tab3' ? '#ffffff' : '#07373c',
                  background: gsgActiveTab === 'tab3' ? '#07373c' : 'rgba(255, 255, 255, 0.9)',
                  border: '2px solid #07373c',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (gsgActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(7, 55, 60, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (gsgActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
            </div>

            {/* Tab Content */}
            {gsgActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#07373c',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#07373c',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our PROJECTS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#07373c'
                }}>
                  Our projects showcase our expertise in geophysical, geological, environmental, and engineering solutions across various industries.
                </p>
              </div>
            )}

            {gsgActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                textAlign: 'center',
                color: '#07373c',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#07373c',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  Our TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  color: '#07373c'
                }}>
                  Our dedicated team of scientists, engineers, and experts brings decades of combined experience to deliver innovative solutions for your projects.
                </p>
              </div>
            )}

            {gsgActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#07373c',
                  marginBottom: '60px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partner Logos */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: 'clamp(30px, 5vw, 60px)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  marginTop: '20px',
                  marginBottom: '40px'
                }}>
                  <img
                    src="/gcgpartner3 (3).png"
                    alt="GCG Partner"
                    style={{
                      width: 'clamp(200px, 20vw, 280px)',
                      height: 'auto',
                      maxHeight: '200px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                    }}
                  />
                  <img
                    src="/gcgpartner3 (2).png"
                    alt="GeoPRO Partner"
                    style={{
                      width: 'clamp(200px, 20vw, 280px)',
                      height: 'auto',
                      maxHeight: '200px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                    }}
                  />
                  <img
                    src="/gcgpartner3 (1).png"
                    alt="DMT Partner"
                    style={{
                      width: 'clamp(200px, 20vw, 280px)',
                      height: 'auto',
                      maxHeight: '200px',
                      objectFit: 'contain',
                      filter: 'drop-shadow(0 4px 15px rgba(0, 0, 0, 0.2))'
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          {/* Back button - text only */}
          <button
            onClick={() => setShowGSGLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: '#07373c',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '700',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* Gulf Dorrah Learn More Modal */}
      {showGulfDorrahLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#061826',
          backgroundImage: 'url(/dorrah-gif.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto'
        }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#33d18f',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              GULF DORRAH REAL
            </h1>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#29a4ff',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              ESTATE DEVELOPMENT
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              maxWidth: '800px',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#ffffff'
            }}>
              More information about Gulf Dorrah will be available here.
            </p>
          </div>
          <button
            onClick={() => setShowGulfDorrahLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              color: '#333',
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.95)',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '700',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* Central Medicalcare Learn More Modal */}
      {showCentralMedicalcareLearnMore && (
        <div 
          className="central-medicalcare-modal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#bfa874',
            backgroundImage: 'url(/bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 2000,
            animation: 'fadeIn 0.6s ease-in-out',
            overflow: 'hidden'
          }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#ffffff',
            paddingTop: '80px'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10
            }}>
              <button
                onClick={() => setCentralMedicalcareActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: centralMedicalcareActiveTab === 'tab1' ? '#ffffff' : '#ffffff',
                  background: centralMedicalcareActiveTab === 'tab1' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                  border: '2px solid rgba(191, 168, 116, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  textOverflow: 'clip'
                }}
                onMouseEnter={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
                  }
                }}
              >
                OUR PROJECTS
              </button>
              <button
                onClick={() => setCentralMedicalcareActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: centralMedicalcareActiveTab === 'tab2' ? '#ffffff' : '#ffffff',
                  background: centralMedicalcareActiveTab === 'tab2' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                  border: '2px solid rgba(191, 168, 116, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  textOverflow: 'clip'
                }}
                onMouseEnter={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
                  }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setCentralMedicalcareActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: centralMedicalcareActiveTab === 'tab3' ? '#ffffff' : '#ffffff',
                  background: centralMedicalcareActiveTab === 'tab3' ? 'rgba(191, 168, 116, 0.9)' : 'rgba(191, 168, 116, 0.6)',
                  border: '2px solid rgba(191, 168, 116, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  textOverflow: 'clip'
                }}
                onMouseEnter={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.7)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (centralMedicalcareActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(191, 168, 116, 0.6)';
                  }
                }}
              >
                OUR TEAM
              </button>
            </div>

            {/* Tab Content */}
            {centralMedicalcareActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: 'transparent',
                minHeight: '600px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  marginBottom: '30px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  OUR PROJECTS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>
                  Information about Central Medicalcare projects will be available here.
                </p>
              </div>
            )}

            {centralMedicalcareActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: 'transparent',
                minHeight: '600px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  marginBottom: '30px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  OUR PARTNERS
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>
                  Information about Central Medicalcare partners will be available here.
                </p>
              </div>
            )}

            {centralMedicalcareActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: 'transparent',
                minHeight: '600px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  marginBottom: '30px',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  letterSpacing: '2px'
                }}>
                  OUR TEAM
                </h1>
                <p style={{
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  lineHeight: '1.8',
                  maxWidth: '800px',
                  textAlign: 'center',
                  color: '#ffffff'
                }}>
                  Information about Central Medicalcare team will be available here.
                </p>
              </div>
            )}
          </div>
          <button
            onClick={() => setShowCentralMedicalcareLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(191, 168, 116, 0.9)',
              border: '2px solid rgba(191, 168, 116, 1)',
              borderRadius: '8px',
              color: '#ffffff',
              padding: '12px 24px',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '700',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(191, 168, 116, 1)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(191, 168, 116, 0.9)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
            }}
            aria-label="Back to Alika"
          >
            Back to Alika
          </button>
        </div>
      )}

      {/* RK Learn More Modal */}
      {showRKLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#f5f5f5',
          backgroundImage: 'url(/rk1-gif.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto'
        }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#F4A460',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              AL RAKAEZ CONSTRUCTION
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              maxWidth: '800px',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#000000'
            }}>
              More information about Al Rakaez Construction will be available here.
            </p>
          </div>
          <button
            onClick={() => setShowRKLearnMore(false)}
            style={{
              position: 'fixed',
              top: '40px',
              right: '40px',
              background: 'rgba(0, 0, 0, 0.8)',
              border: 'none',
              color: '#fff',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              fontSize: '28px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              zIndex: 2001,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              fontWeight: 'bold'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 1)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            >
            Back
          </button>
        </div>
      )}

      {/* AH Environmental Learn More Modal */}
      {showAHEnvironmentalLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          backgroundColor: ahEnvironmentalActiveTab === 'tab1' ? '#ffffff' : '#283152',
          backgroundImage: ahEnvironmentalActiveTab === 'tab1' ? 'none' : (ahEnvironmentalActiveTab === 'tab3' ? 'url(/bgourproject.png)' : 'url(/bgforah.png)'),
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto',
          boxSizing: 'border-box'
        }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            color: '#ffffff',
            paddingTop: '80px'
          }}>
            {/* Tabs Navigation */}
            <div style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '40px',
              zIndex: 10
            }}>
              <button
                onClick={() => setAhEnvironmentalActiveTab('tab1')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: ahEnvironmentalActiveTab === 'tab1' ? '#ffffff' : '#283152',
                  background: ahEnvironmentalActiveTab === 'tab1' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(40, 60, 100, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  textOverflow: 'clip'
                }}
                onMouseEnter={(e) => {
                  if (ahEnvironmentalActiveTab !== 'tab1') {
                    e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                    if (ahEnvironmentalActiveTab !== 'tab1') {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    }
                }}
              >
                OUR PARTNERS
              </button>
              <button
                onClick={() => setAhEnvironmentalActiveTab('tab2')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: ahEnvironmentalActiveTab === 'tab2' ? '#ffffff' : '#283152',
                  background: ahEnvironmentalActiveTab === 'tab2' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(40, 60, 100, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  textOverflow: 'clip'
                }}
                onMouseEnter={(e) => {
                  if (ahEnvironmentalActiveTab !== 'tab2') {
                    e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                    if (ahEnvironmentalActiveTab !== 'tab2') {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    }
                }}
              >
                Our TEAM
              </button>
              <button
                onClick={() => setAhEnvironmentalActiveTab('tab3')}
                style={{
                  padding: '12px 30px',
                  fontSize: '16px',
                  fontWeight: '700',
                  color: ahEnvironmentalActiveTab === 'tab3' ? '#ffffff' : '#283152',
                  background: ahEnvironmentalActiveTab === 'tab3' ? 'rgba(40, 60, 100, 0.9)' : 'rgba(255, 255, 255, 0.8)',
                  border: '2px solid rgba(40, 60, 100, 0.8)',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'none',
                  letterSpacing: '1px',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                  textOverflow: 'clip'
                }}
                onMouseEnter={(e) => {
                  if (ahEnvironmentalActiveTab !== 'tab3') {
                    e.currentTarget.style.background = 'rgba(40, 60, 100, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                    if (ahEnvironmentalActiveTab !== 'tab3') {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    }
                }}
              >
                Our PROJECTS
              </button>
            </div>

            {/* Tab Content */}
            {ahEnvironmentalActiveTab === 'tab1' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: 'transparent',
                minHeight: '600px'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#283152',
                  marginBottom: 'clamp(30px, 4vh, 50px)',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center'
                }}>
                  OUR PARTNERS
                </h1>
                
                {/* Partners Grid - 12 logos in 2 rows of 6 */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'clamp(20px, 3vh, 30px)',
                  width: '100%',
                  alignItems: 'center'
                }}>
                  {/* Row 1: 6 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%',
                    maxWidth: '1200px'
                  }}>
                  {[67, 70, 71, 72, 73, 74].map((num) => (
                    <div key={num} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '15px',
                      background: 'transparent',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    >
                      <img
                        src={`/Group ${num}.png`}
                        alt={`Partner ${num}`}
                        style={{
                          width: 'clamp(100px, 12vw, 150px)',
                          height: 'auto',
                          maxHeight: 'clamp(100px, 12vw, 150px)',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  ))}
                  </div>
                  
                  {/* Row 2: 6 logos */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: 'clamp(15px, 2vw, 25px)',
                    width: '100%',
                    maxWidth: '1200px'
                  }}>
                  {[75, 76, 77, 78, 79, 80].map((num) => (
                    <div key={num} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '15px',
                      background: 'transparent',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    >
                      <img
                        src={`/Group ${num}.png`}
                        alt={`Partner ${num}`}
                        style={{
                          width: 'clamp(100px, 12vw, 150px)',
                          height: 'auto',
                          maxHeight: 'clamp(100px, 12vw, 150px)',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            )}

            {ahEnvironmentalActiveTab === 'tab2' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '40px',
                backgroundColor: 'transparent'
              }}>
                <h1 style={{
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: '900',
                  color: '#ffffff',
                  marginBottom: '30px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                }}>
                  Our TEAM
                </h1>
                <img
                  src="/ahourteam.png"
                  alt="Our Team"
                  style={{
                    width: '100%',
                    maxWidth: 'clamp(800px, 80vw, 1000px)',
                    maxHeight: 'clamp(400px, 50vh, 500px)',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '12px'
                  }}
                />
              </div>
            )}

            {ahEnvironmentalActiveTab === 'tab3' && (
              <div style={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                padding: '40px',
                backgroundColor: 'transparent',
                minHeight: '500px'
              }}>
                 {/* Title at Top Center */}
                 <h1 style={{
                   fontSize: 'clamp(24px, 2.5vw, 36px)',
                   fontWeight: '900',
                   color: '#7b1fa2',
                   marginBottom: '30px',
                   letterSpacing: '1.5px',
                   textTransform: 'uppercase',
                   textAlign: 'center',
                   textShadow: '0 2px 8px rgba(123, 31, 162, 0.4)'
                 }}>
                   Our PROJECTS
                 </h1>
                
                {/* Content Row: Text and Image */}
                <div style={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  gap: 'clamp(30px, 4vw, 50px)'
                }}>
                  {/* Left Side - Text Content */}
                  <div style={{
                    flex: '1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    paddingTop: '20px'
                  }}>
                  <p style={{
                    fontSize: 'clamp(14px, 1.3vw, 18px)',
                    lineHeight: '1.8',
                    color: '#ffffff',
                    textAlign: 'left',
                    marginBottom: '0',
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
                  }}>
                    finovate offerings for industries at finovate, we go beyond one-size-fits-all solutions by offering customized bpm services designed to meet the unique needs of diverse industries. our digital business process management services, combined with expert consulting, seamless technology integration, and proven customer experience strategies, drive significant productivity and cost-efficiency gains. we don't just optimize processes—we transform them to elevate your industry.
                  </p>
                  </div>
                  
                  {/* Right Side - Image */}
                  <div style={{
                    flex: '1',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img
                      src="/photo66.png"
                      alt="Projects Chart"
                      style={{
                        width: '100%',
                        maxWidth: '400px',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Back button - text only */}
          <button
            onClick={() => setShowAHEnvironmentalLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: ahEnvironmentalActiveTab === 'tab1' ? '#283152' : 'rgba(255, 255, 255, 0.95)',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '800',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
              textShadow: ahEnvironmentalActiveTab === 'tab1' ? 'none' : '0 1px 2px rgba(0, 0, 0, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* IDC Learn More Modal */}
      {showIDCLearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#f5f5f5',
          backgroundImage: 'url(/idc-gif.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto'
        }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#0b2239'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#0b6fbf',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              IDC CONTRACTING COMPANY
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              maxWidth: '800px',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#0b2239'
            }}>
              More information about IDC Contracting Company will be available here.
            </p>
          </div>
          {/* IDC Back button - text only */}
          <button
            onClick={() => setShowIDCLearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: '#0b2239',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '800',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* IDC QR Code Modal */}
      {showIDCQRModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'fadeIn 0.3s ease-in-out'
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowIDCQRModal(false);
            }
          }}
        >
          {/* Modal Content - Card Style */}
          <div
            style={{
              position: 'relative',
              width: '500px',
              height: '100%',
              maxHeight: '100vh',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowIDCQRModal(false)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                border: 'none',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                fontSize: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10001,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                fontWeight: 'bold',
                lineHeight: '1'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 1)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.8)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              ×
            </button>

            {/* Iframe Container */}
            <iframe
              src="https://linktrees-s.netlify.app/page2"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                flex: 1,
                margin: 0,
                padding: 0
              }}
              title="IDC QR Link"
              allow="fullscreen"
              scrolling="auto"
            />
          </div>
        </div>
      )}

      {/* GTA Learn More Modal */}
      {showGTALearnMore && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: '#ffffff',
          backgroundImage: 'url(/GTA-bg.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          zIndex: 2000,
          animation: 'fadeIn 0.6s ease-in-out',
          overflow: 'auto'
        }}>
          <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#000000'
          }}>
            <h1 style={{
              fontSize: 'clamp(28px, 3.5vw, 42px)',
              fontWeight: '900',
              marginBottom: '30px',
              color: '#dc2626',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              GERMAN TECHNOLOGY AUTO
            </h1>
            <p style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              lineHeight: '1.8',
              maxWidth: '800px',
              textAlign: 'center',
              marginBottom: '40px',
              color: '#000000'
            }}>
              More information about German Technology Auto will be available here.
            </p>
          </div>
          {/* GTA Back button - text only */}
          <button
            onClick={() => setShowGTALearnMore(false)}
            style={{
              position: 'fixed',
              top: 'clamp(20px, 2.5vw, 40px)',
              right: 'clamp(20px, 2.5vw, 40px)',
              background: 'transparent',
              border: 'none',
              color: '#b91c1c',
              padding: '0',
              fontSize: 'clamp(14px, 1.3vw, 18px)',
              fontWeight: '800',
              letterSpacing: '0.5px',
              cursor: 'pointer',
              zIndex: 2001,
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'opacity 0.3s ease',
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}
