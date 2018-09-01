pragma solidity ^0.4.24;

contract GBAttendance {

    address public president;
    mapping (address => bool) public approvedMembers;
    mapping (address => uint) public balances;

    mapping (uint => CheckIn) public attendances;
    uint public numCheckins;

    event CheckinCreated(uint checkinNum);
    event MemberCheckedIn(uint checkinNum);
    event MemberApproved(address approvedMember);

    struct CheckIn {
        mapping (address => bool) checkedInMembers;
        uint start;
        uint end;
    }

    modifier onlyPresident {
        require(msg.sender == president);
        _;
    }

    modifier onlyApproved {
        require(approvedMembers[msg.sender]);
        _;
    }

    constructor() {
        president = msg.sender;
        approvedMembers[president] = true;
        numCheckins = 0;
    }

    function createCheckin(uint minutesOpen) public onlyPresident {
        require(minutesOpen > 1);
        numCheckins++;
        CheckIn storage c = attendances[numCheckins];
        c.start = now;
        c.end = now + (minutesOpen * 1 minutes);

        emit CheckinCreated(numCheckins);
    }

    function checkIn() public onlyApproved {
        require(!attendances[numCheckins].checkedInMembers[msg.sender]);
        require(now < attendances[numCheckins].end);

        attendances[numCheckins].checkedInMembers[msg.sender] = true;
        balances[msg.sender]++;
        emit MemberCheckedIn(numCheckins);
    }

    function approveMember(address newMem) public onlyPresident {
        approvedMembers[newMem] = true;
        emit MemberApproved(newMem);
    }

    function changePresident(address newPres) public onlyPresident {
        president = newPres;
        approvedMembers[newPres] = true;
    }
}