import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2337Component } from './my-comp-2337.component';

describe('MyComp2337Component', () => {
  let component: MyComp2337Component;
  let fixture: ComponentFixture<MyComp2337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
