import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4129Component } from './my-comp-4129.component';

describe('MyComp4129Component', () => {
  let component: MyComp4129Component;
  let fixture: ComponentFixture<MyComp4129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
