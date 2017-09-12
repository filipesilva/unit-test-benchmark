import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5332Component } from './my-comp-5332.component';

describe('MyComp5332Component', () => {
  let component: MyComp5332Component;
  let fixture: ComponentFixture<MyComp5332Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5332Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5332Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
