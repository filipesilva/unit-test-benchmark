import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2333Component } from './my-comp-2333.component';

describe('MyComp2333Component', () => {
  let component: MyComp2333Component;
  let fixture: ComponentFixture<MyComp2333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
