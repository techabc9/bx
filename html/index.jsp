<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="com.em.http.Transaction" %>
<%@ page import="com.em.util.StringUtil" %>
<%@ page import="java.util.*" %>
<%
Transaction tr = new Transaction(pageContext);
List<Object> bannerList = tr.sql.selectList("restylane.selectBannerList", "1");
List<Object> widgetList = tr.sql.selectList("restylane.selectWidgetOrderedList");
List<Object> faqList = tr.sql.selectList("restylane.selectFaqList", "1");
List<Object> pressTopList = tr.sql.selectList("restylane.selectPressTopList");
int pressTotalCount = (Integer)tr.sql.selectObject("restylane.selectPressCount");
%>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
<head>
<meta charset="utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, target-densitydpi=medium-dpi" />
<title></title>
<link rel="stylesheet" type="text/css" href="css/common.css" />
<link rel="stylesheet" type="text/css" href="css/jquery.bxslider.css" />
<script type="text/javascript">

</script>
</head>
<body>
<div class="top_nav">
	<div class="nav_w" style="display:none">
		<h1 class="logo">
			<a href="#cont0" onclick="goTop(); return false;" style="cursor:pointer"><img src="img/logo.png" id="logoImage" alt="" /></a>
		</h1>
		<ul class="nav_btn" id="Nav">
			<li><a href="#filler">HA필러 레스틸렌</a>
				<ul class="dep2">
					<li data-cont="1"><a href="#info">레스틸렌 인포그래픽</a></li>
					<li data-cont="2"><a href="#filler">레스틸렌 테크놀로지</a></li>
				</ul>
			</li>
			<li><a href="#product">레스틸렌 제품</a>
				<ul class="dep2">
					<li data-cont="3"><a href="#lidocain">레스틸렌 리도카인</a></li>
					<li data-cont="4"><a href="#product">레스틸렌 제품군</a></li>
				</ul>
			</li>
			<li data-cont="5"><a href="#cont5">레스틸렌 시술팁</a></li>
			<li data-cont="6"><a href="#cont6">레스틸렌 스킨케어</a></li>
			<li><a href="#news">레스틸렌 뉴스</a>
				<ul class="dep2">
					<li data-cont="7"><a href="#sns">SNS</a></li>
					<li data-cont="8"><a href="#news">PRESS</a></li>
				</ul>
			</li>
			<li><a href="#cont9">레스틸렌 문의</a>
				<ul class="dep2">
					<li data-cont="9"><a href="#cont9">FAQ</a></li>
					<li data-cont="10"><a href="#cont10">MAIL</a></li>
				</ul>
			</li>
		</ul>
		<!-- <button class="btn_search"><span class="blind">검색</span></button>  -->
	</div>
</div>
<div class="wrap">
	<div id="cont0" class="full_section">
	
		<div id="cont_mov">
			<div class="dim"></div>
			<iframe id="tubular-player" style="position: absolute; width: 1920px; height: 1440px; left: 0px; top: -260px;" frameborder="0" allowfullscreen="1" title="YouTube video player" width="1920" height="1440" src="https://www.youtube.com/embed/RZFsTZ-QMbw?controls=0&amp;showinfo=0&amp;modestbranding=1&amp;wmode=transparent&amp;enablejsapi=1&amp;origin=http%3A%2F%2Frestylane01.com&autoplay=1&amp;loop=1"></iframe>
			<object width="100%">
				<param name="movie" value="https://www.youtube.com/embed/RZFsTZ-QMbw?controls=0&amp;showinfo=0&amp;modestbranding=1&amp;rel=0&amp;wmode=transparent&amp;enablejsapi=1&amp;origin=http%3A%2F%2Frestylane01.com&autoplay=1&amp;loop=1"></param>
				<param name="allowFullScreen" value="true"></param>
				<param name="allowscriptaccess" value="always"></param>
				<param name="wmode" value="transparent">
				<embed src="https://www.youtube.com/embed/RZFsTZ-QMbw?controls=0&amp;showinfo=0&amp;modestbranding=1&amp;wmode=transparent&amp;rel=0&amp;enablejsapi=1&amp;origin=http%3A%2F%2Frestylane01.com&autoplay=1&amp;loop=1" type="application/x-shockwave-flash" width="100%" height="100%" allowscriptaccess="always" allowfullscreen="true" frameborder="0" allowfullscreen="1" wmode="transparent"></embed>
			</object>
		</div>
		<div class="main_w">
			<ul class="main_div">
				<% 
				String w_menuId = "";
				String w_mid = "";
				String w_menuType = "";
				String w_image = "";
				String w_text = "";
				for (Object o : widgetList)  { 
					HashMap<String, Object> widget = (HashMap<String, Object>)o;
					w_menuId = String.valueOf(widget.get("id"));
					w_mid = String.valueOf(widget.get("m_id"));
					w_menuType = String.valueOf(widget.get("menu_type"));
					w_image = String.valueOf(widget.get("image"));
					w_text = String.valueOf(widget.get("menu_text"));
				%>
					<li>
						<% if ("B".equals(w_menuType)) { %>
							<div id="main_slider">
								<%  
								if (bannerList != null) { 
									for (int i=0; i<bannerList.size(); i++) { 	
										HashMap<String, Object> m = (HashMap<String, Object>)bannerList.get(i);
								%>
										<div class="slide"><img src="/upload/<%=String.valueOf(m.get("image")) %>" alt=""  width="360" height="245"/></div>
			         			<%
		            				}
		            			}
		            			%>
							</div>
						<% } %>

						<% if ("M".equals(w_menuType) || "C".equals(w_menuType)) { %>
							<% if ("sns".equals(w_mid)) {  %>
								<div class="ty1">
									<h1><%=w_text %></h1>
									<a href="#<%=w_mid%>" class="more link_slide"></a>
									<ul class="thmb_sns">
									</ul>
								</div>
							<% } else { %>
								<a href="#<%="C".equals(w_menuType) ? "c_" + w_menuId : String.valueOf(widget.get("m_id")) %>" class="link_slide">
									<div class="ty1">
										<h1><%=w_text %></h1>
										<% if (w_image != null && !"".equals(w_image)) { %>
										<div class="thmb"><img src="/upload/<%=w_image %>" alt=""  width="360"  height="245"/></div>
										<% } else { %>
										<span class="more"></span>
										<% } %>
									</div>
								</a>
							<% }  %>
						<% } %>

						<% if ("N".equals(w_menuType)) { %>
							<a  class="link_slide">
								<div class="ty1">
									<h1><%=w_text %></h1>
									<% if (w_image != null && !"".equals(w_image)) { %>
									<div class="thmb"><img src="/upload/<%=w_image %>" alt=""  width="360"  height="245" /></div>
									<% } %>
								</div>
							</a>
						<%
						}
						%>

						<% if ("V".equals(w_menuType)) { %>
						<div class="ty_img">
							<div class="thmb"><img src="/upload/<%=w_image %>" alt="" width="360"  height="245"/></div>
						</div>
						<% } %>	

					</li>
				<% 
				}  
				%>
			</ul>
		</div>
		<!-- 
		<div class="footer">
			<a href="#cont8" class="ic_sns link_slide"><span class="blind">SNS</span></a>
			<a href="#cont10" class="ic_faq link_slide"><span class="blind">FAQ</span></a>
			<a href="#cont0" class="ic_home link_slide"><span class="blind">Home</span></a>
			<div class="copyright"><span>&copy;</span> 2014 Restylane</div>
		</div>
		 -->
	</div>
	<div id="info" class="full_section">
		<div class="sub_cont">
			<h1 class="sub_tit">HA FILLER RESTYLANE / INFOGRAPHIC <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			
		</div>
	</div>
	<div id="filler" class="full_section">
		<div class="sub_cont">
			<h1 class="sub_tit">HA FILLER RESTYLANE / TECHNOLOGY <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			<div class="tit_bx">
				<p>레스틸렌®의 <br />특허기술, <br />NASHA™ 소개</p>
			</div>
			<div class="sub_inner">
				<p class="txt">
					체내 히알루론산은 한곳에 머무르지 않고 항상 몸 안을 이동합니다. <br />
					따라서 체내 히알루론산과 똑같은 히알루론산 겔은 그 효력이 반나절에서 2, 3일이면 반감되므로, <br />
					일정기간 동안 지속되는 미용 효과를 얻기 위해서는 약간의 변형을 통한 안정화가 필요합니다.
				</p>
				<p class="img">
					<img src="img/img_sub2.png" alt="" />
				</p>
				<p class="txt">레스틸렌® 은 NASHA™(Non-Animal Stabilized Hyaluronic Acid)기술을 이용하여 개발된 비동물성 안정화 히알루론산 필러이며, 1%이하의 변형으로 인체 성분에 가장 가까운 안전한 필러입니다. </p>

				<p class="txt">
					화학적으로 히알루론산 입자들을 교차 연결시켜 높은 비율로 변형시킬 경우, 생체적합성이 떨어져 피부에 주입 시 
					염증 등의 부작용을 일으킬 수 있으나, 레스틸렌® 의 NASHA™ 공법으로 알레르기성 부작용의 위험성을 최소화하였습니다.
				</p>
				<p class="txt">
					스웨덴 생명공학자 Bengt Agerup은 특허기술인 NASHA™ 기술을 이용하여 안정적인 비동물성 히알루론산 필러인 레스틸렌®  개발에 성공하였습니다.<br />
					NASHA™ 기술의 레스틸렌® 은 피부에 자극이 없고, 분해가 가능하며, 피부 탄력 및 볼륨에 효과적인 히알루론산의 장점 및 효과를 그대로 지니고 있습니다.
				</p>
			</div>
		</div>
	</div>
	<div id="lidocain" class="full_section">
		<div class="sub_cont">
			<h1 class="sub_tit">HA FILLER RESTYLANE / LIDOCAINE <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			<div class="tit_bx">
				<p>통증을 줄인 편안한 필러, <br />레스틸렌 리도카인 통증 걱정으로부터의 자유!</p>
			</div>
			<div class="sub_inner">
				<p class="txt">
					레스틸렌 리도카인은 국소 마취제인 리도카인을 함유하여 필러 주입 후, 시술 부위의 통증이 적어 <br />
					보다 편안한 시술을 받을 수 있도록 해드립니다. <br />
					이젠 시술 부위 통증을 줄인 레스틸렌 리도카인으로 편안하게 ‘레스틸렌’ 하세요! <br />
					임상 시험에서 90%의 피험자들이 레스틸렌 리도카인이 기존 자사 제품보다 통증이 덜하다고 평가하였습니다.
				</p>
				<p class="txt2">왜? ‘레스틸렌 리도카인’인가요?</p>
				<p class="img">
					<img src="img/img_sub3.jpg" alt="" />
				</p>
				<dl class="lst">
					<dt>시술 시 통증이 적습니다.</dt>
					<dd>미국 식품의약국(FDA) 승인을 받은 안전한 제품입니다.<br />레스틸렌 리도카인과 레스틸렌 펄레인 리도카인은 그 안전성과 유효성을 미국 FDA로부터 인정받은 입증된 제품입니다.</dd>
					<dd>통증은 줄였으면서도 기존 레스틸렌의 효과는 그대로 유지했습니다.</dd>
					<dd>임상 시험에서 팔자주름을 가진 피험자에게 시험한 결과 기존 레스틸렌과 동등한 효과를 보였습니다.</dd>
					<dd>레스틸렌 리도카인은 시술 후 교정이나 제거가 필요할 때 시술 부위를 절개하지 않고도, ‘히알루로니다제’라는 효소를 주입하여, 안전하게 제거할 수 있습니다.</dd>
					<dd>레스틸렌은 2회 재 시술로 36개월 동안 효과가 유지됩니다.</dd>
				</dl>
			</div>
		</div>
	</div>
	<div id="product" class="full_section">
		<div class="sub_cont">
			<h1 class="sub_tit">RESTYLANE PRODUCTS / PRODUCTS LIST <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			<div class="tit_bx">
				<p>레스틸렌<br />제품리스트</p>
			</div>
			<div class="sub_inner">
				<dl class="prod_lst">
					<dt>리도카인 포함 제품군</dt>
					<dd>
						<ul>
							<li>
								<div class="thmb"><img src="img/img_prod1.jpg" alt="레스틸렌 펄레인 리도카인" /></div>
								<dl class="prod_de">
									<dt>레스틸렌 펄레인 리도카인</dt>
									<dd><span class="tt">사용방법</span><span class="dc">진피층 하부 또는 피하지방층 표층에 주입</span></dd>
									<dd><span class="tt">사용목적</span><span class="dc">안면주름을 일시적으로 개선</span></dd>
									<dd class="last"><span class="tt">포장단위</span><span class="dc">0.5ml / BOX , 1ml / BOX</span></dd>
								</dl>
							</li>
							<li>
								<div class="thmb"><img src="img/img_prod2.jpg" alt="레스틸렌 리도카인" /></div>
								<dl class="prod_de">
									<dt>레스틸렌 리도카인</dt>
									<dd><span class="tt">사용방법</span><span class="dc">진피층 중간에 주입</span></dd>
									<dd><span class="tt">사용목적</span><span class="dc">안면주름을 일시적으로 개선</span></dd>
									<dd class="last"><span class="tt">포장단위</span><span class="dc">0.5ml / BOX , 1ml / BOX</span></dd>
								</dl>
							</li>
							<li>
								<div class="thmb"><img src="img/img_prod3.jpg" alt="레스틸렌 비탈  리도카인" /></div>
								<dl class="prod_de">
									<dt>레스틸렌 비탈  리도카인</dt>
									<dd><span class="tt">사용방법</span><span class="dc">진피 또는 진피 하부에 주입</span></dd>
									<dd><span class="tt">사용목적</span><span class="dc">안면부위 미세주름을 일시적으로 개선</span></dd>
									<dd class="last"><span class="tt">포장단위</span><span class="dc">1ml / BOX</span></dd>
								</dl>
							</li>
							<li>
								<div class="thmb"><img src="img/img_prod4.jpg" alt="레스틸렌 비탈 라이트" /></div>
								<dl class="prod_de">
									<dt>레스틸렌 비탈 라이트</dt>
									<dd><span class="tt">사용방법</span><span class="dc">진피층 중간에 주입</span></dd>
									<dd><span class="tt">사용목적</span><span class="dc">안면부위 미세주름을 일시적으로 개선</span></dd>
									<dd class="last"><span class="tt">포장단위</span><span class="dc">1ml / BOX</span></dd>
								</dl>
							</li>
						</ul>
					</dd>
					<dt>리도카인 불포함 제품군</dt>
					<dd>
						<ul>
							<li>
								<div class="thmb"><img src="img/img_prod5.jpg" alt="레스틸렌 써브큐" /></div>
								<dl class="prod_de">
									<dt>레스틸렌 써브큐</dt>
									<dd><span class="tt">사용방법</span><span class="dc">피하지방조직 또는 골막 윗부분에 주입</span></dd>
									<dd><span class="tt">사용목적</span><span class="dc">안면의 피하윤곽을 일시적으로 교정하거나 함몰부위 또는 <br />안면주름을 일시적으로 대채 및 수복 </span></dd>
									<dd class="last"><span class="tt">포장단위</span><span class="dc">2ml / BOX</span></dd>
								</dl>
							</li>
							<li>
								<div class="thmb"><img src="img/img_prod6.jpg" alt="레스틸렌 펄레인" /></div>
								<dl class="prod_de">
									<dt>레스틸렌 펄레인</dt>
									<dd><span class="tt">사용방법</span><span class="dc">진피층 하부 또는 피하지방층 표층에 주입</span></dd>
									<dd><span class="tt">사용목적</span><span class="dc">피하의 주름제거 및 입술확대</span></dd>
									<dd class="last"><span class="tt">포장단위</span><span class="dc">0.5ml / BOX , 1ml / BOX</span></dd>
								</dl>
							</li>
							<li>
								<div class="thmb"><img src="img/img_prod7.jpg" alt="레스틸렌" /></div>
								<dl class="prod_de">
									<dt>레스틸렌</dt>
									<dd><span class="tt">사용방법</span><span class="dc">진피층 중간에 주입</span></dd>
									<dd><span class="tt">사용목적</span><span class="dc">피하윤곽의 기형(주름 및 접합)교정 및 입술확대</span></dd>
									<dd class="last"><span class="tt">포장단위</span><span class="dc">0.5ml / BOX , 1ml / BOX</span></dd>
								</dl>
							</li>
							<li>
								<div class="thmb"><img src="img/img_prod8.jpg" alt="레스틸렌 비탈" /></div>
								<dl class="prod_de">
									<dt>레스틸렌 비탈</dt>
									<dd><span class="tt">사용방법</span><span class="dc">진피 또는 진피 하부에 주입</span></dd>
									<dd><span class="tt">사용목적</span><span class="dc">안면부위 미세주름을 일시적으로 개선</span></dd>
									<dd class="last"><span class="tt">포장단위</span><span class="dc">1ml / BOX</span></dd>
								</dl>
							</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
	</div>
	<div id="cont5" class="full_section">
		<div class="sub_cont">
			<h1 class="sub_tit">RESTYLANE TREATMENTS TIP / TREATMENTS <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			<div class="tit_bx">
				<p>레스틸렌® 효능<br />효과 및 이상반응</p>
			</div>
			<div class="sub_inner">
				<p class="txt">
					레스틸렌® 은 주름살 및 주름을 효과적으로 감소시키고, 입술을 보다 도톰하게 하고, <br />
					안면 윤곽 및 볼륨을 보강 시켜주는 안면 시술용 제품입니다. <br />
					2회 재 시술로 36개월 동안 효과가 유지되는 레스틸렌® 은 수술이 아닌 시술로,<br />소요 시간도 짧아 곧바로 일상생활로 복귀할 수 있습니다.  <br />
					발생 가능한 이상반응으로는 출혈, 혈종, 멍, 감염, 염증, 시술 부위가 울퉁불퉁하게 보일 수 있는 증상 등이 있습니다.
				</p>
				<p class="img">
					<img src="img/img_sub5.png" alt="" />
				</p>
			</div>
		</div>
	</div>
	<div id="cont6" class="full_section">
		<div class="sub_cont">
			<h1 class="sub_tit">RESTYLANE TREATMENTS TIP / TREATMENTS <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			<div class="tit_bx">
				<p>‘레스틸렌<br />시술 전<br />확인해 보세요</p>
			</div>
			<div class="sub_inner">
				<p class="txt">
					자격을 갖춘 레스틸렌 시술 의사와 약속을 잡습니다. <br />
					상담 시에 고객분의 개별 희망과 기대사항을 설명하고 어떤 레스틸렌 시술이 자신에게 가장 적합한지 추천을 받으세요. <br />
					안전한 시술을 위해 복용 중인 약물이 있거나 이전에 성형 수술 또는 필러 시술을 받으신 적이 있다면 <br />
					그 내용을 시술 의사에게 알려 주세요. <br />
					추천은 고객이 원하는 바와 이목구비와 라이프 스타일과 같은 요인에 기초해 이루어집니다. <br />
					상담이 끝나면 적합한 시술을 받게 됩니다.
				</p>
				<p class="txt3">레스틸렌 시술후 이런것 주의하세요.</p>
				<ol class="lst">
					<li><span>01</span><p>시술 받은 부위를 과도하게 문지르지 않으셔야 합니다. <br />(코 부분에 시술 받은 경우 안경 착용을 약 2주간 피하시면 좋습니다.)</p></li>
					<li><span>02</span><p>세안은 시술 받은 당일로부터 가능하며, 화장도 가능합니다.</p></li>
					<li><span>03</span><p>시술 직후 부어오름, 붉어짐이 진정될 때까지 햇빛에 지나치게 노출되거나 극심한 추위에<br /> 노출되지 않도록 합니다.</p></li>
					<li><span>04</span><p>발생 가능한 이상 반응으로는 출혈, 혈종, 멍, 감염, 염증, 시술부위간 비대칭 및 시술 부위가 <br />울퉁불퉁하게 보일 수 있는   증상 등이 있습니다.</p></li>
				</ol>
			</div>
		</div>
	</div>
	<div id="sns" class="full_section">
		<div class="sub_cont bg_none">
			<h1 class="sub_tit">RESTYLANE NEWS / SNS <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			<div class="sns_lst">
				<ul>
				</ul>
			</div>
		</div>
	</div>
	<div id="news" class="full_section">
		<div class="sub_cont bg_none">
			<h1 class="sub_tit">RESTYLANE NEWS / PRESS <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			<div class="press_lst">
				<ul class="press_top">
					<% 
					for (Object o : pressTopList) { 
						HashMap<String, Object> m = (HashMap<String, Object>)o; 
					%>
					<li>
						<a href="<%=String.valueOf(m.get("url")) %>" target="_blank">
							<img src="/upload/<%=String.valueOf(m.get("image")) %>" alt="" width="260" height="255"/>
							<dl>
								<dt>[<%=String.valueOf(m.get("pressname")) %>]</dt>
								<dd><%=String.valueOf(m.get("title")) %></dd>
							</dl>
						</a>
					</li>
					<%
					}
					%>
				</ul>
				<ul class="press_btm"></ul>
				<div class="pagination">
				</div>
			</div>
		</div>
	</div>
	<div id="cont9" class="full_section">
		<div class="sub_cont bg_none">
			<h1 class="sub_tit">RESTYLANE / FAQ <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			<div class="faq_lst">
				<ul id="faqList">
					<% 
					for (Object o : faqList) { 
						HashMap<String, Object> m = (HashMap<String, Object>)o; 
					%>
					<li>
						<dl>
							<dt><a href="javascript:void(0)"><%=String.valueOf(m.get("title")) %></a></dt>
							<dd><p><%=StringUtil.replace(String.valueOf(m.get("content")), "\n", "<br/>") %></p></dd>
						</dl>
					</li>
					<%
					}
					%>
				</ul>
			</div>
		</div>
	</div>
	
	<div id="cont10" class="full_section">
		<div class="sub_cont">
			<h1 class="sub_tit">RESTYLANE / MAIL <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
			<div class="tit_bx">
				<p>제품에 대한 <br />문의 사항 <br />또는 <br />의견을 보내주세요.</p>
			</div>
			<div class="mail_wrap">
				<div class="mail_cont">
					<form name="inquiryForm" id="inquiryForm" method="post">
					<h1>개인정보의 수집 및 이용에 대한 동의</h1>
					<div class="bx_agree">
						<p>1. 개인정보의 처리 목적 및 항목회사는 다음과 같이 정보주체의 개인정보를 처리하고 있습니다. <br />
						처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 정보주체의 동의를 구할 것입니다.- 일반 개인정보구분: 필수적 정보수집, 이용 항목: 성명, 아이디, 이메일주소, 주소, 전화번호, 휴대전화번호, 구분(전문의료인 또는 일반 고객 선택), 소속(전문의료인일 경우)수집, 이용 목적: 불만처리 등 민원처리, 마케팅 및 광고에 활용: 이벤트 경품전달을 위한 본인확인 및 배송2. 개인정보의 처리 및 보유 기간① 정보주체의 개인정보는 위에 기재한 수집, 이용을 모두 달성할 때까지 보유, 이용될 것이며, 법령에 따라 해당 개인정보를 보전해야 하는 의무가 존재하지 않는 이상, 처리목적이 달성되면 지체 없이 파기됩니다. 다만 입사지원자의 경우, 수집 및 이용목적 달성을 위한 보유 기간은 지원일로부터 1년을 넘지 않습니다.</p>
					</div>
					<div class="chk_agree">
						<label class="label_chk" for="agree">
							<input name="agree" id="agree" type="checkbox"><span>개인정보의 수집에 동의 합니다.</span>
						</label>
					</div>

					<div class="sel_agree">
						<label class="label_radio" for="rdo1_1">
							<input id="cust_type1" name="cust_type" value="1" type="radio"><span>전문의료인</span>
						</label>
						<label class="label_radio" for="rdo1_2">
							<input id="cust_type2" name="cust_type" value="2" type="radio"><span>일반고객</span>
						</label>
					</div>
					<div class="sel_desc">전문의료인 분들은 병원명을 기입해 주세요</div>
					<div class="sel_agree">
						<label class="label_radio" for="rdo2_1">
							<input id="in_type1" name="in_type" value="1"  type="radio"><span>제품문의</span>
						</label>
						<label class="label_radio" for="rdo2_2">
							<input id="in_type2" name="in_type" value="1" type="radio"><span>거래문의</span>
						</label>
						<label class="label_radio" for="rdo2_3">
							<input id="in_type3" name="in_type" value="1" type="radio"><span>기타문의</span>
						</label>
					</div>
					<div class="send_text">
						<div class="inp">
							<label for="tx_name">이름</label><input type="text" id="cust_name" name="cust_name" class="ip_txt" onblur="onBlur(this)" onfocus="onFocus(this)" value="이름" />
						</div>
						<div class="inp">
							<label for="tx_email">이메일 주소</label><input type="text" id="email" name="email" class="ip_txt" onblur="onBlur(this)" onfocus="onFocus(this)" value="이메일 주소" />
						</div>
						<div class="inp">
							<label for="tx_number">연락처</label><input type="text" id="tel" name="tel" class="ip_txt" onblur="onBlur(this)" onfocus="onFocus(this)" value="연락처" />
						</div>
						<div class="inp">
							<textarea id="content" name="content" cols="30" rows="10" class="ip_textarea"></textarea>
						</div>
						<div class="btn_area">
							<button class="btn_send" onclick="submitInquiry(); return false;"><span class="blind">보내기</span></button>
						</div>
					</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<%	
	for (Object o : widgetList)  { 
		HashMap<String, Object> widget = (HashMap<String, Object>)o;
		if ("C".equals(String.valueOf(widget.get("menu_type"))) && !"".equals(String.valueOf(widget.get("title")))) { 
	%>
		<div id="c_<%=String.valueOf(widget.get("id")) %>" class="full_section">
			<div class="sub_cont">
				<h1 class="sub_tit"><%=String.valueOf(widget.get("title")) %> <a href="#cont0" onclick="goTop(); return false;" class="btn_home"><img src="img/btn_home.png" alt="HOME" /></a></h1>
				<div class="tit_bx">
					<p><%=String.valueOf(widget.get("summary")) %></p>
				</div>
				<div class="sub_inner">
					<p class="txt"><%=String.valueOf(widget.get("content")) %></p>
				</div>
			</div>
		</div>
	<%
		}
	}
	%>
	
	
</div>
<iframe name="tr_iframe" width="0" height="0"></iframe>
<div class="footer">
	<a href="#cont8" class="ic_sns link_slide"><span class="blind">SNS</span></a>
	<a href="#cont10" class="ic_faq link_slide"><span class="blind">FAQ</span></a>
	<a href="#cont0" class="ic_home link_slide"><span class="blind">Home</span></a>
	<div class="copyright"><span>&copy;</span> 2014 Restylane</div>
</div>
<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
<script type="text/javascript" src="js/jquery.bxslider.min.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<script type="text/javascript" src="js/common.js"></script>

<script src="http://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js" type="text/javascript" charset="utf-8"></script>
<script src="js/jquery.simplr.smoothscroll.min.js" type="text/javascript" charset="utf-8"></script>

<script type="text/javascript">
$(function () {
    $.srSmoothscroll();
});

function _load(url, data) { 
	return $.ajax({ 
		type: "GET", 
		url: url,
		data: data,
		cache: false,
		async:false
 	});
}


function printPressList(currentPage) { 
	if (currentPage == null) currentPage = 1;	

	$(".press_btm li").remove();
	
	var _html = '';
	var __load = _load('/homepage/json/press_list.jsp', {currentPage : currentPage});
	__load.success(function(_json) {
		if (_json.list.length > 0) { 
			for (var i = 0; i<_json.list.length; i++) { 
				var _data = _json.list[i];
				_html += '<li>\n';
				_html += '<a href="' + _data.url + '" target="_blank">\n';
				_html += '<dl>\n';
				_html += '<dt>[' + _data.pressname + ']</dt>\n';
				_html += '<dd>' + _data.title + '</dd>\n';
				_html += '<dd class="date">' + _data.regdate + '</dd>\n';
				_html += '</dl>\n';
				_html += '</a>\n';
				_html += '</li>\n';
			}		
		}
	}).error(function(e, e2, e3) { 
	});
	
	$(".press_btm").append(_html);
	printPagingTemplate(currentPage, <%=pressTotalCount%>, 10, $(".pagination"))

	$(".pagination a").bind('click', function() {
		printPressList(parseInt($(this).attr("currentPage")));
	});
	
}



function submitInquiry() { 
	var f = document.inquiryForm;
	
	if (!$("#agree").parent().hasClass("c_on")) {  
		alert('개인정보의 수집 및 이용에 대한 동의에 체크해주세요.');
		return;
	}
	
	if (!$("#cust_type1").parent().hasClass("r_on") && !$("#cust_type2").parent().hasClass("r_on")) {  
		alert('고객유형을 선택해주세요.');
		return;
	}

	if (!$("#in_type1").parent().hasClass("r_on") && !$("#in_type2").parent().hasClass("r_on") && !$("#in_type3").parent().hasClass("r_on")) {  
		alert('문의유형을 선택해주세요.');
		return;
	}
	
	if (!(f.cust_name.value != '') || f.cust_name.value == '이름') {  
		alert('이름을 입력해주세요.');
		f.cust_name.focus();
		return;
	}

	if (!(f.email.value != '') || f.email.value == '이메일 주소') {  
		alert('이메일을 입력해주세요.');
		f.email.focus();
		return;
	}

	if (!isValidEmail(f.email.value)) {  
		alert('이메일 형식이 올바르지 않습니다.');
		f.email.focus();
		return;
	}
	
	
	if (!(f.tel.value != '') || f.tel.value == '연락처') {  
		alert('연락처를 입력해주세요.');
		f.tel.focus();
		return;
	}

	if (!(f.content.value != '')) {  
		alert('내용를 입력해주세요.');
		f.content.focus();
		return;
	}

	f.target = 'tr_iframe';
	f.action = '/homepage/json/inquiry_tr.jsp';
	f.submit();
}

function doResetInquiry() { 
	$('.label_chk').each(function(){ 
		$(this).removeClass('c_on');
	});
	$('.label_radio').each(function(){ 
		$(this).removeClass('r_on');
	});
	document.inquiryForm.reset();
}

function doShareF(u) { 
	window.open('https://www.facebook.com/sharer/sharer.php?u=' + u);
}

function doShareT(u) { 
	window.open('http://twitter.com/share?url=' + u + '&text=레스틸렌코리아');
}
		
function cutString(s, max) { 
	if (s != undefined && s != '') { 
		return s.substring(0, max) + '..';
	}	
	return s;
}

function printSnsList() { 
	$(".thmb_sns li").remove();
	$(".sns_lst ul li").remove();
	
	var _html = '';
	var _html2 = '';
	
	var mainLoop = 0;
	var __load = _load('/facebook.jsp', {});
	__load.success(function(_json) {
		if (_json.data.length > 0) { 
			for (var i = 0; i<_json.data.length; i++) { 
				var _data = _json.data[i];
				if (_data.type == 'photo' || _data.type == 'link') { 
					_html += '<li>\n';
					_html += '<div class="facebook_wrap">\n';
					if (_data.type == 'photo') { 
						_html += '<p class="txt">\n';
						_html += '<a href="' + _data.link + '" target="_blank">' + _data.message + '</a>';
						_html += '</p>\n';
						_html += '<div class="img">\n';
						_html += '<img width="150" height="100" src="' + _data.picture + '" alt="" />\n';
						_html += '</div>\n';
					}
					if (_data.type == 'link') { 
						_html += '<p class="txt">\n';
						_html += '<a href="' + _data.link + '" target="_blank">' + _data.description + '</a>';
						_html += '</p>\n';
					}
					_html += '<div class="share">\n';
					_html += '<a href="javascript:doShareF(\'' + _data.link + '\');"><img src="img/trans.gif" alt="공유" class="btn_share" /></a>\n';
					_html += '<a href="' + _data.link + '" target="_blank"><img src="img/trans.gif" alt="페이스북" class="btn_fb" /></a>\n';
					_html += '<a href="javascript:doShareT(\'' + _data.link + '\');"><img src="img/trans.gif" alt="트위터" class="btn_tw" /></a>\n';
					_html += '</div>\n';
					_html += '</div>\n';
					_html += '</li>\n';
					
					if (mainLoop < 2) { 
						_html2 += '<li class="ic_facebook">\n';
						_html2 += '<a href="' + _data.link + '" target="_blank" class="link_slide">';
						if (_data.type == 'photo') { 
							_html2 += cutString(_data.message, 83);
						}
						if (_data.type == 'link') { 
							_html2 += cutString(_data.description, 83);
						}
						_html2 += '</a>\n';
						_html2 += '</li>\n';
					}
					
					mainLoop++;
				}
			}		
		}
	}).error(function(e, e2, e3) { 
	});
	
	$(".thmb_sns").append(_html2);
	$(".sns_lst ul").append(_html);
}


$(document).ready(function() { 
	printSnsList();
	printPressList(1);
	
	
	setTimeout(function() { 
		$('html,body').animate({
			scrollTop: 0
		}, 500, "easeInExpo", function() {
			fn=1;
		});

		$("#cont_mov").fadeOut(800, 'swing');
		setTimeout(1000);
		$(".nav_w").fadeIn('slow');
	}, 4800);
	
});


</script>
</body>
</html>