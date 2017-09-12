import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9557Component } from './my-comp-9557.component';

describe('MyComp9557Component', () => {
  let component: MyComp9557Component;
  let fixture: ComponentFixture<MyComp9557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
