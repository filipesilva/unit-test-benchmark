import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2838Component } from './my-comp-2838.component';

describe('MyComp2838Component', () => {
  let component: MyComp2838Component;
  let fixture: ComponentFixture<MyComp2838Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2838Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2838Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
