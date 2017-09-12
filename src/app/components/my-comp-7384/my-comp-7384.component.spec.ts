import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7384Component } from './my-comp-7384.component';

describe('MyComp7384Component', () => {
  let component: MyComp7384Component;
  let fixture: ComponentFixture<MyComp7384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
