import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1650Component } from './my-comp-1650.component';

describe('MyComp1650Component', () => {
  let component: MyComp1650Component;
  let fixture: ComponentFixture<MyComp1650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
