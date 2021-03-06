/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 *
 * https://leetcode-cn.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (57.40%)
 * Likes:    217
 * Dislikes: 0
 * Total Accepted:    40.5K
 * Total Submissions: 69.6K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 *
 * 你应当保留两个分区中每个节点的初始相对位置。
 *
 * 示例:
 *
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (!head) return head;

  let l1 = new ListNode(null);
  let l2 = new ListNode(null);

  let node1 = l1;
  let node2 = l2;

  let curr = head;

  while (curr) {
    if (curr.val < x) {
      node1.next = curr;
      node1 = node1.next;
    } else {
      node2.next = curr;
      node2 = node2.next;
    }
    curr = curr.next;
  }

  node2.next = null;
  node1.next = l2.next;

  return l1.next;
};
// @lc code=end
