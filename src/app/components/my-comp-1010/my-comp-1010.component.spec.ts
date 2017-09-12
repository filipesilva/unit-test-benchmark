import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1010Component } from './my-comp-1010.component';

describe('MyComp1010Component', () => {
  let component: MyComp1010Component;
  let fixture: ComponentFixture<MyComp1010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
