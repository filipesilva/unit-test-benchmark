import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp891Component } from './my-comp-891.component';

describe('MyComp891Component', () => {
  let component: MyComp891Component;
  let fixture: ComponentFixture<MyComp891Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp891Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp891Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
