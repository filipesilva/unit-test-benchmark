import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2129Component } from './my-comp-2129.component';

describe('MyComp2129Component', () => {
  let component: MyComp2129Component;
  let fixture: ComponentFixture<MyComp2129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
