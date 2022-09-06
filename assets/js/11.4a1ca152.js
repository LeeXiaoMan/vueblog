(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{487:function(_,v,t){_.exports=t.p+"assets/img/https.013accaa.png"},518:function(_,v,t){"use strict";t.r(v);var s=t(2),a=Object(s.a)({},(function(){var _=this,v=_.$createElement,s=_._self._c||v;return s("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[s("p",[_._v("本篇博客主要是 介绍https协议")]),_._v(" "),s("ul",[s("li",[s("h2",{attrs:{id:"_1-什么是https协议？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是https协议？"}},[_._v("#")]),_._v(" 1. 什么是HTTPS协议？")]),_._v(" "),s("p",[_._v("超文本传输安全协议（Hypertext Transfer Protocol Secure，简称：HTTPS）是一种通过计算机网络进行安全通信的传输协议。HTTPS经由HTTP进行通信，利用SSL/TLS来加密数据包。HTTPS的主要目的是提供对网站服务器的身份认证，保护交换数据的隐私与完整性。 "),s("img",{attrs:{src:t(487),alt:"https"}}),_._v(" HTTP协议采用"),s("strong",[_._v("明文传输")]),_._v("信息，存在"),s("strong",[_._v("信息窃听")]),_._v("、"),s("strong",[_._v("信息篡改")]),_._v("和"),s("strong",[_._v("信息劫持")]),_._v("的风险，而协议TLS/SSL具有"),s("strong",[_._v("身份验证")]),_._v("、"),s("strong",[_._v("信息加密")]),_._v("和"),s("strong",[_._v("完整性校验")]),_._v("的功能，可以避免此类问题发生。")]),_._v(" "),s("p",[_._v("安全层的主要职责就是"),s("strong",[_._v("对发起的HTTP请求的数据进行加密操作")]),_._v(" 和 "),s("strong",[_._v("对接收到的HTTP的内容进行解密操作")]),_._v("。")])])]),_._v(" "),s("h2",{attrs:{id:"_2-tls-ssl的工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-tls-ssl的工作原理"}},[_._v("#")]),_._v(" 2. TLS/SSL的工作原理")]),_._v(" "),s("p",[s("strong",[_._v("TLS/SSL")]),_._v("全称"),s("strong",[_._v("安全传输层协议")]),_._v("（Transport Layer Security）, 是介于TCP和HTTP之间的一层安全协议，不影响原有的TCP协议和HTTP协议，所以使用HTTPS基本上不需要对HTTP页面进行太多的改造。")]),_._v(" "),s("p",[_._v("TLS/SSL的功能实现主要依赖三类基本算法："),s("strong",[_._v("散列函数hash")]),_._v("、"),s("strong",[_._v("对称加密")]),_._v("、"),s("strong",[_._v("非对称加密")]),_._v("。这三类算法的作用如下：")]),_._v(" "),s("ul",[s("li",[_._v("基于散列函数验证信息的完整性")]),_._v(" "),s("li",[_._v("对称加密算法采用协商的秘钥对数据加密")]),_._v(" "),s("li",[_._v("非对称加密实现身份认证和秘钥协商")])]),_._v(" "),s("h4",{attrs:{id:"（1）散列函数hash"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（1）散列函数hash"}},[_._v("#")]),_._v(" （1）散列函数hash")]),_._v(" "),s("p",[_._v("常见的散列函数有MD5、SHA1、SHA256。该函数的特点是单向不可逆，对输入数据非常敏感，输出的长度固定，任何数据的修改都会改变散列函数的结果，可以用于防止信息篡改并验证数据的完整性。")]),_._v(" "),s("p",[s("strong",[_._v("特点：")]),_._v(" 在信息传输过程中，散列函数不能三都实现信息防篡改，由于传输是明文传输，中间人可以修改信息后重新计算信息的摘要，所以需要对传输的信息和信息摘要进行加密。")]),_._v(" "),s("h4",{attrs:{id:"（2）对称加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（2）对称加密"}},[_._v("#")]),_._v(" （2）对称加密")]),_._v(" "),s("p",[_._v("对称加密的方法是，双方使用同一个秘钥对数据进行加密和解密。但是对称加密的存在一个问题，就是如何保证秘钥传输的安全性，因为秘钥还是会通过网络传输的，一旦秘钥被其他人获取到，那么整个加密过程就毫无作用了。 这就要用到非对称加密的方法。")]),_._v(" "),s("p",[_._v("常见的对称加密算法有AES-CBC、DES、3DES、AES-GCM等。相同的秘钥可以用于信息的加密和解密。掌握秘钥才能获取信息，防止信息窃听，其通讯方式是一对一。")]),_._v(" "),s("p",[s("strong",[_._v("特点：")]),_._v(" 对称加密的优势就是信息传输使用一对一，需要共享相同的密码，密码的安全是保证信息安全的基础，服务器和N个客户端通信，需要维持N个密码记录且不能修改密码。")]),_._v(" "),s("h4",{attrs:{id:"（3）非对称加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#（3）非对称加密"}},[_._v("#")]),_._v(" （3）非对称加密")]),_._v(" "),s("p",[_._v("非对称加密的方法是，我们拥有两个秘钥，一个是公钥，一个是私钥。公钥是公开的，私钥是保密的。用私钥加密的数据，只有对应的公钥才能解密，用公钥加密的数据，只有对应的私钥才能解密。我们可以将公钥公布出去，任何想和我们通信的客户， 都可以使用我们提供的公钥对数据进行加密，这样我们就可以使用私钥进行解密，这样就能保证数据的安全了。但是非对称加密有一个缺点就是加密的过程很慢，因此如果每次通信都使用非对称加密的方式的话，反而会造成等待时间过长的问题。")]),_._v(" "),s("p",[_._v("常见的非对称加密算法有RSA、ECC、DH等。秘钥成对出现，一般称为公钥（公开）和私钥（保密）。公钥加密的信息只有私钥可以解开，私钥加密的信息只能公钥解开，因此掌握公钥的不同客户端之间不能相互解密信息，只能和服务器进行加密通信，服务器可以实现一对多的的通信，客户端也可以用来验证掌握私钥的服务器的身份。")]),_._v(" "),s("p",[_._v("综合上述算法特点，TLS/SSL的工作方式就是客户端使用非对称加密与服务器进行通信，实现身份的验证并协商对称加密使用的秘钥。然后采用对称加密算法协商秘钥对信息以及信息摘要进行加密通信，不同节点之间采用的对称秘钥不同，从而保证信息只能通信双方获取。这样就解决了两个方法各自存在的问题。")]),_._v(" "),s("h2",{attrs:{id:"_3-数字证书是什么？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-数字证书是什么？"}},[_._v("#")]),_._v(" 3. 数字证书是什么？")]),_._v(" "),s("p",[_._v("现在的方法也不一定是安全的，因为没有办法确定得到的公钥就一定是安全的公钥。可能存在一个中间人，截取了对方发给我们的公钥，然后将他自己的公钥发送给我们，当我们使用他的公钥加密后发送的信息，就可以被他用自己的私钥解密。然后他伪装成我们以同样的方法向对方发送信息，这样我们的信息就被窃取了，然而自己还不知道。为了解决这样的问题，可以使用数字证书。")]),_._v(" "),s("p",[_._v("首先使用一种 Hash 算法来对公钥和其他信息进行加密，生成一个信息摘要，然后让有公信力的认证中心（简称 CA ）用它的私钥对消息摘要加密，形成签名。最后将原始的信息和签名合在一起，称为数字证书。当接收方收到数字证书的时候，先根据原始信息使用同样的 Hash 算法生成一个摘要，然后使用公证处的公钥来对数字证书中的摘要进行解密，最后将解密的摘要和生成的摘要进行对比，就能发现得到的信息是否被更改了。")]),_._v(" "),s("p",[_._v("这个方法最要的是认证中心的可靠性，一般浏览器里会内置一些顶层的认证中心的证书，相当于我们自动信任了他们，只有这样才能保证数据的安全。")]),_._v(" "),s("h2",{attrs:{id:"_4-https通信（握手）过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-https通信（握手）过程"}},[_._v("#")]),_._v(" 4. HTTPS通信（握手）过程")]),_._v(" "),s("p",[_._v("HTTPS的通信过程如下：")]),_._v(" "),s("ol",[s("li",[_._v("客户端向服务器发起请求，请求中包含使用的协议版本号、生成的一个随机数、以及客户端支持的加密方法。")]),_._v(" "),s("li",[_._v("服务器端接收到请求后，确认双方使用的加密方法、并给出服务器的证书、以及一个服务器生成的随机数。")]),_._v(" "),s("li",[_._v("客户端确认服务器证书有效后，生成一个新的随机数，并使用数字证书中的公钥，加密这个随机数，然后发给服 务器。并且还会提供一个前面所有内容的 hash 的值，用来供服务器检验。")]),_._v(" "),s("li",[_._v("服务器使用自己的私钥，来解密客户端发送过来的随机数。并提供前面所有内容的 hash 值来供客户端检验。")]),_._v(" "),s("li",[_._v("客户端和服务器端根据约定的加密方法使用前面的三个随机数，生成对话秘钥，以后的对话过程都使用这个秘钥来加密信息。")])]),_._v(" "),s("h2",{attrs:{id:"_5-https的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-https的特点"}},[_._v("#")]),_._v(" 5. HTTPS的特点")]),_._v(" "),s("p",[_._v("HTTPS的"),s("strong",[_._v("优点")]),_._v("如下：")]),_._v(" "),s("ul",[s("li",[_._v("使用HTTPS协议可以认证用户和服务器，确保数据发送到正确的客户端和服务器；")]),_._v(" "),s("li",[_._v("使用HTTPS协议可以进行加密传输、身份认证，通信更加安全，防止数据在传输过程中被窃取、修改，确保数据安全性；")]),_._v(" "),s("li",[_._v("HTTPS是现行架构下最安全的解决方案，虽然不是绝对的安全，但是大幅增加了中间人攻击的成本；")])]),_._v(" "),s("p",[_._v("HTTPS的"),s("strong",[_._v("缺点")]),_._v("如下：")]),_._v(" "),s("ul",[s("li",[_._v("HTTPS需要做服务器和客户端双方的加密个解密处理，耗费更多服务器资源，过程复杂；")]),_._v(" "),s("li",[_._v("HTTPS协议握手阶段比较费时，增加页面的加载时间；")]),_._v(" "),s("li",[_._v("SSL证书是收费的，功能越强大的证书费用越高；")]),_._v(" "),s("li",[_._v("HTTPS连接服务器端资源占用高很多，支持访客稍多的网站需要投入更大的成本；")]),_._v(" "),s("li",[_._v("SSL证书需要绑定IP，不能再同一个IP上绑定多个域名。")])]),_._v(" "),s("h2",{attrs:{id:"_6-https是如何保证安全的？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-https是如何保证安全的？"}},[_._v("#")]),_._v(" 6. HTTPS是如何保证安全的？")]),_._v(" "),s("p",[_._v("先理解两个概念：")]),_._v(" "),s("ul",[s("li",[_._v("对称加密：即通信的双⽅都使⽤同⼀个秘钥进⾏加解密，对称加密虽然很简单性能也好，但是⽆法解决⾸次把秘钥发给对⽅的问题，很容易被⿊客拦截秘钥。")]),_._v(" "),s("li",[_._v("⾮对称加密：")])]),_._v(" "),s("ol",[s("li",[_._v("私钥 + 公钥= 密钥对")]),_._v(" "),s("li",[_._v("即⽤私钥加密的数据,只有对应的公钥才能解密,⽤公钥加密的数据,只有对应的私钥才能解密")]),_._v(" "),s("li",[_._v("因为通信双⽅的⼿⾥都有⼀套⾃⼰的密钥对,通信之前双⽅会先把⾃⼰的公钥都先发给对⽅")]),_._v(" "),s("li",[_._v("然后对⽅再拿着这个公钥来加密数据响应给对⽅,等到到了对⽅那⾥,对⽅再⽤⾃⼰的私钥进⾏解密")])]),_._v(" "),s("p",[_._v("⾮对称加密虽然安全性更⾼，但是带来的问题就是速度很慢，影响性能。")]),_._v(" "),s("p",[s("strong",[_._v("解决⽅案：")])]),_._v(" "),s("p",[_._v("结合两种加密⽅式，将对称加密的密钥使⽤⾮对称加密的公钥进⾏加密，然后发送出去，接收⽅使⽤私钥进⾏解密得到对称加密的密钥，然后双⽅可以使⽤对称加密来进⾏沟通。")]),_._v(" "),s("p",[_._v("此时⼜带来⼀个问题，中间⼈问题： 如果此时在客户端和服务器之间存在⼀个中间⼈,这个中间⼈只需要把原本双⽅通信互发的公钥,换成⾃⼰的公钥,这样中间⼈就可以轻松解密通信双⽅所发送的所有数据。")]),_._v(" "),s("p",[_._v("所以这个时候需要⼀个安全的第三⽅颁发证书（CA），证明身份的身份，防⽌被中间⼈攻击。 证书中包括：签发者、证书⽤途、使⽤者公钥、使⽤者私钥、使⽤者的HASH算法、证书到期时间等。")]),_._v(" "),s("p",[_._v("但是问题来了，如果中间⼈篡改了证书，那么身份证明是不是就⽆效了？这个证明就⽩买了，这个时候需要⼀个新的技术，数字签名。")]),_._v(" "),s("p",[_._v("数字签名就是⽤CA⾃带的HASH算法对证书的内容进⾏HASH得到⼀个摘要，再⽤CA的私钥加密，最终组成数字签名。当别⼈把他的证书发过来的时候,我再⽤同样的Hash算法,再次⽣成消息摘要，然后⽤CA的公钥对数字签名解密,得到CA创建的消息摘要,两者⼀⽐,就知道中间有没有被⼈篡改了。这个时候就能最⼤程度保证通信的安全了。")])])}),[],!1,null,null,null);v.default=a.exports}}]);