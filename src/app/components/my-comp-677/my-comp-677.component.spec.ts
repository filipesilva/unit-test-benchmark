import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp677Component } from './my-comp-677.component';

describe('MyComp677Component', () => {
  let component: MyComp677Component;
  let fixture: ComponentFixture<MyComp677Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp677Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp677Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
