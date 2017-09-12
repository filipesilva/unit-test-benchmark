import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7001Component } from './my-comp-7001.component';

describe('MyComp7001Component', () => {
  let component: MyComp7001Component;
  let fixture: ComponentFixture<MyComp7001Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7001Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
