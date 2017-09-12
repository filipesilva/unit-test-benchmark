import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1177Component } from './my-comp-1177.component';

describe('MyComp1177Component', () => {
  let component: MyComp1177Component;
  let fixture: ComponentFixture<MyComp1177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
