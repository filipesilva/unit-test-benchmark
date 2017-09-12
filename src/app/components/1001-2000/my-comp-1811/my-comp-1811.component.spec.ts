import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1811Component } from './my-comp-1811.component';

describe('MyComp1811Component', () => {
  let component: MyComp1811Component;
  let fixture: ComponentFixture<MyComp1811Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1811Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1811Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
