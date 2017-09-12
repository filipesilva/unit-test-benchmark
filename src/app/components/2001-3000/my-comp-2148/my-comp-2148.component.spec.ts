import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2148Component } from './my-comp-2148.component';

describe('MyComp2148Component', () => {
  let component: MyComp2148Component;
  let fixture: ComponentFixture<MyComp2148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
