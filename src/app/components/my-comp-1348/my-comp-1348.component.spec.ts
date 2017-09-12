import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1348Component } from './my-comp-1348.component';

describe('MyComp1348Component', () => {
  let component: MyComp1348Component;
  let fixture: ComponentFixture<MyComp1348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
