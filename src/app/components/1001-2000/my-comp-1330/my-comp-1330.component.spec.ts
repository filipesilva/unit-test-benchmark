import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1330Component } from './my-comp-1330.component';

describe('MyComp1330Component', () => {
  let component: MyComp1330Component;
  let fixture: ComponentFixture<MyComp1330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
