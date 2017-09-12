import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2899Component } from './my-comp-2899.component';

describe('MyComp2899Component', () => {
  let component: MyComp2899Component;
  let fixture: ComponentFixture<MyComp2899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
