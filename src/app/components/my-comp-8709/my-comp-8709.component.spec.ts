import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8709Component } from './my-comp-8709.component';

describe('MyComp8709Component', () => {
  let component: MyComp8709Component;
  let fixture: ComponentFixture<MyComp8709Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8709Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8709Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
