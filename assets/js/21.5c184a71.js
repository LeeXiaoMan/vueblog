(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{510:function(v,_,t){"use strict";t.r(_);var a=t(2),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p",[v._v("本篇博客主要是对 Javcscript 内存机制的学习理解\n")]),v._v(" "),t("h2",{attrs:{id:"数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[v._v("#")]),v._v(" 数据类型")]),v._v(" "),t("p",[v._v("JavaScript 是一种弱类型的、动态的语言。"),t("strong",[v._v("弱类型")]),v._v("，意味着不需要告诉 JavaScript 引擎这个或那个变量是什么数据类型，JavaScript 引擎在运行代码的时候会计算出来。而"),t("strong",[v._v("动态")]),v._v("，意味着你可以使用同一个变量保存不同类型的数据。")]),v._v(" "),t("p",[v._v("JavaScript 数据类型主要有8种，它们分别是：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/11/172a26e905f35f41?w=1142&h=648&f=png&s=318030",alt:""}})]),v._v(" "),t("p",[v._v("其中，前面7种为原始数据类型，最后一个对象类型称为引用类型。（需要注意的是，typeof 判断NULL类型时，返回的是 Object）。之所以把它们区分为两种不同的类型，是因为它们在内存中存放的位置不一样。接下来分析 JavaScript 中原始数据类型和引用数据类型到底是怎么储存的。")]),v._v(" "),t("p",[t("strong",[v._v("内存空间")])]),v._v(" "),t("p",[v._v("要理解 JavaScript 在运行过程中数据是如何存储的，你就得先搞清楚其存储空间的种类。下面是 JavaScript 的内存模型：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/11/172a268248dc264e?w=1142&h=1183&f=png&s=75892",alt:""}}),v._v("\n从图中可以看出， 在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是"),t("strong",[v._v("代码空间、栈空间和堆空间。")])]),v._v(" "),t("p",[v._v("其中，原始类型的数据是存放在栈中，引用类型的数据是存放在堆中的。堆中的数据是通过引用和变量关联起来的。也就是说，JavaScript 的变量是没有数据类型的，值才有数据类型，变量可以随时持有任何类型的数据。")]),v._v(" "),t("h2",{attrs:{id:"垃圾回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收"}},[v._v("#")]),v._v(" 垃圾回收")]),v._v(" "),t("p",[t("strong",[v._v("原始数据类型是存储在栈空间中的，引用类型的数据是存储在堆空间中的")]),v._v("。通过这种分配方式，我们解决了数据的内存分配的问题。")]),v._v(" "),t("p",[v._v("不过有些数据被使用之后，可能就不再需要了，我们把这种数据称为"),t("strong",[v._v("垃圾数据")]),v._v("。如果这些垃圾数据一直保存在内存中，那么内存会越用越多，所以我们需要"),t("strong",[v._v("对这些垃圾数据进行回收，以释放有限的内存空间")]),v._v("。")]),v._v(" "),t("p",[v._v("JavaScript 中采用的是"),t("strong",[v._v("自动垃圾回收的策略")]),v._v("， "),t("strong",[v._v("产生的垃圾数据是由垃圾回收器来释放的")]),v._v("，并不需要手动通过代码来释放。\n因为数据是存储在栈和堆两种内存空间中，所以接下来将围绕‘栈中的垃圾数据’和‘堆中的垃圾数据’回收来展开。")]),v._v(" "),t("h2",{attrs:{id:"调用栈中的数据回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调用栈中的数据回收"}},[v._v("#")]),v._v(" 调用栈中的数据回收")]),v._v(" "),t("p",[v._v("首先是调用栈中的数据，我们还是通过一段示例代码的执行流程来分析其回收机制，具体如下：")]),v._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[v._v('function foo(){\n    var a = 1\n    var b = {name:"Top"}\n    function showName(){\n      var c = "蛙哇"\n      var d = {name:"You"}\n    }\n    showName()\n}\nfoo()\n')])])]),t("p",[v._v("当执行到第 6 行代码时，其调用栈和堆空间状态图如下所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/11/172a2c85742ef5cd?w=782&h=470&f=png&s=38897",alt:""}}),v._v("\n从图中可以看出，原始类型的数据被分配到栈中，引用类型的数据会被分配到堆中。")]),v._v(" "),t("p",[v._v("上面代码在执行到 showName 函数时，那么 JavaScript 引擎会创建 showName 函数的执行上下文，并将 showName 函数的执行上下文压入到调用栈中，最终执行到 showName 函数时，其调用栈就如上图所示。与此同时，还有一个"),t("strong",[v._v("记录当前执行状态的指针（称为 ESP）")]),v._v("，指向调用栈中 showName 函数的执行上下文，表示当前正在执行 showName 函数。")]),v._v(" "),t("p",[v._v("接着，当 showName 函数执行完成之后，函数执行流程就进入了 foo 函数，那这时就需要销毁 showName 函数的执行上下文了。ESP 这时候就帮上忙了，JavaScript 会将 ESP 下移到 foo 函数的执行上下文，这个下移操作就是销毁 showName 函数执行上下文的过程。")]),v._v(" "),t("p",[t("strong",[v._v("所以说，当一个函数执行结束之后，JavaScript 引擎会通过向下移动 ESP 来销毁该函数保存在栈中的执行上下文。")])]),v._v(" "),t("h2",{attrs:{id:"堆中数据回收"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#堆中数据回收"}},[v._v("#")]),v._v(" 堆中数据回收")]),v._v(" "),t("p",[v._v("通过上面的讲解，我想现在你应该已经知道，当上面那段代码的 foo 函数执行结束之后，ESP 应该是指向全局执行上下文的，那这样的话，showName 函数和 foo 函数的执行上下文就处于无效状态了，不过保存在堆中的两个对象依然占用着空间，如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/11/172a388964dbc2d9?w=719&h=462&f=png&s=31824",alt:""}}),v._v("\n从图中可以看出，1003 和 1050 这两块内存依然被占用。"),t("strong",[v._v("要回收堆中的垃圾数据，就需要用到 JavaScript 中的垃圾回收器了")]),v._v("。下面我们来分析垃圾回收器是如何回收数据的。")]),v._v(" "),t("p",[t("strong",[v._v("代际假说和分代收集")])]),v._v(" "),t("p",[v._v("在正式介绍 JavaScript 引擎是如何实现垃圾回收之前，我们需要先了解一下"),t("strong",[v._v("代际假说")]),v._v("的内容，这是垃圾回收领域中的重要部分，后续的垃圾回收策略都是建立在该假说的基础之上。")]),v._v(" "),t("p",[v._v("代际假说有以下两个特点：")]),v._v(" "),t("ul",[t("li",[v._v("第一个是大部分对象在内存中存在的时间很短，简单来说，就是很多对象一经分配内存，很快就变得不可访问；")]),v._v(" "),t("li",[v._v("第二个是不死的对象，会活得更久。")])]),v._v(" "),t("p",[v._v("所以，在 V8 中会把堆分为"),t("strong",[v._v("新生代")]),v._v("和"),t("strong",[v._v("老生代")]),v._v("两个区域，"),t("strong",[v._v("新生代中存放的是生存时间短的对象，老生代中存放的生存时间久的对象")]),v._v("。")]),v._v(" "),t("p",[v._v("新生区通常只支持 1～8M 的容量，而老生区支持的容量就大很多了。对于这两块区域，V8 分别使用两个不同的垃圾回收器，以便更高效地实施垃圾回收。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("副垃圾回收器，主要负责新生代的垃圾回收")]),v._v("。")]),v._v(" "),t("li",[t("strong",[v._v("主垃圾回收器，主要负责老生代的垃圾回收")]),v._v("。")])]),v._v(" "),t("p",[t("strong",[v._v("垃圾回收工作流程")])]),v._v(" "),t("p",[v._v("V8 引擎把堆分为两个区域-新生代和老生代，并分别使用两个不同的垃圾回收器。其实不论什么类型的垃圾回收器，"),t("strong",[v._v("它们都有一套共同的执行流程")]),v._v("。")]),v._v(" "),t("ul",[t("li",[v._v("第一步是标记空间中活动对象和非活动对象。所谓活动对象就是还在使用的对象，非活动对象就是可以进行垃圾回收的对象。")]),v._v(" "),t("li",[v._v("第二步是回收非活动对象所占据的内存。其实就是在所有的标记完成之后，统一清理内存中所有被标记为可回收的对象。")]),v._v(" "),t("li",[v._v("第三步是做内存整理。一般来说，频繁回收对象后，内存中就会存在大量不连续空间，我们把这些不连续的内存空间称为内存碎片。当内存中出现了大量的内存碎片之后，如果需要分配较大连续内存的时候，就有可能出现内存不足的情况。所以最后一步需要整理这些内存碎片，但这步其实是可选的，因为有的垃圾回收器不会产生内存碎片，比如接下来我们要介绍的副垃圾回收器。")])]),v._v(" "),t("p",[v._v("那么接下来，我们就按照这个流程来分析新生代垃圾回收器（副垃圾回收器）和老生代垃圾回收器（主垃圾回收器）是如何处理垃圾回收的。")]),v._v(" "),t("p",[t("strong",[v._v("副立即回收器")])]),v._v(" "),t("p",[v._v("副垃圾回收器主要负责新生区的垃圾回收。而通常情况下，大多数小的对象都会被分配到新生区，所以说这个区域虽然不大，但是垃圾回收还是比较频繁的。新生代中用 Scavenge 算法来处理。所谓 Scavenge 算法，是把新生代空间对半划分为两个区域，一半是对象区域，一半是空闲区域，如下图所示：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/11/172a4072a8ca5d7f?w=1142&h=550&f=png&s=91924",alt:""}}),v._v("\n在垃圾回收过程中，首先要对对象区域中的垃圾做标记；标记完成之后，就进入垃圾清理阶段，副垃圾回收器会把这些存活的对象复制到空闲区域中，同时它还会把这些对象有序地排列起来，所以这个复制过程，也就相当于完成了内存整理操作，复制后空闲区域就没有内存碎片了。")]),v._v(" "),t("p",[v._v("完成复制后，对象区域与空闲区域进行角色翻转，也就是原来的对象区域变成空闲区域，原来的空闲区域变成了对象区域。这样就完成了垃圾对象的回收操作，"),t("strong",[v._v("同时这种角色翻转的操作还能让新生代中的这两块区域无限重复使用下去")]),v._v("。")]),v._v(" "),t("p",[v._v("由于新生代中采用的 Scavenge 算法，所以每次执行清理操作时，都需要将存活的对象从对象区域复制到空闲区域。但复制操作需要时间成本，如果新生区空间设置得太大了，那么每次清理的时间就会过久，"),t("strong",[v._v("所以为了执行效率，一般新生区的空间会被设置得比较小")]),v._v("。")]),v._v(" "),t("p",[v._v("也正是因为新生区的空间不大，所以很容易被存活的对象装满整个区域。为了解决这个问题，JavaScript 引擎采用了"),t("strong",[v._v("对象晋升策略")]),v._v("，也就是经过两次垃圾回收依然还存活的对象，会被移动到老生区中。")]),v._v(" "),t("p",[t("strong",[v._v("主️垃圾回收器")])]),v._v(" "),t("p",[v._v("主垃圾回收器主要负责老生区中的垃圾回收。除了新生区中晋升的对象，一些大的对象会直接被分配到老生区。因此老生区中的对象有两个特点，一个是对象占用空间大，另一个是对象存活时间长。")]),v._v(" "),t("p",[v._v("由于老生区的对象比较大，若要在老生区中使用 Scavenge 算法进行垃圾回收，复制这些大的对象将会花费比较多的时间，从而导致回收执行效率不高，同时还会浪费一半的空间。因而，主垃圾回收器是采用"),t("strong",[v._v("标记 - 清除")]),v._v("（Mark-Sweep）的算法进行垃圾回收的。下面我们来看看该算法是如何工作的。")]),v._v(" "),t("ul",[t("li",[v._v("首先是标记过程阶段。标记阶段就是从一组根元素开始，递归遍历这组根元素，在这个遍历过程中，能到达的元素称为活动对象，没有到达的元素就可以判断为垃圾数据。")]),v._v(" "),t("li",[v._v("接下来就是垃圾的清除过程。它和副垃圾回收器的垃圾清除过程完全不同，你可以理解这个过程是清除掉红色标记数据的过程，可参考下图大致理解下其清除过程：")])]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/11/172a40d00a1489ad?w=1142&h=564&f=png&s=51701",alt:""}}),v._v("\n上面的标记过程和清除过程就是"),t("strong",[v._v("标记 - 清除算法")]),v._v("，不过对一块内存多次执行标记 - 清除算法后，会产生大量不连续的内存碎片。而碎片过多会导致大对象无法分配到足够的连续内存，于是又产生了另外一种算法——"),t("strong",[v._v("标记 - 整理")]),v._v("（Mark-Compact），这个标记过程仍然与标记 - 清除算法里的是一样的，但后续步骤不是直接对可回收对象进行清理，而是让所有存活的对象都向一端移动，然后直接清理掉端边界以外的内存。")]),v._v(" "),t("p",[t("strong",[v._v("全停顿")])]),v._v(" "),t("p",[v._v("现在你知道了 V8 是使用副垃圾回收器和主垃圾回收器处理垃圾回收的，不过由于 JavaScript 是运行在主线程之上的，一旦执行垃圾回收算法，都需要将正在执行的 JavaScript 脚本暂停下来，待垃圾回收完毕后再恢复脚本执行。我们把这种行为叫做"),t("strong",[v._v("全停顿")]),v._v("。")]),v._v(" "),t("p",[v._v("为了降低老生代的垃圾回收而造成的卡顿，V8 将标记过程分为一个个的子标记过程，同时让垃圾回收标记和 JavaScript 应用逻辑交替进行，直到标记阶段完成，我们把这个算法称为"),t("strong",[v._v("增量标记（Incremental Marking）算法")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/6/11/172a4101a172b1c6?w=1142&h=366&f=png&s=60132",alt:""}}),v._v("\n使用增量标记算法，可以把一个完整的垃圾回收任务拆分为很多小的任务，这些小的任务执行时间比较短，可以穿插在其他的 JavaScript 任务中间执行，这样当执行上述动画效果时，就不会让用户因为垃圾回收任务而感受到页面的卡顿了。")])])}),[],!1,null,null,null);_.default=s.exports}}]);