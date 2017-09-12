import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2410Component } from './my-comp-2410.component';

describe('MyComp2410Component', () => {
  let component: MyComp2410Component;
  let fixture: ComponentFixture<MyComp2410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
