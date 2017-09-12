import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp970Component } from './my-comp-970.component';

describe('MyComp970Component', () => {
  let component: MyComp970Component;
  let fixture: ComponentFixture<MyComp970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
