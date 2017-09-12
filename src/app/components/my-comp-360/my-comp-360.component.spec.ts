import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp360Component } from './my-comp-360.component';

describe('MyComp360Component', () => {
  let component: MyComp360Component;
  let fixture: ComponentFixture<MyComp360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
