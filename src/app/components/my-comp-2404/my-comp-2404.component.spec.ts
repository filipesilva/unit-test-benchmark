import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2404Component } from './my-comp-2404.component';

describe('MyComp2404Component', () => {
  let component: MyComp2404Component;
  let fixture: ComponentFixture<MyComp2404Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2404Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
