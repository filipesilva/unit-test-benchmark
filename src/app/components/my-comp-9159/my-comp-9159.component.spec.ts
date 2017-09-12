import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9159Component } from './my-comp-9159.component';

describe('MyComp9159Component', () => {
  let component: MyComp9159Component;
  let fixture: ComponentFixture<MyComp9159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
