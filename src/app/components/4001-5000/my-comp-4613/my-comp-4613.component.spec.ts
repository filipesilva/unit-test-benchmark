import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4613Component } from './my-comp-4613.component';

describe('MyComp4613Component', () => {
  let component: MyComp4613Component;
  let fixture: ComponentFixture<MyComp4613Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4613Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4613Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
