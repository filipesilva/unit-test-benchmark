import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2285Component } from './my-comp-2285.component';

describe('MyComp2285Component', () => {
  let component: MyComp2285Component;
  let fixture: ComponentFixture<MyComp2285Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2285Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2285Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
