import { Calendar, Clock, User, Tag } from 'lucide-react';

/**
 * Blog posts data for Shah Group
 * Each post has: id, slug, title, excerpt, content, cover, author, date, readTime, tags
 */
export const blogPosts = [
  {
    id: 1,
    slug: 'industrial-fluid-power-systems-guide',
    title: 'The Complete Guide to Industrial Fluid Power Systems',
    excerpt:
      'Explore the fundamentals of fluid power systems — hydraulics and pneumatics — and how they drive efficiency across manufacturing, automation, and heavy industries.',
    content: `
## Introduction

Fluid power systems are the backbone of modern industrial automation. From the massive hydraulic presses shaping metal components to the precise pneumatic actuators on assembly lines, these systems convert fluid energy into mechanical work with remarkable efficiency and control.

At Shah Engineers & Consultants Pvt. Ltd., we have over three decades of experience designing, supplying, and maintaining fluid power solutions for industries across India.

## What is Fluid Power?

Fluid power is the technology of using a fluid (liquid or gas) to transmit power from one location to another. It is divided into two main categories:

### Hydraulics
Hydraulic systems use incompressible liquids — typically mineral oil, water-glycol, or synthetic fluids — to transmit force. They operate at high pressures (up to 700 bar / 10,000 psi) and are ideal for applications requiring immense force, such as:
- Injection moulding machines
- Press brakes and shearing machines
- Earthmoving equipment
- Marine and offshore systems

### Pneumatics
Pneumatic systems use compressed air or inert gases. They operate at lower pressures (typically 6–12 bar) and excel in applications demanding speed, cleanliness, and repeatability:
- Automated assembly lines
- Packaging machinery
- Robotic grippers and pick-and-place units
- Food processing equipment

## Key Components of a Fluid Power System

### 1. Pumps & Compressors
The heart of any fluid power system. Hydraulic pumps (gear, vane, piston) generate flow, while air compressors (screw, reciprocating, centrifugal) supply compressed air.

### 2. Valves
Directional control valves, pressure relief valves, flow control valves, and proportional valves regulate the direction, pressure, and flow rate of the fluid.

### 3. Actuators
Cylinders (linear motion) and motors (rotary motion) convert fluid energy into mechanical work.

### 4. Accessories
Filters, regulators, lubricators (FRLs), accumulators, heat exchangers, piping, and fittings complete the system.

## Choosing the Right System

| Factor | Hydraulics | Pneumatics |
|--------|------------|------------|
| Force density | Very high (up to 700 bar) | Moderate (up to 12 bar) |
| Speed | Moderate | Very high |
| Precision | Excellent (servo/proportional) | Good (with position feedback) |
| Cost | Higher | Lower |
| Maintenance | Moderate | Low |
| Cleanliness | Potential for leaks | Clean (if dry air is used) |

## The Shah Group Advantage

With partnerships spanning world-class brands like **Parker Hannifin**, **Kaishan Compressors**, **Chicago Pneumatic**, **Tubacex**, and **Trident**, we offer:

- **End-to-end solutions** — from system design to commissioning
- **Genuine branded components** — guaranteed quality and performance
- **Expert technical support** — our engineers have over 30 years of collective experience
- **Prompt after-sales service** — minimizing downtime for your operations

## Conclusion

Whether you're upgrading an existing system or building a new greenfield facility, choosing the right fluid power solution is critical to your operational efficiency. Get in touch with our team for a free consultation.
    `.trim(),
    cover: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    author: 'Shah Engineers Team',
    date: '2026-06-15',
    readTime: '8 min read',
    tags: ['Hydraulics', 'Pneumatics', 'Industrial Automation', 'Guide'],
  },
  {
    id: 2,
    slug: 'benefits-oil-free-air-compressors',
    title: 'Why Oil-Free Air Compressors Are the Future of Clean Manufacturing',
    excerpt:
      'Discover how oil-free compressed air technology is transforming industries where air purity is non-negotiable — from pharmaceuticals to electronics manufacturing.',
    content: `
## Introduction

Compressed air is often called the "fourth utility" in industrial plants, alongside electricity, water, and natural gas. However, not all compressed air is created equal. In many industries, the presence of oil contaminants in compressed air can lead to product defects, equipment damage, and regulatory non-compliance.

Oil-free air compressors offer a compelling solution, and with **Kaishan Compressors**' world-class oil-free screw technology, Shah Group is proud to bring this innovation to Indian industry.

## What is an Oil-Free Compressor?

An oil-free compressor is designed to compress air without introducing oil into the compression chamber. Unlike lubricated compressors that rely on oil for sealing, cooling, and lubrication, oil-free compressors use specially engineered materials and coatings to achieve the same functions without oil.

### How It Works

Kaishan's oil-free screw compressors feature:
- **Stainless steel rotors** with wear-resistant coatings
- **Precision-ground timing gears** that maintain rotor clearance without oil contact
- **Water-cooled or air-cooled** compression stages
- **Multiple-stage compression** with interstage cooling for maximum efficiency

## Industries That Benefit Most

### Pharmaceutical & Biotechnology
ISO 8573-1 Class 0 or Class 1 air quality is often mandatory. Oil-free compressors eliminate the risk of product contamination.

### Electronics & Semiconductor Manufacturing
Even trace amounts of oil vapour can compromise wafer fabrication, PCB assembly, and cleanroom environments.

### Food & Beverage
Oil-free air eliminates the risk of tainting food products, meeting stringent HACCP and FDA requirements.

### Automotive Paint Shops
Oil aerosols can cause "fish eyes" and other surface defects in paint finishes — oil-free air ensures a flawless finish.

### Textile & Chemical Processing
Process air that contacts yarns, fibres, or chemicals must be 100% oil-free to maintain product quality.

## Cost Benefits of Oil-Free Technology

While the initial investment in oil-free compressors is higher than lubricated models, the total cost of ownership often favours oil-free due to:

1. **No oil disposal costs** — eliminating waste oil handling and disposal
2. **Lower maintenance** — no oil filters, no oil changes, no separator elements
3. **Reduced energy consumption** — modern VFD-controlled oil-free compressors match supply to demand
4. **Elimination of condensate treatment** — oily condensate requires expensive separation equipment

## Kaishan's Oil-Free Range from Shah Group

Through our partnership with **Kaishan Compressors**, we offer a complete range of oil-free screw compressors:
- **KOF Series** — 7.5–37 kW, packaged units for general industry
- **KOFH Series** — 45–315 kW, heavy-duty industrial compressors
- **Centrifugal compressors** — for very large capacity requirements

All units feature IE4/IE5 premium efficiency motors and intelligent controllers for remote monitoring.

## Conclusion

As Indian industry moves toward global quality standards, oil-free compressed air is no longer a luxury — it's a necessity. Contact Shah Group today to discuss your compressed air requirements with our specialists.
    `.trim(),
    cover: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&q=80',
    author: 'Shah Engineers Team',
    date: '2026-06-08',
    readTime: '7 min read',
    tags: ['Compressors', 'Kaishan', 'Oil-Free', 'Manufacturing'],
  },
  {
    id: 3,
    slug: 'parker-hydraulic-systems-maintenance-tips',
    title: 'Parker Hydraulic Systems: Essential Maintenance Tips for Longevity',
    excerpt:
      'Keep your Parker hydraulic systems running at peak performance with these expert maintenance tips from our 30+ years of field experience.',
    content: `
## Introduction

Hydraulic systems are the muscles of heavy industry. When they fail, production stops. But with proper maintenance, a well-designed Parker hydraulic system can deliver decades of reliable service.

At Shah Group, we've installed and serviced thousands of Parker hydraulic systems across Gujarat and beyond. Here are our top maintenance recommendations.

## 1. Fluid Cleanliness is Everything

Contamination is the #1 cause of hydraulic system failure. Studies show that 70–80% of hydraulic failures are due to contaminated fluid.

### Best Practices:
- **Maintain fluid at ISO 4406 cleanliness codes** — typically 18/16/13 for most industrial systems
- **Use genuine Parker filters** — replace elements at recommended intervals or when the indicator shows bypass
- **Sample and test fluid quarterly** — watch for particle count, water content, and additive depletion
- **Use a filter cart** when adding new fluid to the reservoir

## 2. Monitor Temperature

Excessive heat degrades oil and damages seals.

| Temperature | Impact |
|-------------|--------|
| Below 30°C | High viscosity, sluggish operation |
| 30–55°C | Ideal operating range |
| 55–70°C | Accelerated oil degradation |
| Above 70°C | Critical — shutdown and investigate |

### Cooling System Checks:
- Clean heat exchanger cores monthly
- Check cooling water flow and temperature
- Verify fan operation on air-cooled systems
- Inspect thermostatic bypass valves

## 3. Inspect Hoses and Fittings

Parker's extensive hose and fittings range is world-class, but even the best components need inspection.

- **Check for abrasion** — use hose guards or sleeving where hoses rub against machine parts
- **Look for blistering or softening** — signs of chemical attack or high-temperature exposure
- **Verify routing is correct** — hoses should not be twisted or under tension
- **Replace at first sign of leakage** — a pinhole leak can eject oil at over 100 m/s

## 4. Keep It Clean on the Outside

External cleanliness equals internal reliability.

- Wipe down cylinders rods after each shift
- Keep reservoir breathers clean and functional
- Seal electrical enclosures and junction boxes
- Maintain a clean work area around the hydraulic power unit

## 5. Listen to Your System

Experienced operators can identify problems by sound:

- **Whining pump** — cavitation (low oil level, clogged inlet)
- **Chattering or banging** — air in the system or valve instability
- **Constant relief valve noise** — system operating at maximum pressure continuously (overloaded)

## Conclusion

A well-maintained Parker hydraulic system is a reliable workhorse. Shah Group offers comprehensive maintenance contracts, spare parts, and emergency repair services. Contact us to schedule a system audit.
    `.trim(),
    cover: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    author: 'Shah Engineers Team',
    date: '2026-05-28',
    readTime: '6 min read',
    tags: ['Hydraulics', 'Parker', 'Maintenance', 'Tips'],
  },
  {
    id: 4,
    slug: 'compressed-air-system-audit-energy-saving',
    title: 'How a Compressed Air System Audit Can Cut Energy Costs by 30%',
    excerpt:
      'Compressed air systems are often the largest energy consumer in a plant. Learn how a professional audit can identify leaks, inefficiencies, and savings.',
    content: `
## Introduction

Compressed air systems typically account for 10–30% of a manufacturing facility's total electricity consumption. Yet most plants operate their air systems with significant inefficiencies — wasting crores of rupees annually.

A professional compressed air system audit can typically identify savings of 15–30%, often with rapid payback periods of under 12 months.

## The Hidden Cost of Compressed Air

Did you know?

- A single 3 mm leak at 7 bar pressure costs approximately ₹1.2 lakh per year in wasted electricity
- Most plants have 10–30% leakage rates
- A 2°C reduction in compressor intake temperature reduces energy consumption by ~1%
- Every 1 bar of unnecessary system pressure adds 6–8% to energy costs

## What Does an Audit Cover?

### 1. Leak Detection and Quantification
Using ultrasonic leak detectors, our engineers identify and quantify every leak in your system — from fittings, hoses, couplings, actuators, and piping.

### 2. Demand-Side Analysis
We measure actual air consumption patterns over a full production cycle. Most plants find that peak demand is 40–60% higher than average — meaning storage and regulation can smooth supply.

### 3. Supply-Side Assessment
Our team evaluates:
- Compressor efficiency (specific power: kW per m³/min)
- Control strategy (load/unload vs VFD)
- Dryer and filter performance
- Piping network design (size, routing, pressure drop)

### 4. Air Quality Verification
We test for:
- Dew point (moisture content)
- Oil carry-over
- Particulate contamination
- Microbial growth

## Typical Findings and Solutions

| Issue | Typical Impact | Recommended Solution |
|-------|---------------|---------------------|
| Undersized piping | 0.5–1.0 bar pressure drop | Upgrade to larger diameter |
| Excessive leakage | 20–40% of total flow | Comprehensive leak repair program |
| Inappropriate compressor control | 15–25% energy waste | Install VFD or sequencing controller |
| Oversized system | 20–30% energy waste | Right-size with multiple smaller units |
| Poor heat recovery | 0% (missed opportunity) | Install heat recovery for space/water heating |

## Why Choose Shah Group?

With our partnership with **Kaishan Compressors** and **Parker Hannifin**, we offer:

- **ISO 50001-compliant energy auditing** by certified professionals
- **Turnkey implementation** — from recommendations to execution
- **Measurement & verification** — we guarantee documented savings
- **Financing options** — through energy service company (ESCO) models

## Conclusion

A compressed air audit is the single most cost-effective energy conservation measure for most manufacturing plants. Contact Shah Group to schedule an audit of your facility. The first consultation is complimentary.
    `.trim(),
    cover: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80',
    author: 'Shah Engineers Team',
    date: '2026-05-20',
    readTime: '7 min read',
    tags: ['Compressed Air', 'Energy Saving', 'Audit', 'Kaishan'],
  },
  {
    id: 5,
    slug: 'industrial-valves-selection-guide',
    title: 'Industrial Valves: A Practical Selection Guide for Engineers',
    excerpt:
      'Choose the right valve for your application with this clear, practical guide covering valve types, materials, actuation methods, and industry standards.',
    content: `
## Introduction

Selecting the right valve for an industrial application is more complex than it appears. The wrong choice can lead to leakage, excessive pressure drop, premature wear, or catastrophic failure.

With decades of experience supplying valves across Gujarat's process industries, Shah Group has curated this practical guide to help engineers make informed decisions.

## Valve Types and Applications

### Gate Valves
- **Best for**: On/off isolation, fully open or fully closed
- **Not for**: Throttling (flow regulation)
- **Typical use**: Water, steam, oil, gas pipelines

### Globe Valves
- **Best for**: Throttling and flow regulation
- **Not for**: Applications requiring full bore (restricted flow path)
- **Typical use**: Cooling water, steam tracing, chemical dosing

### Ball Valves
- **Best for**: Quick quarter-turn shutoff, high-pressure applications
- **Variants**: Floating (low pressure), trunnion-mounted (high pressure)
- **Typical use**: Gas handling, hydraulic systems, cryogenic services

### Butterfly Valves
- **Best for**: Large diameter, low-pressure applications, space-constrained installations
- **Typical use**: Water treatment, HVAC, food processing, pharmaceutical

### Check Valves
- **Best for**: Preventing reverse flow
- **Types**: Swing, lift, dual-plate, spring-loaded
- **Typical use**: Pump discharge, compressor discharge, drain lines

### Relief & Safety Valves
- **Best for**: Overpressure protection
- **Critical**: Must be properly sized and set to certified pressure
- **Typical use**: Pressure vessels, compressors, boilers, pipelines

## Material Selection

| Material | Applications | Max Temp | Key Feature |
|----------|-------------|----------|-------------|
| Cast Iron | Water, steam, gas | 230°C | Economical |
| Carbon Steel | Oil, gas, high-pressure | 425°C | Strong and durable |
| Stainless Steel 304/316 | Corrosive fluids, hygienic | 600°C | Corrosion resistance |
| Brass / Bronze | Potable water, marine | 200°C | Dezincification resistant |
| PVC / CPVC | Chemical handling | 60–95°C | Chemical inertness |
| Hastelloy / Monel | Extreme corrosion | 1000°C+ | Premium alloys |

## End Connections

- **Flanged** — ANSI/DIN/BS standards, best for larger sizes (DN50+)
- **Threaded** — For small-bore lines (DN15–DN50)
- **Butt-weld / Socket-weld** — Permanent, leak-proof, high-pressure
- **Tri-clamp (Tri-Clover)** — Sanitary, food/pharma applications
- **Push-fit / Compression** — Quick installation, low-pressure

## Actuation Options

| Actuator | Speed | Force | Best For |
|----------|-------|-------|----------|
| Manual handwheel | Slow | — | Isolation valves, infrequent operation |
| Gearbox | Slow | High | Large valves, high-torque |
| Pneumatic | Fast | Medium | Automated process plants (most common) |
| Hydraulic | Moderate | Very high | Heavy industry, subsea |
| Electric (motorised) | Moderate | High | Remote locations, precise positioning |
| Electro-hydraulic | Fast | Very high | Power generation, critical safety |

## Our Valve Partners

Shah Group distributes valves from **Parker Hannifin** (instrumentation, hydraulic, pneumatic) and other leading manufacturers. We also supply actuated valve packages with pneumatic or electric actuators, integrated with positioners, limit switches, and solenoid valves.

## Conclusion

Choosing the right valve requires careful consideration of pressure, temperature, fluid properties, and operating frequency. Our engineering team can help you specify the ideal valve for your application — ensuring safety, reliability, and cost-effectiveness.
    `.trim(),
    cover: 'https://images.unsplash.com/photo-1581092335871-4c7c1e3c1c1e?w=800&q=80',
    author: 'Shah Engineers Team',
    date: '2026-05-12',
    readTime: '9 min read',
    tags: ['Valves', 'Parker', 'Engineering', 'Guide'],
  },
  {
    id: 6,
    slug: 'future-automation-industry-4-0-fluid-power',
    title: 'Industry 4.0 and the Future of Fluid Power: Smart Hydraulics & Pneumatics',
    excerpt:
      'Learn how IoT sensors, predictive analytics, and smart valves are transforming fluid power systems into connected, intelligent assets in the Industry 4.0 era.',
    content: `
## Introduction

Industry 4.0 — the fourth industrial revolution — is reshaping manufacturing through digitalisation, connectivity, and data-driven decision-making. Fluid power systems, traditionally seen as "dumb" mechanical systems, are now becoming intelligent assets through smart sensors, IoT connectivity, and advanced analytics.

At Shah Group, we are at the forefront of this transformation, integrating smart technologies from **Parker Hannifin**'s IO-Link and diagnostic capabilities into our solutions.

## What Makes a Fluid Power System "Smart"?

### 1. Smart Cylinders with Position Feedback
Parker's P1F-EF series hydraulic cylinders incorporate integrated magnetostrictive position sensors, providing real-time position feedback with micron-level accuracy — eliminating the need for external linear transducers.

### 2. IO-Link Enabled Valves
Parker's IO-Link manifold systems allow every valve to communicate:
- Spool position
- Cycle count
- Response time
- Coil temperature
- Supply pressure at valve inlet

### 3. Smart Pumps with Variable Displacement
Modern axial-piston pumps with electronic displacement control can adjust flow and pressure in real time based on demand, reducing energy consumption by 40–60% compared to fixed-displacement systems.

### 4. Predictive Maintenance Sensors
Wireless vibration, temperature, and contamination sensors on pumps and motors enable condition-based maintenance rather than time-based maintenance — reducing downtime by 30–50%.

## The Connected Fluid Power Ecosystem

\`\`\`
┌─────────────────────────────────────────────────┐
│                 Cloud Platform                   │
│  (Data storage, analytics, ML models, alerts)    │
└──────────┬──────────────────────┬────────────────┘
           │                      │
    ┌──────▼──────┐        ┌──────▼──────┐
    │  IIoT Gateway │        │   SCADA      │
    │ (Edge compute)│        │  (Plant HMI) │
    └──────┬──────┘        └──────────────┘
           │
    ┌──────▼──────────────────────────────────────┐
    │           Smart Fluid Power System           │
    │  ┌──────┐  ┌──────┐  ┌──────┐  ┌────────┐  │
    │  │Smart │  │IO-Link│  │Smart │  │Smart  │  │
    │  │Pumps │  │Valves│  │Cylinders│  │FRL   │  │
    │  └──────┘  └──────┘  └──────┘  └────────┘  │
    └─────────────────────────────────────────────┘
\`\`\`

## Benefits of Smart Fluid Power

1. **Reduced unplanned downtime** — predictive alerts before failures occur
2. **Optimised energy consumption** — demand-based control reduces waste
3. **Improved product quality** — consistent force, speed, and position control
4. **Remote monitoring** — fleet-wide visibility from a single dashboard
5. **Data-driven continuous improvement** — identify bottlenecks and inefficiencies

## Implementation Roadmap

| Phase | Activity | Timeline |
|-------|----------|----------|
| 1 | System audit and sensor selection | 1–2 weeks |
| 2 | Installation of sensors and IO-Link infrastructure | 2–4 weeks |
| 3 | Gateway setup and cloud connectivity | 1–2 weeks |
| 4 | Dashboard development and baseline data collection | 2–4 weeks |
| 5 | Analytics model training and alert configuration | 4–6 weeks |
| 6 | Operator training and go-live | 1 week |

## Conclusion

Smart fluid power is not a distant future — it's available today. Shah Group can help you assess your existing systems, identify the best upgrade path, and implement a complete Industry 4.0 solution. Contact us to start your digital transformation journey.
    `.trim(),
    cover: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=800&q=80',
    author: 'Shah Engineers Team',
    date: '2026-05-05',
    readTime: '8 min read',
    tags: ['Industry 4.0', 'Smart Systems', 'IoT', 'Automation'],
  },
];

/**
 * Get a blog post by its slug
 */
export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

/**
 * Get related posts (by matching tags)
 */
export function getRelatedPosts(currentSlug, count = 3) {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      ...post,
      relevance: post.tags.filter((tag) => current.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, count);
}

/**
 * Get all unique tags
 */
export function getAllTags() {
  const tagSet = new Set();
  blogPosts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}