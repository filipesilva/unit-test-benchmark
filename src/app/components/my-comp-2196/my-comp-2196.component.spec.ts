import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2196Component } from './my-comp-2196.component';

describe('MyComp2196Component', () => {
  let component: MyComp2196Component;
  let fixture: ComponentFixture<MyComp2196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
