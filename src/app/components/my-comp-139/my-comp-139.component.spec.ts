import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp139Component } from './my-comp-139.component';

describe('MyComp139Component', () => {
  let component: MyComp139Component;
  let fixture: ComponentFixture<MyComp139Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp139Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp139Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
