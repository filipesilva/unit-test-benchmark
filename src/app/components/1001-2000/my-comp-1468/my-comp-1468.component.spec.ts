import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1468Component } from './my-comp-1468.component';

describe('MyComp1468Component', () => {
  let component: MyComp1468Component;
  let fixture: ComponentFixture<MyComp1468Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1468Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1468Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
