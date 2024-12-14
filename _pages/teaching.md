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
    1. [TinyML on Tiny Devices](#tinyml-on-tiny-devices) (several topics)
    1. [Design and Evaluation of a Vector Functional Unit](#design-and-evaluation-of-a-vector-functional-unit)
- [Ongoing Dimploma Theses](#ongoing-dimploma-theses)
- [Completed Dimploma Theses](#completed-dimploma-theses)


## Undergraduate Courses
### Winter semester

* [Digital Design Lab (CEID_23Y211)](https://www.ceid.upatras.gr/en/node/27360), Compulsory, 3rd semester, [eclass](https://eclass.upatras.gr/courses/CEID1414/)
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

### TinyML on Tiny Devices

From smart home applications to healthcare moni-toring, the proliferation of Artificial Intelligence (AI) in everyday applications has sparked an unprece-dented demand for devices capable of performing complex Machine Learning (ML) algorithms, leading to increased costs and energy consumption. Ti-nyML has emerged as a promising alternative to large-scale AI, bringing computations closer to the edge, thus enabling secure, private, and near-instant responses at low power.

At the same time, embedded IoT devices based on power-efficient hardware, such as low-cost micro-controller units (MCUs), have recently skyrocketed in popularity, with the market expected to reach 1 trillion by 2035. While these devices are an ideal platform for TinyML, they come with their own set of challenges, namely, strict power and memory budgets. To deploy complex Deep Neural Networks (DNNs) with an ever-increasing number of parame-ters and meet the demands imposed by energy-efficient and resource-constrained devices, there is a pressing need to explore new optimization ave-nues for DNNs. 

The focus of this Thesis will be the application of hardware and software co-optimizations to deploy a DNN application on a highly embedded system un-der strict power and memory budgets. Methods such as, software optimizations, compression methods or even approximate computing can be employed with the end goal of achieving latency, power, and memory usage im-provements. A vast selection of open-source frameworks is available to facilitate the deployment of these DNNs. Popular machine learning frame-works such as Tensorflow can be used alongside libraries like CMSIS-NN and evaluated state of the art benchmarks (MLPerfTiny). Over the course of this Thesis, the student will become familiar with recent advances in the field of TinyML and gain in-sights into the interplay between hardware and software when deploying DNNs on tiny devices baced on MCUs (e.g., SMT32 Nucleo Boards) or FPGAs (e.g., Lattice FPGAs or Xilinx Zybo).

*References* <br>
[1] M. Shafique, T. Theocharides, V. J. Reddy and B. Murmann, "TinyML: Current Progress, Research Challenges, and Future Roadmap," in <em>58th ACM/IEEE Design Automation Conference (DAC), San Francisco, CA, USA, 2021, pp. 1303-1306,</em> doi: <a
href="https://doi.org/10.1109/DAC18074.2021.9586232">10.1109/DAC18074.2021.9586232</a>. <br>
[2] [Introduction to the Special Issue on tinyML](https://dl.acm.org/doi/full/10.1145/3658375).


**Required background**: We are seeking candidates with a background in Electronic/Computer
Engineering, with a strong understanding of Computer Architecture, Microarchitecture/ISA, and hardware design. 
Proficiency in C, Python, and C/C++ or Verilog and RTL simulation is necessary.<br>
**Type of work**: This role is designed to enrich your learning while providing hands-on experience. As such, the work is divided into 25% literature study to enhance your theoretical knowledge and 75% hands-on RTL development or C development depending on the end platform (i.e., MCU or FPGA).


### Design and Evaluation of a Vector Functional Unit

In this diploma thesis you will primarily focus on designing the RTL for a Vector Functional Unit (VFU) intended for a broad vector processor, enhancing high-performance SIMD (Single Instruction, Multiple Data) operations. This position also encompasses creating data communication pathways for the VFU. Ultimately, you will generate a widely applicable RTL block netlist for both the VFU and its communication pathways.<br>
This diploma thesis is in collaboration with [IMEC](https://www.imec-int.com/en), Belgium, and includes the possibility of an associated internship. More details can regarding this topic can be found [here](https://www.imec-int.com/en/work-at-imec/job-opportunities/ppact-evaluation-vector-functional-unit).

**Required background**: We are seeking candidates with a background in Electronic/Computer
Engineering, with a strong understanding of Computer Architecture, Microarchitecture/ISA.
Proficiency in C, Python, SystemVerilog/VHDL, and RTL simulation is necessary.<br>
**Type of work**: This role is designed to enrich your learning while providing hands-on experience. As such, the work is divided into 25% literature study to enhance your theoretical knowledge and 75% hands-on RTL development and physical design to immerse you in practical, innovative solutions.


## Ongoing Dimploma Theses
* Dimitrios Papathanasiou, "Evaluation and mitigation of aging effects in Neural Processing Units".
* Angelos Koumaniotis, "Verification methodologies improvements of Transmitter blocks in a very high speed Serdes context".
* Nikolaos Kapareliotis, "Verification methodologies improvements of Receiver blocks in a very high speed Serdes context".
* Theofanis Vergos, "Architecture and approximation exploration for Feed Forward Equalizer Circuit".
* Polykarpos Vergos, "Exploration of alternative algebras for race logic  architectures and  applications".
* Ilias Sertaridis, "Design of approximate Printed Support Vector Machine classification circuits".
* Spyridon Mpesias, "Design and modeling of printed Support Vector Machine classification circuits".
* Ioannis Loudaros, "Approximate Multiplier for Neural Network Circuits".
* Marios Alexandropoulos, "Analog Support Vector Machines on Printed Electronics".


## Completed Dimploma Theses
* Vassilis Milionis, "DNN-based UAV Tracking in AirSim," Oct. 2023, \[[online](https://nemertes.library.upatras.gr/items/d62e9ef4-e23c-4c8f-9593-020fa58270f5)\].
* Panagiotis Papanikolaou, "Binary Neural Networks on Printed Electronics," Jul. 2023, \[[online](https://nemertes.library.upatras.gr/items/bac833a2-191d-492b-8235-a7c8d6e41687)\].
