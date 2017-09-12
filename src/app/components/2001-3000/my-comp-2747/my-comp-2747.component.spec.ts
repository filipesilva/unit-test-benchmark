import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2747Component } from './my-comp-2747.component';

describe('MyComp2747Component', () => {
  let component: MyComp2747Component;
  let fixture: ComponentFixture<MyComp2747Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2747Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
