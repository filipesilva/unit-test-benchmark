import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2171Component } from './my-comp-2171.component';

describe('MyComp2171Component', () => {
  let component: MyComp2171Component;
  let fixture: ComponentFixture<MyComp2171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
