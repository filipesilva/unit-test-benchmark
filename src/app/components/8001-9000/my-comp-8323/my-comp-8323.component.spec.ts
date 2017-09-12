import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8323Component } from './my-comp-8323.component';

describe('MyComp8323Component', () => {
  let component: MyComp8323Component;
  let fixture: ComponentFixture<MyComp8323Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8323Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8323Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
