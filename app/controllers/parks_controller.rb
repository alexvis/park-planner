class ParksController < ApplicationController

  def index

    @result_parks = []
    @parks = []
    if (params[:park] != '')
      @parks = Park.search_name(params[:park])
      @result_parks = (@result_parks + @parks).uniq
    else
      @parks = []
    end


    if (params[:state] != '')
      @state = Park.search_state(params[:state])
      @result_parks = (@result_parks + @state).uniq
    else
      @state = []
    end

    if (params[:dog_friendly_avg_rating])
      @result_parks.delete_if { |p| p.dog_friendly_avg_rating.nil? }
    end

    if (params[:camping_avg_rating])
      @result_parks.delete_if { |p| p.camping_avg_rating.nil? }
    end

    if (params[:playground_avg_rating])
      @result_parks.delete_if { |p| p.playground_avg_rating.nil? }
    end

    if (params[:hiking_avg_rating])
      @result_parks.delete_if { |p| p.hiking_avg_rating.nil? }
    end

    if (params[:scenery_avg_rating])
      @result_parks.delete_if { |p| p.scenery_avg_rating.nil? }
    end

  end


  def show
    @id = params[:id]
  end

end
