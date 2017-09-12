import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9411Component } from './my-comp-9411.component';

describe('MyComp9411Component', () => {
  let component: MyComp9411Component;
  let fixture: ComponentFixture<MyComp9411Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9411Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9411Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
