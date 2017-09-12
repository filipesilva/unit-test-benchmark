import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4906Component } from './my-comp-4906.component';

describe('MyComp4906Component', () => {
  let component: MyComp4906Component;
  let fixture: ComponentFixture<MyComp4906Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4906Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4906Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
