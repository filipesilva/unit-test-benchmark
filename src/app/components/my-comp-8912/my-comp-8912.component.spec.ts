import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8912Component } from './my-comp-8912.component';

describe('MyComp8912Component', () => {
  let component: MyComp8912Component;
  let fixture: ComponentFixture<MyComp8912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
