import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2326Component } from './my-comp-2326.component';

describe('MyComp2326Component', () => {
  let component: MyComp2326Component;
  let fixture: ComponentFixture<MyComp2326Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2326Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2326Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
