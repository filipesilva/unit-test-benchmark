import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8397Component } from './my-comp-8397.component';

describe('MyComp8397Component', () => {
  let component: MyComp8397Component;
  let fixture: ComponentFixture<MyComp8397Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8397Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8397Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
