import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2836Component } from './my-comp-2836.component';

describe('MyComp2836Component', () => {
  let component: MyComp2836Component;
  let fixture: ComponentFixture<MyComp2836Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2836Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2836Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
