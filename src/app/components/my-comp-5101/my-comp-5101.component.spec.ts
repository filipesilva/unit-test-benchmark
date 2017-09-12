import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5101Component } from './my-comp-5101.component';

describe('MyComp5101Component', () => {
  let component: MyComp5101Component;
  let fixture: ComponentFixture<MyComp5101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
