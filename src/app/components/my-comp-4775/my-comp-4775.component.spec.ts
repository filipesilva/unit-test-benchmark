import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4775Component } from './my-comp-4775.component';

describe('MyComp4775Component', () => {
  let component: MyComp4775Component;
  let fixture: ComponentFixture<MyComp4775Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4775Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
