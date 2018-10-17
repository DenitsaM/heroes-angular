import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesArrangeComponent } from './heroes-arrange.component';

describe('HeroesArrangeComponent', () => {
  let component: HeroesArrangeComponent;
  let fixture: ComponentFixture<HeroesArrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesArrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesArrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
