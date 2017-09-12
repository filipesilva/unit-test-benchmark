import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8321Component } from './my-comp-8321.component';

describe('MyComp8321Component', () => {
  let component: MyComp8321Component;
  let fixture: ComponentFixture<MyComp8321Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8321Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
