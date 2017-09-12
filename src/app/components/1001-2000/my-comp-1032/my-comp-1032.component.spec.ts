import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1032Component } from './my-comp-1032.component';

describe('MyComp1032Component', () => {
  let component: MyComp1032Component;
  let fixture: ComponentFixture<MyComp1032Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1032Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
