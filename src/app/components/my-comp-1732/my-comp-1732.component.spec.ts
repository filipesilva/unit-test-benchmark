import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1732Component } from './my-comp-1732.component';

describe('MyComp1732Component', () => {
  let component: MyComp1732Component;
  let fixture: ComponentFixture<MyComp1732Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1732Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1732Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
