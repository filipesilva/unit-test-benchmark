import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5253Component } from './my-comp-5253.component';

describe('MyComp5253Component', () => {
  let component: MyComp5253Component;
  let fixture: ComponentFixture<MyComp5253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
