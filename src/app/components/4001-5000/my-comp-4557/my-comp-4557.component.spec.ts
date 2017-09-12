import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4557Component } from './my-comp-4557.component';

describe('MyComp4557Component', () => {
  let component: MyComp4557Component;
  let fixture: ComponentFixture<MyComp4557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
