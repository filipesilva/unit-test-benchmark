import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5803Component } from './my-comp-5803.component';

describe('MyComp5803Component', () => {
  let component: MyComp5803Component;
  let fixture: ComponentFixture<MyComp5803Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5803Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5803Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
