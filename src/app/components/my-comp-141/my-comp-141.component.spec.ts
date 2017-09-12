import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp141Component } from './my-comp-141.component';

describe('MyComp141Component', () => {
  let component: MyComp141Component;
  let fixture: ComponentFixture<MyComp141Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp141Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp141Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
