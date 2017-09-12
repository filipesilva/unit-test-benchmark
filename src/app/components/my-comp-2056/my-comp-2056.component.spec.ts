import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2056Component } from './my-comp-2056.component';

describe('MyComp2056Component', () => {
  let component: MyComp2056Component;
  let fixture: ComponentFixture<MyComp2056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
