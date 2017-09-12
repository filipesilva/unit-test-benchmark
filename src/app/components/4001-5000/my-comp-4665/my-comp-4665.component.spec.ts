import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4665Component } from './my-comp-4665.component';

describe('MyComp4665Component', () => {
  let component: MyComp4665Component;
  let fixture: ComponentFixture<MyComp4665Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4665Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
