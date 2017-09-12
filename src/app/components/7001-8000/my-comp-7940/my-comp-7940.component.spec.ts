import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7940Component } from './my-comp-7940.component';

describe('MyComp7940Component', () => {
  let component: MyComp7940Component;
  let fixture: ComponentFixture<MyComp7940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
