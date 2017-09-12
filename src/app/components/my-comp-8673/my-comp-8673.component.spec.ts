import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8673Component } from './my-comp-8673.component';

describe('MyComp8673Component', () => {
  let component: MyComp8673Component;
  let fixture: ComponentFixture<MyComp8673Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8673Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8673Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
