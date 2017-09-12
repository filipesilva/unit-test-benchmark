import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp600Component } from './my-comp-600.component';

describe('MyComp600Component', () => {
  let component: MyComp600Component;
  let fixture: ComponentFixture<MyComp600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
