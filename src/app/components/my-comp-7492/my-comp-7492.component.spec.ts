import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7492Component } from './my-comp-7492.component';

describe('MyComp7492Component', () => {
  let component: MyComp7492Component;
  let fixture: ComponentFixture<MyComp7492Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7492Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7492Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
