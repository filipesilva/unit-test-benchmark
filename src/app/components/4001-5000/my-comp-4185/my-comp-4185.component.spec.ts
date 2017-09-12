import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4185Component } from './my-comp-4185.component';

describe('MyComp4185Component', () => {
  let component: MyComp4185Component;
  let fixture: ComponentFixture<MyComp4185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
