import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2851Component } from './my-comp-2851.component';

describe('MyComp2851Component', () => {
  let component: MyComp2851Component;
  let fixture: ComponentFixture<MyComp2851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
