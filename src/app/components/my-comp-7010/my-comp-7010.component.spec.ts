import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7010Component } from './my-comp-7010.component';

describe('MyComp7010Component', () => {
  let component: MyComp7010Component;
  let fixture: ComponentFixture<MyComp7010Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7010Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
