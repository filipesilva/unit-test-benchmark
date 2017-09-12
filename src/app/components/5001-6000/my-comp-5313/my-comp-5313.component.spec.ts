import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5313Component } from './my-comp-5313.component';

describe('MyComp5313Component', () => {
  let component: MyComp5313Component;
  let fixture: ComponentFixture<MyComp5313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
