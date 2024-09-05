const data = [
    {
      category: "100 Perguntas",
      questions: [
        {
          question: "A network engineer must create a diagram of a multivendor network. Which command must be configured on the Cisco devices so that the topology of the network can be mapped?",
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
          question: "How do TCP and UDP differ in the way that they establish a connection between two endpoints?",
          options: [
            "TCP uses the three-way handshake, and UDP does not guarantee message delivery",
            "TCP uses synchronization packets, and UDP uses acknowledgment packets",
            "UDP provides reliable message transfer, and TCP is a connectionless protocol.",
            "UDP uses SYN, SYN ACK, and FIN bits in the frame header while TCP uses SYN, SYN ACK, and ACK bits."
          ],
          answer: "TCP uses the three-way handshake, and UDP does not guarantee message delivery"
        },
        {
          question: "A Cisco IP phone receives untagged data traffic from an attached PC. Which action is taken by the phone?",
          options: [
            "It allows the traffic to pass through unchanged",
            "It drops the traffic",
            "It tags the traffic with the default VLAN",
            "It tags the traffic with the native VLAN"
          ],
          answer: "It allows the traffic to pass through unchanged"
        },
        {
          question: "Refer to the exhibit. The show ip ospf interface command has been executed on R1. How is OSPF configured?",
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
            "Provides an added layer of security to protect from DDoS attacks",
            "Combines control and data plane functionality on a single device to minimize latency",
            "Moves from a two-tier to a three-tier network architecture to provide maximum redundancy",
            "Allows configuration and monitoring of the network from one centralized point"
          ],
          answer: "Allows configuration and monitoring of the network from one centralized point"
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
            "On",
            "Auto",
            "Active",
            "Desirable"
          ],
          answer: "On"
        },
        {
          question: "Refer to the exhibit. Which statement explains the configuration error message that is received?",
          options: [
            "It belongs to a private IP address range",
            "The router does not support /28 mask",
            "It is a network IP address",
            "It is a broadcast IP address"
          ],
          answer: "It is a broadcast IP address"
        },
        {
          question: "What is the expected outcome when an EUI-64 address is generated?",
          options: [
            "The seventh bit of the original MAC address of the interface is inverted",
            "The interface ID is configured as a random 64-bit value",
            "The characters FE80 are inserted at the beginning of the MAC address of the interface",
            "The MAC address of the interface is used as the interface ID without modification"
          ],
          answer: "The seventh bit of the original MAC address of the interface is inverted"
        },
        {
          question: "Which function does an SNMP agent perform?",
          options: [
            "It manages routing between Layer 3 devices in a network",
            "It coordinates user authentication between a network device and a TACACS+ or RADIUS server",
            "It sends information about MIB variables in response to requests from the NMS",
            "It requests information from remote network nodes about catastrophic system events"
          ],
          answer: "It sends information about MIB variables in response to requests from the NMS"
        },
        {
          question: "Refer to the exhibit. The default-information originate command is configured under the R1 OSPF configuration. After testing, workstations on VLAN 20 at Site B cannot reach a DNS server on the Internet. Which action corrects the configuration issue?",
          options: [
            "Add the default-information originate command on R2",
            "Add the always keyword to the default-information originate command on R1",
            "Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.18 command on R1",
            "Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.2 command on R2"
          ],
          answer: "Configure the ip route 0.0.0.0 0.0.0.0 10.10.10.18 command on R1"
        },
        {
          question: "Which command prevents passwords from being stored in the configuration as plaintext on a router or switch?",
          options: [
            "enable secret",
            "service password-encryption",
            "username Cisco password encrypt",
            "enable password"
          ],
          answer: "service password-encryption"
        },
        {
          question: "R1 has learned route 10.10.10.0/24 via numerous routing protocols. Which route is installed?",
          options: [
            "Route with the lowest cost",
            "Route with the shortest prefix length",
            "Route with the next hop that has the highest IP",
            "Route with the lowest administrative distance"
          ],
          answer: "Route with the lowest administrative distance"
        },
        {
          question: "Which network allows devices to communicate without the need to access the internet?",
          options: [
            "172.9.0.0/16",
            "172.28.0.0/16",
            "192.0.0.0/18",
            "209.165.201.0/24"
          ],
          answer: "172.28.0.0/16"
        },
        {
          question: "Which attribute does a router use to select the best path when two or more different routes to the same destination exist from two different routing protocols?",
          options: [
            "Dual algorithm",
            "Metric",
            "Administrative distance",
            "Hop count"
          ],
          answer: "Administrative distance"
        },
        {
          question: "Which command must be entered when a device is configured as an NTP server?",
          options: [
            "ntp master",
            "ntp server",
            "ntp authenticate",
            "ntp peer"
          ],
          answer: "ntp master"
        },
        {
          question: "When OSPF learns multiple paths to a network, how does it select a route?",
          options: [
            "It multiplies the active K value by 256 to calculate the route with the lowest metric.",
            "For each existing interface, it adds the metric from the source router to the destination to calculate the route with the lowest",
            "It divides a reference bandwidth of 100 Mbps by the actual bandwidth of the existing interface to calculate the router with the lowest",
            "It counts the number of hops between the source router and the destination to determine the router with the lowest metric"
          ],
          answer: "It divides a reference bandwidth of 100 Mbps by the actual bandwidth of the existing interface to calculate the router with the lowest"
        },
        {
          question: "What is a characteristic of spine-and-leaf architecture?",
          options: [
            "It provides variable latency.",
            "Each link between leaf switches allows for higher bandwidth.",
            "Each device is separated by the same number of hops.",
            "It provides greater predictability on STP blocked ports."
          ],
          answer: "Each device is separated by the same number of hops."
        },
            {
                question: "Which action must be taken to assign a global unicast IPv6 address on an interface that is derived from the MAC address of that interface?",
                options: [
                    "explicitly assign a link-local address",
                    "disable the EUI-64 bit process",
                    "enable SLAAC on an interface",
                    "configure a stateful DHCPv6 server on the network"
                ],
                answer: "enable SLAAC on an interface"
            },
            {
                question: "Refer to the exhibit. What is the effect of this configuration?",
                options: [
                    "The switch port interface trust state becomes untrusted",
                    "The switch port remains administratively down until the interface is connected to another switch",
                    "Dynamic ARP inspection is disabled because the ARP ACL is missing",
                    "The switch port remains down until it is configured to trust or untrust incoming packets"
                ],
                answer: "The switch port interface trust state becomes untrusted"
            },
            {
                question: "In which way does a spine-and-leaf architecture allow for scalability in a network when additional access ports are required?",
                options: [
                    "A spine switch and a leaf switch can be added with redundant connections between them",
                    "A spine switch can be added with at least 40 GB uplinks",
                    "A leaf switch can be added with connections to every spine switch",
                    "A leaf switch can be added with a single connection to a core spine switch"
                ],
                answer: "A leaf switch can be added with connections to every spine switch"
            },
            {
                question: "Refer to the exhibit. Router R1 is running three different routing protocols. Which route characteristic is used by the router to forward the packet that receives for destination IP 172.16.32.1?",
                options: [
                    "metric",
                    "longest prefix",
                    "cost",
                    "administrative distance"
                ],
                answer: "longest prefix"
            },
            {
                question: "Which configuration is needed to generate an RSA key for SSH on a router?",
                options: [
                    "Configure the version of SSH",
                    "Configure VTY access",
                    "Create a user with a password",
                    "Assign a DNS domain name"
                ],
                answer: "Assign a DNS domain name"
            },
            {
                question: "Which API is used in controller-based architectures to interact with edge devices?",
                options: [
                    "overlay",
                    "northbound",
                    "underlay",
                    "southbound"
                ],
                answer: "southbound"
            },
            {
                question: "Router R1 must send all traffic without a matching routing-table entry to 192.168.1.1. Which configuration accomplishes this task?",
                options: [
                    "R1(config)# ip routing\nR1(config)# ip route default-route 192.168.1.1",
                    "R1(config)# ip routing\nR1(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.1",
                    "R1(config)# ip routing\nR1(config)# ip route 192.168.1.1 0.0.0.0 0.0.0.0",
                    "R1(config)# ip routing\nR1(config)# ip default-gateway 192.168.1.1"
                ],
                answer: "R1(config)# ip routing\nR1(config)# ip route 0.0.0.0 0.0.0.0 192.168.1.1"
            },
            {
                question: "What is a benefit of using a Cisco Wireless LAN Controller?",
                options: [
                    "Central AP management requires more complex configurations",
                    "Unique SSIDs cannot use the same authentication method",
                    "It supports autonomous and lightweight APs",
                    "It eliminates the need to configure each access point individually"
                ],
                answer: "It eliminates the need to configure each access point individually"
            },
            {
                question: "An engineer must configure a /30 subnet between two routers. Which usable IP address and subnet mask combination meets this criteria?",
                options: [
                    "ip address 10.2.1.3 255.255.255.252",
                    "ip address 192.168.1.1 255.255.255.248",
                    "ip address 172.16.1.4 255.255.255.248",
                    "ip address 209.165.201.2 255.255.255.252"
                ],
                answer: "ip address 209.165.201.2 255.255.255.252"
            },
            {
                question: "Which unified access point mode continues to serve wireless clients after losing connectivity to the Cisco Wireless LAN Controller?",
                options: [
                    "sniffer",
                    "mesh",
                    "flexconnect",
                    "local"
                ],
                answer: "flexconnect"
            },
            {
                question: "Refer to the exhibit. Based on the LACP neighbor status, in which mode is the SW1 port channel configured?",
                options: [
                    "passive",
                    "mode on",
                    "auto",
                    "active"
                ],
                answer: "active"
            },
            {
                question: "Which WPA3 enhancement protects against hackers viewing traffic on the Wi-Fi network?",
                options: [
                    "TKIP encryption",
                    "SAE encryption",
                    "AES encryption",
                    "scrambled encryption key"
                ],
                answer: "SAE encryption"
            },
            {
                question: "Refer to the exhibit. An engineer is bringing up a new circuit to the MPLS provider on the Gi0/1 interface of Router1. The new circuit uses eBGP and learns the route to VLAN25 from the BGP path. What is the expected behavior for the traffic flow for route 10.10.13.0/25?",
                options: [
                    "Traffic to 10.10.13.0/25 is load balanced out of multiple interfaces",
                    "Route 10.10.13.0/25 is updated in the routing table as being learned from interface Gi0/1",
                    "Traffic to 10.10.13.0/25 is symmetrical",
                    "Route 10.10.13.0/25 learned via the Gi0/0 interface remains in the routing table"
                ],
                answer: "Route 10.10.13.0/25 is updated in the routing table as being learned from interface Gi0/1"
            },
            {
                question: "Refer to the exhibit. How does router R1 handle traffic to 192.168.10.16?",
                options: [
                    "It selects the EIGRP route because it has the lowest administrative distance",
                    "It selects the RIP route because it has the longest prefix inclusive of the destination address",
                    "It selects the OSFP route because it has the lowest cost",
                    "It selects the IS-IS route because it has the shortest prefix inclusive of the destination address"
                ],
                answer: "It selects the RIP route because it has the longest prefix inclusive of the destination address"
            },
        {
            question: "What is a difference between RADIUS and TACACS+?",
            options: [
                "TACACS+ encrypts only password information and RADIUS encrypts the entire payload",
                "RADIUS logs all commands that are entered by the administrator, but TACACS+ logs only start, stop, and interim commands",
                "RADIUS is most appropriate for dial authentication, but TACACS+ can be used for multiple types of authentication",
                "TACACS+ separates authentication and authorization, and RADIUS merges them"
            ],
            answer: "TACACS+ separates authentication and authorization, and RADIUS merges them"
        },
        {
            question: "Refer to the exhibit. How does the router manage traffic to 192.168.12.16?",
            options: [
                "It selects RIP route because it has the longest prefix inclusive of the destination address",
                "It chooses the EIGRP route because it has the lowest administrative distance",
                "It load-balances traffic between all three routes",
                "It chooses the OSPF route because it has the longest prefix inclusive of the destination address"
            ],
            answer: "It selects RIP route because it has the longest prefix inclusive of the destination address"
        },
        {
            question: "What is an advantage of Cisco DNA Center versus traditional campus device management?",
            options: [
                "It supports numerous extensibility options including cross-domain adapters and third-party SDKs.",
                "It supports high availability for management functions when operating in cluster mode.",
                "It enables easy autodiscovery of network elements m a brownfield deployment.",
                "It is designed primarily to provide network assurance"
            ],
            answer: "It supports numerous extensibility options including cross-domain adapters and third-party SDKs."
        },
        {
            question: "Which design element is a best practice when deploying an 802.11b wireless infrastructure?",
            options: [
                "disabling TPC so that access points can negotiate signal levels with their attached wireless devices.",
                "setting the maximum data rate to 54 Mbps on the Cisco Wireless LAN Controller",
                "allocating non overlapping channels to access points that are in close physical proximity to one another",
                "configuring access points to provide clients with a maximum of 5 Mbps"
            ],
            answer: "allocating non overlapping channels to access points that are in close physical proximity to one another"
        },
        {
            question: "How do traditional campus device management and Cisco DNA Center device management differ in regards to deployment?",
            options: [
                "Cisco DNA Center device management can be implemented at a lower cost than most traditional campus device management options",
                "Traditional campus device management schemes can typically deploy patches and updates more quickly than Cisco DNA Center device management.",
                "Cisco DNA Center device management can deploy a network more quickly than traditional campus device management",
                "Traditional campus device management allows a network to scale more quickly than with Cisco DNA Center device management."
            ],
            answer: "Cisco DNA Center device management can deploy a network more quickly than traditional campus device management"
        },
        {
            question: "Which set of action satisfy the requirement for multi-factor authentication?",
            options: [
                "The user swipes a key fob, then clicks through an email link",
                "The user enters a user name and password, and then clicks a notification in an authentication app on a mobile device",
                "The user enters a PIN into an RSA token, and then enters the displayed RSA key on a login scre",
                "The user enters a user name and password and then re-enters the credentials on a second screen"
            ],
            answer: "The user enters a user name and password, and then clicks a notification in an authentication app on a mobile device"
        },
        {
            question: "How do AAA operations compare regarding user identification,user services,and access control?",
            options: [
                "Authorization provides access control,and authentication tracks user services",
                "Accounting tracks user services,and authentication provides access control.",
                "Authorization identifies users,and authentication provides access control",
                "Authentication identifies users,and accounting tracks user services"
            ],
            answer: "Authentication identifies users,and accounting tracks user services"
        },
        {
            question: "What is a difference between local AP mode and FlexConnect AP mode?",
            options: [
                "FlexConnect AP mode fails to function if the AP loses connectivity with the WLC.",
                "FlexConnect AP mode bridges the traffic from the AP to the WLC when local switching is configured.",
                "Local AP mode creates two CAPWAP tunnels per AF to the WLC.",
                "Local AP mode causes the AP to behave as if it were an autonomous AP."
            ],
            answer: "Local AP mode creates two CAPWAP tunnels per AF to the WLC."
        },
        {
            question: "Which function dose the range of private IPv4 addresses perform?",
            options: [
                "allow multiple companies to each use the same address without conflicts",
                "provides a direct connection for hosts from outside of the enterprise network",
                "ensues that NAT is not required to reach the internet with private range addressing",
                "enable secure communications to the internet for all external hosts"
            ],
            answer: "allow multiple companies to each use the same address without conflicts"
        },
        {
            question: "Refer to the exhibit.Which prefix does Router 1 use to Host A ?",
            options: [
                "10.10.10.0/28",
                "10.10.13.0/25",
                "10.10.13.144/28",
                "10.10.13.208/29"
            ],
            answer: "10.10.13.208/29"
        },
        {
            question: "What event has occurred if a router sends a notice level message to a syslog server?",
            options: [
                "An interface line has changed status",
                "An ICMP connection has been built",
                "A certificate has expired",
                "A TCP connection has been torn down"
            ],
            answer: "An interface line has changed status"
        },
        {
            question: "An organization has decided to start using cloud-provided services.Which cloud service allows the organization to install its own operating system on a virtual machine?",
            options: [
                "platform-as-a-service",
                "software-as-a-service",
                "network-as-a-service",
                "infrastructure-as-a-service"
            ],
            answer: "infrastructure-as-a-service"
        },
        {
            question: "Refer to the exhibit. Which route does R1 select for traffic that is destined to 192 168.16.2?",
            options: [
                "192.168.16.0/21",
                "192.168.16.0/24",
                "192.168 26.0/26",
                "192.168.16.0/27"
            ],
            answer: "192.168.16.0/27"
        },
        {
            question: "Refer to the exhibit. An engineer configured NAT translations and has verified that the configuration is correct. Which IP address is the source IP?",
            options: [
                "10.4.4.4",
                "10.4.4.5",
                "172.23.103.10",
                "172.23.104.4"
            ],
            answer: "172.23.104.4"
        },
        {
            question: "Which command is used to specify the delay time in seconds for LLDP to initialize on any interface?",
            options: [
                "lldp timer",
                "lldp holdtime",
                "lldp reinit",
                "lldp tlv-select"
            ],
            answer: "lldp reinit"
        },
        {
            question: "Refer to the exhibit.An administrator configures four switches for local authentication using passwords that are stored as a ctyptographic hash.The four switches must also support SSH access for administrators to manage the network infrastructure.Which switch is configured correctly to meet these requirements ?",
            options: [
                "SW1",
                "SW2",
                "SW3",
                "SW4"
            ],
            answer: "SW3"
        },
        {
            question: "Which statement identifies the functionality of virtual machines?",
            options: [
                "The hypervisor communicates on Layer 3 without the need for additional resources",
                "Each hypervisor can support a single virtual machine and a single software switch",
                "The hypervisor can virtual physical components including CPU,memory,and storage",
                "Virtualized servers run most efficiently when they are physically connected to a switch that is separate from the hypervisor."
            ],
            answer: "The hypervisor can virtual physical components including CPU,memory,and storage"
        },
        {
            question: "Which option about JSON is true?",
            options: [
                "uses predefined tags or angle brackets () to delimit markup text",
                "used to describe structured data that includes arrays",
                "used for storing information",
                "similar to HTML, it is more verbose than XML"
            ],
            answer: "used to describe structured data that includes arrays"
        },
        {
            question: "Which statement correctly compares traditional networks and controller-based networks?",
            options: [
                "Only traditional networks offer a centralized control plane",
                "Only traditional networks natively support centralized management",
                "Traditional and controller-based networks abstract policies from device configurations",
                "Only controller-based networks decouple the control plane and the data plane"
            ],
            answer: "Only controller-based networks decouple the control plane and the data plane"
        },
        {
            question: "Which command enables a router to become a DHCP client?",
            options: [
                "ip address dhcp",
                "ip helper-address",
                "ip dhcp pool",
                "ip dhcp client"
            ],
            answer: "ip address dhcp"
        },
        {
            question: "What is the default behavior of a layer 2 switch when a frame with an unknown destination MAC address is received ?",
            options: [
                "The Layer 2 switch forwards the packet and adds the destination MAC address to its MAC address table",
                "The Layer 2 switch sends a copy of a packet to CPU for destination MAC address learning",
                "The Layer 2 switch floods packets to all ports except the receiving port in the given VLAN",
                "The Layer 2 switch dorps the received frame"
            ],
            answer: "The Layer 2 switch floods packets to all ports except the receiving port in the given VLAN"
        },
        {
            question: "A user configured OSPF in a single area between two routers A serial interface connecting R1 and R2 is running encapsulation PPP.By default which OSPF network type is seen on this interface when the user types show ip ospf interface on R1 or R2?",
            options: [
                "port-to-multipoint",
                "broadcast",
                "point-to-point",
                "non-broadcast"
            ],
            answer: "point-to-point"
        },
        {
            question: "The network administrator wants VLAN 67 traffic to be untagged between Switch 1 and Switch 2 while all other VLANs are to remain tagged. Which command accomplishes this task?",
            options: [
                "switchport access vlan 67",
                "switchport trunk allowed vlan 67",
                "switchport private-vlan association host 67",
                "switchport trunk native vlan 67"
            ],
            answer: "switchport trunk native vlan 67"
        },
        {
            question: "Which IPv6 address type provides communication between subnets and cannot route on the internet?",
            options: [
                "link-local",
                "unique local",
                "multicast",
                "global unicast"
            ],
            answer: "unique local"
        },
        {
            question: "Which 802.11 frame type is association reponse ?",
            options: [
                "management",
                "protected frame",
                "action",
                "control"
            ],
            answer: "management"
        },
  {
      question: "Refer to the Exhibit. After the switch configuration the ping test fails between PC A and PC B Based on the output for switch 1. Which error must be corrected?",
      options: [
          "There is a native VLAN mismatch",
          "Access mode is configured on the switch ports.",
          "The PCs are m the incorrect VLAN",
          "All VLANs are not enabled on the trunk"
      ],
      answer: "There is a native VLAN mismatch"
  },
  {
      question: "Which action is taken by a switch port enabled for PoE power classification override? disconnects",
      options: [
          "When a powered device begins drawing power from a PoE switch port a syslog message is generated",
          "As power usage on a PoE switch port is checked data flow to the connected device is temporarily paused",
          "If a switch determines that a device is using less than the minimum configured power it assumes the device has failed and",
          "If a monitored port exceeds the maximum administrative value for power, the port is shutdown and err-disabled"
      ],
      answer: "If a monitored port exceeds the maximum administrative value for power, the port is shutdown and err-disabled"
  },
  {
      question: "Refer to the exhibit. Which password must an engineer use to enter the enable mode?",
      options: [
          "adminadmin123",
          "default",
          "testing 1234",
          "cisco123"
      ],
      answer: "testing 1234"
  },
  {
      question: "Which QoS Profile is selected in the GUI when configuring a voice over WLAN deployment?",
      options: [
          "Bronze",
          "Platinum",
          "Silver",
          "Gold"
      ],
      answer: "Platinum"
  },
  {
      question: "A router running EIGRP has learned the same route from two different paths.Which parameter does the router use to select the best path?",
      options: [
          "cost",
          "administrative distance",
          "metric",
          "as-path"
      ],
      answer: "metric"
  },
  {
      question: "Refer to the exhibit. After the configuration is applied, the two routers fail to establish an OSPF neighbor relationship. what is the reason for the problem?",
      options: [
          "The OSPF router IDs are mismatched.",
          "Router2 is using the default hello timer.",
          "The network statement on Router1 is misconfigured.",
          "The OSPF process IDs are mismatched"
      ],
      answer: "Router2 is using the default hello timer."
  },
  {
      question: "How do TCP and UDP differ in the way they provide reliability for delivery of packets? data if lost. without checking for sequencing. delivery.",
      options: [
          "TCP does not guarantee delivery or error checking to ensure that there is no corruption of data; UDP provides message acknowledgement and retransmits",
          "TCP provides flow control to avoid overwhelming a receiver by sending too many packets at once; UDP sends packets to the receiver in a continuous stream",
          "TCP uses windowing to deliver packets reliably; UDP provides reliable message transfer between hosts by establishing a three-way handshake",
          "TCP is a connectionless protocol that does not provide reliable delivery of data; UDP is a connection-oriented protocol that uses sequencing to provide reliable"
      ],
      answer: "TCP provides flow control to avoid overwhelming a receiver by sending too many packets at once; UDP sends packets to the receiver in a continuous stream"
  },
  {
      question: "Refer to the exhibit. With which metric was the route to host 172.16.0.202 learned?",
      options: [
          "0",
          "110",
          "38443",
          "3184439"
      ],
      answer: "38443"
  },
  {
      question: "A packet is destined for 10.10.1.22 .which static route does the router choose to forward the packet ?",
      options: [
          "ip route 10.10.1.0 255.255.255.240 10.10.255.1",
          "ip route 10.10.1.20 255.255.255.252 10.10.255.1",
          "ip route 10.10.1.20 255.255.255.254 10.10.255.1",
          "ip route 10.10.1.16 255.255.255.252 10.10.255.1"
      ],
      answer: "ip route 10.10.1.20 255.255.255.252 10.10.255.1"
  },
  {
      question: "An email user has been lured into clicking a link in an email sent by their company's security organization. The webpage that opens reports that it was safe but the link could have contained malicious code. Which type of security program is in place?",
      options: [
          "Physical access control",
          "Social engineering attack",
          "brute force attack",
          "user awareness"
      ],
      answer: "user awareness"
  },
  {
      question: "Refer to the exhibit.Router R1 Fa0/0 cannot ping router R3 Fa0/1.Which action must be taken in router R1 to help resolve the configuration issue?",
      options: [
          "set the default network as 20.20.20.0/24",
          "configure a static route with Fa0/1 as the egress interface to reach the 20.20.20.0/24 network",
          "set the default gateway as 20.20.20.2",
          "configure a static route with 10.10.10.2 as the next hop to reach the 20.20.20.0/24 network"
      ],
      answer: "configure a static route with 10.10.10.2 as the next hop to reach the 20.20.20.0/24 network"
  },
  {
      question: "Refer to Exhibit. Which action do the switches take on the trunk link?",
      options: [
          "The trunk does not form and the ports go into an err-disabled status.",
          "The trunk forms but the mismatched native VLANs are merged into a single broadcast domain.",
          "The trunk does not form, but VLAN 99 and VLAN 999 are allowed to traverse the link.",
          "The trunk forms but VLAN 99 and VLAN 999 are in a shutdown state."
      ],
      answer: "The trunk forms but the mismatched native VLANs are merged into a single broadcast domain."
  },
  {
      question: "Which IPv6 address block sends packets to a group address rather than a single address ?",
      options: [
          "2000::/3",
          "FC00::/7",
          "FE80::/10",
          "FF00::/8"
      ],
      answer: "FF00::/8"
  },
  {
      question: "Two switches are connected and using Cisco Dynamic Trunking Protocol SW1 is set to Dynamic Desirable What is the result of this configuration?",
      options: [
          "The link is in a downstate.",
          "The link is in an error disables state",
          "The link is becomes an access port.",
          "The link becomes a trunk port."
      ],
      answer: "The link becomes a trunk port."
  },
  {
      question: "Refer to the exhibit. Which command provides this output?",
      options: [
          "show ip route",
          "show ip interface",
          "show interface",
          "show cdp neighbor"
      ],
      answer: "show cdp neighbor"
  },
  {
      question: "Refer to the exhibit. If configuring a static default route on the router with the ip route 0.0.0.0 0.0.0.0 10.13.0.1 120 command, how does the router respond?",
      options: [
          "It ignores the new static route until the existing OSPF default route is removed",
          "It immediately replaces the existing OSPF route in the routing table with the newly configured static route",
          "It starts load-balancing traffic between the two default routes",
          "It starts sending traffic without a specific matching entry in the routing table to Gigabit Ethernet0/1"
      ],
      answer: "It ignores the new static route until the existing OSPF default route is removed"
  },
  {
      question: "Refer to the exhibit. An engineer must add a subnet for a new office that will add 20 users to the network. Which IPv4 network and subnet mask combination does the engineer assign to minimize wasting addresses?",
      options: [
          "10.10.225.48 255.255.255.240",
          "10.10.225.32 255.255.255.240",
          "10.10.225.48 255.255.255.224",
          "10.10.225.32 255.255.255.224"
      ],
      answer: "10.10.225.32 255.255.255.224"
  },
  {
      question: "An engineer must configure a WLAN using the strongest encryption type for WPA2- PSK. Which cipher fulfills the configuration requirement?",
      options: [
          "WEP",
          "RC4",
          "AES",
          "TKIP"
      ],
      answer: "AES"
  },
  {
      question: "Which command automatically generates an IPv6 address from a specified IPv6 prefix and MAC address of an interface?",
      options: [
          "ipv6 address dhcp",
          "ipv6 address 2001:DB8:5:112::/64 eui-64",
          "ipv6 address autoconfig",
          "ipv6 address 2001:DB8:5:112::2/64 link-local"
      ],
      answer: "ipv6 address 2001:DB8:5:112::/64 eui-64"
  },
  {
      question: "A corporate office uses four floors in a building >Floor 1 has 24 users >Floor 2 has 29 users >Floor 3 has 28 users >Floor 4 has 22 users Which subnet summarizes and gives the most efficient distribution of IP addresses for the router configuration?",
      options: [
          "192.168.0.0/25 as summary and 192.168.0.0/27 for each floor",
          "192.168.0.0/26 as summary and 192.168.0.0/29 for each floor",
          "192.168.0.0/24 as summary and 192.168.0.0/28 for each floor",
          "192.168.0.0/23 as summary and 192.168.0.0/25 for each floor"
      ],
      answer: "192.168.0.0/25 as summary and 192.168.0.0/27 for each floor"
  },
  {
      question: "By default, how does EIGRP determine the metric of a route for the routing table?",
      options: [
          "It uses the bandwidth and delay values of the path to calculate the route metric.",
          "It uses a default metric of 10 for all routes that are learned by the router",
          "It counts the number of hops between the receiving and destination routers and uses that value as the metric.",
          "It uses a reference bandwidth and the actual bandwidth of the connected link to calculate the route metric."
      ],
      answer: "It uses the bandwidth and delay values of the path to calculate the route metric."
  },
  {
      question: "What is the primary different between AAA authentication and authorization? and the user database perform.",
      options: [
          "Authentication verifies a username and password, and authorization handles the communication between the authentication agent",
          "Authentication identifies a user who is attempting to access a system, and authorization validates the users password",
          "Authentication identifies and verifies a user who is attempting to access a system, and authorization controls the tasks the user can",
          "Authentication controls the system processes a user can access and authorization logs the activities the user initiates"
      ],
      answer: "Authentication identifies and verifies a user who is attempting to access a system, and authorization controls the tasks the user can"
  },
  {
      question: "Which configuration issue is preventing the OSPF neighbor relationship from being established between the two routers?",
      options: [
          "R2 is using the passive-interface default command",
          "R1 has an incorrect network command for interface Gi1/0",
          "R2 should have its network command in area 1",
          "R1 interface Gi1/0 has a larger MTU size"
      ],
      answer: "R1 interface Gi1/0 has a larger MTU size"
  },
  {
      question: "Refer to the exhibit. What does router R1 use as its OSPF router-ID?",
      options: [
          "10.10.1.10",
          "10.10.10.20",
          "172.16.15.10",
          "192.168.0.1"
      ],
      answer: "172.16.15.10"
  },
  {
      question: "Which type of address is the public IP address of a NAT device? E. outside public F. inside public",
      options: [
          "outside global",
          "outside local",
          "inside global",
          "inside local"
      ],
      answer: "inside global"
  },
  {
      question: "What makes Cisco DNA Center different from traditional network management applications and their management of networks?",
      options: [
          "It only supports auto-discovery of network elements in a green field deployment.",
          "It modular design allows someone to implement different versions to meet the specific needs of an organization",
          "It abstracts policy from the actual device configuration",
          "It does not support high availability of management functions when operating in cluster mode"
      ],
      answer: "It abstracts policy from the actual device configuration"
  },
  {
      question: "111 Refer to the exhibit. What is the effect of this configuration?",
      options: [
          "All ARP packets are dropped by the switch",
          "Egress traffic is passed only if the destination is a DHCP server.",
          "All ingress and egress traffic is dropped because the interface is untrusted",
          "The switch discard all ingress ARP traffic with invalid MAC-to-IP address bindings."
      ],
      answer: "The switch discard all ingress ARP traffic with invalid MAC-to-IP address bindings."
  },
  {
    question: "A network administrator enabled port security on a switch interface connected to a printer. What is the next configuration action in order to allow the port to learn the MAC address of the printer and insert it into the table automatically?",
    options: [
        "enable dynamic MAC address learning",
        "implement static MAC addressing.",
        "enable sticky MAC addressing",
        "implement auto MAC address learning"
    ],
    answer: "enable sticky MAC addressing"
},
{
    question: "Which configuration ensures that the switch is always the root for VLAN 750?",
    options: [
        "Switch(config)#spanning-tree vlan 750 priority 38003685",
        "Switch(config)#spanning-tree vlan 750 root primary",
        "Switch(config)#spanning-tree vlan 750 priority 614440",
        "Switch(config)#spanning-tree vlan 750 priority 0"
    ],
    answer: "Switch(config)#spanning-tree vlan 750 priority 0"
},
{
    question: "What protocol allows an engineer to back up 20 network router configurations globally while using the copy function?",
    options: [
        "SMTP",
        "SNMP",
        "TCP",
        "FTP"
    ],
    answer: "SNMP"
},
{
    question: "Which state does the switch port move to when PortFast is enabled?",
    options: [
        "learning",
        "forwarding",
        "blocking",
        "listening"
    ],
    answer: "forwarding"
},
{
    question: "194 How do TCP and UDP differ in the way they guarantee packet delivery?",
    options: [
        "TCP uses checksum, acknowledgement, and retransmissions, and UDP uses checksums only.",
        "TCP uses retransmissions, acknowledgement and parity checks and UDP uses cyclic redundancy checks only.",
        "TCP uses checksum, parity checks, and retransmissions, and UDP uses acknowledgements only.",
        "TCP uses two-dimensional parity checks, checksums, and cyclic redundancy checks and UDP uses retransmissions only."
    ],
    answer: "TCP uses checksum, acknowledgement, and retransmissions, and UDP uses checksums only."
},
{
    question: "A device detects two stations transmitting frames at the same time. This condition occurs after the first 64 bytes of the frame is received interface counter increments?",
    options: [
        "collision",
        "CRC",
        "runt",
        "late collision"
    ],
    answer: "late collision"
},
{
    question: "Which technology is used to improve web traffic performance by proxy caching?",
    options: [
        "WSA",
        "Firepower",
        "ASA",
        "FireSIGHT"
    ],
    answer: "WSA"
},
{
    question: "Using direct sequence spread spectrum, which three 2.4-GHz channels are used to limit collisions?",
    options: [
        "1,6.11",
        "1,5,10",
        "1,2,3",
        "5,6,7"
    ],
    answer: "1,6.11"
},
{
    question: "Which type of attack can be mitigated by dynamic ARP inspection?",
    options: [
        "worm",
        "malware",
        "DDoS",
        "man-in-the-middle"
    ],
    answer: "man-in-the-middle"
},
{
    question: "What software defined architecture plane assists network devices with making packet-forwarding decisions by providing Layer 2 reachability and Layer 3 routing information?",
    options: [
        "data plane",
        "control plane",
        "policy plane",
        "management plane"
    ],
    answer: "control plane"
},
{
    question: "Which WAN access technology is preferred for a small office / home office architecture?",
    options: [
        "broadband cable access",
        "frame-relay packet switching",
        "dedicated point-to-point leased line",
        "Integrated Services Digital Network switching."
    ],
    answer: "broadband cable access"
},
{
    question: "Refer to the exhibit. Which route type does the routing protocol Code D represent in the output?",
    options: [
        "internal BGP route",
        "/24 route of a locally configured IP",
        "statically assigned route",
    ],
    answer: "statically assigned route"
},
{
    question: "A wireless administrator has configured a WLAN; however, the clients need access to a less congested 5-GHz network for their voice quality. What action must be taken to meet the requirement?",
    options: [
        "enable AAA override",
        "enable RX-SOP",
        "enable DTIM",
        "enable Band Select"
    ],
    answer: "enable Band Select"
},
{
    question: "What mechanism carries multicast traffic between remote sites and supports encryption?",
    options: [
        "ISATAP",
        "GRE over iPsec",
        "iPsec over ISATAP",
        "GRE"
    ],
    answer: "GRE over iPsec"
},
],
},

]
  
  export default data;
  