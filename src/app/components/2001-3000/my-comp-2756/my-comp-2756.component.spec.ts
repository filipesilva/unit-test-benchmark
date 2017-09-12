import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2756Component } from './my-comp-2756.component';

describe('MyComp2756Component', () => {
  let component: MyComp2756Component;
  let fixture: ComponentFixture<MyComp2756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
