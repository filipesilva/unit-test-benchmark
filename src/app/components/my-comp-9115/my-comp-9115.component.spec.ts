import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9115Component } from './my-comp-9115.component';

describe('MyComp9115Component', () => {
  let component: MyComp9115Component;
  let fixture: ComponentFixture<MyComp9115Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9115Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9115Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
