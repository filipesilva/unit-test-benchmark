import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8174Component } from './my-comp-8174.component';

describe('MyComp8174Component', () => {
  let component: MyComp8174Component;
  let fixture: ComponentFixture<MyComp8174Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8174Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8174Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
