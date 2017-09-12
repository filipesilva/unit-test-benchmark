import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp627Component } from './my-comp-627.component';

describe('MyComp627Component', () => {
  let component: MyComp627Component;
  let fixture: ComponentFixture<MyComp627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
