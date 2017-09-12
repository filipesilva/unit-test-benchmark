import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4390Component } from './my-comp-4390.component';

describe('MyComp4390Component', () => {
  let component: MyComp4390Component;
  let fixture: ComponentFixture<MyComp4390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
