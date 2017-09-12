import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2826Component } from './my-comp-2826.component';

describe('MyComp2826Component', () => {
  let component: MyComp2826Component;
  let fixture: ComponentFixture<MyComp2826Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2826Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2826Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
