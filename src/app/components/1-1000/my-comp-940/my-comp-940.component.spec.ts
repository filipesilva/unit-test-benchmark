import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp940Component } from './my-comp-940.component';

describe('MyComp940Component', () => {
  let component: MyComp940Component;
  let fixture: ComponentFixture<MyComp940Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp940Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
