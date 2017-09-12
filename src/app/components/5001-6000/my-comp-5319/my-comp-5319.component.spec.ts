import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5319Component } from './my-comp-5319.component';

describe('MyComp5319Component', () => {
  let component: MyComp5319Component;
  let fixture: ComponentFixture<MyComp5319Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5319Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5319Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
