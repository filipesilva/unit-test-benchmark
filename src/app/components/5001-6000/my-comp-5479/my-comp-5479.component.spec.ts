import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5479Component } from './my-comp-5479.component';

describe('MyComp5479Component', () => {
  let component: MyComp5479Component;
  let fixture: ComponentFixture<MyComp5479Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5479Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
