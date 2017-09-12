import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1690Component } from './my-comp-1690.component';

describe('MyComp1690Component', () => {
  let component: MyComp1690Component;
  let fixture: ComponentFixture<MyComp1690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
