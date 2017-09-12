import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4150Component } from './my-comp-4150.component';

describe('MyComp4150Component', () => {
  let component: MyComp4150Component;
  let fixture: ComponentFixture<MyComp4150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
