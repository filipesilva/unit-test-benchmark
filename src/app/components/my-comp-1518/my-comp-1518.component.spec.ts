import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1518Component } from './my-comp-1518.component';

describe('MyComp1518Component', () => {
  let component: MyComp1518Component;
  let fixture: ComponentFixture<MyComp1518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
