import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp899Component } from './my-comp-899.component';

describe('MyComp899Component', () => {
  let component: MyComp899Component;
  let fixture: ComponentFixture<MyComp899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
