import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2477Component } from './my-comp-2477.component';

describe('MyComp2477Component', () => {
  let component: MyComp2477Component;
  let fixture: ComponentFixture<MyComp2477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
