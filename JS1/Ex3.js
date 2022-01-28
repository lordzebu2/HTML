
          var price1 = prompt("교통비");
          var price2 = prompt("식비");
          var price3 = prompt("음료비");
          var sum = Number(price1)+Number(price2)+Number(price3);

          var result = sum > 10000 ? sum-10000+"원 초과" : "돈 관리 잘했어요~!";

          document.write(result);
