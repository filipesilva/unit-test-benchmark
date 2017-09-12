import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8330Component } from './my-comp-8330.component';

describe('MyComp8330Component', () => {
  let component: MyComp8330Component;
  let fixture: ComponentFixture<MyComp8330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
