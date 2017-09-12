import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1170Component } from './my-comp-1170.component';

describe('MyComp1170Component', () => {
  let component: MyComp1170Component;
  let fixture: ComponentFixture<MyComp1170Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1170Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1170Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
