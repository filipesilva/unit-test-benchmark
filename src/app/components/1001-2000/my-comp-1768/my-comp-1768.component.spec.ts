import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1768Component } from './my-comp-1768.component';

describe('MyComp1768Component', () => {
  let component: MyComp1768Component;
  let fixture: ComponentFixture<MyComp1768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
