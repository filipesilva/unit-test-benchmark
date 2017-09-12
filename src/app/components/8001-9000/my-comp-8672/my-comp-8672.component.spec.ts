import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8672Component } from './my-comp-8672.component';

describe('MyComp8672Component', () => {
  let component: MyComp8672Component;
  let fixture: ComponentFixture<MyComp8672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
