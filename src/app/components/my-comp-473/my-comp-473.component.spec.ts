import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp473Component } from './my-comp-473.component';

describe('MyComp473Component', () => {
  let component: MyComp473Component;
  let fixture: ComponentFixture<MyComp473Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp473Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp473Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
