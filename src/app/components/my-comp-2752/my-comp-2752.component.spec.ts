import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2752Component } from './my-comp-2752.component';

describe('MyComp2752Component', () => {
  let component: MyComp2752Component;
  let fixture: ComponentFixture<MyComp2752Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2752Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2752Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
