import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4681Component } from './my-comp-4681.component';

describe('MyComp4681Component', () => {
  let component: MyComp4681Component;
  let fixture: ComponentFixture<MyComp4681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
