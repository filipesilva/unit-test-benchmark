import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8394Component } from './my-comp-8394.component';

describe('MyComp8394Component', () => {
  let component: MyComp8394Component;
  let fixture: ComponentFixture<MyComp8394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
