import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9954Component } from './my-comp-9954.component';

describe('MyComp9954Component', () => {
  let component: MyComp9954Component;
  let fixture: ComponentFixture<MyComp9954Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9954Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9954Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
