import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5257Component } from './my-comp-5257.component';

describe('MyComp5257Component', () => {
  let component: MyComp5257Component;
  let fixture: ComponentFixture<MyComp5257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
