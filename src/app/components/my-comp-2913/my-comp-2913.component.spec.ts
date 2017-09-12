import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2913Component } from './my-comp-2913.component';

describe('MyComp2913Component', () => {
  let component: MyComp2913Component;
  let fixture: ComponentFixture<MyComp2913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
