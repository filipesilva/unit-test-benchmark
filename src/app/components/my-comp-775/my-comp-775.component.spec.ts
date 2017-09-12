import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp775Component } from './my-comp-775.component';

describe('MyComp775Component', () => {
  let component: MyComp775Component;
  let fixture: ComponentFixture<MyComp775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
