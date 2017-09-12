import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2270Component } from './my-comp-2270.component';

describe('MyComp2270Component', () => {
  let component: MyComp2270Component;
  let fixture: ComponentFixture<MyComp2270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
