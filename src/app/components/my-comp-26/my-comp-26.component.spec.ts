import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp26Component } from './my-comp-26.component';

describe('MyComp26Component', () => {
  let component: MyComp26Component;
  let fixture: ComponentFixture<MyComp26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
