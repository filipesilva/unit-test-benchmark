import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2628Component } from './my-comp-2628.component';

describe('MyComp2628Component', () => {
  let component: MyComp2628Component;
  let fixture: ComponentFixture<MyComp2628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
