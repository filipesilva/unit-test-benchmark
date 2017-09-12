import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5704Component } from './my-comp-5704.component';

describe('MyComp5704Component', () => {
  let component: MyComp5704Component;
  let fixture: ComponentFixture<MyComp5704Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5704Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5704Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
