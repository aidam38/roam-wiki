(ns roam-wiki.views
  [:require [roam-wiki.roam :as rm]])

(defn main []
  [:div
   [:div.flex.justify-between.items-center {:style {:padding "5px 20px"}}
    [:div  "Editing as: "]
    [:div.flex.justify-center {:style {:flex-grow 1}}
     [:a.p-2 {:href (rm/get-page-url rm/current-user-page-uid)} (str "[[" rm/current-user-page-name "]]")]]]
   [:a.log-button {:href (rm/get-page-url "IUTjyZyiV")} "💡 Dashboard"]
   [:a.log-button {:href rm/base-url}
    [:span.bp3-icon.bp3-icon-calendar.icon.bp3-icon-small]
    "Daily notes"]])
