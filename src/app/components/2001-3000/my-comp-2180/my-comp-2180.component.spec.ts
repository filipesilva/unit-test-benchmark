import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2180Component } from './my-comp-2180.component';

describe('MyComp2180Component', () => {
  let component: MyComp2180Component;
  let fixture: ComponentFixture<MyComp2180Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2180Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
