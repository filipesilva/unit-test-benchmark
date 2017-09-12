import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9912Component } from './my-comp-9912.component';

describe('MyComp9912Component', () => {
  let component: MyComp9912Component;
  let fixture: ComponentFixture<MyComp9912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
