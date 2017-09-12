import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5930Component } from './my-comp-5930.component';

describe('MyComp5930Component', () => {
  let component: MyComp5930Component;
  let fixture: ComponentFixture<MyComp5930Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5930Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5930Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
