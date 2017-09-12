import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8305Component } from './my-comp-8305.component';

describe('MyComp8305Component', () => {
  let component: MyComp8305Component;
  let fixture: ComponentFixture<MyComp8305Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8305Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8305Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
