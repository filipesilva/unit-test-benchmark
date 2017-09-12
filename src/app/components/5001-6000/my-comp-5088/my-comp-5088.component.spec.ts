import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5088Component } from './my-comp-5088.component';

describe('MyComp5088Component', () => {
  let component: MyComp5088Component;
  let fixture: ComponentFixture<MyComp5088Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5088Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5088Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
