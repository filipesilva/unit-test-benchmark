import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7841Component } from './my-comp-7841.component';

describe('MyComp7841Component', () => {
  let component: MyComp7841Component;
  let fixture: ComponentFixture<MyComp7841Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7841Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7841Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
