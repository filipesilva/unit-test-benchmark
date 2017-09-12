import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp869Component } from './my-comp-869.component';

describe('MyComp869Component', () => {
  let component: MyComp869Component;
  let fixture: ComponentFixture<MyComp869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
