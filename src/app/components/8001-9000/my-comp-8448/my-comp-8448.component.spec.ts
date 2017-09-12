import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8448Component } from './my-comp-8448.component';

describe('MyComp8448Component', () => {
  let component: MyComp8448Component;
  let fixture: ComponentFixture<MyComp8448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
