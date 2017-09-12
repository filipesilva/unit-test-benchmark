import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9940Component } from './my-comp-9940.component';

describe('MyComp9940Component', () => {
  let component: MyComp9940Component;
  let fixture: ComponentFixture<MyComp9940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
