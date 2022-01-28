
          var a = prompt("1분기 판매량을 입력하세요");
          var b = prompt("2분기 판매량을 입력하세요");
          var c = prompt("3분기 판매량을 입력하세요");
          var d = prompt("4분기 판매량을 입력하세요");

          var sum = (Number(a)+Number(b)+Number(c))/3;

          var result = d >= sum ? "판매량이 평균 이상입니다." : "판매량이 평균 미달입니다.";

          document.write(result);

   