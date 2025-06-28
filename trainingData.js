// Comprehensive AV training data based on industry standards and manufacturer documentation
const trainingData = {
  categories: [
    {
      id: 'control-systems',
      name: 'Control Systems',
      icon: '🎛️',
      description: 'Master control system setup, programming, and troubleshooting'
    },
    {
      id: 'audio-systems',
      name: 'Audio Systems',
      icon: '🔊',
      description: 'Professional audio equipment and signal processing'
    },
    {
      id: 'video-systems',
      name: 'Video Systems',
      icon: '📺',
      description: 'Video distribution, displays, and projection systems'
    },
    {
      id: 'lighting-systems',
      name: 'Lighting Systems',
      icon: '💡',
      description: 'Stage and architectural lighting for live events'
    },
    {
      id: 'live-events',
      name: 'Live Events',
      icon: '🎪',
      description: 'Mobile AV setups and live production workflows'
    },
    {
      id: 'troubleshooting',
      name: 'Troubleshooting',
      icon: '🔧',
      description: 'Common issues and diagnostic procedures'
    }
  ],
  
  guides: [
    // Control Systems
    {
      id: 'crestron-setup',
      categoryId: 'control-systems',
      title: 'Crestron Control System Setup',
      difficulty: 'Intermediate',
      duration: '45 min',
      lastUpdated: '2024-12-15',
      tags: ['crestron', 'control', 'programming'],
      overview: 'Complete guide to setting up and configuring Crestron control systems for commercial installations.',
      content: `
# Crestron Control System Setup

## Prerequisites
- Crestron Toolbox installed
- Network access to control processor
- System design documentation
- Administrative credentials

## Step 1: Initial Hardware Setup
1. **Power Connection**
   - Connect 24V DC power supply to control processor
   - Verify green power LED is solid
   - Check voltage at terminal block (should read 24V ±10%)

2. **Network Configuration**
   - Connect Ethernet cable to LAN port
   - Access web interface at processor IP address
   - Default credentials: admin/admin (change immediately)

## Step 2: Toolbox Configuration
1. **Device Discovery**
   - Open Crestron Toolbox
   - Navigate to Device Discovery
   - Scan network range for processors
   - Verify processor appears in device list

2. **System Information**
   - Check firmware version (update if needed)
   - Verify control engine status
   - Review system uptime and performance

## Step 3: Programming Upload
1. **Program Compilation**
   - Open SIMPL Windows or VT Pro-e
   - Compile program for target processor
   - Resolve any compilation errors
   - Generate .cpz file

2. **Program Transfer**
   - Use Toolbox File Manager
   - Navigate to processor file system
   - Upload .cpz to /NVRAM directory
   - Restart control engine

## Step 4: Device Integration
1. **Serial Devices**
   - Configure COM port settings (baud, parity, stop bits)
   - Test communication with terminal emulator
   - Verify command/response sequences

2. **IP Devices**
   - Configure network settings
   - Test connectivity with ping
   - Verify port accessibility

## Step 5: Testing & Validation
1. **System Testing**
   - Test all control functions
   - Verify feedback from controlled devices
   - Check error logs for issues
   - Document any anomalies

2. **User Interface Testing**
   - Test touch panel responsiveness
   - Verify button feedback
   - Check page navigation
   - Test emergency functions

## Troubleshooting Common Issues
- **No Communication**: Check network settings, firewall rules
- **Program Won't Load**: Verify processor compatibility, check file integrity
- **Intermittent Control**: Check power supply stability, network congestion
- **Slow Response**: Review program efficiency, processor load

## Best Practices
- Always backup existing programs before updates
- Use descriptive signal names and comments
- Implement proper error handling
- Regular system health monitoring
- Document all configuration changes

## Safety Considerations
- Follow lockout/tagout procedures
- Verify power requirements before connection
- Use proper ESD protection
- Never work on live circuits without proper training

*Based on Crestron Installation Guide and AVIXA CTS standards*
      `,
      quiz: [
        {
          question: "What is the standard voltage for Crestron control processors?",
          options: ["12V DC", "24V DC", "48V DC", "120V AC"],
          correct: 1,
          explanation: "Crestron control processors typically operate on 24V DC power supply."
        },
        {
          question: "Which tool is used for program compilation in Crestron systems?",
          options: ["Toolbox", "SIMPL Windows", "VT Pro-e", "Both B and C"],
          correct: 3,
          explanation: "Both SIMPL Windows and VT Pro-e are used for programming and compilation."
        }
      ]
    },
    
    {
      id: 'extron-matrix-config',
      categoryId: 'control-systems',
      title: 'Extron Matrix Switcher Configuration',
      difficulty: 'Beginner',
      duration: '30 min',
      lastUpdated: '2024-12-15',
      tags: ['extron', 'matrix', 'video'],
      overview: 'Learn to configure Extron matrix switchers for optimal video distribution.',
      content: `
# Extron Matrix Switcher Configuration

## Overview
Extron matrix switchers provide reliable video and audio distribution for professional AV installations. This guide covers setup, configuration, and optimization.

## Initial Setup
1. **Physical Connections**
   - Connect power cord to IEC inlet
   - Verify power LED status (solid green = normal)
   - Connect Ethernet for network control
   - Install input/output modules as needed

2. **Network Configuration**
   - Access web interface (default IP varies by model)
   - Configure static IP address
   - Set subnet mask and gateway
   - Enable required protocols (Telnet, SSH, HTTP)

## Configuration Steps
1. **Input/Output Setup**
   - Label all inputs and outputs descriptively
   - Configure signal types (HDMI, DVI, VGA, etc.)
   - Set EDID management for each input
   - Configure audio embedding/de-embedding

2. **Switching Configuration**
   - Set up preset configurations
   - Configure auto-switching rules
   - Set priority levels for inputs
   - Enable/disable front panel controls

## Advanced Features
1. **EDID Management**
   - Copy EDID from display to input
   - Create custom EDID profiles
   - Set EDID per input/output pair
   - Monitor EDID compatibility issues

2. **Control Integration**
   - Configure RS-232 control
   - Set up Ethernet control protocols
   - Program custom control commands
   - Test control system integration

## Monitoring & Maintenance
- Check signal status indicators
- Monitor temperature and fan status
- Review system logs regularly
- Update firmware as needed

*Reference: Extron Matrix Switcher User Guide*
      `,
      quiz: [
        {
          question: "What does EDID stand for in video systems?",
          options: ["Extended Display Identification Data", "Electronic Device Interface Data", "Enhanced Digital Input Display", "External Display Information Database"],
          correct: 0,
          explanation: "EDID (Extended Display Identification Data) contains display capabilities and supported formats."
        }
      ]
    },

    // Audio Systems
    {
      id: 'qsc-dsp-setup',
      categoryId: 'audio-systems',
      title: 'QSC Q-SYS DSP Configuration',
      difficulty: 'Advanced',
      duration: '60 min',
      lastUpdated: '2024-12-15',
      tags: ['qsc', 'dsp', 'audio', 'processing'],
      overview: 'Comprehensive guide to configuring QSC Q-SYS digital signal processors.',
      content: `
# QSC Q-SYS DSP Configuration

## System Requirements
- Q-SYS Designer software (latest version)
- Network connectivity to Q-SYS Core
- Audio test equipment (signal generator, analyzer)
- System design documentation

## Initial Setup
1. **Hardware Installation**
   - Mount Q-SYS Core in equipment rack
   - Connect power (verify voltage requirements)
   - Connect primary and secondary network connections
   - Install required I/O cards

2. **Network Configuration**
   - Set static IP address via front panel
   - Configure subnet and gateway settings
   - Enable Q-LAN for device discovery
   - Test network connectivity

## Q-SYS Designer Configuration
1. **Project Creation**
   - Create new design file
   - Add Q-SYS Core to inventory
   - Configure I/O frame assignments
   - Set sample rate and buffer size

2. **Signal Flow Design**
   - Add input/output components
   - Insert processing components (EQ, compressor, delay)
   - Create signal routing connections
   - Configure control pins and properties

## Audio Processing Setup
1. **Input Configuration**
   - Set input gain structure
   - Configure phantom power (if needed)
   - Apply high-pass filtering
   - Set input delay compensation

2. **Processing Chain**
   - **Parametric EQ**: Adjust frequency response
   - **Dynamics**: Set compression/limiting
   - **Delay**: Align acoustic timing
   - **Crossover**: Configure speaker management

3. **Output Configuration**
   - Set output levels and limiting
   - Configure speaker protection
   - Apply output EQ correction
   - Set up monitoring outputs

## Control Integration
1. **Control Components**
   - Add fader controls for levels
   - Create preset recall buttons
   - Configure mute controls
   - Set up source selection

2. **External Control**
   - Configure TCP/UDP control
   - Set up third-party integration
   - Create custom control protocols
   - Test control system communication

## System Optimization
1. **Gain Structure**
   - Set proper input levels (-20dBFS nominal)
   - Maintain headroom throughout signal chain
   - Optimize output levels for amplifiers
   - Monitor system levels during operation

2. **Acoustic Tuning**
   - Use measurement microphone for analysis
   - Apply room correction EQ
   - Set appropriate delay times
   - Optimize crossover points

## Testing & Commissioning
1. **Signal Path Verification**
   - Test all input/output connections
   - Verify signal routing accuracy
   - Check processing effectiveness
   - Validate control functions

2. **Performance Testing**
   - Measure frequency response
   - Check dynamic range
   - Test maximum output levels
   - Verify protection systems

## Troubleshooting
- **No Audio**: Check signal routing, mute status, gain levels
- **Distortion**: Review gain structure, check limiting settings
- **Control Issues**: Verify network connectivity, control protocols
- **Performance**: Monitor CPU usage, check buffer settings

*Based on QSC Q-SYS Training Materials and AVIXA Audio Standards*
      `,
      quiz: [
        {
          question: "What is the recommended nominal input level for Q-SYS systems?",
          options: ["-10dBFS", "-20dBFS", "-30dBFS", "0dBFS"],
          correct: 1,
          explanation: "-20dBFS provides optimal signal-to-noise ratio while maintaining adequate headroom."
        }
      ]
    },

    // Video Systems
    {
      id: 'projector-setup',
      categoryId: 'video-systems',
      title: 'Professional Projector Installation',
      difficulty: 'Intermediate',
      duration: '45 min',
      lastUpdated: '2024-12-15',
      tags: ['projector', 'installation', 'calibration'],
      overview: 'Complete guide to professional projector installation and calibration.',
      content: `
# Professional Projector Installation

## Pre-Installation Planning
1. **Site Survey**
   - Measure room dimensions and ceiling height
   - Identify mounting locations and cable paths
   - Check ambient light conditions
   - Verify power requirements and availability

2. **Equipment Selection**
   - Calculate throw distance and image size
   - Verify lens options for installation
   - Check input/output requirements
   - Confirm mounting hardware compatibility

## Physical Installation
1. **Mounting Preparation**
   - Install ceiling mount or rigging points
   - Verify structural support capacity
   - Run power and signal cables
   - Install conduit and cable management

2. **Projector Mounting**
   - Attach projector to mount securely
   - Align projector with screen center
   - Set initial tilt and rotation
   - Secure all mounting hardware

## Initial Configuration
1. **Power and Connections**
   - Connect power cable (check voltage)
   - Connect video input cables
   - Connect control cables (RS-232, Ethernet)
   - Test all connections

2. **Basic Setup**
   - Power on projector and allow warm-up
   - Select appropriate input source
   - Adjust zoom and focus controls
   - Set basic picture settings

## Image Alignment
1. **Geometric Correction**
   - Use test patterns for alignment
   - Adjust keystone correction
   - Fine-tune lens shift settings
   - Verify image boundaries

2. **Screen Matching**
   - Align image to screen edges
   - Check for proper aspect ratio
   - Verify image uniformity
   - Test corner alignment

## Color Calibration
1. **Basic Color Setup**
   - Select appropriate color space (Rec. 709, DCI-P3)
   - Set white point temperature
   - Adjust RGB gain/bias controls
   - Configure gamma settings

2. **Advanced Calibration**
   - Use colorimeter for measurements
   - Create custom color profiles
   - Adjust color management settings
   - Verify color accuracy

## System Integration
1. **Control System Setup**
   - Configure RS-232 communication
   - Program power on/off sequences
   - Set up input switching
   - Test emergency shutdown

2. **Network Configuration**
   - Set static IP address
   - Configure SNMP monitoring
   - Enable remote management
   - Test network connectivity

## Maintenance Setup
1. **Filter Maintenance**
   - Set filter replacement schedules
   - Configure maintenance alerts
   - Document filter part numbers
   - Train operators on procedures

2. **Lamp Management**
   - Set lamp hour tracking
   - Configure replacement alerts
   - Document lamp specifications
   - Plan replacement procedures

## Testing & Documentation
1. **Performance Testing**
   - Measure brightness uniformity
   - Test color accuracy
   - Verify contrast ratios
   - Check input lag (if applicable)

2. **Documentation**
   - Record all settings and configurations
   - Create user operation guides
   - Document maintenance procedures
   - Provide warranty information

*Reference: NEC/Panasonic Installation Guides and AVIXA Display Standards*
      `,
      quiz: [
        {
          question: "What is the standard color space for HD video content?",
          options: ["sRGB", "Adobe RGB", "Rec. 709", "DCI-P3"],
          correct: 2,
          explanation: "Rec. 709 is the standard color space for HD television and video content."
        }
      ]
    },

    // Live Events
    {
      id: 'live-audio-setup',
      categoryId: 'live-events',
      title: 'Live Event Audio System Setup',
      difficulty: 'Advanced',
      duration: '90 min',
      lastUpdated: '2024-12-15',
      tags: ['live', 'audio', 'mixing', 'pa'],
      overview: 'Comprehensive guide to setting up professional audio systems for live events.',
      content: `
# Live Event Audio System Setup

## Pre-Event Planning
1. **Venue Assessment**
   - Measure venue dimensions and acoustics
   - Identify power distribution locations
   - Plan cable runs and staging areas
   - Check load-in/load-out access

2. **System Design**
   - Calculate coverage requirements
   - Select appropriate speaker systems
   - Plan mixing console placement
   - Design monitor system layout

## Equipment Setup
1. **Power Distribution**
   - Install main power distribution
   - Set up individual equipment power
   - Verify ground integrity
   - Test all power connections

2. **Main PA System**
   - Position main speakers for optimal coverage
   - Set up subwoofers for even bass response
   - Install delay towers if needed
   - Secure all rigging points

## Mixing Console Setup
1. **Console Configuration**
   - Connect all input sources
   - Set up output routing
   - Configure monitor sends
   - Test all channel functions

2. **Signal Processing**
   - Set up system EQ and limiting
   - Configure crossover settings
   - Apply speaker management
   - Set up effects processing

## Monitor System
1. **Stage Monitoring**
   - Position monitor speakers
   - Set up in-ear monitor systems
   - Configure monitor mixing
   - Test all monitor feeds

2. **Communication Systems**
   - Set up intercom systems
   - Configure wireless communication
   - Test all communication paths
   - Establish emergency protocols

## Microphone Setup
1. **Wired Microphones**
   - Test all microphone connections
   - Set appropriate gain levels
   - Configure phantom power
   - Check for ground loops

2. **Wireless Systems**
   - Scan for available frequencies
   - Set up transmitters and receivers
   - Test signal strength and range
   - Configure backup frequencies

## System Tuning
1. **Room Acoustics**
   - Measure room response
   - Apply corrective EQ
   - Set appropriate delay times
   - Optimize speaker positioning

2. **Feedback Prevention**
   - Use spectrum analyzers
   - Apply notch filters carefully
   - Set proper gain structure
   - Train operators on techniques

## Sound Check Procedures
1. **Line Check**
   - Test all input sources
   - Verify signal routing
   - Check monitor feeds
   - Confirm communication systems

2. **Artist Sound Check**
   - Set individual monitor mixes
   - Adjust main mix levels
   - Fine-tune EQ settings
   - Address any issues

## Show Operation
1. **Mix Techniques**
   - Maintain consistent levels
   - Use compression effectively
   - Apply EQ judiciously
   - Monitor system performance

2. **Problem Solving**
   - Identify feedback quickly
   - Troubleshoot signal issues
   - Manage equipment failures
   - Maintain show continuity

## Post-Event Procedures
1. **Equipment Shutdown**
   - Power down in proper sequence
   - Secure all equipment
   - Coil cables properly
   - Document any issues

2. **Load-Out Planning**
   - Organize equipment efficiently
   - Check inventory completeness
   - Plan transportation logistics
   - Schedule equipment maintenance

*Based on Live Sound Engineering Best Practices and AVIXA Live Event Standards*
      `,
      quiz: [
        {
          question: "What is the proper sequence for powering up a live sound system?",
          options: ["Amps first, then console", "Console first, then amps", "All equipment simultaneously", "Speakers first, then everything else"],
          correct: 1,
          explanation: "Always power up the mixing console and signal processing first, then power amplifiers last to prevent speaker damage."
        }
      ]
    },

    // Troubleshooting
    {
      id: 'signal-flow-troubleshooting',
      categoryId: 'troubleshooting',
      title: 'AV Signal Flow Troubleshooting',
      difficulty: 'Intermediate',
      duration: '40 min',
      lastUpdated: '2024-12-15',
      tags: ['troubleshooting', 'signal', 'diagnostics'],
      overview: 'Systematic approach to diagnosing and resolving AV signal flow issues.',
      content: `
# AV Signal Flow Troubleshooting

## Systematic Approach
1. **Problem Identification**
   - Document symptoms clearly
   - Identify affected components
   - Note when problem occurs
   - Gather user reports

2. **Initial Assessment**
   - Check power status of all devices
   - Verify cable connections
   - Review system configuration
   - Check for recent changes

## Audio Troubleshooting
1. **No Audio Symptoms**
   - **Check**: Power, mute status, volume levels
   - **Test**: Different sources, outputs
   - **Verify**: Cable integrity, connections
   - **Measure**: Signal levels at each stage

2. **Audio Quality Issues**
   - **Distortion**: Check gain structure, clipping
   - **Noise**: Identify ground loops, interference
   - **Frequency Response**: Check EQ settings, speakers
   - **Intermittent**: Test connections, cables

## Video Troubleshooting
1. **No Video Display**
   - **Check**: Power, input selection, cables
   - **Test**: Different sources, displays
   - **Verify**: Resolution compatibility, EDID
   - **Measure**: Signal strength, timing

2. **Video Quality Issues**
   - **Poor Image**: Check resolution, scaling
   - **Color Problems**: Verify color space, calibration
   - **Sync Issues**: Check timing, cable quality
   - **Intermittent**: Test HDCP, cable integrity

## Control System Issues
1. **No Response**
   - **Check**: Network connectivity, power
   - **Test**: Manual device control
   - **Verify**: Programming, device addresses
   - **Review**: System logs, error messages

2. **Partial Function**
   - **Identify**: Working vs. non-working functions
   - **Test**: Individual device responses
   - **Check**: Programming logic, feedback
   - **Verify**: Device compatibility, firmware

## Network-Related Problems
1. **Connectivity Issues**
   - **Check**: Physical connections, switch status
   - **Test**: Ping devices, port connectivity
   - **Verify**: IP addresses, subnet masks
   - **Review**: Network configuration, VLANs

2. **Performance Problems**
   - **Monitor**: Bandwidth utilization, latency
   - **Check**: Switch capacity, cable quality
   - **Test**: Different network paths
   - **Optimize**: QoS settings, traffic prioritization

## Diagnostic Tools
1. **Basic Tools**
   - Multimeter for power/continuity
   - Cable tester for connectivity
   - Signal generator for testing
   - Oscilloscope for waveform analysis

2. **Advanced Tools**
   - Network analyzer for IP systems
   - Spectrum analyzer for wireless
   - Protocol analyzer for data
   - Thermal camera for heat issues

## Documentation Process
1. **Problem Documentation**
   - Record symptoms and conditions
   - Note troubleshooting steps taken
   - Document solution implemented
   - Update system documentation

2. **Preventive Measures**
   - Schedule regular maintenance
   - Monitor system performance
   - Update firmware/software
   - Train operators properly

## Common Failure Modes
1. **Cable Failures**
   - Physical damage, connector wear
   - Environmental factors
   - Improper installation
   - Age-related degradation

2. **Power Issues**
   - Voltage fluctuations
   - Ground problems
   - Power supply failures
   - Circuit overloads

3. **Environmental Factors**
   - Temperature extremes
   - Humidity effects
   - Dust accumulation
   - Vibration damage

*Reference: AVIXA Troubleshooting Standards and Industry Best Practices*
      `,
      quiz: [
        {
          question: "What is the first step in systematic AV troubleshooting?",
          options: ["Replace cables", "Check power status", "Document the problem", "Call technical support"],
          correct: 2,
          explanation: "Always document the problem symptoms clearly before beginning troubleshooting steps."
        }
      ]
    }
  ]
};

// Export for use in the application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = trainingData;
} else if (typeof window !== 'undefined') {
  window.trainingData = trainingData;
}