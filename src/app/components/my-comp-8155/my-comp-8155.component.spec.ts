import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8155Component } from './my-comp-8155.component';

describe('MyComp8155Component', () => {
  let component: MyComp8155Component;
  let fixture: ComponentFixture<MyComp8155Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8155Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
