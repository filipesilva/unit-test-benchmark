import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2327Component } from './my-comp-2327.component';

describe('MyComp2327Component', () => {
  let component: MyComp2327Component;
  let fixture: ComponentFixture<MyComp2327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
