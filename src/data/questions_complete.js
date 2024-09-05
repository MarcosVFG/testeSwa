const data = [
  {
    category: "Opção 1",
    questions: [
      {
        question: "1 A network engineer must create a diagram of a multivendor network.which command must be configured on the Cisco devices so that the topology of the network can be mapped?",
        options: [
            "Device(config)#lldp run",
            "Device(config)#cdp run",
            "Device(config)# cdp enable",
            "Device(config)# flow-sampler-map topology"
        ],
        answer: "A"
    },
    {
        question: "2 Which feature on the Cisco Wireless LAN Controller when enabled restricts management access from specific networks?",
        options: [
            "CPU ACL",
            "TACACS",
            "Flex ACL",
            "RADIUS"
        ],
        answer: "A"
    },
    {
        question: "3 When a site-to-site VPN is used, which protocol is responsible for the transport of user data?",
        options: [
            "IKEv2",
            "IKEv1",
            "IPsec",
            "MD5"
        ],
        answer: "C"
    },
    {
        question: "4 How do TCP and UDP differ in the way that they establish a connection between two endpoints\uff1f",
        options: [
            "TCP use the three-way handshake,and UDP dose no guarantee message delivery",
            "TCP use synchronization packets,and UDP uses acknowledgement packets",
            "UDP provides reliable message transfer,and TCP is a connectionless protocol.",
            "UDP use SYN,SYN ACK,and FIN bits in the frame header while TCP uses SYN,SYN ACK,and ACK bis."
        ],
        answer: "A"
    },
    {
        question: "5 What are two reasons that cause late collisions to increment on an Ethernet interface?(choose two) E. when a collision occurs after the 32nd byte of a frame has been transmitted",
        options: [
            "when the sending device waits 15 seconds before sending the frame again",
            "when the cable length limits are exceeded",
            "when one side of the connection is configured for half-duplex",
            "when Carner Sense Multiple Access/Collision Detection is used"
        ],
        answer: "BC"
    },
    {
        question: "6 A Cisco IP phone receive untagged data traffic from an attached PC. Which action is taken by the phone?",
        options: [
            "It allows the traffic to pass through unchanged",
            "It drops the traffic",
            "It tags the traffic with the default VLAN",
            "It tags the traffic with the native VLAN"
        ],
        answer: "A"
    },
    {
        question: "7 Refer to the exhibit. The show ip ospf interface command has been executed on R1 How is OSPF configured?",
        options: [
            "The interface is not participating in OSPF",
            "A point-to-point network type is configured",
            "The default Hello and Dead timers are in use",
            "There are six OSPF neighbors on this interface"
        ],
        answer: "C"
    },
    {
        question: "8 What benefit does controller-based networking provide versus traditional networking?",
        options: [
            "provides an added layer of security to protect from DDoS attacks",
            "combines control and data plane functionality on a single device to minimize latency",
            "moves from a two-tier to a three-tier network architecture to provide maximum redundancy",
            "allows configuration and monitoring of the network from one centralized point"
        ],
        answer: "D"
    },
    {
        question: "9 When a floating static route is configured, which action ensures that the backup route is used when the primary route fails?",
        options: [
            "The floating static route must have a higher administrative distance than the primary route so it is used as a backup",
            "The administrative distance must be higher on the primary route so that the backup route becomes secondary.",
            "The floating static route must have a lower administrative distance than the primary route so it is used as a backup",
            "The default-information originate command must be configured for the route to be installed into the routing table"
        ],
        answer: "A"
    },
    {
        question: "10 Which mode must be used to configure EtherChannel between two switches without using a negotiation protocol?",
        options: [
            "on",
            "auto",
            "active",
            "desirable"
        ],
        answer: "A"
    },
    {
        question: "11 What are two descriptions of three-tier network topologies? (Choose two.) E. The access layer manages routing between devices in different domains.",
        options: [
            "The distribution layer runs Layer 2 and Layer 3 technologies.",
            "The network core is designed to maintain continuous connectivity when devices fail.",
            "The core layer maintains wired connections for each host.",
            "The core and distribution layers perform the same functions"
        ],
        answer: "AB"
    },
    {
        question: "12 Refer to the exhibit.which statement explains the configuration error message that is received?",
        options: [
            "it belongs to a private IP address range",
            "the router dose not support /28 mask",
            "it is a network IP address",
            "it is a broadcast IP address"
        ],
        answer: "D"
    },
    {
        question: "13 what is the expected outcome when an EUI-64 address is generated?",
        options: [
            "The seventh bit of original MAC address of the interface is inverted",
            "The interface ID is configured as a random 64-bit value",
            "The characters FE80 are inserted at the beginning of the MAC address of the interface",
            "The MAC address of the interface is used as the interface ID without modification"
        ],
        answer: "A"
    },
    {
        question: "14 Which function does an SNMP agent perform?",
        options: [
            "It manages routing between Layer 3 devices in a network,",
            "It coordinates user authentication between a network device and a TACACS+ or RADIUS server.",
            "It sends information about MIB variables in response to requests from the NMS.",
            "It requests information from remote network nodes about catastrophic system events."
        ],
        answer: "C"
    },
    {
        question: "15 Refer to the exhibit.The default-information originate command is configured under the R1 OSPF configuration.After testing,workstation on VLAN 20 at Site B cannot reach a DNS server on the Internet. wihch action corrects the configuration issue?",
        options: [
            "Add the default-information originate command on R2",
            "Add the always keyword to the default-information originate command on R1",
            "Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.18 command on R1",
            "Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.2 command on R2"
        ],
        answer: "C"
    },
    {
        question: "16 What are two benefits of network automation? (Choose two) E. increased network security",
        options: [
            "reduced operational costs",
            "reduced hardware footprint",
            "faster changes with more reliable results",
            "fewer network failures"
        ],
        answer: "AC"
    },
    {
        question: "17 Which two command sequences must you configure on a switch to establish a Layer 3 EtherChannel with an open-standard protocol?(choose two) Channel-group 10 mode active Channel-group 10 mode auto Channel-group 10 mode on no switchport ip address 172.16.0.1 255.255.255.0 E. interface port-channel 10 switchport Switchport mode trunk",
        options: [
            "interface GigabitEthernet0/0/1",
            "interface GigabitEthernet0/0/1",
            "interface GigabitEthernet0/0/1",
            "interface port-channel 10"
        ],
        answer: "AD"
    },
    {
        question: "18 Which command prevents passwords from being stored in the configuration as plaintext on a router or switch?",
        options: [
            "enable secret",
            "service password-encryption",
            "username Cisco password encrypt",
            "enable password"
        ],
        answer: "B"
    },
    {
        question: "19 R1 has learned route 10.10.10.0/24 via numerous routing protocols,which route is installed?",
        options: [
            "route with the lowest cost",
            "route with the shortest prefix length",
            "route with the next hop that has the highest IP",
            "route with the lowest administrative distance"
        ],
        answer: "D"
    },
    {
        question: "20 which network allows devices to communicate without the need to access the internet?",
        options: [
            "172.9.0.0/16",
            "172.28.0.0/16",
            "192.0.0.0/18",
            "209.165.201.0/24"
        ],
        answer: "B"
    },


    ],
  },
  {
    category: "Opção 2",
    questions: [
        {
            question: "A network engineer must create a diagram of a multivendor network.which command must be configured on the Cisco devices so that the topology of the network can be mapped?",
            options: [
                "Device(config)#lldp run",
                "Device(config)#cdp run",
                "Device(config)# cdp enable",
                "Device(config)# flow-sampler-map topology"
            ],
            answer: "Device(config)#lldp run"
        },
        {
            question: "Which feature on the Cisco Wireless LAN Controller when enabled restricts management access from specific networks?",
            options: [
                "CPU ACL",
                "TACACS",
                "Flex ACL",
                "RADIUS"
            ],
            answer: "CPU ACL"
        },
        {
            question: "When a site-to-site VPN is used, which protocol is responsible for the transport of user data?",
            options: [
                "IKEv2",
                "IKEv1",
                "IPsec",
                "MD5"
            ],
            answer: "IPsec"
        },
        {
            question: "How do TCP and UDP differ in the way that they establish a connection between two endpoints\uff1f",
            options: [
                "TCP use the three-way handshake,and UDP dose no guarantee message delivery",
                "TCP use synchronization packets,and UDP uses acknowledgement packets",
                "UDP provides reliable message transfer,and TCP is a connectionless protocol.",
                "UDP use SYN,SYN ACK,and FIN bits in the frame header while TCP uses SYN,SYN ACK,and ACK bis."
            ],
            answer: "TCP use the three-way handshake,and UDP dose no guarantee message delivery"
        },
        {
            question: "A Cisco IP phone receive untagged data traffic from an attached PC. Which action is taken by the phone?",
            options: [
                "It allows the traffic to pass through unchanged",
                "It drops the traffic",
                "It tags the traffic with the default VLAN",
                "It tags the traffic with the native VLAN"
            ],
            answer: "It allows the traffic to pass through unchanged"
        },
        {
            question: "Refer to the exhibit. The show ip ospf interface command has been executed on R1 How is OSPF configured?",
            options: [
                "The interface is not participating in OSPF",
                "A point-to-point network type is configured",
                "The default Hello and Dead timers are in use",
                "There are six OSPF neighbors on this interface"
            ],
            answer: "The default Hello and Dead timers are in use"
        },
        {
            question: "What benefit does controller-based networking provide versus traditional networking?",
            options: [
                "provides an added layer of security to protect from DDoS attacks",
                "combines control and data plane functionality on a single device to minimize latency",
                "moves from a two-tier to a three-tier network architecture to provide maximum redundancy",
                "allows configuration and monitoring of the network from one centralized point"
            ],
            answer: "allows configuration and monitoring of the network from one centralized point"
        },
        {
            question: "When a floating static route is configured, which action ensures that the backup route is used when the primary route fails?",
            options: [
                "The floating static route must have a higher administrative distance than the primary route so it is used as a backup",
                "The administrative distance must be higher on the primary route so that the backup route becomes secondary.",
                "The floating static route must have a lower administrative distance than the primary route so it is used as a backup",
                "The default-information originate command must be configured for the route to be installed into the routing table"
            ],
            answer: "The floating static route must have a higher administrative distance than the primary route so it is used as a backup"
        },
        {
            question: "Which mode must be used to configure EtherChannel between two switches without using a negotiation protocol?",
            options: [
                "on",
                "auto",
                "active",
                "desirable"
            ],
            answer: "on"
        },    
    ],
  },
];

export default data;
