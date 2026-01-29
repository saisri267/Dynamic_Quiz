const quizData = {
    web: {

        easy: [
        {
            q: "What does HTML stand for?",
            o: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Markup", "Home Tool Markup Language"],
            a: "Hyper Text Markup Language",
            exp: "HTML stands for Hyper Text Markup Language and is used to structure web pages."
        },
        {
            q: "Which tag is used to create a hyperlink?",
            o: ["<a>", "<link>", "<href>", "<url>"],
            a: "<a>",
            exp: "The <a> (anchor) tag is used to create hyperlinks in HTML."
        },
        {
            q: "Which language is used for styling web pages?",
            o: ["HTML", "CSS", "JavaScript", "PHP"],
            a: "CSS",
            exp: "CSS (Cascading Style Sheets) controls layout, colors, and fonts of web pages."
        },
        {
            q: "Which tag is used to insert an image?",
            o: ["<img>", "<image>", "<src>", "<pic>"],
            a: "<img>",
            exp: "The <img> tag is used to embed images in HTML documents."
        },
        {
            q: "Which CSS selector uses # symbol?",
            o: ["ID selector", "Class selector", "Element selector", "Universal selector"],
            a: "ID selector",
            exp: "The # symbol is used to select elements by ID in CSS."
        },
        {
            q: "JavaScript runs primarily on?",
            o: ["Browser", "Server", "Compiler", "Database"],
            a: "Browser",
            exp: "JavaScript mainly runs in the browser to create interactive web pages."
        },
        {
            q: "Which attribute specifies image path?",
            o: ["src", "href", "alt", "path"],
            a: "src",
            exp: "The src attribute specifies the image source URL."
        },
        {
            q: "Which tag creates a line break?",
            o: ["<br>", "<hr>", "<p>", "<lb>"],
            a: "<br>",
            exp: "The <br> tag inserts a line break without starting a new paragraph."
        },
        {
            q: "Which HTTP method retrieves data?",
            o: ["GET", "POST", "PUT", "DELETE"],
            a: "GET",
            exp: "GET is used to retrieve data from the server."
        },
        {
            q: "CSS stands for?",
            o: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Color Style Sheets"],
            a: "Cascading Style Sheets",
            exp: "CSS stands for Cascading Style Sheets."
        }
        ],

        medium: [
        {
            q: "Which HTTP status code means Not Found?",
            o: ["200", "301", "404", "500"],
            a: "404",
            exp: "404 indicates that the requested resource was not found on the server."
        },
        {
            q: "Which JavaScript keyword declares a constant?",
            o: ["var", "let", "const", "static"],
            a: "const",
            exp: "The const keyword is used to declare constants in JavaScript."
        },
        {
            q: "What does DOM stand for?",
            o: ["Document Object Model", "Data Object Method", "Dynamic Output Model", "Display Object Management"],
            a: "Document Object Model",
            exp: "DOM represents the structure of a web page as objects."
        },
        {
            q: "Which HTML tag is semantic?",
            o: ["<div>", "<span>", "<header>", "<b>"],
            a: "<header>",
            exp: "Semantic tags describe their meaning, such as <header>."
        },
        {
            q: "Which protocol secures HTTP?",
            o: ["HTTP", "FTP", "HTTPS", "SMTP"],
            a: "HTTPS",
            exp: "HTTPS encrypts HTTP data using SSL/TLS."
        },
        {
            q: "Which CSS property controls element visibility?",
            o: ["display", "visibility", "opacity", "float"],
            a: "display",
            exp: "The display property controls whether an element is shown or hidden."
        },
        {
            q: "Which JS method converts JSON string to object?",
            o: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "toJSON()"],
            a: "JSON.parse()",
            exp: "JSON.parse() converts a JSON string into a JavaScript object."
        },
        {
            q: "Which unit is relative in CSS?",
            o: ["px", "cm", "em", "mm"],
            a: "em",
            exp: "em is a relative unit based on the font size."
        },
        {
            q: "Which framework is component-based?",
            o: ["React", "Bootstrap", "jQuery", "CSS"],
            a: "React",
            exp: "React builds UI using reusable components."
        },
        {
            q: "Which API stores data in browser?",
            o: ["LocalStorage", "Cookie", "Session", "Cache"],
            a: "LocalStorage",
            exp: "LocalStorage stores key-value pairs in the browser."
        }
        ],

        hard: [
        {
            q: "Which JavaScript concept enables closures?",
            o: ["Scope", "Hoisting", "Prototype", "Callback"],
            a: "Scope",
            exp: "Closures are possible because of JavaScript scope rules."
        },
        {
            q: "Which CSS layout system is one-dimensional?",
            o: ["Flexbox", "Grid", "Table", "Float"],
            a: "Flexbox",
            exp: "Flexbox is designed for one-dimensional layouts."
        },
        {
            q: "Which HTTP method is idempotent?",
            o: ["PUT", "POST", "PATCH", "CONNECT"],
            a: "PUT",
            exp: "PUT is idempotent, meaning multiple identical requests have the same effect."
        },
        {
            q: "Which React lifecycle runs once after render?",
            o: ["componentDidMount", "render", "setState", "useEffect"],
            a: "componentDidMount",
            exp: "componentDidMount runs once after the component is rendered."
        },
        {
            q: "Which feature enables async execution?",
            o: ["Promise", "Loop", "Array", "DOM"],
            a: "Promise",
            exp: "Promises handle asynchronous operations in JavaScript."
        },
        {
            q: "What does CORS protect against?",
            o: ["Cross-Origin requests", "SQL Injection", "XSS", "CSRF"],
            a: "Cross-Origin requests",
            exp: "CORS controls access between different origins."
        },
        {
            q: "Which browser API supports offline apps?",
            o: ["Service Worker", "Cookie", "Session", "Cache"],
            a: "Service Worker",
            exp: "Service Workers enable offline functionality and caching."
        },
        {
            q: "Which HTTP code indicates server error?",
            o: ["400", "401", "404", "500"],
            a: "500",
            exp: "500 indicates an internal server error."
        },
        {
            q: "Which selector has highest specificity?",
            o: ["ID", "Class", "Element", "Universal"],
            a: "ID",
            exp: "ID selectors have the highest specificity in CSS."
        },
        {
            q: "Which operator compares value and type?",
            o: ["==", "===", "!=", "="],
            a: "===",
            exp: "=== compares both value and data type."
        }
        ]
    },

    /* =========================
        COMPUTER NETWORKING
        ========================= */
    network: {

        easy: [
        {
            q: "What does LAN stand for?",
            o: ["Local Area Network", "Large Area Network", "Long Area Network", "Low Area Network"],
            a: "Local Area Network",
            exp: "LAN stands for Local Area Network."
        },
        {
            q: "Which device connects different networks?",
            o: ["Router", "Switch", "Hub", "Repeater"],
            a: "Router",
            exp: "Routers connect multiple networks together."
        },
        {
            q: "What does IP stand for?",
            o: ["Internet Protocol", "Internal Process", "Interface Program", "Input Protocol"],
            a: "Internet Protocol",
            exp: "IP stands for Internet Protocol."
        },
        {
            q: "Which is a wired transmission medium?",
            o: ["Fiber optic", "WiFi", "Bluetooth", "Infrared"],
            a: "Fiber optic",
            exp: "Fiber optic cables use light signals to transmit data."
        },
        {
            q: "Which protocol sends email?",
            o: ["SMTP", "FTP", "HTTP", "DNS"],
            a: "SMTP",
            exp: "SMTP is used to send emails."
        },
        {
            q: "Which OSI layer handles routing?",
            o: ["Network", "Transport", "Session", "Application"],
            a: "Network",
            exp: "The Network layer handles routing of packets."
        },
        {
            q: "Which is a private IP address?",
            o: ["192.168.1.1", "8.8.8.8", "1.1.1.1", "172.217.1.1"],
            a: "192.168.1.1",
            exp: "192.168.x.x is a private IP range."
        },
        {
            q: "Which protocol resolves IP to MAC?",
            o: ["ARP", "RARP", "DNS", "ICMP"],
            a: "ARP",
            exp: "ARP maps IP addresses to MAC addresses."
        },
        {
            q: "Which topology uses a central hub?",
            o: ["Star", "Bus", "Ring", "Mesh"],
            a: "Star",
            exp: "Star topology connects all devices to a central hub."
        },
        {
            q: "Which port is used by HTTP?",
            o: ["80", "21", "25", "443"],
            a: "80",
            exp: "HTTP uses port 80 by default."
        }
        ],

        medium: [
        {
            q: "Which OSI layer ensures reliable delivery?",
            o: ["Transport", "Network", "Session", "Physical"],
            a: "Transport",
            exp: "The Transport layer ensures reliable data transfer."
        },
        {
            q: "What is the function of DNS?",
            o: ["Name resolution", "Routing", "Encryption", "Switching"],
            a: "Name resolution",
            exp: "DNS resolves domain names to IP addresses."
        },
        {
            q: "Which protocol is used by ping?",
            o: ["ICMP", "TCP", "UDP", "HTTP"],
            a: "ICMP",
            exp: "Ping uses ICMP protocol."
        },
        {
            q: "Which port is used for HTTPS?",
            o: ["443", "80", "21", "110"],
            a: "443",
            exp: "HTTPS uses port 443."
        },
        {
            q: "Which topology has single point of failure?",
            o: ["Star", "Ring", "Bus", "Mesh"],
            a: "Star",
            exp: "Failure of the central hub affects the entire star network."
        },
        {
            q: "Which OSI layer handles encryption?",
            o: ["Presentation", "Session", "Transport", "Application"],
            a: "Presentation",
            exp: "The Presentation layer handles encryption and compression."
        },
        {
            q: "Which IP class supports many hosts?",
            o: ["Class A", "Class B", "Class C", "Class D"],
            a: "Class A",
            exp: "Class A networks support a large number of hosts."
        },
        {
            q: "Which protocol is connectionless?",
            o: ["UDP", "TCP", "FTP", "SMTP"],
            a: "UDP",
            exp: "UDP does not establish a connection before sending data."
        },
        {
            q: "What does NAT do?",
            o: ["IP address translation", "Packet routing", "Error checking", "Encryption"],
            a: "IP address translation",
            exp: "NAT translates private IPs to public IPs."
        },
        {
            q: "Which address is broadcast?",
            o: ["255.255.255.255", "0.0.0.0", "127.0.0.1", "1.1.1.1"],
            a: "255.255.255.255",
            exp: "255.255.255.255 is the broadcast address."
        }
        ],

        hard: [
        {
            q: "Which algorithm prevents routing loops?",
            o: ["Bellman-Ford", "Dijkstra", "Flooding", "Spanning Tree"],
            a: "Bellman-Ford",
            exp: "Bellman-Ford algorithm helps detect and prevent routing loops."
        },
        {
            q: "Which protocol provides congestion control?",
            o: ["TCP", "UDP", "IP", "ICMP"],
            a: "TCP",
            exp: "TCP includes congestion control mechanisms."
        },
        {
            q: "What does CIDR stand for?",
            o: ["Classless Inter-Domain Routing", "Central Internet Data Routing", "Class Inter Domain Route", "Common IP Data Routing"],
            a: "Classless Inter-Domain Routing",
            exp: "CIDR allows flexible IP address allocation."
        },
        {
            q: "Which attack floods a network with traffic?",
            o: ["DDoS", "Phishing", "Spoofing", "Sniffing"],
            a: "DDoS",
            exp: "DDoS overwhelms a network with traffic."
        },
        {
            q: "Which protocol uses port 22?",
            o: ["SSH", "FTP", "Telnet", "SMTP"],
            a: "SSH",
            exp: "SSH uses port 22 for secure communication."
        },
        {
            q: "Which OSI layer handles flow control?",
            o: ["Transport", "Network", "Session", "Physical"],
            a: "Transport",
            exp: "Flow control is handled by the Transport layer."
        },
        {
            q: "Which routing protocol is dynamic?",
            o: ["RIP", "Static", "Manual", "Default"],
            a: "RIP",
            exp: "RIP dynamically updates routing tables."
        },
        {
            q: "What does TTL prevent?",
            o: ["Infinite loops", "Packet loss", "Delay", "Duplication"],
            a: "Infinite loops",
            exp: "TTL prevents packets from looping indefinitely."
        },
        {
            q: "Which protocol maps MAC address to IP?",
            o: ["RARP", "ARP", "DNS", "DHCP"],
            a: "RARP",
            exp: "RARP maps MAC addresses to IP addresses."
        },
        {
            q: "Which protocol assigns IP dynamically?",
            o: ["DHCP", "DNS", "ARP", "ICMP"],
            a: "DHCP",
            exp: "DHCP dynamically assigns IP addresses."
        }
        ]
    }
};