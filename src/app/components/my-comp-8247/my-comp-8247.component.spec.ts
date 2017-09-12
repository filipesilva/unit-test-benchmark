import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8247Component } from './my-comp-8247.component';

describe('MyComp8247Component', () => {
  let component: MyComp8247Component;
  let fixture: ComponentFixture<MyComp8247Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8247Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8247Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
