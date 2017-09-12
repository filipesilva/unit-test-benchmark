import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1965Component } from './my-comp-1965.component';

describe('MyComp1965Component', () => {
  let component: MyComp1965Component;
  let fixture: ComponentFixture<MyComp1965Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1965Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1965Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
