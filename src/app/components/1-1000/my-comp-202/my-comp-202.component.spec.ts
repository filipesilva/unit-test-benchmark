import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp202Component } from './my-comp-202.component';

describe('MyComp202Component', () => {
  let component: MyComp202Component;
  let fixture: ComponentFixture<MyComp202Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp202Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
