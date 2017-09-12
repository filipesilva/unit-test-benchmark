import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7619Component } from './my-comp-7619.component';

describe('MyComp7619Component', () => {
  let component: MyComp7619Component;
  let fixture: ComponentFixture<MyComp7619Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7619Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7619Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
