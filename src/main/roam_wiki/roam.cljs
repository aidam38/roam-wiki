(ns roam-wiki.roam
  [:require
   [roam-plugin-tools.state :as rpt]
   [roam-alpha-api.data :as rd]
   [goog.dom :as gdom]])

(def current-user-page
  (-> (rd/q '[:find (pull ?p [*])
              :in $ email
              :where
              [?p :block/children ?b]
              [?b :block/refs ?ep]
              [?ep :node/title "email"]
              [?b :block/string ?bs]
              [(clojure.string/includes? ?bs email)]] (rpt/current-user-email))
      (first)
      (first)))

(def current-user-page-uid
  (:uid current-user-page))

(def current-user-page-name
  (:title current-user-page))

(defn user-todos [name]
  (rd/q '[:find (pull ?t [*])
          :in $ ?n
          :where [?t :block/refs ?np]
          [?t :block/refs ?tp]
          [?np :node/title ?n]
          [?tp :node/title "TODO"]] name))