import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4041Component } from './my-comp-4041.component';

describe('MyComp4041Component', () => {
  let component: MyComp4041Component;
  let fixture: ComponentFixture<MyComp4041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
