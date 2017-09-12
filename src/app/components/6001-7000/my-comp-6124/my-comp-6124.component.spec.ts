import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6124Component } from './my-comp-6124.component';

describe('MyComp6124Component', () => {
  let component: MyComp6124Component;
  let fixture: ComponentFixture<MyComp6124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
