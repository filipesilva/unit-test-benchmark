import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2231Component } from './my-comp-2231.component';

describe('MyComp2231Component', () => {
  let component: MyComp2231Component;
  let fixture: ComponentFixture<MyComp2231Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2231Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2231Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
