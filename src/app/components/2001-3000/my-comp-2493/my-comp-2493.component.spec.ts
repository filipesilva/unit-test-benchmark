import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2493Component } from './my-comp-2493.component';

describe('MyComp2493Component', () => {
  let component: MyComp2493Component;
  let fixture: ComponentFixture<MyComp2493Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2493Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2493Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
