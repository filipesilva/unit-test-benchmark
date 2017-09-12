import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2779Component } from './my-comp-2779.component';

describe('MyComp2779Component', () => {
  let component: MyComp2779Component;
  let fixture: ComponentFixture<MyComp2779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
