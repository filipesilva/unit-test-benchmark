import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2251Component } from './my-comp-2251.component';

describe('MyComp2251Component', () => {
  let component: MyComp2251Component;
  let fixture: ComponentFixture<MyComp2251Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2251Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2251Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
