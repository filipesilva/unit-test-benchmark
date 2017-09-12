import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5663Component } from './my-comp-5663.component';

describe('MyComp5663Component', () => {
  let component: MyComp5663Component;
  let fixture: ComponentFixture<MyComp5663Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5663Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5663Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
