import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5279Component } from './my-comp-5279.component';

describe('MyComp5279Component', () => {
  let component: MyComp5279Component;
  let fixture: ComponentFixture<MyComp5279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
