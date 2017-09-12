import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1107Component } from './my-comp-1107.component';

describe('MyComp1107Component', () => {
  let component: MyComp1107Component;
  let fixture: ComponentFixture<MyComp1107Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1107Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1107Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
