const instructor = {
    firstName: "kelly",
    isInstructor: true,
    favoriteNumbers: [1, 2, 3, 4],
}

// <객체>
// 객체 : 정렬이 필요없을때, 빠른 접근, 입력과 제거를 원할때
// 입력, 제거, 접근시간이 상수이다 >> Insertion: O(1), Removal: O(1), Searching: 0(N), Access: O(1)
// 서칭: 어떤 특정한 정보가 어떤 값에 있는지 확인하는 것.
// 모든 속성을 둘러보면서 찾고자하는값이 있는지 살피기때문에 0(N) 의 빅오표기법을 가짐
// Big O of Object Method >>  Object.keys: O(N) 키의 갯수 / Object.values: O(N) 밸류의 갯수 / Object.entries : O(N) 키밸류의 갯수 / hasOwnProperty: O(1)

// <배열>
// 순서가있고, 정렬하기위해서 사용한다.
// 성능에서 손해를 볼 수 있다. 배열에서 인덱스를 알고 찾아가는것은 O(1) ㅣ찾기 O(N),
// 앞부분에 뭔가하려고 하면(추가나, 제거) 기존 원소의 인덱스가 전부 새로부여야 한다. 리소스가 많이 사용됨. 최대한 피하는것으로.
// 어레이메소드 push, pop : O(1) / shift, unshift, concat, slice, splice, forEach, map, filter, reduce,.. : O(N) / sort: O(N*logN)