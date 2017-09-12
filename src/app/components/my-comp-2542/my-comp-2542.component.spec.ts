import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2542Component } from './my-comp-2542.component';

describe('MyComp2542Component', () => {
  let component: MyComp2542Component;
  let fixture: ComponentFixture<MyComp2542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
