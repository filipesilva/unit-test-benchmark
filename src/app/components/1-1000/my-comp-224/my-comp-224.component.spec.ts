import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp224Component } from './my-comp-224.component';

describe('MyComp224Component', () => {
  let component: MyComp224Component;
  let fixture: ComponentFixture<MyComp224Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp224Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp224Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
