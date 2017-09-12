import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5286Component } from './my-comp-5286.component';

describe('MyComp5286Component', () => {
  let component: MyComp5286Component;
  let fixture: ComponentFixture<MyComp5286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
