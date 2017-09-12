import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2168Component } from './my-comp-2168.component';

describe('MyComp2168Component', () => {
  let component: MyComp2168Component;
  let fixture: ComponentFixture<MyComp2168Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2168Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2168Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
