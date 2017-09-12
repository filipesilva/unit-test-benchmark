import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp797Component } from './my-comp-797.component';

describe('MyComp797Component', () => {
  let component: MyComp797Component;
  let fixture: ComponentFixture<MyComp797Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp797Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp797Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
