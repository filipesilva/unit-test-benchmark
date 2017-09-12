import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5765Component } from './my-comp-5765.component';

describe('MyComp5765Component', () => {
  let component: MyComp5765Component;
  let fixture: ComponentFixture<MyComp5765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
