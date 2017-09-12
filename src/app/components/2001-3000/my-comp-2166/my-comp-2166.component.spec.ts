import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2166Component } from './my-comp-2166.component';

describe('MyComp2166Component', () => {
  let component: MyComp2166Component;
  let fixture: ComponentFixture<MyComp2166Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2166Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2166Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
