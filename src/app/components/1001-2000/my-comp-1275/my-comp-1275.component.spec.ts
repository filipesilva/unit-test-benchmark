import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1275Component } from './my-comp-1275.component';

describe('MyComp1275Component', () => {
  let component: MyComp1275Component;
  let fixture: ComponentFixture<MyComp1275Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1275Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1275Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
