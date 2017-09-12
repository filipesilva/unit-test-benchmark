import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2076Component } from './my-comp-2076.component';

describe('MyComp2076Component', () => {
  let component: MyComp2076Component;
  let fixture: ComponentFixture<MyComp2076Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2076Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2076Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
