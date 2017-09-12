import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp824Component } from './my-comp-824.component';

describe('MyComp824Component', () => {
  let component: MyComp824Component;
  let fixture: ComponentFixture<MyComp824Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp824Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp824Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
