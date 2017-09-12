import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8552Component } from './my-comp-8552.component';

describe('MyComp8552Component', () => {
  let component: MyComp8552Component;
  let fixture: ComponentFixture<MyComp8552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
