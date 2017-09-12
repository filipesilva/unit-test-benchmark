import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp835Component } from './my-comp-835.component';

describe('MyComp835Component', () => {
  let component: MyComp835Component;
  let fixture: ComponentFixture<MyComp835Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp835Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp835Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
