import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2866Component } from './my-comp-2866.component';

describe('MyComp2866Component', () => {
  let component: MyComp2866Component;
  let fixture: ComponentFixture<MyComp2866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
