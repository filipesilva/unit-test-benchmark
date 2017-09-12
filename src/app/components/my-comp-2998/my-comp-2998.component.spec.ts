import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2998Component } from './my-comp-2998.component';

describe('MyComp2998Component', () => {
  let component: MyComp2998Component;
  let fixture: ComponentFixture<MyComp2998Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2998Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2998Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
