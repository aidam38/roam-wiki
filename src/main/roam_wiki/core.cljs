(ns roam-wiki.core
  [:require
   [roam-wiki.views :refer [main]]
   [roam-wiki.roam :as rm]
   [reagent.dom :as rd]])

(defn mount-custom-sidebar-wrapper []
  (rd/render [main] rm/custom-sidebar-wrapper))

(defn init []
  (rm/clear-left-sidebar!)
  (rm/insert-custom-sidebar-wrapper!)
  (mount-custom-sidebar-wrapper))
