import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8970Component } from './my-comp-8970.component';

describe('MyComp8970Component', () => {
  let component: MyComp8970Component;
  let fixture: ComponentFixture<MyComp8970Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8970Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
