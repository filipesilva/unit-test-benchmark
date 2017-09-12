import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5938Component } from './my-comp-5938.component';

describe('MyComp5938Component', () => {
  let component: MyComp5938Component;
  let fixture: ComponentFixture<MyComp5938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
