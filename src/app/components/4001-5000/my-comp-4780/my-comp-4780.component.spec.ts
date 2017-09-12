import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4780Component } from './my-comp-4780.component';

describe('MyComp4780Component', () => {
  let component: MyComp4780Component;
  let fixture: ComponentFixture<MyComp4780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
