import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2615Component } from './my-comp-2615.component';

describe('MyComp2615Component', () => {
  let component: MyComp2615Component;
  let fixture: ComponentFixture<MyComp2615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
