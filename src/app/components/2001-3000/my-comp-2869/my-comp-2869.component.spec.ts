import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2869Component } from './my-comp-2869.component';

describe('MyComp2869Component', () => {
  let component: MyComp2869Component;
  let fixture: ComponentFixture<MyComp2869Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2869Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2869Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
