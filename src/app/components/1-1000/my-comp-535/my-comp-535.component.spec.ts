import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp535Component } from './my-comp-535.component';

describe('MyComp535Component', () => {
  let component: MyComp535Component;
  let fixture: ComponentFixture<MyComp535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
