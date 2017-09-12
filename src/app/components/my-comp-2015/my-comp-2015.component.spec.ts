import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2015Component } from './my-comp-2015.component';

describe('MyComp2015Component', () => {
  let component: MyComp2015Component;
  let fixture: ComponentFixture<MyComp2015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
