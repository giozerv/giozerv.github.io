---
layout: archive
title: "Teaching"
permalink: /teaching/
author_profile: true
---

<script src="/assets/js/scroll-to-top.js"></script>

<style>
/* Style for links with underlines and no color */
a.underline {
  color: inherit;
  text-decoration: underline dotted;
}
</style>

<style>
h3 {
  color: SteelBlue; 
}
</style>

<style>
/* Style for the "Move to Top" link */
.move-to-top {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Show the link when scrolling down */
.move-to-top.active {
  display: block;
}
</style>

<a href="#" class="move-to-top" id="moveToTop">Move to Top</a>




- [Undergraduate Courses](#undergraduate-courses)
- [Available Dimploma Theses](#available-dimploma-theses)
    1. [Approximate DNN Accelerators](#approximate-dnn-accelerators) (several topics)
    1. [Smart Flexible Circuits](#smart-flexible-circuits) (several topics)
    1. [Design and Evaluation of a Vector Functional Unit](#design-and-evaluation-of-a-vector-functional-unit)
    1. [ARM DSU big.LITTLE Cluster Optimization](#arm-dsu-biglittle-cluster-optimization)
    1. [GPU profiling for AI language translation workload training](#gpu-profiling-for-ai-language-translation-workload-training)
    1. [Containerized Edge AI](#containerized-edge-ai) (several topics)
- [Ongoing Dimploma Theses](#ongoing-dimploma-theses)
- [Completed Dimploma Theses](#completed-dimploma-theses)


## Undergraduate Courses
### Winter semester

* [Digital Design Lab (CEID_23Y211)](https://www.ceid.upatras.gr/en/node/27360), Compulsory, 3rd semester
* [Introduction to VLSI (CEID_ΝΕ4648)](https://www.ceid.upatras.gr/en/undergraduate/courses/introduction-vlsi), Core Elective, [eclass](https://eclass.upatras.gr/courses/CEID1256/)

### Summer Semester

* [Digital Design (CEID_NΝY107)](https://www.ceid.upatras.gr/en/undergraduate/courses/logic-design-ii), Compulsory, 2nd semester, [eclass](https://eclass.upatras.gr/courses/CEID1262/)
* [VLSI Systems Design (CEID_NE5647)](https://www.ceid.upatras.gr/en/undergraduate/courses/vlsi-systems-design), Core Elective, [eclass](https://eclass.upatras.gr/courses/CEID1268/)


## Available Dimploma Theses

### Approximate DNN Accelerators
<img style="float: right;" width= "400px" src="/images/axml.png">
In recent years, we have been experiencing a rapid growth in Artificial Intelligence (AI) and Machine Learning (ML), especially in deep learning and Deep Neural Networks (DNNs) that achieved superhuman levels of accuracy in many tasks suc as natural language processing, object detection, speech recognition and more. However, these accuracy improvements came at the cost of a vast increase in computational demands leading to elevated and many times prohibitive power
consumption, latency etc.

Approximate computing emerged in recent years as a design/computing paradigm that exploits the inherent error resilience of several application domains to deliberately introduce some error in the performed computations but gain in other metrics such as area, power, performance etc [1]. Machine learning applications exhibit an intrinsic error tolerance, being able to produce results of acceptable quality despite their underline computations being performed in an approximate manner. As a result, machine learning forms a perfect candidate for approximate computing [2].


Several topics are available. The offered topics in this research area include, but are not limited to, design and implementation of approximate arithmetic units (i.e., adders, multipliers, and activation functions) for DNN accelerators, but also error correction techniques/mechanisms. Examining varying arithmetic representations (e.g., BFloat16, Float16, Hybrid Float8, Posit, INT8, INT4, logarithmic ) is highly encouraged since alternative arithmetics appear as a promising solution in enabling fast and/or energy-efficient DNN training and inference. Relevant research works can be found in [3-6] while a good read for the entire domain is available in [1] and [2]. 

**Required background**: We are seeking candidates with a background in Electronic/Computer Engineering, with a good understanding of Hardware Design, Computer Architecture, Microarchitecture. A working knowledge of Verilog/VHDL, and RTL simulation is necessary. Familiarity with versioning software, Python, and Machine Learning is highly appreciated. <br>
**Type of work**: This role is designed to enrich your learning while providing hands-on experience. As such, the work is divided into 25% literature study to enhance your theoretical knowledge and 75% hands-on RTL development and design to immerse you in practical, innovative solutions using also [Synopsys'](https://www.synopsys.com/) industrial EDA tools. 



*References* <br>
[1] G. Armeniakos, G. Zervakis, D. Soudris,
and J. Henkel, “Hardware approximate techniques for deep neural network
accelerators: A survey,” <em>ACM Comput. Surv.</em>, vol. 55, no. 4, pp.
83:1–83:36, 2023, doi: <a
href="https://doi.org/10.1145/3527156">10.1145/3527156</a>. <br>
[2] J. Henkel, H. Li, A. Raghunathan, M. B.
Tahoori, S. Venkataramani, X. Yang, and G. Zervakis, “Approximate
computing and the efficient machine learning expedition,” in
<em>Proceedings of the 41st IEEE/ACM international conference on
computer-aided design, ICCAD 2022, san diego, california, USA, 30
october 2022 - 3 november 2022</em>, pp. 80:1–80:9. doi: <a
href="https://doi.org/10.1145/3508352.3561105">10.1145/3508352.3561105</a>. <br>
[3] G. Zervakis, K. Tsoumanis, S. Xydis, D. Soudris, and K. Z. Pekmestzi, “Design-efficient approximate multiplication circuits through partial product perforation,” <em>IEEE Trans. Very Large Scale Integr. Syst.</em>, vol. 24, no. 10, pp. 3105–3117, 2016, doi: <a href="https://doi.org/10.1109/TVLSI.2016.2535398">10.1109/TVLSI.2016.2535398</a>.
[4] G. Zervakis, O. Spantidi, I.
Anagnostopoulos, H. Amrouch, and J. Henkel, “Control variate
approximation for DNN accelerators,” in <em>58th ACM/IEEE design
automation conference, DAC 2021, san francisco, CA, USA, december 5-9,
2021</em>, IEEE, 2021, pp. 481–486. doi: <a
href="https://doi.org/10.1109/DAC18074.2021.9586092">10.1109/DAC18074.2021.9586092</a>. <br>
[5] M. Zolfagharinejad, M. Kamal, A. Afzali-Khusha and M. Pedram, "Posit Process Element for Using in Energy-Efficient DNN Accelerators," in <em> IEEE Transactions on Very Large Scale Integration (VLSI) Systems</em>, vol. 30, no. 6, pp. 844-848, June 2022, doi: <a href="https://doi.org/10.1109/TVLSI.2022.3165510">10.1109/TVLSI.2022.3165510</a>. <br>
[6] G. Zervakis, I. Anagnostopoulos, S.
Salamin, O. Spantidi, I. Roman-Ballesteros, J. Henkel, and H. Amrouch,
“Thermal-aware design for approximate DNN accelerators,” <em>IEEE Trans.
Computers</em>, vol. 71, no. 10, pp. 2687–2697, 2022, doi: <a
href="https://doi.org/10.1109/TC.2022.3141054">10.1109/TC.2022.3141054</a>.


### Smart Flexible Circuits

<img style="float: right;" width= "400px" src="/images/printed.png">
A trillion-dollar market of fast moving consumer goods (FMCG), disposables such as beverages, packaged foods, and toiletries, low-end healthcare products (e.g., smart bandages), etc., have seen limited impact from embedded computing[1]. Although for several of these domains, a typically required computational task is classification [2], such applications pose requirements for sub-cent costs, non-toxicity, porosity, stretchability, and conformity that silicon-based computing systems cannot satisfy. Printed Electronics establish as a key solution to enable such applications. Specifically, printed electronics is increasingly recognized as a key enabler for the Internet of Things as part of the "Fourth Industrial Revolution", whose core technology advances are functionality and low-cost [3].

Printed electronics indicates a set of printing techniques that can realize ultra low-cost, large scale and flexible hardware [3].
Printed electronics cannot compete with silicon-based electronics in integration density, area, or speed, mainly due to large feature sizes arising from low-cost and low-resolution printing.
The typical operating frequency of printed circuits is from a few Hz to a few kHz. 
Similarly, the feature size tends to be several microns.
Nevertheless, due to its form-factor, conformity, and most importantly ultra-low fabrication costs of the additive manufacturing processes, that enable hardware on-demand even at very low quantities, printed electronics can target application domains untouchable by silicon VLSI.
However, their large feature sizes and high intrinsic transistor gate capacitances result in elevated power and area compared to nanometer technologies.
Additionally, the integration density of printed circuits is orders of magnitude lower compared to silicon systems, prohibiting thus the realization of complex circuits.

Since low-cost embedded ML systems are usually task-specific and in order to address the aforementioned limitations, there is the opportunity of generating model-specific ML circuits that are more efficient compared to general-purpose ones.

Several topics are available. The offered topics in this research area include, but are not limited to, printed systems for Machine-Learning Classification. Several machine learning algorithms, such as MLPs, SVMs, BNNs, Decision Trees, Random Forests, Ensembles,  can be studied. The implemented system may be a dedicated accelerator and/or a microprocessor. In addition, system modeling and design space exploration are of high research interest. Digital design, analog, or mixed-signal design are highly encouraged. Relevant research works can be found in [1-7].<br>
The diploma theses are in collaboration with [KIT](https://www.kit.edu/), Germany.

**Required background**: We are seeking candidates with a background in Electronic/Computer Engineering, with a good understanding of Hardware Design, Computer Architecture, ISA/Microarchitecture. A working knowledge of Verilog/VHDL, and RTL simulation is necessary. Familiarity with versioning software, Python, and Machine Learning is highly appreciated. <br>
**Type of work**: This role is designed to enrich your learning while providing hands-on experience. As such, the work is divided into 30% literature study to enhance your theoretical knowledge and 70% hands-on RTL development and design to immerse you in practical, innovative solutions using also [Synopsys'](https://www.synopsys.com/) industrial EDA tools. The target technologies will be an inkjet printed electrolyte-gated transistor technology ([EGFET](https://github.com/PrintedComputing/EGFET_PDK)) and [Pragmatic's](https://www.pragmaticsemi.com/) flexible technology.

*References* <br>
[1] N. Bleier, M. H. Mubarik, F. Rasheed, J. Aghassi-Hagmann, M. B. Tahoori and R. Kumar, "Printed Microprocessors," <em>ACM/IEEE 47th Annual International Symposium on Computer Architecture (ISCA), Valencia, Spain, 2020</em>, pp. 213-226, doi: <a
href="https://doi.org/10.1109/ISCA45697.2020.00028">10.1109/ISCA45697.2020.00028</a>.<br>
[2] M. H. Mubarik et al., "Printed Machine Learning Classifiers," <em>53rd Annual IEEE/ACM International Symposium on Microarchitecture (MICRO)</em>, Athens, Greece, 2020,</em> pp. 73-87, doi: <a
href="https://doi.org/10.1109/MICRO50266.2020.00019">10.1109/MICRO50266.2020.00019</a>.<br>
[3] G. Armeniakos, G. Zervakis, D. Soudris,
M. B. Tahoori, and J. Henkel, “Co-design of approximate multilayer
perceptron for ultra-resource constrained printed circuits,” <em>IEEE
Trans. Computers</em>, vol. 72, no. 9, pp. 2717–2725, 2023, doi: <a
href="https://doi.org/10.1109/TC.2023.3251863">10.1109/TC.2023.3251863</a>.<br>
[4] G. Armeniakos, G. Zervakis, D. Soudris,
M. B. Tahoori, and J. Henkel, “Model-to-Circuit Cross-Approximation For Printed Machine Learning Classifiers,” <em>IEEE Trans. Comput. Aided Des. Integr. Circuits Syst.</em>, pp. 1-1, 2023, doi: <a
href="https://doi.org/10.1109/TCAD.2023.3258668">10.1109/TCAD.2023.3258668</a>.<br>
[5] A. Kokkinis, G. Zervakis, K. Siozios,
M. B. Tahoori, and J. Henkel, “Hardware-aware automated neural
minimization for printed multilayer perceptrons,” in <em>Design,
automation &amp; test in europe conference &amp; exhibition, DATE 2023,
antwerp, belgium, april 17-19, 2023</em>, IEEE, 2023, pp. 1–2. doi: <a
href="https://doi.org/10.23919/DATE56975.2023.10137161">10.23919/DATE56975.2023.10137161</a>.<br>
[6] K. Balaskas, G. Zervakis, K. Siozios,
M. B. Tahoori, and J. Henkel, “Approximate decision trees for machine
learning classification on tiny printed circuits,” in <em>23rd
international symposium on quality electronic design, ISQED 2022, santa
clara, CA, USA, april 6-7, 2022</em>, IEEE, 2022, pp. 1–6. doi: <a
href="https://doi.org/10.1109/ISQED54688.2022.9806213">10.1109/ISQED54688.2022.9806213</a>. <br>
[7] K. Iordanou, T. Atkinson, E. Ozer, J. Kufel, J. Biggs, G. Brown, and M. Lujan, "Tiny Classifier Circuits: Evolving Accelerators for Tabular Data," in <em>arXiv</em>, 2023, doi: <a
href="https://doi.org/10.48550/arXiv.2303.00031">10.48550/arXiv.2303.00031</a>.

### Design and Evaluation of a Vector Functional Unit

In this diploma thesis you will primarily focus on designing the RTL for a Vector Functional Unit (VFU) intended for a broad vector processor, enhancing high-performance SIMD (Single Instruction, Multiple Data) operations. This position also encompasses creating data communication pathways for the VFU. Ultimately, you will generate a widely applicable RTL block netlist for both the VFU and its communication pathways.<br>
This diploma thesis is in collaboration with [IMEC](https://www.imec-int.com/en), Belgium, and includes the possibility of an associated internship. More details can regarding this topic can be found [here](https://www.imec-int.com/en/work-at-imec/job-opportunities/ppact-evaluation-vector-functional-unit).

**Required background**: We are seeking candidates with a background in Electronic/Computer
Engineering, with a strong understanding of Computer Architecture, Microarchitecture/ISA.
Proficiency in C, Python, SystemVerilog/VHDL, and RTL simulation is necessary.<br>
**Type of work**: This role is designed to enrich your learning while providing hands-on experience. As such, the work is divided into 25% literature study to enhance your theoretical knowledge and 75% hands-on RTL development and physical design to immerse you in practical, innovative solutions.

### ARM DSU big.LITTLE Cluster Optimization

In this diploma thesis you will participate in the design and implementation of an Arm DSU big.LITTLE cluster, employing Arm HP as the big and Arm HD as the LITTLE. Responsibilities include defining realistic workloads and benchmarks for the cluster, developing and optimizing compiler configurations for efficient workload mapping onto the big and LITTLE cores. Our current toolchain supports single Processing Element (PE), big or LITTLE, simulation, and we aspire to handle more complex workloads on both big and LITTLE cores.<br>
This diploma thesis is in collaboration with [IMEC](https://www.imec-int.com/en), Belgium, and includes the possibility of an associated internship. More details can regarding this topic can be found [here](https://www.imec-int.com/en/work-at-imec/job-opportunities/ppact-evaluation-vector-functional-unit).

**Required background**: We are seeking candidates with a background in Electronics/Computer Engineering, possessing a robust understanding of Computer Architecture and Embedded Systems. Proficiency in C, Python, Cross-compilation, SystemVerilog/VHDL, RTL simulation, and Post-synthesis analysis is necessary. Experience with ARM IP development will be considered a plus.<br>
**Type of work**: This role enriches your learning experience, providing a blend of theoretical knowledge and practical application. The work is divided into 25% literature study to enhance theoretical comprehension and 75% hands-on digital design.

### GPU profiling for AI language translation workload training

As part of this work, the candidate will be understanding large language models (LLM) and execute such models to realize the deeper insight of GPU resources utilization. The data from profiling tools can then be used with analytical/cycle accurate simulator tools to estimate the computation cost of such model’s at large scale. Understanding these parameters from the profiling tools will be used later insight on impact of GPU architecture for certain workloads which can then be used to upgrade analytical tools.<br>
This diploma thesis is in collaboration with [IMEC](https://www.imec-int.com/en), Belgium, and includes the possibility of an associated internship. More details can regarding this topic can be found [here](https://www.imec-int.com/en/work-at-imec/job-opportunities/gpu-profiling-ai-language-translation-workload-training).


**Required background**: Computer science, parallel computing on cluster, GPU system level architecture, programming (C++/Python/CUDA).<br>
**Type of work**: 30% literature, 70% modelling

### Containerized Edge AI
<img style="float: right;" width= "450px" src="/images/edgeai.png">
Embedded Machine Learning (ML) constitutes a phenomenally fast-growing field that comprises ML algorithms, hardware, and software, capable of performing on-device sensor data analyses at extremely low power, enabling thus several always-on and battery-powered applications and services [1]. Running ML-based applications on embedded edge devices is attracting a vast interest for manifold reasons such as accessibility, privacy, latency, and security.

AI technologies have broadened from a centralized fashion to mobile or distributed fashion, opening a new era called edge AI, with dramatic advancements that are substantially changing everyday technology, social behavior, and lifestyles [2]. Today, edge AI is employed across all sectors. Servers installed on airplanes, in stores, and within factories promptly respond to IoT sensors in real-time. These servers forecast weather, thwart theft, and ensure manufacturing quality. AI imparts functionality to sensor data. Trained AI models recognize patterns and initiate responses. A trained AI model represents a company’s business intelligence [3]. The mandatory requirement of embedded ML for energy efficiency but also low latency as well as to retain accuracy in acceptable levels, leads to cross-/co- optimization of the software and hardware stack.

The devices that span these major domains are a heterogeneous mix of devices including sensors, monitoring devices, and edge processors, as well as different levels of edge servers, gateways, base stations, and cloud servers [2]. They can be categorized by their main computing class, and the dominant types are CPU-based, GPU-based, FPGAbased, and ASIC-based. Edge AI is cloud native. Most AI applications are containerized microservices and <a href="https://kubernetes.io/" class="underline">Kubernetes</a> is the unofficial standard for container orchestration. A recent report on The State of Cloud Native Development [4], highlighted that "…developers working on edge computing have the highest usage for both containers and Kubernetes" with 76% of edge AI applications using containers and 63% using Kubernetes [5]. 

In this diploma thesis you will primarily focus on researching the containerized Edge-AI and setup and deploy a Kubernetes-based Edge-AI cluster on the available devices. The offered topics in this research area include, but are not limited to, profiling the overhead of virtualization and orchestration, develop containerized GPU-based edge applications, as well as deduce novel ML-based mechanisms for energy-aware node and cluster management. References [1-6] provide a good read for this research area. During this thesis you will be able to use real hardware (with the associated limitations) and familiarize yourselves with virtualization and Kubernetes.


**Required background**: We are seeking candidates with a background in Electronic/Computer Engineering, with a good understanding Linux. A working knowledge of bash scripting and Python is necessary. Familiarity with versioning software, CUDA, and Machine Learning is highly appreciated. <br>
**Type of work**: This role is designed to enrich your learning while providing hands-on experience. As such, the work is divided into 30% literature study to enhance your theoretical knowledge and 70% hands-on development. 

*References* <br>
[1] M. Shafique, T. Theocharides, V. J. Reddy and B. Murmann, "TinyML: Current Progress, Research Challenges, and Future Roadmap," <em>58th ACM/IEEE Design Automation Conference (DAC), San Francisco, CA, USA, 2021,</em> pp. 1303-1306, doi: <a
href="https://doi.org/10.1109/DAC18074.2021.9586232">10.1109/DAC18074.2021.9586232</a>.<br>
[2] C. Hao, J. Dotzel, J. Xiong, L. Benini, Z. Zhang and D. Chen, "Enabling Design Methodologies and Future Trends for Edge AI: Specialization and Codesign," in <em>IEEE Design & Test</em>, vol. 38, no. 4, pp. 7-26, Aug. 2021, doi: <a href="https://doi.org/10.1109/MDAT.2021.3069952">10.1109/MDAT.2021.3069952</a>.<br>
[3] J. Liberman, "The Need for Speed: Edge AI with NVIDIA GPUs and SmartNICs", \[[online](https://developer.nvidia.com/blog/the-need-for-speed-edge-ai-with-nvidia-gpus-and-smartnics-part-1/)\]<br>
[4] The State of Cloud Native Development, \[[online](https://www.cncf.io/wp-content/uploads/2021/12/Q1-2021-State-of-Cloud-Native-development-FINAL.pdf)\]<br>
[5] T. Yeung, "AI is Changing How Enterprises Manage Edge Applications", \[[online](https://developer.nvidia.com/blog/ai-is-changing-how-enterprises-manage-edge-applications/)\]<br>
[6] K. Kaur, S. Garg, G. Kaddoum, S. H. Ahmed and M. Atiquzzaman, "KEIDS: Kubernetes-Based Energy and Interference Driven Scheduler for Industrial IoT in Edge-Cloud Ecosystem," in <em>IEEE Internet of Things Journal</em>, vol. 7, no. 5, pp. 4228-4237, May 2020, doi: <a href="https://doi.org/10.1109/JIOT.2019.2939534">10.1109/JIOT.2019.2939534</a>.<br>



## Ongoing Dimploma Theses
* Theofanis Vergos, "Architecture and approximation exploration for Feed Forward Equalizer Circuit".
* Polykarpos Vergos, "Exploration of alternative algebras for race logic  architectures and  applications".
* Ilias Sertaridis, "Design of approximate Printed Support Vector Machine classification circuits".
* Spyridons Mpesias, "Design and modeling of printed Support Vector Machine classification circuits".
* Ioannis Loudaros, "Approximate Multiplier for Neural Network Circuits".
* Marios Alexandropoulos, "Analog Support Vector Machines on Printed Electronics".


## Completed Dimploma Theses
* Vassilis Milionis, "DNN-based UAV Tracking in AirSim," Oct. 2023, \[[online](https://nemertes.library.upatras.gr/items/d62e9ef4-e23c-4c8f-9593-020fa58270f5)\].
* Panagiotis Papanikolaou, "Binary Neural Networks on Printed Electronics," Jul. 2023, \[[online](https://nemertes.library.upatras.gr/items/bac833a2-191d-492b-8235-a7c8d6e41687)\].
