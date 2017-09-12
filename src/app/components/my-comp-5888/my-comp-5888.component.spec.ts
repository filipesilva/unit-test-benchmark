import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5888Component } from './my-comp-5888.component';

describe('MyComp5888Component', () => {
  let component: MyComp5888Component;
  let fixture: ComponentFixture<MyComp5888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
