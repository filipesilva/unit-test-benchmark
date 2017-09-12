import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2504Component } from './my-comp-2504.component';

describe('MyComp2504Component', () => {
  let component: MyComp2504Component;
  let fixture: ComponentFixture<MyComp2504Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2504Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2504Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
