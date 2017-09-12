import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp477Component } from './my-comp-477.component';

describe('MyComp477Component', () => {
  let component: MyComp477Component;
  let fixture: ComponentFixture<MyComp477Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp477Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp477Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
